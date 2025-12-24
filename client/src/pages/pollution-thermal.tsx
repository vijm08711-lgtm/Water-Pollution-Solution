import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img from "@assets/generated_images/thermal_pollution_heat_discharge.png";

export default function ThermalPollution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Thermal Pollution</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Occurs when industries release hot water into natural water bodies, increasing temperature and disrupting aquatic ecosystems.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Temperature Imbalance</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Power plants and industries use large quantities of water for cooling. This heated water, when released into natural bodies, creates temperature shocks that harm aquatic life.
              </p>
              <h3 className="text-2xl font-bold mb-4">Major Sources:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Power plants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Manufacturing industries using water for cooling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Steel and chemical industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Other heat-generating industries</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={img} alt="Thermal Pollution" className="w-full h-[400px] object-cover" />
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
                      <li>• Warm water holds less oxygen</li>
                      <li>• Aquatic life suffocates</li>
                      <li>• Temperature changes kill sensitive species</li>
                      <li>• Disrupts breeding cycles of fish</li>
                      <li>• Affects metabolic balance of ecosystems</li>
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
                      <li>• Cooling towers and heat exchangers</li>
                      <li>• Recycled cooling water systems</li>
                      <li>• Discharge regulations for hot water</li>
                      <li>• Environmental impact assessments</li>
                      <li>• Technology upgrades in industries</li>
                    </ul>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">The Temperature Shock Effect:</h3>
            <p className="text-muted-foreground mb-4">
              Even a sudden 2-3°C increase in water temperature can cause fish to abandon their habitat or become stressed.
            </p>
            <p className="text-muted-foreground">
              Thermal pollution disrupts breeding cycles - fish need specific water temperatures to spawn. If water becomes too warm, reproduction fails, leading to declining fish populations.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
