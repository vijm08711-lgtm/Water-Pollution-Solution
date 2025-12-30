const locationData = {
  "Karnataka": {
    "Bengaluru Urban": {
      "Bengaluru North": ["Hebbal", "Yelahanka"],
      "Bengaluru South": ["Jayanagar", "BTM Layout"]
    },
    "Dharwad": {
      "Hubli": ["Unkal", "Navanagar"],
      "Dharwad": ["Kundgol", "Kalghatgi"]
    }
  },
  "Maharashtra": {
    "Pune": {
      "Haveli": ["Shivajinagar", "Kothrud"],
      "Mulshi": ["Hinjewadi", "Paud"]
    }
  }
};

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  state: z.string().min(1, "Select a state"),
  district: z.string().min(1, "Select a district"),
  taluk: z.string().min(1, "Select a taluk"),
  town: z.string().min(1, "Select a town"),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      state: "",
      district: "",
      taluk: "",
      town: "",
    }
  });

  const selectedState = form.watch("state");
  const selectedDistrict = form.watch("district");
  const selectedTaluk = form.watch("taluk");

  const districts = selectedState ? Object.keys(locationData[selectedState]) : [];
  const taluks = selectedState && selectedDistrict ? Object.keys(locationData[selectedState][selectedDistrict]) : [];
  const towns = selectedState && selectedDistrict && selectedTaluk ? locationData[selectedState][selectedDistrict][selectedTaluk] : [];

  function onSubmit(values) {
    console.log(values);
    toast({
      title: "Form Submitted!",
      description: "User details collected successfully",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif font-bold mb-12 text-center">Get in Touch</h1>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* FORM CARD */}
          <Card>
            <CardHeader>
              <CardTitle>Enter Your Details</CardTitle>
              <CardDescription>Please fill in your info correctly</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                  {/* NAME */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* EMAIL */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email ID</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* STATE */}
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <select className="w-full border rounded p-2" {...field}>
                            <option value="">Select State</option>
                            {Object.keys(locationData).map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* DISTRICT */}
                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>District</FormLabel>
                        <FormControl>
                          <select className="w-full border rounded p-2" {...field} disabled={!districts.length}>
                            <option value="">Select District</option>
                            {districts.map(d => <option key={d} value={d}>{d}</option>)}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* TALUK */}
                  <FormField
                    control={form.control}
                    name="taluk"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Taluk / Tehsil</FormLabel>
                        <FormControl>
                          <select className="w-full border rounded p-2" {...field} disabled={!taluks.length}>
                            <option value="">Select Taluk</option>
                            {taluks.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* TOWN */}
                  <FormField
                    control={form.control}
                    name="town"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Town / City</FormLabel>
                        <FormControl>
                          <select className="w-full border rounded p-2" {...field} disabled={!towns.length}>
                            <option value="">Select Town</option>
                            {towns.map(to => <option key={to} value={to}>{to}</option>)}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* SUBMIT */}
                  <Button type="submit" className="w-full">Submit</Button>

                </form>
              </Form>
            </CardContent>
          </Card>

          {/* INFO SECTION (Already present in UI) */}
          <div>
            <h2 className="text-2xl font-bold mb-6">We collect your location smartly 🇮🇳</h2>
            <p className="text-muted-foreground text-lg">
              Choose your state and the form will automatically show only relevant
              districts, taluks, and towns.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}
