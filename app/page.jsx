import HeroSection from "@/components/hero/HeroSection";
import HeroSectionv2 from "@/components/hero/HeroSectionv2";
import SecondHeroSection from "@/components/hero/SecondHeroSection";
import ThirdHeroSection from "@/components/hero/ThirdHeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ManifestoCardsSection from "@/components/ManifestoCardsSection";
import JourneySection from "@/components/JourneySection";
import JourneySectionv2 from "@/components/JourneySectionv2";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import DummySection from "@/components/DummySection";

export const metadata = {
  title: 'সাইফ মোস্তাফিজ সিরাজগঞ্জ-৬',
  description: 'সাইফ মোস্তাফিজের অফিশিয়াল ক্যাম্পেইন ওয়েবসাইট। ঢাকা বিশ্ববিদ্যালয়ের ছাত্র, জুলাই প্রতিবাদের সংগঠক, জাতীয় নাগরিক কমিটির নেতা এবং সিরাজগঞ্জ-৬ আসনের সংসদ সদস্য প্রার্থী।',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* <HeroSection /> */}
      <HeroSectionv2 />
      {/* <SecondHeroSection /> */}
      {/* <ThirdHeroSection /> */}
      <ManifestoSection />
      <ManifestoCardsSection />
      {/* <JourneySection /> */}
      <JourneySectionv2 />
      <PhotoGallerySection />
      <CallToActionSection />
      <Footer />
      {/* <DummySection /> */}
    </main>
  );
}
