import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex flex-col lg:flex-row justify-between sm:!px-12 relative min-h-screen h-full">
      <Sidebar />
      <div className="flex-1 pt-8 pb-16 lg:py-24">
        {children}
        <Footer />
      </div>
    </div>
  );
}
