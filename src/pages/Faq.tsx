import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium">How often should I get my eyes checked?</AccordionTrigger>
          <AccordionContent className="text-base">
          Adults should get their eyes checked at least every two years, and annually if they are over the age of 60 or have a history of eye problems.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium">What are the common signs that indicate a need for an eye test?</AccordionTrigger>
          <AccordionContent className="text-base">
          Common signs that indicate a need for an eye test include frequent headaches, difficulty reading, blurred vision, double vision, eye strain, and trouble seeing objects at a distance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium">What is the difference between an optometrist and an ophthalmologist?</AccordionTrigger>
          <AccordionContent className="text-base">
          An optometrist is a primary eye care provider who can perform eye exams, prescribe corrective lenses, and diagnose common eye conditions, while an ophthalmologist is a medical doctor who specializes in eye and vision care, is qualified to perform eye surgery, and can diagnose and treat a wider range of eye diseases and injuries.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-medium">Can digital screens affect my vision, and if so, how can I protect my eyes?</AccordionTrigger>
          <AccordionContent className="text-base">
          Prolonged use of digital screens can lead to digital eye strain, causing symptoms such as dry eyes, headaches, blurred vision, and neck and shoulder pain. To protect your eyes, take regular breaks, adjust screen brightness and position, use artificial tears, and follow the 20-20-20 rule (look at something 20 feet away for 20 seconds every 20 minutes).
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-medium">How can I prepare for an eye test to ensure accurate results?</AccordionTrigger>
          <AccordionContent className="text-base">
          To prepare for an eye test, bring your current glasses or contact lenses, be ready to provide your medical history and any medications you are taking, and if you wear contact lenses, avoid wearing them for a few hours before the test to ensure the most accurate results.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FAQ
