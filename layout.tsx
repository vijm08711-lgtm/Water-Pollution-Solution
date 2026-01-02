import { useLocation } from "wouter";
import { Menu, X, Droplets, Leaf, Activity, Building2, Gavel, BarChart3, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/", icon: Droplets },
  { label: "About", path: "/about", icon: Activity },
  { label: "Causes", path: "/causes", icon: Building2 },
  { label: "Cities", path: "/cities", icon: Building2 },
  { label: "Effects", path: "/effects", icon: Activity },
  { label: "Solutions", path: "/solutions", icon: Leaf },
  { label: "Statistics", path: "/statistics", icon: BarChart3 },
  { label: "Laws", path: "/actions", icon: Gavel },
  { label: "Contact", path: "/contact", icon: Phone },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location, navigate] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-background/80 backdrop-blur-md border-border py-2 shadow-sm" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-2xl font-serif font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity">
            <Droplets className="h-8 w-8" />
            <span>CleanWater<span className="text-foreground">India</span></span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 cursor-pointer",
                  location === item.path ? "text-primary bg-primary/10 font-semibold" : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={cn(
                      "flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium transition-colors cursor-pointer w-full",
                      location === item.path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {children}
      </main>

      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white mt-20 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
          <div>
            <h3 className="font-serif text-4xl font-bold mb-4 flex items-center gap-3 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              <Droplets className="h-8 w-8 text-cyan-400" /> CleanWaterIndia
            </h3>
            <p className="text-gray-300 leading-relaxed font-light">
              An educational initiative to raise awareness about water pollution issues in India, 
              focusing on causes, effects, and sustainable solutions.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate("/causes")} className="text-gray-300 hover:text-cyan-300 transition-colors font-light cursor-pointer">Causes of Pollution</button></li>
              <li><button onClick={() => navigate("/solutions")} className="text-gray-300 hover:text-cyan-300 transition-colors font-light cursor-pointer">Sustainable Solutions</button></li>
              <li><button onClick={() => navigate("/actions")} className="text-gray-300 hover:text-cyan-300 transition-colors font-light cursor-pointer">Government Initiatives</button></li>
              <li><button onClick={() => navigate("/statistics")} className="text-gray-300 hover:text-cyan-300 transition-colors font-light cursor-pointer">Data & Statistics</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-300">Contact</h4>
            <p className="text-gray-300 mb-2 font-light">Have questions or want to contribute?</p>
            <Button onClick={() => navigate("/contact")} className="mt-2 w-full md:w-auto bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-slate-900 font-semibold border-0 shadow-lg transition-all hover:shadow-2xl cursor-pointer">
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm font-light">
          © 2024 CleanWaterIndia. Educational Project.
        </div>
      </footer>
    </div>
  );
}
