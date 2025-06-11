import Lottie from "lottie-react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Eye, HeartPulse } from "lucide-react"
import { Link } from "react-router-dom"
import animationData from "../card-ico/Animation-1749597597908.json"

const Home = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-4xl font-bold text-center pt-6">Welcome to EyeSpec</h1>
      <p className="text-center mt-4 text-gray-600">
        Your one-stop solution for eye care and specifications.
      </p>

      <Card className="w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          <div className="w-full md:w-2/3 lg:w-1/3 p-6 flex justify-center">
            <Lottie 
              animationData={animationData} 
              className="w-full max-w-[300px]"
              loop={true}
            />
          </div>
          <CardContent className="w-full lg:w-2/3 p-6 lg:pr-8">
            <p className="text-xl">
              At Eye Spec, we're dedicated to the health and clarity of your vision. Your eyesight is a precious gift, and it's crucial to protect it. Regular eye tests are a simple yet essential step in maintaining good eye health and ensuring that you see the world in all its brilliance. Our user-friendly online eye test platform provides a convenient and informative way to check your vision from the comfort of your own home. Whether you're due for a check-up or simply curious about your eye health, Eye Spec is here to help.
            </p>
          </CardContent>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="text-center">
            <Eye className="w-12 h-12 mx-auto text-primary" />
          </CardHeader>
          <CardContent className="text-center">
            <p>Regular eye tests are vital for both vision and overall health, as they can uncover early signs of various conditions. Maintaining good eye health means adopting healthy habits. At Eye Spec, we're here to guide you.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <HeartPulse className="w-12 h-12 mx-auto text-primary" />
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p>Ready to prioritize your vision and well-being? Start your eye test with a simple click – just hit 'Start Test' below.</p>
            <Link to="/eyetest">
              <Button size="lg" className="w-full">
                Start Test
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
