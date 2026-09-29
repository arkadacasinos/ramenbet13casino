import { RamenbetCasinoSection } from '@/components/ramenbet-casino-section'
import { RamenbetFaqSection } from '@/components/ramenbet-faq-section'
import { RamenbetFooter } from '@/components/ramenbet-footer'
import { RamenbetHero } from '@/components/ramenbet-hero'
import { RamenbetHowtoSection } from '@/components/ramenbet-howto-section'
import { RamenbetMirrorSection } from '@/components/ramenbet-mirror-section'
import { RamenbetNav } from '@/components/ramenbet-nav'
import { RamenbetOfficialSection } from '@/components/ramenbet-official-section'

export default function Page() {
  return (
    <main className="kx7q-page">
      <RamenbetNav />
      <RamenbetHero />
      <RamenbetOfficialSection />
      <RamenbetMirrorSection />
      <RamenbetCasinoSection />
      <RamenbetHowtoSection />
      <RamenbetFaqSection />
      <RamenbetFooter />
    </main>
  )
}
