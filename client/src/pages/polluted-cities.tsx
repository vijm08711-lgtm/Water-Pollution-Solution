import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

const cities = [
  {
    name: "New Delhi",
    river: "Yamuna",
    pollutionLevel: 95,
    status: "Critical",
    desc: "The Yamuna in Delhi is often reduced to a sewage drain, with zero dissolved oxygen in several stretches.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Kanpur",
    river: "Ganga",
    pollutionLevel: 88,
    status: "Severe",
    desc: "Famous for its leather tanneries, Kanpur discharges massive amounts of toxic chromium into the Ganga.",
    image: "https://images.unsplash.com/photo-1626509653298-e79c2c628c68?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Varanasi",
    river: "Ganga",
    pollutionLevel: 82,
    status: "High",
    desc: "A spiritual hub, Varanasi sees heavy pollution from sewage, cremation ashes, and religious offerings.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Mumbai",
    river: "Mithi",
    pollutionLevel: 92,
    status: "Critical",
    desc: "The Mithi river is choked with industrial waste and sludge, often causing floods during monsoons.",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Bengaluru",
    river: "Bellandur Lake",
    pollutionLevel: 85,
    status: "Severe",
    desc: "Known for its infamous 'toxic foam' and catching fire due to high chemical content.",
    image: "https://images.unsplash.com/photo-1596409823617-e837f4749f99?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Hyderabad",
    river: "Musi",
    pollutionLevel: 78,
    status: "High",
    desc: "Highly polluted due to lack of sewage treatment plants and industrial effluents.",
    image: "https://images.unsplash.com/photo-1628189874836-e820067c2936?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function PollutedCities() {
  const [, navigate] = useLocation();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif font-bold mb-4 text-center">Pollution Hotspots</h1>
        <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          A look at the most critically affected urban areas where water bodies are fighting for survival.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => {
            const citySlug = city.name.toLowerCase().replace(" ", "-");
            return (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  onClick={() => navigate(`/city/${citySlug}`)}
                  className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                        <img 
                          src={city.image} 
                          alt={city.name} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <Badge className={`absolute top-4 right-4 z-20 ${
                          city.status === 'Critical' ? 'bg-red-600' : 
                          city.status === 'Severe' ? 'bg-orange-500' : 'bg-yellow-500'
                        }`}>
                          {city.status}
                        </Badge>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-2xl font-serif mb-1">{city.name}</CardTitle>
                            <CardDescription className="flex items-center gap-1 text-primary font-medium">
                              <MapPin className="h-4 w-4" /> {city.river}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                          {city.desc}
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm font-medium">
                            <span>Pollution Index</span>
                            <span className="text-destructive">{city.pollutionLevel}/100</span>
                          </div>
                          <Progress value={city.pollutionLevel} className="h-2 bg-secondary" indicatorClassName="bg-destructive" />
                        </div>
                      </CardContent>
                    </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
