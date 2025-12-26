import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/kanpur_ganga_tannery_pollution.png";

export default function KanpurCity() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Kanpur - The Tannery Tragedy</h1>
          <p className="text-2xl text-muted-foreground mb-12">Leather Industry's Toxic Legacy</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Kanpur Ganga" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Ganga at Kanpur</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Kanpur is famous for its leather tanneries, but it discharges massive amounts of toxic chromium into the Ganga. The river becomes dark and foamy, with a noxious smell that can be detected from kilometers away.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Pollution Level: 88/100 (Severe)</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>400+ leather tanneries dump waste directly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Chromium contamination (100x safe levels)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Dark brown/black water color</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Toxic foam on water surface</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Tannery Pollutants</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Chromium VI (hexavalent chromium)</li>
                  <li>• Heavy metals - lead, cadmium, zinc</li>
                  <li>• Sulfuric acid from processing</li>
                  <li>• Hair, skin, and bone waste</li>
                  <li>• Sodium hydroxide (caustic soda)</li>
                  <li>• Organic solvents and dyes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Health Crisis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Chromium causes cancer</li>
                  <li>• Kidney and liver failure</li>
                  <li>• Skin ulcers and dermatitis</li>
                  <li>• Respiratory disease</li>
                  <li>• Contaminated drinking water wells</li>
                  <li>• High cancer rates in region</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">The Tannery Industry:</h3>
            <p className="text-muted-foreground mb-4">
              Kanpur produces 80% of India's leather, but most tanneries are old and lack proper pollution control. Many operate with outdated technology from decades ago, making them major environmental hazards.
            </p>
            <p className="text-muted-foreground">
              The Indian government has been trying to get tanneries to install ETPs, but many ignore regulations or operate illegally. Chromium levels in the Ganga at Kanpur are documented to be 100 times higher than safe drinking water standards.
            </p>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Solutions:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Mandatory ETP compliance</strong> - All tanneries must have and operate ETPs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Chromium recovery</strong> - New technology to recover and recycle chromium</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Cluster approach</strong> - Build common treatment facilities for multiple tanneries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Regular inspections</strong> - Strict monitoring and heavy penalties</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Cleaner technology</strong> - Subsidize transition to chromium-free tanning</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
