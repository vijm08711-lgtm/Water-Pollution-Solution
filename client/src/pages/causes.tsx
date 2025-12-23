import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Tractor, Trash2, Skull } from "lucide-react";
import pollutionImage from "@assets/generated_images/industrial_water_pollution_artistic.png";

export default function Causes() {
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
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden group">
              <div className="h-2 bg-destructive/80 w-full" />
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center text-destructive mb-4 group-hover:scale-110 transition-transform">
                  <Factory className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-serif">Industrial Waste</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Industries discharge untreated toxic effluents directly into rivers. 
                  Major pollutants include heavy metals like lead, mercury, and arsenic. 
                  Tanneries in Kanpur and textile mills in Tirupur are significant contributors to river pollution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden group">
              <div className="h-2 bg-amber-500/80 w-full" />
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                  <Trash2 className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-serif">Domestic Sewage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Rapid urbanization has outpaced sewage treatment infrastructure. 
                  Approximately 70% of the sewage generated in urban areas flows untreated into water bodies, 
                  carrying pathogens and high organic load that depletes oxygen in water.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden group">
              <div className="h-2 bg-green-600/80 w-full" />
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                  <Tractor className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-serif">Agricultural Runoff</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  The excessive use of chemical fertilizers and pesticides in agriculture leads to runoff 
                  during rains. This runoff enters rivers and lakes, causing eutrophication—an excess of nutrients 
                  that stimulates dense plant growth and kills animal life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden group">
              <div className="h-2 bg-purple-600/80 w-full" />
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                  <Skull className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-serif">Religious & Social Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Immersion of idols painted with toxic chemicals, throwing of flowers, puja materials, 
                  and even cremation remains into holy rivers like the Ganga contribute significantly to the 
                  pollution load, affecting the river's self-cleaning capacity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
