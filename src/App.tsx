import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/ui/Navbar'
import Home from './pages/Home'
import { ThemeProvider } from "@/components/theme-provider"
import FAQ from './pages/Faq'
import About from './pages/About'
import EyeTest from './pages/Eyetest'
import NearVision from './pages/EyeTest/NearVision'
import DistanceVision from './pages/EyeTest/DistanceVision'
import DryEye from './pages/EyeTest/DryEye'
import Astigmatism from './pages/EyeTest/Astigmatism'
import ColorBlind from './pages/EyeTest/ColorBlind'
import Footer from './components/ui/Footer'

// Create a wrapper component to use location
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <main key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/eyetest" element={<EyeTest />} />
          <Route path="/EyeTest/NearVision" element={<NearVision />} />
          <Route path="/EyeTest/DistanceVision" element={<DistanceVision />} />
          <Route path="/EyeTest/DryEye" element={<DryEye />} />
          <Route path="/EyeTest/Astigmatism" element={<Astigmatism />} />
          <Route path="/EyeTest/ColorBlind" element={<ColorBlind />} />
        </Routes>
      </main>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
