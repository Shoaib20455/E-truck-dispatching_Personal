import CaseStudyApproachSection from "../../Components/CaseStudyApproachSection";
import CaseStudyBeforeAfterSection from "../../Components/CaseStudyBeforeAfterSection";
import CaseStudyPracticeSnapshot from "../../Components/CaseStudyPracticeSnapshot";
import CaseStudyProblemSection from "../../Components/CaseStudyProblemSection";
import CaseStudyResultsSection from "../../Components/CaseStudyResultsSection";
import CaseStudyTestimonialsSection from "../../Components/CaseStudyTestimonialsSection";
import CaseStudyWhatChangedSection from "../../Components/CaseStudyWhatChangedSection";
import CaseStudyWhyItMattersSection from "../../Components/CaseStudyWhyItMattersSection";
import ServiceHero from "../../Components/ServiceHero";

const snapshotRows = [
  { label: "Location", value: "Florida" },
  { label: "Practice Type", value: "Outpatient medical practice" },
  { label: "Specialties", value: "Family Medicine, Internal Medicine, Behavioral Health" },
  { label: "Providers", value: "6" },
  { label: "Payer Mix", value: "Medicare, Medicaid, Florida Blue, UHC, Aetna, Cigna, Humana" },
  { label: "Main Issue", value: "High A/R, delayed claims, denial backlog" },
  { label: "Service Used", value: "Full-Service Medical Billing & RCM" },
];

const approachItems = [
  {
    title: "Clean claims before submission.",
    description:
      "Every claim was checked for patient details, eligibility, CPT codes, ICD-10 codes, modifiers, provider information, and payer-specific rules.",
  },
  {
    title: "Work denials faster.",
    description:
      "Denials were sorted by reason code, payer, dollar value, and appeal deadline. No more waiting for monthly cleanup.",
  },
  {
    title: "Turn A/R into action.",
    description:
      "Old balances were separated into clear work queues: payer follow-up, corrected claim, appeal, patient balance, underpayment review, or adjustment.",
  },
];

const results = [
  {
    title: "98.5% Clean Claim Rate",
    description: "Claims went out cleaner with fewer preventable errors.",
  },
  {
    title: "35% Reduction in A/R",
    description: "Older unpaid balances dropped after structured follow-up.",
  },
  {
    title: "96% Collection Ratio",
    description: "Revenue became more stable and predictable.",
  },
  {
    title: "24 Days Average A/R",
    description: "Payments moved faster through the revenue cycle.",
  },
];

const beforeAfterRows = [
  { area: "Claim Submission", before: "Delayed and inconsistent", after: "Cleaner same-week submission process" },
  { area: "Denial Follow-Up", before: "Worked late", after: "Worked within 48 hours" },
  { area: "A/R Management", before: "Aging without clear priority", after: "Sorted by payer, age, and action" },
  { area: "Payment Posting", before: "Basic posting", after: "Underpayment and adjustment review" },
  { area: "Reporting", before: "Hard to use", after: "Monthly RCM performance dashboard" },
  { area: "Staff Workload", before: "Heavy rework", after: "Fewer repeated billing errors" },
];

const testimonials = [
  {
    name: "Dr. Ahmed Raza",
    role: "Orthopedic Surgeon",
    quote: "They reduced our billing backlog and helped us recover thousands in unpaid claims. Their team really knows the healthcare system.",
  },
  {
    name: "Dr. Sarah Khan",
    role: "Family Physician",
    quote: "This team has completely streamlined my billing process. I can now focus on patient care while they handle claims quickly and accurately. Excellent service!",
  },
  {
    name: "Dr. Imran Malik",
    role: "Cardiologist",
    quote: "They are professional, efficient, and knowledgeable. Our collections increased by nearly 35% in just a few months. Truly a great experience!",
  },
  {
    name: "Dr. Ayesha Qureshi",
    role: "Dermatologist",
    quote: "Their understanding of medical coding and compliance is exceptional. Every claim is handled perfectly, saving us time and avoiding errors.",
  },
  {
    name: "Dr. Maria Yousaf",
    role: "Pediatrician",
    quote: "They are detail-oriented and professional. Our practice has seen a noticeable difference in revenue and efficiency since partnering with them.",
  },
];

