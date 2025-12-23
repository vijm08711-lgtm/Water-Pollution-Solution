import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Droplets, Beaker, Bug } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatIsPollution() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-6">What is Water Pollution?</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Water pollution occurs when harmful substances—such as chemicals, microorganisms, or physical particles—contaminate water bodies, 
            making the water unsafe for consumption and harmful to the ecosystem.
          </p>
        </div>

        <div className="mb-20 p-8 bg-primary/5 rounded-3xl border border-primary/10">
          <h2 className="text-3xl font-serif font-bold mb-4">Definition</h2>
          <p className="text-lg text-foreground leading-relaxed">
            Water pollution is the degradation of water quality in lakes, rivers, oceans, and groundwater caused by human activities. 
            It reduces the ecosystem's ability to support wildlife and makes water unsafe for human consumption and recreation.
          </p>
        </div>

        <h2 className="text-3xl font-serif font-bold mb-10 text-center">Types of Water Pollution</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-none">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Waves className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg font-serif">Surface Water Pollution</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Pollution of rivers, lakes, and oceans visible on the surface. Common sources include industrial waste and sewage discharge.
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-none">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                <Droplets className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg font-serif">Groundwater Pollution</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Contamination of water beneath the earth's surface. Often caused by leakage from landfills and industrial sites seeping into aquifers.
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-none">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                <Beaker className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg font-serif">Chemical Pollution</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Introduction of harmful chemicals like heavy metals, pesticides, and fertilizers. These persist in water and bioaccumulate in organisms.
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-none">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                <Bug className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg font-serif">Biological Pollution</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Presence of harmful microorganisms like bacteria, viruses, and parasites. Causes waterborne diseases like cholera and typhoid.
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
