import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img from "@assets/generated_images/surface_water_pollution_river.png";

export default function SurfaceWaterPollution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Surface Water Pollution</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Surface water includes all water sources open to the atmosphere such as rivers, lakes, reservoirs, wetlands, and oceans.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is it?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Surface water pollution happens when contaminants directly enter visible water bodies. This is the most visible and commonly observed type of pollution, affecting rivers, lakes, and oceans worldwide.
              </p>
              <h3 className="text-2xl font-bold mb-4">Major Sources:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Untreated sewage from households and cities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Industrial effluents released without filtration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Dumping of plastics, food waste, flowers, and solid waste</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Religious offerings and idol immersion in rivers/lakes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Stormwater carrying pollutants from roads and urban areas</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={img} alt="Surface Water Pollution" className="w-full h-[400px] object-cover" />
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
                      <li>• Makes water unsafe for drinking and bathing</li>
                      <li>• Reduces sunlight penetration, affecting aquatic plants</li>
                      <li>• Decreases oxygen levels, leading to fish death</li>
                      <li>• Produces toxic foam and foul smell</li>
                      <li>• Harms biodiversity and disrupts ecosystems</li>
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
                      <li>• Proper sewage treatment plants (STPs)</li>
                      <li>• Industrial effluent treatment (ETPs)</li>
                      <li>• River cleanup drives and monitoring</li>
                      <li>• Strict waste disposal regulations</li>
                      <li>• Community awareness programs</li>
                    </ul>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Indian Examples:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">▸</span>
                <span><strong>Ganga & Yamuna rivers</strong> - Contaminated by sewage and industrial discharge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">▸</span>
                <span><strong>Bellandur and Varthur lakes (Bengaluru)</strong> - Filled with toxic foam</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">▸</span>
                <span><strong>Unkal Lake (Hubbali)</strong> - Polluted by domestic and commercial waste</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
