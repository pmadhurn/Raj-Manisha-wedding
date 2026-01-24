import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingPetals from "@/components/FloatingPetals";
import HomePage from "./pages/HomePage";
import CouplePage from "./pages/CouplePage";
import EventsPage from "./pages/EventsPage";
import FamilyPage from "./pages/FamilyPage";
import VenuePage from "./pages/VenuePage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen flex flex-col">
        <FloatingPetals />
        <Navigation />
        <main className="flex-1">
          <section id="home">
            <HomePage />
          </section>
          <section id="couple">
            <CouplePage />
          </section>
          <section id="events">
            <EventsPage />
          </section>
          <section id="family">
            <FamilyPage />
          </section>
          <section id="venue">
            <VenuePage />
          </section>
          <section id="contact">
            <ContactPage />
          </section>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
