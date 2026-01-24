import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingPetals from "@/components/FloatingPetals";
import HomePage from "./pages/HomePage";
import CouplePage from "./pages/CouplePage";
import EventsPage from "./pages/EventsPage";
import FamilyPage from "./pages/FamilyPage";
import VenuePage from "./pages/VenuePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => (
  <div className="min-h-screen flex flex-col">
    <FloatingPetals />
    <Navigation />
    <main className="flex-1">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/couple" element={<CouplePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/family" element={<FamilyPage />} />
        <Route path="/venue" element={<VenuePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
