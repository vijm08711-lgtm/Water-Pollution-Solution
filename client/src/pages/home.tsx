import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ArrowRight, Droplets, AlertTriangle, Leaf } from "lucide-react";
import heroImage from "@assets/generated_images/pristine_river_water_in_india_sunlight.png";
import sdg6 from "@assets/generated_images/sdg_6_clean_water_goal.png";
import sdg13 from "@assets/generated_images/sdg_13_climate_action.png";
import sdg14 from "@assets/generated_images/sdg_14_life_below_water.png";
import sdg15 from "@assets/generated_images/sdg_15_life_on_land.png";

export default function Home() {
  const [, navigate] = useLocation();
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Pristine River" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>
        
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold">
                ✨ Save Our Waters
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tight text-white drop-shadow-lg">
              Water Pollution: <br className="hidden md:block" /> A Silent Threat
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-3xl opacity-95 max-w-3xl mx-auto mb-12 font-light leading-relaxed text-white drop-shadow-md"
            >
              Protecting water today means saving life tomorrow
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button onClick={() => navigate("/causes")} size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl text-white border-0 text-lg px-10 py-7 h-auto rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                Explore Causes
              </Button>
              <Button onClick={() => navigate("/cities")} size="lg" className="bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/50 text-white text-lg px-10 py-7 h-auto rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                Case Studies in India
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Preview */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">The Crisis in Numbers</h2>
            <p className="text-xl text-muted-foreground">Sobering facts about water pollution in India</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(205, 95, 42, 0.15)" }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white to-blue-50/50 border border-border shadow-lg hover:border-primary/50 transition-all duration-300 text-center group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Droplets className="h-10 w-10 text-primary" />
              </motion.div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">70%</h3>
              <p className="text-muted-foreground text-lg">of surface water in India is unfit for consumption</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.15)" }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white to-amber-50/50 border border-border shadow-lg hover:border-amber-500/50 transition-all duration-300 text-center group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-gradient-to-br from-amber-200/30 to-amber-100/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <AlertTriangle className="h-10 w-10 text-amber-600" />
              </motion.div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mb-3">40M</h3>
              <p className="text-muted-foreground text-lg">Liters of wastewater enters rivers daily</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.15)" }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white to-green-50/50 border border-border shadow-lg hover:border-green-500/50 transition-all duration-300 text-center group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-gradient-to-br from-green-200/30 to-green-100/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Leaf className="h-10 w-10 text-green-600" />
              </motion.div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-3">Top 5</h3>
              <p className="text-muted-foreground text-lg">Priority of Namami Gange Mission</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Content */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-0" />
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Why This Matters</h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-light">
                Water is the essence of life, yet in India, our most sacred rivers are facing an unprecedented crisis. 
                Rapid urbanization, industrial growth, and lack of proper waste management have turned lifelines into health hazards.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light">
                This platform aims to educate students and citizens about the severity of water pollution, its causes, 
                impact on health and economy, and the steps being taken to restore our water bodies.
              </p>
            </motion.div>
            
            <Button onClick={() => navigate("/effects")} className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl text-white border-0 text-lg px-8 py-6 h-auto rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
              Learn about the effects <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="relative border-2 border-white/50 shadow-2xl overflow-hidden backdrop-blur-sm group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <CardContent className="p-0 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1561587428-ee6260df341a?q=80&w=1000&auto=format&fit=crop" 
                    alt="Indian River" 
                    className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SDG Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif font-bold mb-6">Aligned with UN Sustainable Development Goals</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our mission directly supports the UN's sustainable development goals for a better, more sustainable future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => navigate("/sdg/6")}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all h-full overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={sdg6} alt="SDG 6" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 font-serif">SDG 6: Clean Water & Sanitation</h3>
                  <p className="text-muted-foreground text-sm">Ensure access to water and sanitation for all</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => navigate("/sdg/13")}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all h-full overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={sdg13} alt="SDG 13" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 font-serif">SDG 13: Climate Action</h3>
                  <p className="text-muted-foreground text-sm">Combat climate change and its impacts</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => navigate("/sdg/14")}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all h-full overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={sdg14} alt="SDG 14" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 font-serif">SDG 14: Life Below Water</h3>
                  <p className="text-muted-foreground text-sm">Protect and sustain ocean and marine life</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => navigate("/sdg/15")}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all h-full overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={sdg15} alt="SDG 15" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 font-serif">SDG 15: Life on Land</h3>
                  <p className="text-muted-foreground text-sm">Protect terrestrial ecosystems and biodiversity</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
