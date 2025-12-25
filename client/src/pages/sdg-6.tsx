import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/sdg_6_clean_water_goal.png";

export default function SDG6() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-5xl font-serif font-bold mb-4">SDG 6: Clean Water & Sanitation</h1>
            <p className="text-2xl text-muted-foreground">Ensure access to water and sanitation for all</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="SDG 6" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About This Goal</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SDG 6 focuses on ensuring access to adequate and equitable sanitation and hygiene for all, and ending open defecation. This goal is central to reducing deaths from waterborne diseases and improving public health.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Key Targets:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Universal access to safe and affordable drinking water</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Adequate and equitable sanitation and hygiene</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>End open defecation and eliminate discrimination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Protect and restore water-related ecosystems</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• 2 billion people lack safe drinking water</li>
                  <li>• 3.6 billion lack safe sanitation</li>
                  <li>• 700+ million at risk of water scarcity</li>
                  <li>• Progress uneven across regions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Why It Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Reduces waterborne disease deaths</li>
                  <li>• Improves child health and nutrition</li>
                  <li>• Enables economic development</li>
                  <li>• Promotes gender equality and dignity</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">India's Progress:</h3>
            <p className="text-muted-foreground mb-4">
              India has made significant strides through initiatives like Swachh Bharat Mission, which has provided toilets to millions of households. However, challenges remain in ensuring safe drinking water access, especially in rural areas.
            </p>
            <p className="text-muted-foreground">
              The government aims to achieve universal access to safe and adequate drinking water and sanitation by 2030 through programs like Jal Jeevan Mission and AMRUT.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
