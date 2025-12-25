import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/varanasi_ganga_sacred_river.png";

export default function ReligiousSocialCause() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Religious & Social Practices</h1>
          <p className="text-2xl text-muted-foreground mb-12">Cultural Practices Harming Sacred Rivers</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Religious Practices" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">The Sacred River Dilemma</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Immersion of idols painted with toxic chemicals, throwing of flowers, puja materials, and even cremation remains into holy rivers like the Ganga significantly contribute to the pollution load, affecting the river's self-cleaning capacity.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Religious Practices Causing Pollution:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Immersion of idols (Ganesh, Durga, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Toxic paints and coatings on idols</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Throwing flowers and prayer materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Cremation ashes and human remains</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Pollutants Added</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Lead-based paint pigments</li>
                  <li>• Cadmium and chromium pigments</li>
                  <li>• Chemical glues and resins</li>
                  <li>• Decomposing flowers and organic matter</li>
                  <li>• Unburned human bone and ash</li>
                  <li>• Plastic decorations and materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Health Concerns</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Heavy metal bioaccumulation in fish</li>
                  <li>• Skin disease from contaminated bathing</li>
                  <li>• Gastrointestinal illness from drinking water</li>
                  <li>• Increased disease risk for pilgrims</li>
                  <li>• Long-term neurological effects of lead</li>
                  <li>• Reproductive health issues</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">The Ganga River Crisis:</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Varanasi</strong>: Millions of pilgrims visit annually. Massive idol immersions during festivals and daily cremations make this river extremely polluted despite its sacred status.
              </p>
              <p>
                <strong>Scale of Immersion</strong>: Millions of idols are immersed annually across India, with many made from plaster of paris and painted with heavy metal-based colors.
              </p>
              <p>
                <strong>The Irony</strong>: Many Hindus come to bathe in the sacred river for spiritual purification, not knowing the water is heavily contaminated.
              </p>
            </div>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Solutions:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Eco-friendly idols</strong> - Make idols from clay instead of plaster, use natural dyes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Community tanks</strong> - Immerse idols in community tanks instead of rivers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Awareness campaigns</strong> - Educate devotees on eco-friendly practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Alternative methods</strong> - Immerse in recycled water, use biodegradable flowers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Government enforcement</strong> - Ban toxic paints and improper waste disposal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Cultural education</strong> - Show how true devotion means protecting sacred rivers</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
