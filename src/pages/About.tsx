import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import PageTransition from "@/components/page-transition"
import React from "react"

const technologies = [
  {
    name: "REACT",
    description: "A JavaScript library for building user interfaces with reusable components",
  },
  {
    name: "NODE",
    description: "A runtime environment that executes JavaScript code outside a web browser",
  },
  {
    name: "VITE",
    description: "A modern frontend build tool that offers a faster and leaner development experience",
  },
  {
    name: "TYPESCRIPT",
    description: "A strongly typed programming language that builds on JavaScript",
  },
]

const About = () => {
  return (
    <PageTransition>
      <div className="container mx-auto p-4 pb-10">
        <h1 className="text-4xl font-bold text-center mb-2 pt-6">
          About
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        
        <p className="text-lg text-center mb-12">
          Welcome to Eye Spec, your comprehensive destination for accurate and reliable eye testing services. At Eye Spec, we understand the critical importance of maintaining optimal eye health for a better quality of life.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">
              Eye Spec was founded with the mission to make eye care accessible, convenient, and personalized for everyone. We believe that regular eye examinations are crucial not only for correcting vision but also for detecting potential eye conditions early on.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Quality</h2>
            <p className="text-lg">
              Equipped with state-of-the-art technology and staffed by a team of experienced and caring professionals, we strive to deliver the highest standard of eye care. Whether you require a routine eye exam, specialized testing, or professional guidance on eye health, we are here to provide you with the most accurate and comprehensive results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Personalized Approach</h2>
            <p className="text-lg">
              Understanding that every individual has unique eye care needs, we are committed to providing personalized solutions tailored to your specific requirements. Our friendly staff is dedicated to ensuring that your experience at Eye Spec is as comfortable and informative as possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Community Engagement</h2>
            <p className="text-lg">
              Beyond our commitment to individual eye health, Eye Spec is dedicated to spreading awareness about the importance of regular eye check-ups and maintaining good eye health practices. We actively engage with the community through educational programs and initiatives to promote eye care awareness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Technology Used</h2>
            <div className="flex flex-wrap gap-y-4 gap-x-4 text-lg font-medium">
              {technologies.map((tech, index) => (
                <React.Fragment key={tech.name}>
                  <HoverCard>
                    <HoverCardTrigger className="text-primary hover:text-primary/80 cursor-pointer">
                      {tech.name}
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[280px] sm:w-80">
                      <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">{tech.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {tech.description}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  {index < technologies.length - 1 && (
                    <span className="text-muted-foreground hidden sm:inline">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  )
}

export default About
