import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { CheckCircle2, Droplet, Leaf, Share2, AlertCircle } from "lucide-react";

const checklist = [
  { id: 1, title: "Reduce Plastic Use", desc: "Use reusable bottles and bags instead of single-use plastics" },
  { id: 2, title: "Save Water at Home", desc: "Fix leaky taps and take shorter showers" },
  { id: 3, title: "Save Water at College", desc: "Report leaks to authorities and promote water conservation" },
  { id: 4, title: "Proper Waste Disposal", desc: "Don't litter—dispose of trash in designated bins" },
  { id: 5, title: "Avoid Chemical Dump", desc: "Don't pour chemicals, oils, or medicines down the drain" },
  { id: 6, title: "Participate in Clean-ups", desc: "Join river clean-up drives and lake restoration projects" },
  { id: 7, title: "Spread Awareness", desc: "Share information on social media about water pollution" },
  { id: 8, title: "Support Green Initiatives", desc: "Join environmental clubs and green activities at school" },
];

export default function StudentAction() {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setCompleted(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const completionPercent = Math.round((completed.length / checklist.length) * 100);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-6">How You Can Help</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Water pollution might seem like a massive problem, but every action counts. 
            As students and citizens, you have the power to make a difference. Here are practical steps you can take today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                Your Action Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 bg-primary/10 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Your Progress</span>
                  <span className="text-2xl font-bold text-primary">{completionPercent}%</span>
                </div>
                <div className="h-3 bg-primary/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300" 
                    style={{ width: `${completionPercent}%` }}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                {checklist.map(item => (
                  <div 
                    key={item.id}
                    className={`flex gap-4 p-4 rounded-lg border transition-all cursor-pointer ${
                      completed.includes(item.id)
                        ? 'bg-green-50 border-green-200'
                        : 'bg-white border-border hover:border-primary/50'
                    }`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <Checkbox 
                      checked={completed.includes(item.id)}
                      onChange={() => toggleItem(item.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <h3 className={`font-semibold ${completed.includes(item.id) ? 'text-green-700 line-through' : 'text-foreground'}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-blue-50 border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Droplet className="h-5 w-5 text-blue-600" />
                  Daily Habits
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground space-y-2">
                <p>✓ Use a reusable water bottle</p>
                <p>✓ Take shorter showers</p>
                <p>✓ Turn off taps while brushing</p>
                <p>✓ Fix water leaks immediately</p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Leaf className="h-5 w-5 text-green-600" />
                  Community Action
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground space-y-2">
                <p>✓ Join clean-up drives</p>
                <p>✓ Plant trees along rivers</p>
                <p>✓ Report polluters to authorities</p>
                <p>✓ Mentor younger students</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Share2 className="h-5 w-5 text-purple-600" />
                  Spread Awareness
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground space-y-2">
                <p>✓ Share facts on social media</p>
                <p>✓ Create posters & videos</p>
                <p>✓ Start a school club</p>
                <p>✓ Give presentations</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-8">
            <div className="flex gap-4 items-start">
              <AlertCircle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Did You Know?</h3>
                <p className="text-amber-800">
                  India alone generates 62,000 million liters of wastewater daily, but only 30% of it gets treated. 
                  By making conscious choices, students can inspire their families and communities to do the same!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
