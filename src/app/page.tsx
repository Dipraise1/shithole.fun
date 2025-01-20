


// src/app/page.tsx
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-6 w-full py-8">
        <h1 className="text-4xl text-[#4fffb0] mb-8 text-center font-extrabold">
          Shithole Leaderboard
        </h1>
        <MainContent />
      </main>
      <Footer />
    </>
  );
}