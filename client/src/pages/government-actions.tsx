import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Landmark, FileText, CheckCircle2 } from "lucide-react";

const initiatives = [
  {
    year: "1974",
    title: "Water Prevention and Control of Pollution Act",
    desc: "The first major legislation to prevent and control water pollution and maintain or restore wholesomeness of water."
  },
  {
    year: "1986",
    title: "Environment Protection Act",
    desc: "An umbrella act providing for the protection and improvement of the environment and handling of hazardous substances."
  },
  {
    year: "2014",
    title: "Namami Gange Mission",
    desc: "A flagship integrated conservation mission to accomplish the twin objectives of effective abatement of pollution and rejuvenation of River Ganga.",
    highlight: true
  },
  {
    year: "2019",
    title: "Jal Shakti Abhiyan",
    desc: "A time-bound, mission-mode water conservation campaign to make water conservation a Jan Andolan (people's movement)."
  },
  {
    year: "2021",
    title: "AMRUT 2.0",
    desc: "Atal Mission for Rejuvenation and Urban Transformation 2.0 targets making cities 'water secure' and providing functional water tap connections."
  }
];

export default function GovernmentActions() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Policy & Governance</Badge>
          <h1 className="text-5xl font-serif font-bold mb-6">Government Actions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Government of India has launched several ambitious programs and enacted strict laws to combat the water crisis.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -z-10" />

          <div className="space-y-12">
            {initiatives.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <Card className={`border-none shadow-lg hover:shadow-xl transition-all ${item.highlight ? 'bg-primary text-primary-foreground ring-4 ring-primary/20' : 'bg-white'}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2 opacity-80 text-sm font-mono tracking-wider">
                        {item.highlight ? <CheckCircle2 className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold font-serif mb-2">{item.title}</h3>
                      <p className={item.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'}>
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <Landmark className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { Badge } from "@/components/ui/badge";
