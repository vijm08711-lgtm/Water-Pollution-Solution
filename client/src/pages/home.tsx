import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Droplets, AlertTriangle, Leaf } from "lucide-react";
import heroImage from "@assets/generated_images/pristine_river_water_in_india_sunlight.png";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Pristine River" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
              Reviving India's Lifelines
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Understanding the crisis of water pollution in India and paving the path towards a cleaner, sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/causes">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-0 text-lg px-8 py-6 h-auto">
                  Explore Causes
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto">
                  View Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-border shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Droplets className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">70%</h3>
              <p className="text-muted-foreground">of surface water in India is unfit for consumption</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-border shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-amber-600 mb-2">40M</h3>
              <p className="text-muted-foreground">Liters of wastewater enters rivers daily</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-border shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-green-600 mb-2">Top 5</h3>
              <p className="text-muted-foreground">Priority of Namami Gange Mission</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Content */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Why This Matters</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Water is the essence of life, yet in India, our most sacred rivers are facing an unprecedented crisis. 
              Rapid urbanization, industrial growth, and lack of proper waste management have turned lifelines into health hazards.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              This platform aims to educate students and citizens about the severity of water pollution, its causes, 
              impact on health and economy, and the steps being taken to restore our water bodies.
            </p>
            <Link href="/effects">
              <Button variant="link" className="text-primary p-0 text-lg font-semibold group">
                Learn about the effects <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-50" />
            <Card className="relative border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1561587428-ee6260df341a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Indian River" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
