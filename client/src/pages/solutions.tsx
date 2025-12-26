import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Recycle, TreePine, Megaphone, Droplet } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import solutionImage from "@assets/generated_images/water_treatment_technology_eco_friendly.png";

export default function Solutions() {
  const [, navigate] = useLocation();
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl font-serif font-bold mb-6">Sustainable Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Addressing water pollution requires a multi-pronged approach involving technology, 
              policy enforcement, and community participation. There is hope if we act now.
            </p>
            <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
              <h3 className="text-lg font-bold text-green-800 mb-2">Did You Know?</h3>
              <p className="text-green-700">
                Nature-based solutions like constructed wetlands can treat wastewater at 1/10th the cost of conventional plants.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={solutionImage} 
              alt="Water Treatment" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div whileHover={{ y: -4 }}>
            <Card 
              onClick={() => navigate("/solution/treatment")}
              className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      <Recycle className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-serif">Wastewater Treatment</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    Strict implementation of Sewage Treatment Plants (STPs) and Effluent Treatment Plants (ETPs) for all municipalities and industries before discharge.
                  </CardContent>
                </Card>
            </motion.div>

          <motion.div whileHover={{ y: -4 }}>
            <Card 
              onClick={() => navigate("/solution/afforestation")}
              className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                      <TreePine className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-serif">Afforestation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    Planting trees along river banks prevents soil erosion and acts as a natural buffer, filtering runoff water before it enters the river.
                  </CardContent>
                </Card>
            </motion.div>

          <motion.div whileHover={{ y: -4 }}>
            <Card 
              onClick={() => navigate("/solution/awareness")}
              className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                      <Megaphone className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-serif">Public Awareness</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    Educating citizens about proper waste disposal, stopping idol immersion, and reducing plastic use to prevent river clogging.
                  </CardContent>
                </Card>
            </motion.div>

          <motion.div whileHover={{ y: -4 }}>
            <Card 
              onClick={() => navigate("/solution/rainwater")}
              className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                      <Droplet className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-serif">Rainwater Harvesting</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    Capturing rainwater helps recharge groundwater levels, diluting pollutants in aquifers and ensuring water security.
                  </CardContent>
                </Card>
            </motion.div>
        </div>
      </div>
    </Layout>
  );
}
