import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img from "@assets/generated_images/plastic_pollution_ocean_waste.png";

export default function PlasticPollution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Plastic Pollution</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            A rapidly increasing form of pollution where plastic waste and microplastics accumulate in water bodies, posing severe threats to marine life and human health.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Plastic Crisis</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Plastics are non-biodegradable and can persist in the environment for 400-500+ years, accumulating in water bodies and entering the food chain.
              </p>
              <h3 className="text-2xl font-bold mb-4">Major Sources:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Plastic bags, bottles, food wrappers, packaging waste</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Microbeads from cosmetics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Synthetic fiber shedding from clothes during washing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Waste carried through open drains to lakes and seas</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={img} alt="Plastic Pollution" className="w-full h-[400px] object-cover" />
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
                      <li>• Non-biodegradable - stays 400-500+ years</li>
                      <li>• Aquatic animals swallow plastic and die</li>
                      <li>• Microplastics enter drinking water and food</li>
                      <li>• Blocks drainage leading to floods</li>
                      <li>• Pollutes clean water through drainage</li>
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
                      <li>• Reduce single-use plastic consumption</li>
                      <li>• Plastic waste management programs</li>
                      <li>• River cleanup drives</li>
                      <li>• Biodegradable alternatives</li>
                      <li>• Community awareness campaigns</li>
                    </ul>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">The Microplastic Problem:</h3>
            <p className="text-muted-foreground mb-4">
              Plastic breaks down into tiny particles called microplastics that are invisible to the naked eye but accumulate in fish and seafood.
            </p>
            <p className="text-muted-foreground">
              When we consume fish and other seafood, we also consume microplastics, with unknown long-term health consequences. These particles are found in human blood, lungs, and organs.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
