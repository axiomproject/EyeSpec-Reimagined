import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1F4E79] text-white py-8 mt-auto border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Disclaimer Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-2">Disclaimer</h3>
            <p className="text-sm text-white/80">
              The eye tests provided on this website are for screening purposes only 
              and are not intended to replace professional medical examinations. 
              Results may not be 100% accurate. Always consult with an eye care 
              professional for a comprehensive evaluation of your vision health.
            </p>
          </div>

          {/* Credits Section */}
          <div className="space-y-3 md:text-right">
            <div className="flex items-center gap-2 md:justify-end">
              <Code2 className="w-5 h-5 text-white/90" />
              <span className="text-sm font-medium">Jc Vergara</span>
            </div>
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} EyeSpec. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
