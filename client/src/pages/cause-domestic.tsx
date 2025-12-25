import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/environmental_protection_and_conservation.png";

export default function DomesticSewageCause() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Domestic Sewage</h1>
          <p className="text-2xl text-muted-foreground mb-12">Untreated Urban Wastewater</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Domestic Sewage" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">The Sewage Crisis</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Rapid urbanization has outpaced sewage treatment infrastructure. Approximately 70% of the sewage generated in urban areas flows untreated into water bodies, carrying pathogens and high organic load that depletes oxygen.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Sources of Domestic Sewage:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Household wastewater from bathrooms and kitchens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Human waste and toilet flushing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Washing water from clothes and dishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Soaps, detergents, and cleaning agents</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Pollutants in Sewage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Bacteria and viruses causing diseases</li>
                  <li>• Organic matter causing oxygen depletion</li>
                  <li>• Nutrients (N, P) causing eutrophication</li>
                  <li>• Heavy metals and toxins</li>
                  <li>• Detergents and chemicals</li>
                  <li>• Parasites and pathogens</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Diseases Caused</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Cholera - severe diarrhea</li>
                  <li>• Typhoid fever - bacterial infection</li>
                  <li>• Dysentery - bloody diarrhea</li>
                  <li>• Hepatitis A - liver disease</li>
                  <li>• Polio - paralysis</li>
                  <li>• Skin infections and rashes</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">India's Sewage Challenge:</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Delhi</strong>: The Yamuna receives 3,200 million liters of sewage daily from Delhi's cities, making it one of the most polluted rivers in India.
              </p>
              <p>
                <strong>Mumbai</strong>: Despite being India's financial capital, much of the sewage from slums flows directly into coastal waters without treatment.
              </p>
              <p>
                <strong>Rural Areas</strong>: Most villages lack proper sewage treatment, using open defecation and allowing waste to contaminate groundwater.
              </p>
            </div>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Solutions:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Build Sewage Treatment Plants (STPs)</strong> - Treat all sewage before discharge into water bodies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Improve infrastructure</strong> - Extend sewage networks to all areas including slums</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Swachh Bharat Mission</strong> - Ensure universal toilet access and proper sanitation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Water reuse systems</strong> - Treated sewage can be reused for irrigation and cleaning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Public awareness</strong> - Educate on proper waste disposal</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
