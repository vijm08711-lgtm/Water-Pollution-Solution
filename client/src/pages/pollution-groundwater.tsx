import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img from "@assets/generated_images/groundwater_pollution_underground.png";

export default function GroundwaterPollution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Groundwater Pollution</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Groundwater is the water stored below the earth's surface in aquifers. Unlike surface pollution, this is invisible and spreads slowly, making it harder to detect and clean.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Hidden Crisis</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Groundwater contamination is one of the most dangerous forms of pollution because it's invisible, spreads slowly underground, and affects millions through wells and borewells.
              </p>
              <h3 className="text-2xl font-bold mb-4">Major Sources:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Agricultural chemicals (fertilizers and pesticides)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Leaking septic tanks and underground sewage pipes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Landfill waste seepage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Contaminated water from mining areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Improper disposal of chemicals and paints</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={img} alt="Groundwater Pollution" className="w-full h-[400px] object-cover" />
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
                      <li>• Contaminates wells and borewells</li>
                      <li>• Long-term health problems from trapped pollutants</li>
                      <li>• Expensive and difficult to purify</li>
                      <li>• Can spread for kilometers underground</li>
                      <li>• Affects rural areas heavily</li>
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
                      <li>• Prevent agricultural chemical runoff</li>
                      <li>• Monitor groundwater quality regularly</li>
                      <li>• Proper waste disposal systems</li>
                      <li>• Water purification technologies</li>
                      <li>• Underground storage regulations</li>
                    </ul>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">India's Groundwater Crisis:</h3>
            <p className="text-muted-foreground mb-4">
              Fluoride, arsenic, and nitrate contamination is common in several Indian states including Rajasthan, Bihar, West Bengal, and Punjab. Millions of rural residents depend on contaminated groundwater for drinking water.
            </p>
            <p className="text-muted-foreground">
              The slow, invisible nature of groundwater pollution makes it particularly dangerous - people may not even know they're consuming contaminated water until health problems develop.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
