import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Eye, BookOpen, Droplet, Circle, Palette } from "lucide-react" // Import icons

const EyeTest = () => {
  const tests = [
    {
      title: "DISTANCE VISION",
      description: "Assess your ability to see objects clearly at a distance. This test helps identify potential issues with far vision and determines if corrective lenses might be needed for activities like driving or watching TV.",
      link: "/EyeTest/DistanceVision",
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "NEAR VISION",
      description: "Evaluate your close-up vision capabilities. This test checks how well you can see objects at reading distance, important for activities like reading, using smartphones, or detailed close work.",
      link: "/EyeTest/NearVision",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "DRY EYE",
      description: "Determine if you're experiencing symptoms of dry eye syndrome. This assessment helps identify issues with tear production and eye moisture levels that can affect your overall eye comfort.",
      link: "/EyeTest/DryEye",
      icon: <Droplet className="w-8 h-8" />
    },
    {
      title: "ASTIGMATISM",
      description: "Check for signs of astigmatism, a common condition where the eye's curve is irregular. This test helps identify if you're experiencing blurred or distorted vision at any distance.",
      link: "/EyeTest/Astigmatism",
      icon: <Circle className="w-8 h-8" />
    },
    {
      title: "COLOR BLINDNESS",
      description: "Assess your ability to distinguish between different colors. This test helps identify various types of color vision deficiencies that might affect your daily life.",
      link: "/test/color",
      icon: <Palette className="w-8 h-8" />
    }
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-8 pt-6">Vision Tests</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
        {tests.map((test, index) => (
          <Link to={test.link} key={index} className="w-full max-w-[320px]">
            <Card className="h-[550px] w-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group p-0">
              <CardHeader className="bg-[#1F4E79] text-white p-8 relative m-0 rounded-t-lg">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1F4E79] to-[#2C5282] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  {test.icon}
                  <h2 className="text-xl font-bold text-center">{test.title}</h2>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <p className="text-lg leading-relaxed">{test.description}</p>
                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#1F4E79] font-medium">Click to start test →</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EyeTest
