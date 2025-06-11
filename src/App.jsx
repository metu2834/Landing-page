import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";
import { Pricing } from "./components/sections/Pricing";
import { CTA } from "./components/sections/CallToAction";
import { TestimonialsSection } from "./components/sections/TestimonialSection";


function App() {
  return (
    <Layout title="corAI">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <TestimonialsSection/>
      <CTA />
    </Layout>
  );
}

export default App;
