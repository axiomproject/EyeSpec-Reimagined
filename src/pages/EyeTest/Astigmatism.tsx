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
import Confetti from "react-confetti";

// Import only one version of each image
import astigmatismImage1 from "@/assets/AstigmatismTest1.png";
import astigmatismImage2 from "@/assets/AstigmatismTest2.png";
import astigmatismImage3 from "@/assets/Astigmatism.png";

const questions = [
  {
    text: "Do you see shades of gray rather than black or white?",
    image: astigmatismImage1,
    correctAnswer: false,
  },
  {
    text: "Do you see some of the lines darker or thinner than the rest?",
    image: astigmatismImage2,
    correctAnswer: true,
  },
  {
    text: "Are the thickness and intensity of each radiating heavy black line identical?",
    image: astigmatismImage3,
    correctAnswer: true,
  },
];

const Astigmatism: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

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

  const handleAnswer = (answer: boolean) => {
    setAnswers([...answers, answer]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setOpenModal(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((acc, curr, index) => {
      const isCorrect = curr === questions[index].correctAnswer;
      return isCorrect ? acc + 1 : acc;
    }, 0);
  };

  const getScoreMessage = (score: number) => {
    if (score >= 2) {
      return { message: "You may not have astigmatism", color: "text-green-500" };
    } else {
      return { message: "You may have astigmatism", color: "text-red-500" };
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setOpenModal(false);
    setShowConfetti(false);
  };

  useEffect(() => {
    if (openModal) {
      setShowConfetti(true);
    }
  }, [openModal]);

  const score = calculateScore();
  const { message, color } = getScoreMessage(score);

  if (!imagesLoaded) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="mt-4">Loading test images...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-col items-center min-h-[calc(100vh-4rem)] pt-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Astigmatism Test</h1>
      
      <Card className="w-full max-w-2xl mx-auto border-0">
        <CardContent className="p-6 flex flex-col items-center">
          <p className="text-xl mb-6 text-center">
            {questions[currentQuestion].text}
          </p>

          <img
            src={questions[currentQuestion].image}
            alt={`Question ${currentQuestion + 1}`}
            className="w-full max-w-md mb-8 dark:invert dark:hue-rotate-180"
            loading="eager"
          />

          <div className="flex justify-center gap-4">
            <Button onClick={() => handleAnswer(true)}>Yes</Button>
            <Button onClick={() => handleAnswer(false)}>No</Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={openModal} onOpenChange={resetTest}>
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
              Your score is: {score} out of {questions.length}
            </p>
            <p className={`mb-4 font-bold ${color}`}>{message}</p>
            <Button variant="default" onClick={resetTest}>
              Take Test Again
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {showConfetti && score >= 2 && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 50 }}
        />
      )}
    </div>
  );
};

export default Astigmatism;
