
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import PatientJourney from "@/components/sections/patient-journey";
import Treatments from "@/components/sections/treatments";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Testimonials from "@/components/sections/testimonials";
import AppointmentForm from "@/components/sections/appointment-form";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Stats from "@/components/sections/stats";

export default function Home() {
  return (
    <>
  
      <Hero />
      <Stats/>
      <About />
      <PatientJourney />
      <Treatments />
      <WhyChooseUs />
      <Testimonials/>
  
      <FAQ/>
      <CTA/>
      <AppointmentForm />
      <Contact/>
      <Footer/>
    </>
  );
}