import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/water_treatment_technology_eco_friendly.png";

export default function WastewaterTreatmentSolution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Wastewater Treatment</h1>
          <p className="text-2xl text-muted-foreground mb-12">The Foundation of Clean Water</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Water Treatment" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Wastewater treatment plants remove pollutants and contaminants from sewage and industrial discharge before it enters water bodies. This is the most critical infrastructure needed to stop pollution at the source.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Key Types:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>STP (Sewage Treatment Plant)</strong> - For domestic wastewater</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>ETP (Effluent Treatment Plant)</strong> - For industrial discharge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>CETP (Common ETP)</strong> - Shared by multiple industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Advanced systems</strong> - Using modern technology and AI</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Treatment Stages</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>Primary:</strong> Separate solids from liquids</li>
                  <li><strong>Secondary:</strong> Use microbes to break down organic matter</li>
                  <li><strong>Tertiary:</strong> Remove remaining contaminants with chemicals</li>
                  <li><strong>Disinfection:</strong> Kill pathogens using chlorine or UV</li>
                  <li><strong>Advanced:</strong> Remove heavy metals and toxins</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">What Gets Removed</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✓ Bacterial and viral pathogens</li>
                  <li>✓ Organic matter and nutrients</li>
                  <li>✓ Heavy metals and chemicals</li>
                  <li>✓ Suspended particles and solids</li>
                  <li>✓ Odors and colors</li>
                  <li>✓ Excess nitrogen and phosphorus</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Impact in India:</h3>
            <p className="text-muted-foreground mb-4">
              Currently, India treats only about 30-40% of its sewage. This means 60% flows untreated into rivers and lakes. If we built and operated STPs and ETPs for all cities and industries, we could dramatically reduce pollution.
            </p>
            <p className="text-muted-foreground">
              The government has invested billions in treatment infrastructure, but many plants lie idle due to operational and maintenance issues. Focus must shift to proper functioning, not just building.
            </p>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Implementation Strategy:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Expand capacity</strong> - Build treatment plants in all cities and industrial areas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Ensure operation</strong> - Proper staffing, maintenance, and funding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Upgrade technology</strong> - Use modern, energy-efficient systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Monitor discharge</strong> - Regular testing to ensure compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Water reuse</strong> - Treated water for irrigation and industrial use</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Resource recovery</strong> - Extract biogas and fertilizer from treatment</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
