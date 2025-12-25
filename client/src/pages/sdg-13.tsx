import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/sdg_13_climate_action.png";

export default function SDG13() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-5xl font-serif font-bold mb-4">SDG 13: Climate Action</h1>
            <p className="text-2xl text-muted-foreground">Combat climate change and its impacts</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="SDG 13" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About This Goal</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SDG 13 calls for urgent action to combat climate change and its impacts. Climate change directly affects water resources—causing droughts, floods, and changes in water availability patterns.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Key Targets:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Strengthen resilience and adaptive capacity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Integrate climate change into policies and planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Improve education on climate change</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Reduce greenhouse gas emissions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Climate & Water Link</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Rising temperatures affect water cycles</li>
                  <li>• Floods contaminate water sources</li>
                  <li>• Droughts reduce water availability</li>
                  <li>• Glaciers melting impacts freshwater supply</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">India's Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Committed to 50% renewable energy by 2030</li>
                  <li>• National Water Policy 2012</li>
                  <li>• Namami Gange for river restoration</li>
                  <li>• Tree planting initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Water & Climate Change in India:</h3>
            <p className="text-muted-foreground mb-4">
              India is highly vulnerable to climate change impacts on water. The monsoon patterns are becoming unpredictable, leading to floods in some regions and droughts in others.
            </p>
            <p className="text-muted-foreground">
              Protecting water resources and adapting to climate change are critical for India's sustainable development and the survival of millions who depend on rivers and rainfall for their livelihood.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
