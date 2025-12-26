import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/pristine_river_water_in_india_sunlight.png";

export default function RainwaterHarvestingSolution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Rainwater Harvesting</h1>
          <p className="text-2xl text-muted-foreground mb-12">Capturing Nature's Gift</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Rainwater Harvesting" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">How Rainwater Helps</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Rainwater harvesting captures and stores rain, reducing the pressure on polluted water sources. It also recharges groundwater aquifers, diluting pollutants in them. This simple system provides water security while helping restore water quality.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Key Benefits:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Reduces reliance on polluted water bodies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Recharges groundwater aquifers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Prevents urban flooding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Cost-effective water supply</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">System Types</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Roof collection:</strong> Gutters from house roofs</li>
                  <li><strong>Tank storage:</strong> Store in underground or overhead tanks</li>
                  <li><strong>Infiltration:</strong> Let water percolate into soil</li>
                  <li><strong>Recharge wells:</strong> Direct water into boreholes</li>
                  <li><strong>Community systems:</strong> Large-scale collection for villages</li>
                  <li><strong>Urban ponds:</strong> Create water bodies in cities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Pollutant Dilution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  When rainwater percolates through soil into aquifers, it mixes with and dilutes existing groundwater pollutants. This natural biological filtration through soil reduces contaminant concentrations.
                </p>
                <p className="text-muted-foreground text-sm">
                  Regular recharge also prevents saline intrusion in coastal areas and maintains water table levels needed for vegetation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">India's Rainwater Potential:</h3>
            <p className="text-muted-foreground mb-4">
              India receives 4,000+ mm of rain annually in many regions. Yet only 15% of this is captured. If we harvest just half of the available rainwater, we could solve water scarcity for most of India.
            </p>
            <p className="text-muted-foreground">
              Rajasthan, Tamil Nadu, and other water-stressed states have made rainwater harvesting mandatory. Communities have built traditional structures like stepwells and tanks for centuries—modern technology is just rediscovering ancient wisdom.
            </p>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Implementation at All Levels:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Household systems</strong> - Every home should have rainwater harvesting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Building codes</strong> - Make rainwater harvesting mandatory for new construction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Urban planning</strong> - Design cities to capture and infiltrate rainwater</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Agricultural systems</strong> - Build tanks and ponds in farm areas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Government support</strong> - Subsidies and training for poor communities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Wastewater reuse</strong> - Use harvested rainwater to recharge after use</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
