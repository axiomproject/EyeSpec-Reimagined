import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface Answer {
  [key: number]: string;
}

const questions = [
  "Eyes that are sensitive to light?",
  "Eyes that feel gritty?",
  "Painful or sore eyes?",
  "Blurred vision?",
  "Poor vision?",
  "Reading?",
  "Driving at night?",
  "Working with a computer",
  "Watching TV?",
  "Windy conditions?",
  "Places or areas with low humidity (very dry)",
  "Areas that are air conditioned?",
];

const options = [
  { value: "1", label: "None of the time" },
  { value: "2", label: "Some of the time" },
  { value: "3", label: "Half of the time" },
  { value: "4", label: "Most of the time" },
  { value: "5", label: "All of the time" },
];

const DryEye: React.FC = () => {
  const [answers, setAnswers] = useState<Answer>({});
  const [showModal, setShowModal] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswerSelection = (questionIndex: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: value }));
  };

  const getScoreMessage = (score: number) => {
    if (score >= 1 && score <= 12) {
      return "You have no or minimal dry eye.";
    } else if (score >= 13 && score <= 22) {
      return "You have mild dry eye symptoms.";
    } else if (score >= 23 && score <= 32) {
      return "You have moderate dry eye symptoms.";
    } else if (score >= 33) {
      return "You have symptoms of dry eye and must consult your Eye Doctor as soon as possible.";
    }
    return "Please answer all questions.";
  };

  const calculateScore = () => {
    const score = Object.values(answers).reduce((acc, val) => acc + parseInt(val), 0);
    setTotalScore(score);
    setShowModal(true);
  };

  const resetTest = () => {
    setAnswers({});
    setTotalScore(0);
    setShowModal(false);
  };

  return (
    <div className="container mx-auto flex flex-col min-h-[calc(100vh-4rem)] pt-6 pb-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Dry Eye Test Survey</h1>
      
      <Card className="w-full max-w-4xl mx-auto border-0">
        <CardContent className="p-6">
          {questions.map((question, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-lg font-medium mb-4">{question}</h3>
              <RadioGroup
                value={answers[index] || ""}
                onValueChange={(value) => handleAnswerSelection(index, value)}
                className="flex flex-col space-y-3"
              >
                {options.map((option) => (
                  <label
                    key={option.value}
                    htmlFor={`q${index}-${option.value}`}
                    className="flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-accent hover:border-primary transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <RadioGroupItem 
                        value={option.value} 
                        id={`q${index}-${option.value}`}
                        className="w-5 h-5 border-2 border-primary"
                      />
                      <Label 
                        className="flex-1 cursor-pointer text-base"
                      >
                        {option.label}
                      </Label>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>
          ))}

          <div className="flex justify-center mt-6">
            <Button
              onClick={calculateScore}
              disabled={Object.keys(answers).length !== questions.length}
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showModal} onOpenChange={() => setShowModal(false)}>
        <DialogContent className="bg-background border-border">
          <div className="absolute right-4 top-4">
            <button
              className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              onClick={() => setShowModal(false)}
            >
              <X className="h-4 w-4 text-foreground" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          <DialogHeader>
            <DialogTitle className="text-foreground">Your OSDI Result</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <p className="mb-4 text-foreground">{getScoreMessage(totalScore)}</p>
            <Button variant="default" onClick={resetTest}>
              Take Test Again
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DryEye;

