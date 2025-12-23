import { Layout } from "@/components/layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse, Sprout, DollarSign, Fish } from "lucide-react";
import { motion } from "framer-motion";

export default function Effects() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif font-bold mb-12 text-center">The Ripple Effect</h1>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Water pollution doesn't just make the water dirty; it creates a cascade of devastating effects 
              that impact human health, the ecosystem, and the economy. The consequences are far-reaching and often irreversible.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-serif font-medium hover:text-primary">
                  <div className="flex items-center gap-3">
                    <HeartPulse className="h-6 w-6 text-destructive" />
                    Human Health Crisis
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pl-9">
                  Polluted water is the leading cause of diseases like cholera, typhoid, dysentery, and hepatitis. 
                  Long-term exposure to heavy metals like arsenic and lead can cause cancer, organ damage, and neurological disorders.
                  In India, millions suffer from waterborne diseases annually.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-serif font-medium hover:text-primary">
                  <div className="flex items-center gap-3">
                    <Fish className="h-6 w-6 text-blue-500" />
                    Destruction of Ecosystems
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pl-9">
                  Aquatic life suffers immensely. Eutrophication causes oxygen depletion, leading to dead zones where fish cannot survive. 
                  Bioaccumulation of toxins in the food chain means that predators (including humans) ingest high levels of pollutants.
                  The Gangetic Dolphin, a national symbol, is endangered due to pollution.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-serif font-medium hover:text-primary">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-6 w-6 text-green-600" />
                    Economic Impact
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pl-9">
                  The cost of treating waterborne diseases imposes a huge burden on the economy. 
                  Pollution also affects fisheries, tourism (especially in places like Varanasi), and agriculture yield.
                  Clean water scarcity increases the cost of industrial production.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-serif font-medium hover:text-primary">
                  <div className="flex items-center gap-3">
                    <Sprout className="h-6 w-6 text-emerald-600" />
                    Agricultural Degradation
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pl-9">
                  Irrigation with polluted water introduces toxins into the soil, reducing fertility over time.
                  These toxins are absorbed by crops, entering our food system and causing long-term health issues.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="grid gap-6">
             <Card className="bg-destructive/5 border-none shadow-none">
               <CardContent className="p-8">
                 <h3 className="text-2xl font-serif font-bold text-destructive mb-2">37.7 Million</h3>
                 <p className="text-muted-foreground">Indians are affected by waterborne diseases annually.</p>
               </CardContent>
             </Card>
             <Card className="bg-blue-50 border-none shadow-none">
               <CardContent className="p-8">
                 <h3 className="text-2xl font-serif font-bold text-blue-700 mb-2">1.5 Million</h3>
                 <p className="text-muted-foreground">Children die from diarrhea each year.</p>
               </CardContent>
             </Card>
             <Card className="bg-amber-50 border-none shadow-none">
               <CardContent className="p-8">
                 <h3 className="text-2xl font-serif font-bold text-amber-700 mb-2">600 Million</h3>
                 <p className="text-muted-foreground">People face high to extreme water stress.</p>
               </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
