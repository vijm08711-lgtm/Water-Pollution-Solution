import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Droplet, Beaker, Waves, Leaf, Trash2, Flame, Wind, AlertCircle } from "lucide-react";

const pollutionTypes = [
  {
    id: "surface",
    title: "Surface Water Pollution",
    description: "Contamination of rivers, lakes, reservoirs, and oceans visible to the naked eye",
    icon: Waves,
    color: "from-blue-500 to-cyan-500",
    impacts: ["Unsafe drinking water", "Fish death", "Foul smell", "Ecosystem disruption"],
  },
  {
    id: "groundwater",
    title: "Groundwater Pollution",
    description: "Underground water contamination from seepage and infiltration, often invisible but widespread",
    icon: Droplet,
    color: "from-indigo-500 to-blue-500",
    impacts: ["Well water contamination", "Long-term health effects", "Hard to clean", "Widespread damage"],
  },
  {
    id: "chemical",
    title: "Chemical Pollution",
    description: "Heavy metals, pesticides, and industrial chemicals entering water bodies",
    icon: Beaker,
    color: "from-purple-500 to-pink-500",
    impacts: ["Bioaccumulation", "Cancer risk", "Birth defects", "Organ damage"],
  },
  {
    id: "biological",
    title: "Biological Pollution",
    description: "Bacterial and microbial contamination from sewage and organic waste decomposition",
    icon: Wind,
    color: "from-green-500 to-teal-500",
    impacts: ["Waterborne diseases", "Cholera", "Dysentery", "Typhoid"],
  },
  {
    id: "nutrient",
    title: "Nutrient Pollution (Eutrophication)",
    description: "Excess nitrogen and phosphorus from fertilizers causing algae blooms",
    icon: Leaf,
    color: "from-emerald-500 to-green-500",
    impacts: ["Algae blooms", "Dead zones", "Oxygen depletion", "Fish death"],
  },
  {
    id: "plastic",
    title: "Plastic Pollution",
    description: "Accumulation of single-use plastics, microplastics, and synthetic materials",
    icon: Trash2,
    color: "from-orange-500 to-red-500",
    impacts: ["Marine life choking", "Microplastic ingestion", "Ecosystem disruption", "Persistent problem"],
  },
  {
    id: "oil",
    title: "Oil Pollution",
    description: "Industrial oils and petroleum products from spills and improper disposal",
    icon: AlertCircle,
    color: "from-amber-600 to-orange-600",
    impacts: ["Toxic slick formation", "Marine habitat loss", "Bird/fish death", "Water toxicity"],
  },
  {
    id: "thermal",
    title: "Thermal Pollution",
    description: "Temperature increase from industrial cooling systems affecting aquatic life",
    icon: Flame,
    color: "from-red-500 to-yellow-500",
    impacts: ["Fish migration disruption", "Reduced oxygen", "Breeding season confusion", "Species death"],
  },
];

export default function About() {
  const [, navigate] = useLocation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Types of Water Pollution
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Understanding the different types of water pollution is crucial to address this environmental crisis. 
            Each type has unique sources, impacts, and solutions that require targeted efforts for remediation.
          </p>
        </motion.div>

        {/* Pollution Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pollutionTypes.map((pollution, index) => {
            const Icon = pollution.icon;
            return (
              <motion.div
                key={pollution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/pollution/${pollution.id}`)}
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all h-full overflow-hidden group cursor-pointer">
                  <div className={`bg-gradient-to-br ${pollution.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl" />
                    </div>
                    <Icon className="h-12 w-12 mb-4 relative z-10" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {pollution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{pollution.description}</p>
                    <div className="pt-2 border-t">
                      <p className="text-xs font-semibold text-primary mb-2">Key Impacts:</p>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        {pollution.impacts.map((impact, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">→</span>
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Key Statistics */}
        <section className="mb-16 py-12 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
          <div className="px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Why This Matters</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  2.2B
                </div>
                <p className="text-muted-foreground">People lack safe drinking water due to pollution</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  80%
                </div>
                <p className="text-muted-foreground">Of wastewater globally returns to ecosystems untreated</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  1M
                </div>
                <p className="text-muted-foreground">Tons of plastic enter oceans annually</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Learn Solutions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Understanding pollution types is the first step. Now discover proven solutions and actions being taken to protect our water.
          </p>
          <Button
            onClick={() => navigate("/solutions")}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl text-white border-0 text-lg px-8 py-6 h-auto rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Explore Solutions <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
}
