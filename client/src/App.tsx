import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import WhatIsPollution from "@/pages/what-is-pollution";
import Causes from "@/pages/causes";
import PollutedCities from "@/pages/polluted-cities";
import Effects from "@/pages/effects";
import GovernmentActions from "@/pages/government-actions";
import Solutions from "@/pages/solutions";
import Statistics from "@/pages/statistics";
import Contact from "@/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={WhatIsPollution} />
      <Route path="/causes" component={Causes} />
      <Route path="/cities" component={PollutedCities} />
      <Route path="/effects" component={Effects} />
      <Route path="/actions" component={GovernmentActions} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/contact" component={Contact} />
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
