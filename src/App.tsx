import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import { WhatsAppIcon } from '@/sections/Header';
import Home from '@/pages/Home';
import { waLink } from '@/data';

const Cabinet = lazy(() => import('@/pages/Cabinet'));
const Domaines = lazy(() => import('@/pages/Domaines'));
const FaqPage = lazy(() => import('@/pages/FaqPage'));
const Contact = lazy(() => import('@/pages/Contact'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <main>
        <Suspense
          fallback={
            <div className="flex min-h-[60vh] items-center justify-center bg-[color:var(--paper)]">
              <span className="h-10 w-10 animate-spin rounded-full border-[3px] border-[color:var(--sand-line)] border-t-[color:var(--gold)]" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cabinet" element={<Cabinet />} />
            <Route path="/domaines" element={<Domaines />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <a
        href={waLink('مرحباً، أود الاستفسار عن موعد استشارة قانونية.')}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="wa-flash fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-[#0b3d24] shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
