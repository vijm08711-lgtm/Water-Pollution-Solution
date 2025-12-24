import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img from "@assets/generated_images/nutrient_pollution_algal_bloom.png";

export default function NutrientPollution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Nutrient Pollution</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Happens when excessive nutrients like nitrogen and phosphorus enter water, mainly from farming, causing algal blooms and oxygen depletion.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Algal Bloom Problem</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Agricultural runoff enriches water with nutrients, causing rapid algae growth that consumes oxygen and creates "dead zones" where aquatic life cannot survive.
              </p>
              <h3 className="text-2xl font-bold mb-4">Major Sources:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Agricultural runoff from fields</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Livestock waste</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Discharge from food-processing industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Excessive fertilizer use in agriculture</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={img} alt="Nutrient Pollution" className="w-full h-[400px] object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link href="/effects">
              <a>
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                      Effects <ArrowRight className="h-5 w-5" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Algal blooms turn water green and dirty</li>
                      <li>• Oxygen depletion kills aquatic animals</li>
                      <li>• Blocks sunlight for underwater plants</li>
                      <li>• Disrupts entire food chain</li>
                      <li>• Creates toxic "dead zones"</li>
                    </ul>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Link href="/solutions">
              <a>
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                      Solutions <ArrowRight className="h-5 w-5" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Reduce fertilizer use in agriculture</li>
                      <li>• Use organic farming practices</li>
                      <li>• Nutrient recovery systems</li>
                      <li>• Buffer zones along water bodies</li>
                      <li>• Wastewater treatment from industries</li>
                    </ul>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">The Algal Bloom Process:</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">1.</span>
                <span><strong>Algal Bloom</strong> - Algae grows rapidly on surface</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">2.</span>
                <span><strong>Oxygen Depletion</strong> - Algae consumes oxygen at night</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">3.</span>
                <span><strong>Hypoxic Conditions</strong> - Low oxygen leads to mass death</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">4.</span>
                <span><strong>Dead Zone</strong> - Aquatic ecosystem collapses</span>
              </li>
            </ol>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
