import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/varanasi_ganga_sacred_river.png";

export default function VaranasiCity() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Varanasi - The Sacred Paradox</h1>
          <p className="text-2xl text-muted-foreground mb-12">Spirituality Versus Pollution</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Varanasi Ganga" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Holy But Highly Polluted</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Varanasi is a spiritual hub where millions of pilgrims come to bathe in the sacred Ganga. Yet the river faces severe pollution from sewage, cremation ashes, and religious offerings. It's a stark contradiction between devotion and reality.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Pollution Level: 82/100 (High)</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Millions of pilgrims visit annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Untreated sewage from city's population</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Daily cremations leave toxic ash</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Incompletely cremated bodies dumped</span>
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
                  <li>• Raw sewage from 1+ million residents</li>
                  <li>• Cremation remains and ash</li>
                  <li>• Flowers and religious offerings</li>
                  <li>• Idol immersion materials</li>
                  <li>• Organic matter from rituals</li>
                  <li>• Industrial discharge upstream</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Religious Context</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Ganga worship is core to Hinduism</li>
                  <li>• Pilgrims believe river cleanses sin</li>
                  <li>• Bathing is spiritual practice</li>
                  <li>• Cremation at Ganga is ultimate wish</li>
                  <li>• Cultural belief about self-purifying power</li>
                  <li>• Conflict between faith and health</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">The Irony:</h3>
            <p className="text-muted-foreground mb-4">
              Millions of pilgrims come to the Ganga to cleanse themselves spiritually, unaware that the water is contaminated with dangerous bacteria and heavy metals. Many contract diseases after bathing in the river.
            </p>
            <p className="text-muted-foreground">
              The practice of cremating bodies partially and dumping remains in the river, while spiritually significant, adds to the pollution. Some cremation pyres lack sufficient fuel, leaving incompletely burnt remains.
            </p>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Balancing Solutions:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Sewage treatment</strong> - Build and operate STPs for complete treatment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Eco-friendly cremation</strong> - Electric crematoria to avoid incomplete burning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Biodegradable offerings</strong> - Ban plastic, use only natural flowers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Ghat improvements</strong> - Better infrastructure for pilgrims and cremation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Public health messaging</strong> - Educate about water safety and eco-friendly practices</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