export default function CaseStudyListingDetailPage() {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Medical Billing Case Study | Revenue Cycle Management | Florida"
        description="A growing Florida medical practice had no shortage of patients. Providers were busy, the schedule was full, and monthly visits were increasing. But the revenue was not moving at the same speed. Claims were getting delayed. Denials were stacking up. Old A/R kept growing. The practice could see unpaid revenue in reports, but the billing workflow was too messy to recover it fast. That is when the practice partnered with Avenue Billing Services."
        backgroundImage="/contact us/2_rectangle_1893.png"
        highlights={[]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <CaseStudyPracticeSnapshot
        heading="Practice Snapshot"
        leftHeader="Practice Detail"
        rightHeader="Information"
        rows={snapshotRows}
      />

      <CaseStudyProblemSection
        heading="The Problem: Revenue Was Getting Stuck After the Visit"
        paragraphs={[
          "The practice was doing the work. Patients were being seen. Notes were being completed. Claims were being created.",
          "Still, money was leaking inside the billing process.",
          "Some claims were not scrubbed properly before submission. Some denials were not appealed fast enough. Some payments were posted without checking for underpayment. Older balances sat in A/R reports without clear next steps.",
          "It was not a patient volume problem.",
          "It was a revenue cycle control problem.",
        ]}
        issuesHeading="Main Billing Issues Found"
        issues={[
          "Claims delayed after date of service",
          "Repeated payer denials",
          "Weak A/R follow-up",
          "Underpayments not reviewed",
          "Patient balances not cleaned properly",
          "No clear monthly RCM dashboard",
        ]}
        image="/case study detail/3_rectangle_723.png"
        imageAlt="Doctor reviewing medical billing revenue"
      />

      <CaseStudyApproachSection
        heading="Avenue Billing Services’ Approach"
        introLines={[
          "Avenue started with a complete billing audit. The goal was simple: find where money was stuck, fix old claims, and stop the same issues from repeating.",
          "The team reviewed the practice’s claim history, payer rules, denial patterns, aging reports, and payment posting workflow.",
          "Then Avenue built a cleaner billing process around three priorities:",
        ]}
        items={approachItems}
      />

      <CaseStudyWhatChangedSection
        heading="What Changed"
        paragraphs={[
          "Before Avenue, the billing process was mostly reactive. The team fixed problems after payers rejected claims.",
          "After Avenue, the process became preventive.",
          "Claims were reviewed before submission. Denials were worked within 48 hours. A/R was prioritized by age and recovery value. Payments were checked more carefully. Leadership received clearer reporting every month.",
          "That shift gave the practice more control over collections.",
        ]}
        cardTitle="Medical Billing for Small Practices"
        cardDescription="Learn how we help independent clinics thrive in a landscape dominated by hospital systems."
        cardLinkLabel="View Small Practice Solutions"
        cardLinkHref="#"
        image="/case study detail/4_rectangle_1929.png"
        imageAlt="Doctor reacting positively to improved billing performance"
      />

      <CaseStudyResultsSection
        heading="Results After Avenue Billing Services"
        results={results}
      />

      <CaseStudyBeforeAfterSection
        heading="Before vs After"
        headers={["Area", "Before Avenue", "After Avenue"]}
        rows={beforeAfterRows}
      />

      <CaseStudyTestimonialsSection
        heading="Client Experiences With Our Billing Team"
        testimonials={testimonials}
      />

      <CaseStudyWhyItMattersSection
        heading="Why This Case Study Matters"
        paragraphs={[
          "A busy practice can still lose revenue.",
          "More visits do not always mean better collections. If claims are delayed, denials are ignored, payments are not reviewed, and A/R keeps aging, revenue quietly slips away.",
          "Avenue Billing Services helped this practice move from scattered billing follow-up to a structured revenue cycle system.",
          "Cleaner claims.\nFaster denial action.\nLower A/R.\nBetter reporting.\nMore control over cash flow.",
        ]}
        servicesHeading="Services Used"
        servicesDescription="Avenue Billing Services supported the practice with medical billing, claim scrubbing, denial management, A/R follow-up, eligibility checks, payment posting, patient billing support, coding review, and monthly revenue reporting."
        image="/case study detail/10_rectangle_723.png"
        imageAlt="Doctor reviewing billing documents"
      />
    </main>
  );
}
