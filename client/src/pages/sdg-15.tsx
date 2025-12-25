import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/sdg_15_life_on_land.png";

export default function SDG15() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-5xl font-serif font-bold mb-4">SDG 15: Life on Land</h1>
            <p className="text-2xl text-muted-foreground">Protect terrestrial ecosystems and biodiversity</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="SDG 15" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About This Goal</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SDG 15 focuses on protecting and restoring terrestrial ecosystems. Healthy ecosystems depend on clean water, and water pollution directly impacts forests, wetlands, and wildlife that depend on freshwater.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Key Targets:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Conserve and restore terrestrial ecosystems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Promote sustainable forest management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Combat desertification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Prevent extinction of threatened species</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Water & Land Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Forests regulate water flow and purification</li>
                  <li>• Wetlands filter water and reduce flooding</li>
                  <li>• Vegetation prevents soil erosion into water</li>
                  <li>• Healthy ecosystems maintain water cycles</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Threats to Biodiversity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Water pollution kills aquatic species</li>
                  <li>• Habitat loss from wetland drainage</li>
                  <li>• Forest degradation from erosion</li>
                  <li>• Wildlife decline from poisoned ecosystems</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">India's Rich Biodiversity Under Threat:</h3>
            <p className="text-muted-foreground mb-4">
              India is home to incredible biodiversity including the Indian rhinoceros, Bengal tiger, and Gangetic dolphin. Water pollution threatens these species and their habitats, particularly in river ecosystems.
            </p>
            <p className="text-muted-foreground">
              The Gangetic dolphin, declared India's national aquatic animal, is endangered due to river pollution and dam construction. Protecting water quality is essential for preserving India's unique wildlife heritage.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
