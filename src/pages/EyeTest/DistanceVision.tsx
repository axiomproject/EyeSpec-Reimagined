import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const questions = [
  { id: 1, question: "E", answer: "E" },
  { id: 2, question: "F P", answer: "FP" },
  { id: 3, question: "T O Z", answer: "TOZ" },
  { id: 4, question: "L P E D", answer: "LPED" },
  { id: 5, question: "P E C F D", answer: "PECFD" },
  { id: 6, question: "E D F C Z P", answer: "EDFCZP" },
  { id: 7, question: "F E L O P Z D", answer: "FELOPZD" },
  { id: 8, question: "D E F P O T E C", answer: "DEFPOTEC" },
];

const DistanceVision: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [fontSize, setFontSize] = useState(100);

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
    setFontSize(100);
    setShowModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.toUpperCase();
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = newAnswers[currentQuestion] || "";
    const answerArray = newAnswers[currentQuestion].split("");
    answerArray[index] = value.charAt(0);
    newAnswers[currentQuestion] = answerArray.join("");
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setFontSize((prevSize) => prevSize - 10);
  };

  const handleSubmitQuiz = () => {
    let totalScore = 0;
    questions.forEach((q, index) => {
      if (q.answer.toLowerCase() === answers[index]?.toLowerCase()) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setShowModal(true);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (currentQuestion === questions.length - 1) {
        handleSubmitQuiz();
      } else {
        handleNextQuestion();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentQuestion]);

  return (
    <div className="container mx-auto flex flex-col min-h-[calc(100vh-4rem)] pt-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Distance Vision Test</h1>
      
      {currentQuestion < questions.length && (
        <Card className="w-full mx-auto border-0">
          <CardContent className="p-6 pt-0">
            <p 
              className="text-center mb-8"
              style={{ 
                fontSize: `${fontSize}px`,
              }}
            >
              {questions[currentQuestion].question}
            </p>

            <div className="flex justify-center gap-2 mb-6">
              {[...questions[currentQuestion].answer].map((_, index) => (
                <Input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center text-lg border-2 border-primary focus:border-primary/90 focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={answers[currentQuestion]?.[index] || ""}
                  onChange={(e) => handleInputChange(e, index)}
                />
              ))}
            </div>

            <div className="flex justify-center">
              {currentQuestion === questions.length - 1 ? (
                <Button onClick={handleSubmitQuiz}>
                  Submit
                </Button>
              ) : (
                <Button onClick={handleNextQuestion}>
                  Next
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <Dialog open={showModal} onOpenChange={() => resetTest()}>
        <DialogContent className="bg-background border-border">
          <div className="absolute right-4 top-4">
            <button
              className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              onClick={resetTest}
            >
              <X className="h-4 w-4 text-foreground" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          <DialogHeader>
            <DialogTitle className="text-foreground">Test Results</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <p className="mb-4 text-foreground">
              Your score is: {score} out of {questions.length}
            </p>
            <Button variant="default" onClick={resetTest}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DistanceVision;
