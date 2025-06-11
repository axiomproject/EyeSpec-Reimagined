import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const questions = [
  "Do you tend to hold text further away to see better?",
  "Are you having difficulty reading small print?",
  "This is quite normal past a certain age.",
  "Let's test your near vision.",
  "If you made it this far, your vision does not require eyeglasses.",
];

const NearVision: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [fontSize, setFontSize] = useState(50);

  const handleAnswer = (answer: boolean) => {
    setAnswers([...answers, answer]);
    setFontSize(fontSize - 8);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setFontSize(50);
  };

  const calculateScore = () => {
    return answers.reduce((acc, curr) => (curr ? acc + 1 : acc), 0);
  };

  return (
    <div className="container mx-auto flex flex-col  min-h-[calc(100vh-4rem)] pt-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Near Vision Test</h1>
      
      <Card className="w-full mx-auto border-0">
        <CardContent className="p-6">
          <p 
            className="text-center mb-8"
            style={{ 
              fontSize: `${fontSize}px`,
            }}
          >
            {questions[currentQuestion]}
          </p>

          <div className="flex justify-center gap-4">
            <Button
              variant="default"
              onClick={() => handleAnswer(true)}
            >
              Yes
            </Button>
            <Button
              variant="default"
              onClick={() => handleAnswer(false)}
            >
              No
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={openModal} onOpenChange={handleCloseModal}>
        <DialogContent className="bg-background border-border">
          <div className="absolute right-4 top-4">
            <button
              className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              onClick={handleCloseModal}
            >
              <X className="h-4 w-4 text-foreground" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          <DialogHeader>
            <DialogTitle className="text-foreground">Test Results</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <p className="mb-4 text-foreground">Your score is: {calculateScore()} out of 5</p>
            <Button variant="default" onClick={handleCloseModal}>
              Restart Test
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NearVision;
