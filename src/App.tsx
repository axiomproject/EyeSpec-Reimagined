import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
              <Route path="/eyetest" element={<EyeTest />} />
              <Route path="/EyeTest/NearVision" element={<NearVision />} />
              <Route path="/EyeTest/DistanceVision" element={<DistanceVision />} />
              <Route path="/EyeTest/DryEye" element={<DryEye />} />
              <Route path="/EyeTest/Astigmatism" element={<Astigmatism />} />
              {/* ...other routes... */}
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
