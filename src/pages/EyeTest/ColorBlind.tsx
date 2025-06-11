import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import PageTransition from "@/components/page-transition";

// Import your Ishihara plate images
import plate1 from "@/assets/colorblind/ishihara_1.png"; // Number 12
import plate2 from "@/assets/colorblind/ishihara_2.png"; // Number 8
import plate3 from "@/assets/colorblind/ishihara_3.png"; // Number 6
import plate4 from "@/assets/colorblind/ishihara_4.png"; // Number 29
import plate5 from "@/assets/colorblind/ishihara_5.png"; // Number 57

const questions = [
  {
    image: plate1,
    correctAnswer: "4",
    description: "What number do you see in this image?",
  },
  {
    image: plate2,
    correctAnswer: "2",
    description: "What number do you see in this image?",
  },
  {
    image: plate3,
    correctAnswer: "8",
    description: "What number do you see in this image?",
  },
  {
    image: plate4,
    correctAnswer: "3",
    description: "What number do you see in this image?",
  },
  {
    image: plate5,
    correctAnswer: "7",
    description: "What number do you see in this image?",
  },
];

const ColorBlind: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState("");

  // Preload images
  useEffect(() => {
    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = reject;
      });
    };

    Promise.all(questions.map(q => loadImage(q.image)))
      .then(() => setImagesLoaded(true))
      .catch(err => console.error('Error loading images:', err));
  }, []);

  const handleNext = () => {
    setAnswers([...answers, currentAnswer]);
    setCurrentAnswer("");
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowModal(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((acc, curr, idx) => 
      curr === questions[idx].correctAnswer ? acc + 1 : acc, 0);
  };

  const getResultMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
      return { 
        message: "Your color vision appears to be normal",
        color: "text-green-500"
      };
    } else if (percentage >= 60) {
      return { 
        message: "You may have mild color vision deficiency",
        color: "text-yellow-500"
      };
    } else {
      return { 
        message: "You may have significant color vision deficiency. Please consult an eye care professional",
        color: "text-red-500"
      };
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setCurrentAnswer("");
    setShowModal(false);
  };

  if (!imagesLoaded) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="mt-4">Loading test images...</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="container mx-auto flex flex-col items-center min-h-[calc(100vh-4rem)] pt-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Color Vision Test</h1>
        
        <Card className="w-full max-w-2xl mx-auto border-0">
          <CardContent className="p-6 flex flex-col items-center">
            <p className="text-xl mb-6 text-center">
              {questions[currentQuestion].description}
            </p>

            <img
              src={questions[currentQuestion].image}
              alt="Ishihara Color Test Plate"
              className="w-full max-w-md mb-8"
            />

            <div className="flex items-center gap-4 mb-6">
              <Input
                type="text"
                placeholder="Enter the number you see"
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                className="w-49 text-center"
                maxLength={2}
              />
            </div>

            <Button 
              onClick={handleNext}
              disabled={!currentAnswer}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </Button>
          </CardContent>
        </Card>

        <Dialog open={showModal} onOpenChange={resetTest}>
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
              <p className="mb-2 text-foreground">
                Your score: {calculateScore()} out of {questions.length}
              </p>
              <p className={`mb-4 font-bold ${getResultMessage(calculateScore()).color}`}>
                {getResultMessage(calculateScore()).message}
              </p>
              <Button variant="default" onClick={resetTest}>
                Take Test Again
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default ColorBlind;
