import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/surface_water_pollution_river.png";

export default function HyderabadCity() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Hyderabad - The Emerging Crisis</h1>
          <p className="text-2xl text-muted-foreground mb-12">Rapid Development's Environmental Price</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Musi River Hyderabad" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">The Musi River Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Musi River, which flows through Hyderabad, is highly polluted due to lack of sewage treatment plants and rapid urbanization. As Hyderabad grows as a tech hub, its environmental infrastructure lags dangerously behind.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Pollution Level: 78/100 (High)</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Insufficient sewage treatment plants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Industrial discharge from IT sector</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Rapid population growth outpacing infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Construction waste and debris</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Pollution Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Untreated sewage from growing city</li>
                  <li>• IT parks and tech company discharge</li>
                  <li>• Pharmaceutical manufacturing waste</li>
                  <li>• Textile and dye industries</li>
                  <li>• Construction debris from development</li>
                  <li>• Domestic waste from slums</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Growth Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Population doubled in 20 years</li>
                  <li>• Infrastructure couldn't keep pace</li>
                  <li>• Only 50% sewage treated</li>
                  <li>• Lakes and water bodies degraded</li>
                  <li>• Groundwater contamination spreading</li>
                  <li>• Public health at risk</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">The Hyderabad Paradox:</h3>
            <p className="text-muted-foreground mb-4">
              Hyderabad is India's leading IT hub with modern tech parks and infrastructure. Yet its water systems remain dirty and polluted. The city's success in technology hasn't translated to environmental success.
            </p>
            <p className="text-muted-foreground">
              As the city continues to grow and attract people and industries, water pollution worsens daily. Without immediate action, Hyderabad could face a severe water crisis despite being India's development success story.
            </p>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Urgent Solutions:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Build more STPs</strong> - Increase sewage treatment capacity to match population</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Enforce discharge standards</strong> - All industries must have proper ETPs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Lake restoration</strong> - Clean existing lakes and restore ecosystems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Water reuse systems</strong> - Use treated sewage for parks and irrigation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Rainwater harvesting</strong> - Reduce pressure on polluted water bodies</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
