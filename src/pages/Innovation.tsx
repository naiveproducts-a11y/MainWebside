import HeroSection from '../components/innovation/HeroSection';
import CORETECHSection from '../components/innovation/CORETECHSection';
import ECOGUARDSection from '../components/innovation/ECOGUARDSection';
import NANOTECHSection from '../components/innovation/NANOTECHSection';
import HERBALCOMPLEXSection from '../components/innovation/HERBALCOMPLEXSection';
import INGREDIENTLIBRARYSection from '../components/innovation/INGREDIENTLIBRARYSection';
import PROOFSection from '../components/innovation/PROOFSection';
import CTASection from '../components/innovation/CTASection';
import ContactSection from '../components/ContactSection';

export default function Innovation() {
  return (
    <div className="bg-white">
      <HeroSection />
      <CORETECHSection />
      <ECOGUARDSection />
      <NANOTECHSection />
      <HERBALCOMPLEXSection />
      <INGREDIENTLIBRARYSection />
      <PROOFSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
