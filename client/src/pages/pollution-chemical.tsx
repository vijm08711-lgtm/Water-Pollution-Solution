import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img from "@assets/generated_images/chemical_pollution_toxins.png";

export default function ChemicalPollution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Chemical Pollution</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Chemical pollution occurs when toxic and hazardous chemicals mix with water bodies, causing severe environmental and health damage.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Toxic Chemicals Crisis</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Industrial chemicals like lead, mercury, chromium, and various acids are released into water without proper treatment, causing irreversible environmental damage.
              </p>
              <h3 className="text-2xl font-bold mb-4">Major Sources:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Factories releasing lead, mercury, chromium, and acids</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Oil refineries and petrochemical plants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Mining activities releasing heavy metals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Oil spills from ships and storage leaks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Household cleaners and detergents</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={img} alt="Chemical Pollution" className="w-full h-[400px] object-cover" />
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
                      <li>• Causes cancer and organ damage in humans</li>
                      <li>• Toxic for aquatic life in small quantities</li>
                      <li>• Metal accumulation in fish → food chain</li>
                      <li>• Permanently damages water quality</li>
                      <li>• Hormonal imbalance in living organisms</li>
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
                      <li>• Mandatory chemical treatment plants</li>
                      <li>• Strict industrial emission standards</li>
                      <li>• Chemical waste disposal regulations</li>
                      <li>• Advanced filtration technologies</li>
                      <li>• Regular water quality monitoring</li>
                    </ul>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Indian Example - Kanpur's Chemical Crisis:</h3>
            <p className="text-muted-foreground mb-4">
              The Ganga river in Kanpur is severely polluted by chromium from leather tanneries. Chromium is a deadly carcinogen that accumulates in the environment and causes cancer and kidney damage.
            </p>
            <p className="text-muted-foreground">
              Residents living along the river face increased cancer rates and health complications from chronic exposure to heavy metals in water and soil.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
