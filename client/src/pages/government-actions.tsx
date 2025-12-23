import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Landmark, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import img1974 from "@assets/generated_images/government_policy_office_water_laws.png";
import img1986 from "@assets/generated_images/environmental_protection_and_conservation.png";
import img2014 from "@assets/generated_images/namami_gange_mission_river_restoration.png";
import img2019 from "@assets/generated_images/jal_shakti_water_conservation_campaign.png";
import img2021 from "@assets/generated_images/amrut_urban_water_infrastructure_project.png";

const initiatives = [
  {
    year: "1974",
    title: "Water Prevention and Control of Pollution Act",
    desc: "The first major legislation to prevent and control water pollution and maintain or restore wholesomeness of water.",
    image: img1974
  },
  {
    year: "1986",
    title: "Environment Protection Act",
    desc: "An umbrella act providing for the protection and improvement of the environment and handling of hazardous substances.",
    image: img1986
  },
  {
    year: "2014",
    title: "Namami Gange Mission",
    desc: "A flagship integrated conservation mission to accomplish the twin objectives of effective abatement of pollution and rejuvenation of River Ganga.",
    highlight: true,
    image: img2014
  },
  {
    year: "2019",
    title: "Jal Shakti Abhiyan",
    desc: "A time-bound, mission-mode water conservation campaign to make water conservation a Jan Andolan (people's movement).",
    image: img2019
  },
  {
    year: "2021",
    title: "AMRUT 2.0",
    desc: "Atal Mission for Rejuvenation and Urban Transformation 2.0 targets making cities 'water secure' and providing functional water tap connections.",
    image: img2021
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

          <div className="space-y-16">
            {initiatives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-stretch ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <motion.div
                  className="flex-1 w-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`border-none shadow-lg hover:shadow-2xl transition-all h-full overflow-hidden group ${item.highlight ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground ring-4 ring-primary/20' : 'bg-white'}`}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 ${item.highlight ? 'bg-primary/40' : 'bg-black/30'} group-hover:opacity-0 transition-opacity duration-300`} />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3 opacity-80 text-sm font-mono tracking-wider">
                        {item.highlight ? <CheckCircle2 className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold font-serif mb-3">{item.title}</h3>
                      <p className={item.highlight ? 'text-primary-foreground/95 leading-relaxed' : 'text-muted-foreground leading-relaxed'}>
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center shrink-0 z-10 shadow-lg md:flex">
                  <Landmark className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { Badge } from "@/components/ui/badge";
