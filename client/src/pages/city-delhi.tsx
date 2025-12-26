import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/delhi_yamuna_river_pollution.png";

export default function DelhiCity() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">New Delhi - Yamuna Crisis</h1>
          <p className="text-2xl text-muted-foreground mb-12">India's Capital City's Biggest Environmental Challenge</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Yamuna River Delhi" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">The Yamuna in Delhi</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Yamuna River flowing through Delhi is often reduced to a sewage drain. Several stretches have ZERO dissolved oxygen, making them dead zones where no aquatic life can survive.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Pollution Level: 95/100 (Critical)</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>3,200 MLD of sewage flows daily from Delhi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Zero dissolved oxygen in many stretches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Black color due to heavy organic matter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>High ammonia and pathogenic bacteria levels</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Sources of Pollution</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Untreated sewage from 16 million residents</li>
                  <li>• Industrial discharge from factories</li>
                  <li>• Construction waste and debris</li>
                  <li>• Plastic waste and household trash</li>
                  <li>• Cremation remains and ashes</li>
                  <li>• Religious offerings and flowers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Health Impacts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Waterborne diseases affecting millions</li>
                  <li>• High rates of cholera and typhoid</li>
                  <li>• Skin infections in communities nearby</li>
                  <li>• Respiratory illness from fumes</li>
                  <li>• Contaminated groundwater</li>
                  <li>• Unsafe for bathing or drinking</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Current Status:</h3>
            <p className="text-muted-foreground mb-4">
              Despite numerous government initiatives, the Yamuna remains one of the most polluted rivers in India. The "Yamuna Action Plan" has been running for decades but faces challenges from population growth and insufficient sewage treatment infrastructure.
            </p>
            <p className="text-muted-foreground">
              Only about 40% of Delhi's sewage is actually treated before being dumped into the river. The remaining 60% flows directly, making it nearly impossible for the river to recover.
            </p>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">What Needs to Be Done:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>100% Sewage Treatment</strong> - Ensure all 3,200 MLD is treated before discharge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Upgrade treatment plants</strong> - Modern technology for better purification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Remove polluting industries</strong> - Relocate non-compliant factories away from river</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Community engagement</strong> - Stop dumping waste into the river</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>River restoration</strong> - Bioremediation and ecosystem recovery programs</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
