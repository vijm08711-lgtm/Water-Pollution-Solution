import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const pollutionSourcesData = [
  { name: 'Domestic Sewage', value: 70 },
  { name: 'Industrial Waste', value: 20 },
  { name: 'Agricultural Runoff', value: 10 },
];

const waterQualityData = [
  { name: 'Yamuna (Delhi)', level: 45 },
  { name: 'Ganga (Kanpur)', level: 35 },
  { name: 'Ganga (Varanasi)', level: 25 },
  { name: 'Sabarmati', level: 40 },
  { name: 'Mithi', level: 50 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function Statistics() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif font-bold mb-12 text-center">Data & Statistics</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Chart 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Sources of River Pollution</CardTitle>
              <CardDescription>Percentage contribution of different sectors</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pollutionSourcesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pollutionSourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Chart 2 */}
          <Card>
            <CardHeader>
              <CardTitle>BOD Levels in Major Rivers</CardTitle>
              <CardDescription>Biochemical Oxygen Demand (mg/l) - Higher is worse (Std: &lt;3 mg/l)</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={waterQualityData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Legend />
                  <Bar dataKey="level" name="BOD Level (mg/l)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Data Source: Central Pollution Control Board (CPCB) Reports</p>
        </div>
      </div>
    </Layout>
  );
}
