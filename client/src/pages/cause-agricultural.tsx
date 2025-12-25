import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/nutrient_pollution_algal_bloom.png";

export default function AgriculturalRunoffCause() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Agricultural Runoff</h1>
          <p className="text-2xl text-muted-foreground mb-12">Farm Chemicals Poisoning Water</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Agricultural Runoff" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">The Farm Pollution Problem</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The excessive use of chemical fertilizers and pesticides in agriculture leads to runoff during rains. This runoff enters rivers and lakes, causing eutrophication—an excess of nutrients that stimulates algal blooms and kills aquatic life.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Major Agricultural Chemicals:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Nitrogen fertilizers - cause algal blooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Phosphorus fertilizers - eutrophication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Pesticides - toxic to aquatic life</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Herbicides - kills underwater plants</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">The Runoff Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="font-bold text-foreground">1. Heavy Rain</li>
                  <li className="text-sm">Washes chemicals off farmland into rivers</li>
                  <li className="font-bold text-foreground mt-4">2. Nutrient Overload</li>
                  <li className="text-sm">Excess N & P stimulates algae growth</li>
                  <li className="font-bold text-foreground mt-4">3. Algal Bloom</li>
                  <li className="text-sm">Green algae covers water surface</li>
                  <li className="font-bold text-foreground mt-4">4. Dead Zone</li>
                  <li className="text-sm">Oxygen depleted, fish and plants die</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Environmental Impacts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Algal blooms turn water green and toxic</li>
                  <li>• Oxygen depletion kills fish</li>
                  <li>• Loss of aquatic biodiversity</li>
                  <li>• Toxins accumulate in food chain</li>
                  <li>• Unsafe for drinking and swimming</li>
                  <li>• Economic loss to fishing communities</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Affected Water Bodies in India:</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Tamil Nadu Lakes</strong>: Agricultural runoff has made many lakes toxic with algal blooms, unsafe for irrigation.
              </p>
              <p>
                <strong>Punjab's Groundwater</strong>: Over-use of fertilizers has contaminated groundwater with nitrates, affecting drinking water quality.
              </p>
              <p>
                <strong>Uttarakhand Rivers</strong>: Monsoon runoff from agricultural areas creates algal blooms in rivers.
              </p>
            </div>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Solutions:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Reduce fertilizer use</strong> - Use only necessary amounts based on soil testing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Organic farming</strong> - Switch to natural fertilizers like compost and manure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Buffer zones</strong> - Plant trees along water bodies to filter runoff</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Contour plowing</strong> - Reduce water flow and chemical runoff</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Crop rotation</strong> - Reduce pest pressure and fertilizer need</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
