import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/sdg_14_life_below_water.png";

export default function SDG14() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-5xl font-serif font-bold mb-4">SDG 14: Life Below Water</h1>
            <p className="text-2xl text-muted-foreground">Protect and sustain ocean and marine life</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="SDG 14" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About This Goal</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SDG 14 focuses on protecting, restoring, and promoting the sustainable use of marine and coastal ecosystems. Ocean health is intimately connected to freshwater pollution as rivers carry contaminants to the sea.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Key Targets:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Prevent and reduce marine pollution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Protect and restore ecosystems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>End overfishing and illegal practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Conserve marine and coastal areas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Marine Pollution Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Millions of tons of plastic in oceans</li>
                  <li>• Chemical contamination from rivers</li>
                  <li>• Dead zones from nutrient pollution</li>
                  <li>• Coral reef destruction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Why It Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Supports 3 billion people dependent on fish</li>
                  <li>• Provides crucial nutrients for food</li>
                  <li>• Regulates climate and oxygen production</li>
                  <li>• Essential for coastal economies</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">India's Coastal & Marine Challenges:</h3>
            <p className="text-muted-foreground mb-4">
              India's long coastline and major rivers flowing into the Indian Ocean are affected by pollution from urban centers, industrial discharge, and agricultural runoff.
            </p>
            <p className="text-muted-foreground">
              Rivers like the Ganga and Yamuna carry massive pollution loads that reach the Arabian Sea, affecting coastal ecosystems and marine biodiversity. Protecting our rivers is crucial for ocean health.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
