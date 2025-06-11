import React from "react"

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-2">
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
          <div className="flex gap-4 text-lg font-medium text-primary">
            <span>REACT</span>
            <span>|</span>
            <span>NODE</span>
            <span>|</span>
            <span>VITE</span>
            <span>|</span>
            <span>TYPESCRIPT</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
