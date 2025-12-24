import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img from "@assets/generated_images/oil_pollution_spill_ocean.png";

export default function OilPollution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Oil Pollution</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Caused by release or leakage of oil into oceans or freshwater sources, creating environmental disasters and ecosystem collapse.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Oil Spill Crisis</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Oil pollution forms a thick layer on water that blocks oxygen and sunlight, causing massive damage to marine ecosystems and wildlife.
              </p>
              <h3 className="text-2xl font-bold mb-4">Major Sources:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Oil spills from ships and tankers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Offshore drilling accidents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Oil storage leaks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Fuel discharge from industries</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={img} alt="Oil Pollution" className="w-full h-[400px] object-cover" />
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
                      <li>• Forms thick layer blocking oxygen</li>
                      <li>• Blocks sunlight for underwater life</li>
                      <li>• Marine animals and birds die</li>
                      <li>• Fish suffocate or get poisoned</li>
                      <li>• Destroys coral reefs and ocean ecology</li>
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
                      <li>• Strict offshore drilling regulations</li>
                      <li>• Double-hulled oil tankers</li>
                      <li>• Oil spill response systems</li>
                      <li>• Regular equipment maintenance</li>
                      <li>• Environmental impact assessments</li>
                    </ul>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Long-Term Environmental Impact:</h3>
            <p className="text-muted-foreground mb-4">
              Oil spills create environmental disasters that take decades to recover from. The 2010 Deepwater Horizon spill in the Gulf of Mexico is still affecting ecosystems 14 years later.
            </p>
            <p className="text-muted-foreground">
              Cleanup is costly and takes years. Marine ecosystems, coastal communities, and fisheries suffer massive losses that cannot be easily reversed.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
