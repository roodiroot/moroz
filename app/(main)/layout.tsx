import Footer from "@/components/footer/footer";
import { Toaster } from "@/components/ui/sonner";
import { FeedbackModal } from "@/components/general/modals/feedback-modal/feedback-modal";
import CallWidget from "@/components/general/widgets/call-widget";
import Header from "@/components/header/header";
import MenuMobil from "@/components/header/mobil-menu/mobil-menu";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <MenuMobil />
      <FeedbackModal />
      <CallWidget />
      <Toaster position="top-right" closeButton />
    </>
  );
}
