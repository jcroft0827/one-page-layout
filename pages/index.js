import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      {/* headerSection */}
      <Header id="headerSection" />
      {/* heroSection */}
      <Hero />
      {/* aboutSection */}
      <About />
      {/* projectsSection */}
      <Projects />
      {/* getStartedSection */}
      <GetStarted />
      {/* footerSection */}
      <Footer />
    </main>
  );
}
