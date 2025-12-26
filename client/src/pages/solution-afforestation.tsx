import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/environmental_protection_and_conservation.png";

export default function AfforestationSolution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Afforestation & Green Buffers</h1>
          <p className="text-2xl text-muted-foreground mb-12">Nature's Water Purification System</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Afforestation" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">The Power of Trees</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Trees along riverbanks act as natural filters. Their roots prevent soil erosion, their leaves reduce rainfall impact, and the soil around them filters runoff water, removing pollutants naturally. This is one of the most cost-effective water purification methods.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">How It Works:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Roots hold soil, preventing erosion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Leaves intercept rainfall, reducing impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Soil filters pollutants and bacteria</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Vegetation slows water, allowing settling</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✓ Prevents 40% of runoff pollution</li>
                  <li>✓ Cost-effective (1/10th of treatment plants)</li>
                  <li>✓ Creates wildlife habitat</li>
                  <li>✓ Reduces erosion and sedimentation</li>
                  <li>✓ Improves air quality</li>
                  <li>✓ Provides food and wood resources</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Best Plants for Rivers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Mangroves (coastal areas)</li>
                  <li>• Sal and Teak trees</li>
                  <li>• Bamboo (fast growing)</li>
                  <li>• Willows (water loving)</li>
                  <li>• Neem trees</li>
                  <li>• Eucalyptus trees</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Riparian Buffer System:</h3>
            <p className="text-muted-foreground mb-4">
              A riparian buffer is a vegetated strip along water bodies that filters runoff before it enters the water. In agriculture-heavy regions, riparian buffers can remove up to 80% of nutrients from farm runoff, preventing eutrophication.
            </p>
            <p className="text-muted-foreground">
              India has lost 90% of its riparian forests due to urbanization and agriculture. Restoring these buffers is one of the most important and cost-effective actions we can take.
            </p>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Implementation Plan:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Plant riparian buffers</strong> - 30-50 meter wide vegetation strips along rivers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Catchment afforestation</strong> - Plant trees in upstream areas to reduce erosion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Farm boundary trees</strong> - Prevent agricultural runoff from reaching water</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Wetland restoration</strong> - Create/restore wetlands for natural purification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Community involvement</strong> - Local people plant and maintain trees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Incentive programs</strong> - Pay farmers for maintaining riparian buffers</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
