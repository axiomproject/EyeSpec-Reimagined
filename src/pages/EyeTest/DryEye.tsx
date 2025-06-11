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
import { X, Info } from "lucide-react";
import PageTransition from "@/components/page-transition";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion, AnimatePresence } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Answer {
  [key: number]: string;
}

const questionGroups = [
  {
    title: "Vision Symptoms",
    questions: [
      "Eyes that are sensitive to light?",
      "Eyes that feel gritty?",
      "Painful or sore eyes?",
    ],
  },
  {
    title: "Vision Quality",
    questions: ["Blurred vision?", "Poor vision?", "Reading?"],
  },
  {
    title: "Activity Impact",
    questions: [
      "Driving at night?",
      "Working with a computer",
      "Watching TV?",
    ],
  },
  {
    title: "Environmental Factors",
    questions: [
      "Windy conditions?",
      "Places or areas with low humidity (very dry)",
      "Areas that are air conditioned?",
    ],
  },
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
  const [currentPage, setCurrentPage] = useState(0);

  const handleAnswerSelection = (questionIndex: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
  };

  const getScoreMessage = (score: number) => {
    // Each question has 5 possible answers (1-5 points)
    // Total possible score = 12 questions × 5 points = 60 points
    const normalizedScore = (score / (questionGroups.reduce((acc, group) => acc + group.questions.length, 0) * 5)) * 100;

    if (normalizedScore <= 20) {
      return "You have no or minimal dry eye.";
    } else if (normalizedScore <= 40) {
      return "You have mild dry eye symptoms.";
    } else if (normalizedScore <= 60) {
      return "You have moderate dry eye symptoms.";
    } else {
      return "You have symptoms of dry eye and must consult your Eye Doctor as soon as possible.";
    }
  };

  const calculateScore = () => {
    const score = Object.values(answers).reduce(
      (acc, val) => acc + parseInt(val),
      0
    );
    setTotalScore(score);
    setShowModal(true);
  };

  const resetTest = () => {
    setAnswers({});
    setTotalScore(0);
    setShowModal(false);
    setCurrentPage(0);
  };

  const isCurrentPageComplete = () => {
    const currentPageQuestions = questionGroups[currentPage].questions;
    const startIndex = questionGroups
      .slice(0, currentPage)
      .reduce((acc, group) => acc + group.questions.length, 0);
    
    return currentPageQuestions.every((_, index) => 
      answers[startIndex + index] !== undefined
    );
  };

  const isPreviousGroupComplete = (index: number) => {
    return questionGroups
      .slice(0, index)
      .every((_, i) => {
        const startIdx = questionGroups
          .slice(0, i)
          .reduce((acc, group) => acc + group.questions.length, 0);
        return questionGroups[i].questions.every(
          (_, qIdx) => answers[startIdx + qIdx] !== undefined
        );
      });
  };

  const canSubmit =
    Object.keys(answers).length ===
    questionGroups.reduce((acc, group) => acc + group.questions.length, 0);

  return (
    <PageTransition>
      <div className="container mx-auto flex flex-col min-h-[calc(100vh-4rem)] pt-6 pb-8">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-3xl font-bold text-center">OSDI Test Survey</h1>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="p-2 pl-0 pt-3 ml-4 rounded-full hover:bg-accent transition-colors">
                <Info className="w-5 h-5 text-muted-foreground" />
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold">OSDI Scoring System</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• 0-20%: Normal</p>
                  <p>• 21-40%: Mild OSDI</p>
                  <p>• 41-60%: Moderate OSDI</p>
                  <p>• 61%+: Severe OSDI</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  The Ocular Surface Disease Index (OSDI) is a validated questionnaire designed to assess the severity of dry eye disease symptoms. Higher scores indicate more severe symptoms.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <Card className="w-full max-w-4xl mx-auto border-0">
          <CardContent className="p-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <h2 className="text-2xl font-bold mb-6">
                  {questionGroups[currentPage].title}
                </h2>

                {questionGroups[currentPage].questions.map(
                  (question, groupIndex) => {
                    const questionIndex = questionGroups
                      .slice(0, currentPage)
                      .reduce((acc, group) => acc + group.questions.length, 0) +
                      groupIndex;

                    return (
                      <div key={questionIndex} className="mb-8">
                        <h3 className="text-lg font-medium mb-4">{question}</h3>
                        <RadioGroup
                          value={answers[questionIndex] || ""}
                          onValueChange={(value) =>
                            handleAnswerSelection(questionIndex, value)
                          }
                          className="flex flex-col space-y-3"
                        >
                          {options.map((option) => (
                            <label
                              key={option.value}
                              htmlFor={`q${questionIndex}-${option.value}`}
                              className="flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-accent hover:border-primary transition-all duration-200"
                            >
                              <div className="flex items-center space-x-3 w-full">
                                <RadioGroupItem
                                  value={option.value}
                                  id={`q${questionIndex}-${option.value}`}
                                  className="w-5 h-5 border-2 border-primary"
                                />
                                <Label className="flex-1 cursor-pointer text-base">
                                  {option.label}
                                </Label>
                              </div>
                            </label>
                          ))}
                        </RadioGroup>
                      </div>
                    );
                  }
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col items-center gap-4 mt-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                      className={`transition-opacity ${currentPage === 0 ? 'pointer-events-none opacity-50' : ''}`}
                    />
                  </PaginationItem>
                  <div className="flex items-center">
                    {questionGroups.map((_, index) => (
                      <PaginationItem key={index}>
                        {isPreviousGroupComplete(index) ? (
                          <PaginationLink
                            onClick={() => setCurrentPage(index)}
                            isActive={currentPage === index}
                            className="transition-colors"
                          >
                            {index + 1}
                          </PaginationLink>
                        ) : (
                          <span className="h-9 w-9 flex items-center justify-center text-sm opacity-50 cursor-not-allowed transition-opacity">
                            {index + 1}
                          </span>
                        )}
                      </PaginationItem>
                    ))}
                  </div>
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCurrentPage((p) =>
                          Math.min(questionGroups.length - 1, p + 1)
                        )
                      }
                      className={`transition-opacity ${
                        (currentPage === questionGroups.length - 1 || !isCurrentPageComplete())
                          ? 'pointer-events-none opacity-50'
                          : ''
                      }`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>

              {currentPage === questionGroups.length - 1 && (
                <Button
                  onClick={calculateScore}
                  disabled={!canSubmit}
                  className="mt-4"
                >
                  Submit Test
                </Button>
              )}
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
              <DialogTitle className="text-foreground">
                Your OSDI Result
              </DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <p className="mb-4 text-foreground">
                {getScoreMessage(totalScore)}
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

export default DryEye;

