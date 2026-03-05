/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Gallery />
        <Differentials />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
