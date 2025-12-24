import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import img from "@assets/generated_images/biological_microbial_pollution.png";

export default function BiologicalPollution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-4">Biological (Microbial) Pollution</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Caused by disease-causing microorganisms like bacteria, viruses, protozoa, and parasites that enter water bodies through sewage and waste.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Disease-Causing Microbes</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Biological pollution is one of the most immediate health threats, causing waterborne diseases that kill thousands in India annually.
              </p>
              <h3 className="text-2xl font-bold mb-4">Major Sources:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Untreated sewage and open drains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Animal waste near water bodies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Contaminated drinking water pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Stagnant dirty water</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Poor sanitation facilities</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={img} alt="Biological Pollution" className="w-full h-[400px] object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link href="/effects">
              <a>
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                      Health Effects <ArrowRight className="h-5 w-5" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Cholera</li>
                      <li>• Typhoid</li>
                      <li>• Diarrhea & Dysentery</li>
                      <li>• Hepatitis A</li>
                      <li>• Polio (in extreme cases)</li>
                    </ul>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Link href="/solutions">
              <a>
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                      Solutions <ArrowRight className="h-5 w-5" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Sewage treatment plants (STPs)</li>
                      <li>• Water disinfection systems</li>
                      <li>• Chlorination and UV treatment</li>
                      <li>• Improved sanitation facilities</li>
                      <li>• Regular water testing</li>
                    </ul>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Impact on Children & Pregnant Women:</h3>
            <p className="text-muted-foreground mb-4">
              Waterborne diseases hit the most vulnerable populations hardest. Children and pregnant women face severe complications from contaminated water.
            </p>
            <p className="text-muted-foreground">
              In India, waterborne diseases are the leading cause of childhood deaths, particularly during monsoon seasons when contamination spreads rapidly.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
