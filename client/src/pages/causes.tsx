import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Tractor, Trash2, Skull } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import pollutionImage from "@assets/generated_images/industrial_water_pollution_artistic.png";

export default function Causes() {
  const [, navigate] = useLocation();
  return (
    <Layout>
      <div className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-serif font-bold mb-6">Causes of Pollution</h1>
            <p className="text-xl text-muted-foreground">
              Identifying the root causes is the first step towards mitigation. 
              The major sources of water pollution in India can be categorized into four main areas.
            </p>
          </div>

          <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={pollutionImage} 
              alt="Industrial Pollution" 
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -8 }}>
              <Card 
                onClick={() => navigate("/cause/industrial")}
                className="border-none shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br from-white to-red-50/30 overflow-hidden group relative h-full cursor-pointer">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-red-400" />
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-destructive/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-300" />
                    <CardHeader className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-destructive/20 to-red-100 rounded-xl flex items-center justify-center text-destructive mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Factory className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-2xl font-serif">Industrial Waste</CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground leading-relaxed">
                        Industries discharge untreated toxic effluents directly into rivers. 
                        Major pollutants include heavy metals like lead, mercury, and arsenic. 
                        Tanneries in Kanpur and textile mills in Tirupur are significant contributors to river pollution.
                      </p>
                    </CardContent>
                  </Card>
            </motion.div>

            <motion.div whileHover={{ y: -8 }}>
              <Card 
                onClick={() => navigate("/cause/domestic")}
                className="border-none shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br from-white to-amber-50/30 overflow-hidden group relative h-full cursor-pointer">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-400" />
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-200/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-300" />
                    <CardHeader className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-200/30 to-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Trash2 className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-2xl font-serif">Domestic Sewage</CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground leading-relaxed">
                        Rapid urbanization has outpaced sewage treatment infrastructure. 
                        Approximately 70% of the sewage generated in urban areas flows untreated into water bodies, 
                        carrying pathogens and high organic load that depletes oxygen in water.
                      </p>
                    </CardContent>
                  </Card>
            </motion.div>

            <motion.div whileHover={{ y: -8 }}>
              <Card 
                onClick={() => navigate("/cause/agricultural")}
                className="border-none shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br from-white to-green-50/30 overflow-hidden group relative h-full cursor-pointer">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-emerald-500" />
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-200/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-300" />
                    <CardHeader className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-200/30 to-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Tractor className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-2xl font-serif">Agricultural Runoff</CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground leading-relaxed">
                        The excessive use of chemical fertilizers and pesticides in agriculture leads to runoff 
                        during rains. This runoff enters rivers and lakes, causing eutrophication—an excess of nutrients 
                        that stimulates dense plant growth and kills animal life.
                      </p>
                    </CardContent>
                  </Card>
            </motion.div>

            <motion.div whileHover={{ y: -8 }}>
              <Card 
                onClick={() => navigate("/cause/religious")}
                className="border-none shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br from-white to-purple-50/30 overflow-hidden group relative h-full cursor-pointer">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500" />
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-200/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-300" />
                    <CardHeader className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-200/30 to-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Skull className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-2xl font-serif">Religious & Social Practices</CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground leading-relaxed">
                        Immersion of idols painted with toxic chemicals, throwing of flowers, puja materials, 
                        and even cremation remains into holy rivers like the Ganga contribute significantly to the 
                        pollution load, affecting the river's self-cleaning capacity.
                      </p>
                    </CardContent>
                  </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
