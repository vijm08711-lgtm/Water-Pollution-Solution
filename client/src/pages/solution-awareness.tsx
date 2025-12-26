import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import img from "@assets/generated_images/government_policy_office_water_laws.png";

export default function AwarenessEducationSolution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Public Awareness & Education</h1>
          <p className="text-2xl text-muted-foreground mb-12">Empowering Citizens to Act</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={img} alt="Environmental Education" className="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Knowledge is Power</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Many people don't understand how their actions contribute to water pollution. Public awareness campaigns can change behavior—from stopping idol immersion to proper waste disposal, from reducing plastic to supporting cleanup initiatives.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Key Topics:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Proper waste disposal methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Eco-friendly idol immersion practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Impact of plastic on water bodies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Water conservation and reuse</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Target Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Children:</strong> School curriculum on water pollution</li>
                  <li><strong>Farmers:</strong> Sustainable agriculture practices</li>
                  <li><strong>Industries:</strong> Waste management responsibility</li>
                  <li><strong>Communities:</strong> Practical solutions at grassroots</li>
                  <li><strong>Urban dwellers:</strong> Plastic reduction and proper disposal</li>
                  <li><strong>Religious groups:</strong> Eco-friendly spiritual practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Methods & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• School and college education programs</li>
                  <li>• Community workshops and meetings</li>
                  <li>• Social media campaigns</li>
                  <li>• Television and radio broadcasts</li>
                  <li>• Documentary films and videos</li>
                  <li>• Street plays and cultural programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Success Stories:</h3>
            <p className="text-muted-foreground mb-4">
              When people are educated about water pollution, behavior changes. Communities have voluntarily reduced plastic use, adopted eco-friendly idol materials, and organized river cleanup drives after awareness programs.
            </p>
            <p className="text-muted-foreground">
              Schools teaching water conservation create environmentally conscious citizens. NGOs running awareness camps have mobilized thousands to take action for their local water bodies.
            </p>
          </div>

          <div className="bg-destructive/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Campaign Strategies:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>School programs</strong> - Integrate water pollution topics into curriculum</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Community events</strong> - River cleanup drives and awareness walks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Media campaigns</strong> - TV, radio, and social media messaging</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Religious outreach</strong> - Work with temples/mosques on eco-practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Industry training</strong> - Educate businesses on waste reduction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Youth movement</strong> - Empower young people as change agents</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
