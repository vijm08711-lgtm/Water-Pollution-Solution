import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/mumbai_mithi_river_sludge.png";

export default function MumbaiCity() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Mumbai - Coastal Catastrophe</h1>
          <p className="text-2xl text-muted-foreground mb-12">India's Financial Hub's Environmental Cost</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Mumbai Mithi River" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">The Mithi River Crisis</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Mithi River in Mumbai is choked with industrial waste and sludge. During monsoons, it causes devastating floods because the pollution has reduced its carrying capacity. The river has become a symbol of urban neglect.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Pollution Level: 92/100 (Critical)</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Completely choked with sludge and waste</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Industrial pollutants from nearby factories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Sewage from sprawling slums</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Plastic waste clogging waterway</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Urban Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• 20+ million population in metro area</li>
                  <li>• Massive slum areas without proper sewage</li>
                  <li>• Chemical plants along river banks</li>
                  <li>• Textile and pharmaceutical industries</li>
                  <li>• Construction debris and sand mining</li>
                  <li>• Coastal dumping and dredging</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Monsoon Floods</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Clogged river causes severe flooding</li>
                  <li>• Reduced water carrying capacity</li>
                  <li>• Loss of lives and property annually</li>
                  <li>• Contaminated floodwaters spread disease</li>
                  <li>• Damaged roads and infrastructure</li>
                  <li>• Economic loss in billions annually</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">The Mithi Story:</h3>
            <p className="text-muted-foreground mb-4">
              What was once a clean river flowing through Mumbai has been transformed into a garbage dump. The Mithi is so clogged that it can barely carry water during heavy monsoons, leading to devastating urban flooding that affects millions.
            </p>
            <p className="text-muted-foreground">
              The river's reduced capacity to drain water has made Mumbai increasingly vulnerable to floods, despite heavy monsoon rains being predictable and manageable if the river were clean.
            </p>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Recovery Actions Needed:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Dredging and cleanup</strong> - Remove accumulated sludge and waste</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Sewage diversion</strong> - Redirect untreated sewage to treatment plants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Industrial compliance</strong> - Enforce strict discharge standards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Slum improvement</strong> - Provide toilets and sanitation facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Plastic ban</strong> - Stop single-use plastics entering waterways</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
