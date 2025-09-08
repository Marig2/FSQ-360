
import CTASection from '@/Components/CTA/CTASection'
import FAQSection from '@/Components/FAQ/FAQ'
import Footer from '@/Components/footer/Footer'
import Navbar from '@/Components/navbar/Navbar'
import AuditHero from '@/Components/Products/smart-audit/AuditHero'
import AuditWorkflow from '@/Components/Products/smart-audit/AuditWorkflow'
import ComplianceFeatures from '@/Components/Products/smart-audit/ComplianceFeatures'
import ManagementFeatures from '@/Components/Products/smart-audit/ManagementFeatures'
export default function SmartAudit() {
  return (
    <div className="w-full">
      <Navbar/>
      <AuditHero/>
      <ManagementFeatures/>
      <ComplianceFeatures/>
      <AuditWorkflow/>
      <FAQSection/>
      <CTASection/>
      <Footer/>
    </div>
  )
}
