
import { BookingSection, Footer, HeroSection, MenuSection, Navbar, ReviewsSection,  } from "./components";
import { AboutSection } from "./components/AboutSection/AboutSection";


export default function Home() {
  return (
   <>
   <Navbar />
   <HeroSection />
   <AboutSection />
   <MenuSection />
   <BookingSection />
   <ReviewsSection />
   <Footer />
   </>
  );
}
