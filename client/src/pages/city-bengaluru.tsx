import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/bengaluru_bellandur_lake_foam.png";

export default function BengaluruCity() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Bengaluru - The Toxic Foam City</h1>
          <p className="text-2xl text-muted-foreground mb-12">Tech Hub's Lake Pollution Crisis</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Bellandur Lake Bengaluru" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Bellandur Lake on Fire</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Bellandur Lake has become infamous for its toxic foam and actual fires. The lake's surface has caught fire multiple times due to extremely high chemical content. It's a shocking symbol of how technology and development can destroy nature.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Pollution Level: 85/100 (Severe)</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Thick white toxic foam on surface</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Lake has caught fire multiple times</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>High chemical and organic content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Dangerous for swimming and boating</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Pollution Causes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• IT and software company sewage</li>
                  <li>• Pharmaceutical industry discharge</li>
                  <li>• Chemical manufacturing waste</li>
                  <li>• Textiles and dye industries</li>
                  <li>• Residential sewage from expanding city</li>
                  <li>• Construction and demolition waste</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">The Fire Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Methane from organic decomposition</li>
                  <li>• Chemical reactions in foam</li>
                  <li>• Spontaneous ignition possible</li>
                  <li>• Multiple fires since 2012</li>
                  <li>• Burning foam visible from kilometers</li>
                  <li>• Smoke causes respiratory issues</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Bellandur Lake's Tragedy:</h3>
            <p className="text-muted-foreground mb-4">
              Once a beautiful lake that supported fishing and recreation, Bellandur has been reduced to a toxic dumping ground. The infamous "burning lake" has become an international symbol of India's environmental crisis.
            </p>
            <p className="text-muted-foreground">
              The lake's toxicity is so extreme that the foam is toxic to breathe. Children and elderly living nearby have reported respiratory illnesses. The lake is unsafe for any human activity.
            </p>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Restoration Steps:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Sewage diversion</strong> - Prevent all untreated sewage from entering</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Dredging</strong> - Remove toxic sludge accumulated at bottom</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Industrial regulation</strong> - Mandate ETPs for all industries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Aeration system</strong> - Add oxygen to improve water quality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Bioremediation</strong> - Use aquatic plants and microbes to clean water</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
