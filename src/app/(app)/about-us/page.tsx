import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Avenue Billing Services",
  description: "Learn about Avenue Billing Services, our medical billing expertise, revenue-cycle approach, and support for healthcare practices across the United States.",
  path: "/about-us",
});

import AboutOverviewSection from "../Components/AboutOverviewSection";
import AboutUsCTASection from "../Components/AboutUsCTASection";
import ComplianceCommitmentSection from "../Components/ComplianceCommitmentSection";
import CoreValuesSection from "../Components/CoreValuesSection";
import LeadershipExpertiseSection from "../Components/LeadershipExpertiseSection";
import OurApproachSection from "../Components/OurApproachSection";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";
import WhyWorkWithUsSection from "../Components/WhyWorkWithUsSection";
import ServiceHero from "../Components/ServiceHero";

const coreValues = [
  {
    title: "Accuracy First",
    description: "Every claim is coded, checked, and validated with precision.",
  },
  { title: "Complete Transparency" },
  { title: "Patient-Focused Support" },
  { title: "Accountability & Compliance" },
  { title: "Reliable Communication" },
  { title: "Continuous Improvement" },
];

const leadershipItems = [
  "25+ years of combined RCM experience",
  "Certified professional coders (CPC) & billing specialists",
  "Identify hidden revenue leaks instantly",
  "Dedicated client success managers for every practice",
];

const complianceItems = [
  "Secure data handling & encrypted access",
  "Regular internal audits",
  "Accurate documentation alignment",
  "Strict privacy protection for every patient record",
];

const approachItems = [
  {
    title: "Understand Your Practice Needs",
    description:
      "We study your specialty, workflow, payer mix, denial trends, and claim patterns.",
  },
  {
    title: "Build a Custom Billing Strategy",
    description:
      "A dedicated biller + coder team manages your claims, coding accuracy, and follow-ups.",
  },
  {
    title: "Optimize & Improve Continuously",
    description:
      "You receive monthly reporting, revenue insights, denial root-cause analysis, and constant performance refinement.",
  },
];

const chooseUsItems = [
  {
    title: "Increase Revenue",
    description:
      "Our strategies boost reimbursements and minimize missed charges.",
  },
  {
    title: "Streamlined RCM Workflow",
    description:
      "Faster approvals and clean claims on the first submission.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Support for solo practices, group clinics, and multi-location organizations.",
  },
  {
    title: "Reduced Errors & Denials",
    description:
      "Accurate coding and payer-aligned claim formatting.",
  },
  {
    title: "Improved Efficiency",
    description: "We handle the billing; you focus on clinical care.",
  },
  {
    title: "Advanced Technology",
    description: "Modern RCM tools integrated with your existing EMR/EHR.",
  },
];

const workWithUsItems = [
  "Lower denials & rejections",
  "98% clean claim acceptance",
  "HIPAA-compliant processes",
  "Faster reimbursements & A/R recovery",
  "Dedicated biller for your practice",
  "Accurate coding & real-time reporting",
];

export default function AboutUsPage() {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Smart Solutions for Seamless Medical Billing"
        description="We are a trusted medical billing partner committed to improving your practice’s financial performance. With certified experts and advanced technology, we deliver accurate, efficient, and compliant billing solutions."
        backgroundImage="/about us/2_rectangle_1893.png"
        highlights={[]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <AboutOverviewSection
        heading={"About Avenue\nBilling Services"}
        intro={"At Avenue Billing Services, we help healthcare organizations simplify revenue cycle operations with accuracy, transparency, and specialty-aligned billing support. Our certified medical billers, coders, and RCM specialists work as an extension of your team, ensuring cleaner claims, fewer denials, and predictable cash flow.\nWith deep experience across major payers, EMR systems, and compliance requirements, we manage the full billing workflow so providers can stay focused on delivering great patient care, not chasing paperwork"}
        image="/about us/3_rectangle_264.png"
        imageAlt="Avenue Billing Services team reviewing billing data"
        points={["Our Story", "Our Mission", "Our Version"]}
        story="Avenue Billing Services was founded with one purpose: to help healthcare providers overcome the complexity of medical billing and maintain stable financial performance. What began as a small team of billing experts has grown into a nationwide RCM partner serving multi-specialty groups, clinics, and independent practices. Our growth has been driven by one promise,to deliver accurate billing, transparent communication, and reliable results for every provider we support."
      />

      <CoreValuesSection
        heading="Our Core Values"
        image="/about us/4_rectangle_422.png"
        imageAlt="Healthcare billing professional"
        values={coreValues}
      />

      <LeadershipExpertiseSection
        heading="Leadership & Expertise"
        subtitle="Our team brings together"
        items={leadershipItems}
        footerText="We operate with the mindset of a partner, not a vendor."
      />

      <ComplianceCommitmentSection
        heading="Compliance Commitment"
        subtitle={
          <>
            Compliance is the backbone of our billing operations.
            <br />
            We follow all national and state regulations including HIPAA, CMS, AMA, OIG, and payer-specific rules.
            <br />
            <strong className="text-heading">Our workflows include</strong>
          </>
        }
        items={complianceItems}
        footerText="Your practice stays protected, compliant, and audit-ready."
      />

      <OurApproachSection heading="Our Approach" items={approachItems} />

      <WhyChooseUsSection heading="Why Choose Us" items={chooseUsItems} />

      <WhyWorkWithUsSection
        heading="Why Work With Us?"
        subtitle="Partnering with Avenue means"
        items={workWithUsItems}
        footerText="We don’t just manage billing, improve your financial outcomes."
      />

      <AboutUsCTASection
        heading="Ready to work with a reliable billing partner?"
        description="Get a free consultation and see how Avenue Billing Services can strengthen your revenue cycle."
        backgroundImage="/about us/5_1.png"
        doctorImage="/about us/6_rectangle_627.png"
        doctorImageAlt="Medical billing healthcare professional"
        buttons={[
          { label: "Request a Free Consultation", href: "#" },
          { label: "Talk to a Billing Expert", href: "#", variant: "primary" },
        ]}
      />
    </main>
  );
}
