import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/industrial_water_pollution_artistic.png";

export default function IndustrialWasteCause() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Industrial Waste</h1>
          <p className="text-2xl text-muted-foreground mb-12">A Major Source of Water Pollution</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Industrial Waste" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Industrial Waste</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Industries discharge untreated toxic effluents directly into rivers without proper treatment. These include heavy metals, chemicals, and other hazardous substances that make water unsafe and deadly.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Major Pollutants:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Heavy metals: Lead, mercury, cadmium, chromium</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Arsenic - highly toxic carcinogen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Toxic chemicals from manufacturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Acids and alkalis from chemical plants</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Industries Involved</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Tanneries and leather manufacturing</li>
                  <li>• Textile mills and dyeing facilities</li>
                  <li>• Chemical manufacturing plants</li>
                  <li>• Oil refineries and petrochemical plants</li>
                  <li>• Metal smelting and processing</li>
                  <li>• Pharmaceutical manufacturing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Health Impacts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Cancer from prolonged exposure</li>
                  <li>• Kidney and liver damage</li>
                  <li>• Neurological disorders</li>
                  <li>• Skin diseases and rashes</li>
                  <li>• Birth defects and miscarriages</li>
                  <li>• Organ failure in severe cases</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Indian Examples:</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-bold text-foreground mb-2">Kanpur - The Tannery Capital</h4>
                <p>Home to 400+ leather tanneries discharging chromium-contaminated wastewater into the Ganga river. Chromium causes cancer and kidney damage in local residents.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Tirupur - Textile Mills</h4>
                <p>Famous for textile dyeing, but massive chemical discharge into surrounding water bodies has made them unsafe for any use.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Vapi, Gujarat - Chemical Hub</h4>
                <p>Industrial corridor with numerous chemical plants causing severe groundwater contamination affecting surrounding villages.</p>
              </div>
            </div>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Solutions:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Mandatory ETPs (Effluent Treatment Plants)</strong> - All industries must treat waste before discharge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Regular monitoring</strong> - Government enforcement of water quality standards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Stricter penalties</strong> - Heavy fines for non-compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Waste minimization</strong> - Use cleaner production methods</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Zero Liquid Discharge</strong> - Companies should aim for complete waste recycling</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
