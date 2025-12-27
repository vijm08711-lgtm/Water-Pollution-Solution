import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Causes from "@/pages/causes";
import PollutedCities from "@/pages/polluted-cities";
import Effects from "@/pages/effects";
import GovernmentActions from "@/pages/government-actions";
import Solutions from "@/pages/solutions";
import Statistics from "@/pages/statistics";
import Contact from "@/pages/contact";
import SDG6 from "@/pages/sdg-6";
import SDG13 from "@/pages/sdg-13";
import SDG14 from "@/pages/sdg-14";
import SDG15 from "@/pages/sdg-15";
import SurfaceWaterPollution from "@/pages/pollution-surface";
import GroundwaterPollution from "@/pages/pollution-groundwater";
import ChemicalPollution from "@/pages/pollution-chemical";
import BiologicalPollution from "@/pages/pollution-biological";
import NutrientPollution from "@/pages/pollution-nutrient";
import PlasticPollution from "@/pages/pollution-plastic";
import ThermalPollution from "@/pages/pollution-thermal";
import OilPollution from "@/pages/pollution-oil";
import IndustrialWasteCause from "@/pages/cause-industrial";
import DomesticSewageCause from "@/pages/cause-domestic";
import AgriculturalRunoffCause from "@/pages/cause-agricultural";
import ReligiousSocialCause from "@/pages/cause-religious";
import DelhiCity from "@/pages/city-delhi";
import KanpurCity from "@/pages/city-kanpur";
import VaranasiCity from "@/pages/city-varanasi";
import MumbaiCity from "@/pages/city-mumbai";
import BengaluruCity from "@/pages/city-bengaluru";
import HyderabadCity from "@/pages/city-hyderabad";
import WastewaterTreatmentSolution from "@/pages/solution-treatment";
import AfforestationSolution from "@/pages/solution-afforestation";
import AwarenessEducationSolution from "@/pages/solution-awareness";
import RainwaterHarvestingSolution from "@/pages/solution-rainwater";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/causes" component={Causes} />
      <Route path="/cities" component={PollutedCities} />
      <Route path="/effects" component={Effects} />
      <Route path="/actions" component={GovernmentActions} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/contact" component={Contact} />
      <Route path="/sdg/6" component={SDG6} />
      <Route path="/sdg/13" component={SDG13} />
      <Route path="/sdg/14" component={SDG14} />
      <Route path="/sdg/15" component={SDG15} />
      <Route path="/pollution/surface" component={SurfaceWaterPollution} />
      <Route path="/pollution/groundwater" component={GroundwaterPollution} />
      <Route path="/pollution/chemical" component={ChemicalPollution} />
      <Route path="/pollution/biological" component={BiologicalPollution} />
      <Route path="/pollution/nutrient" component={NutrientPollution} />
      <Route path="/pollution/plastic" component={PlasticPollution} />
      <Route path="/pollution/thermal" component={ThermalPollution} />
      <Route path="/pollution/oil" component={OilPollution} />
      <Route path="/cause/industrial" component={IndustrialWasteCause} />
      <Route path="/cause/domestic" component={DomesticSewageCause} />
      <Route path="/cause/agricultural" component={AgriculturalRunoffCause} />
      <Route path="/cause/religious" component={ReligiousSocialCause} />
      <Route path="/city/delhi" component={DelhiCity} />
      <Route path="/city/kanpur" component={KanpurCity} />
      <Route path="/city/varanasi" component={VaranasiCity} />
      <Route path="/city/mumbai" component={MumbaiCity} />
      <Route path="/city/bengaluru" component={BengaluruCity} />
      <Route path="/city/hyderabad" component={HyderabadCity} />
      <Route path="/solution/treatment" component={WastewaterTreatmentSolution} />
      <Route path="/solution/afforestation" component={AfforestationSolution} />
      <Route path="/solution/awareness" component={AwarenessEducationSolution} />
      <Route path="/solution/rainwater" component={RainwaterHarvestingSolution} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
