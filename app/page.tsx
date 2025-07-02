import Header from "./components/Header"
import Hero from "./components/Hero"
import HowWeHelp from "./components/HowWeHelp"
import WhatWeDo from "./components/WhatWeDo"
import WhoWeAre from "./components/WhoWeAre"
import HowWeWork from "./components/HowWeWork"
import Footer from "./components/Footer"
import RegulatoryPressure from "./components/RegulatoryPressure"
import SocialProof from "./components/SocialProof"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <RegulatoryPressure />
      <HowWeHelp />
      <WhatWeDo />
      <SocialProof />
      <WhoWeAre />
      <HowWeWork />
      <Footer />
    </div>
  )
}
