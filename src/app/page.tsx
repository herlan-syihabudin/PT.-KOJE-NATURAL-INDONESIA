import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BusinessDivisions from '@/components/BusinessDivisions'
import TrustSignals from '@/components/TrustSignals'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProjectGallery from '@/components/ProjectGallery'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BusinessDivisions />
      <TrustSignals />
      <WhyChooseUs />
      <ProjectGallery />
      <CTASection />
      <Footer />
    </main>
  )
}
