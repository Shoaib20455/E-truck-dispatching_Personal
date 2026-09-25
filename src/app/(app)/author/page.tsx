import AuthorArticlesSection from "../Components/AuthorArticlesSection";
import AuthorExpertiseSection from "../Components/AuthorExpertiseSection";
import AuthorProfileSection from "../Components/AuthorProfileSection";

const stats = [
  { label: "Experience:", value: "12+ Years" },
  { label: "Specialties:", value: "Medical Billing,\nCoding, RCM" },
  { label: "Certifications:", value: "AAPC, AHIMA" },
  { label: "Articles Published:", value: "150+" },
  {
    label: "Industries Served:",
    value: "Multi-Specialty Practices\nProfessional sentence mein",
  },
];

const socialLinks = [
  { label: "LinkedIn", mark: "in", href: "#" },
  { label: "Facebook", mark: "f", href: "#" },
  { label: "X", mark: "𝕏", href: "#" },
  { label: "Instagram", mark: "◎", href: "#" },
  { label: "YouTube", mark: "▶", href: "#" },
];

const expertiseItems = [
  {
    title: "Medical Billing Services",
    icon: "/Author/3_rectangle_255.png",
    iconAlt: "Medical billing icon",
  },
  {
    title: "Medical Coding",
    icon: "/Author/4_rectangle_255.png",
    iconAlt: "Medical coding icon",
  },
  {
    title: "Denial Management",
    icon: "/Author/8_rectangle_255.png",
    iconAlt: "Denial management icon",
  },
  {
    title: "A/R Recovery",
    icon: "/Author/9_rectangle_255.png",
    iconAlt: "A/R recovery icon",
  },
  {
    title: "Revenue Cycle Management",
    icon: "/Author/7_rectangle_1970.png",
    iconAlt: "Revenue cycle management icon",
  },
  {
    title: "Credentialing & Enrollment",
    icon: "/Author/5_rectangle_255.png",
    iconAlt: "Credentialing and enrollment icon",
  },
  {
    title: "Healthcare Compliance",
    icon: "/Author/6_rectangle_1971.png",
    iconAlt: "Healthcare compliance icon",
  },
  {
    title: "Practice Revenue Optimization",
    icon: "/Author/10_rectangle_1972.png",
    iconAlt: "Practice revenue optimization icon",
  },
];

const articles = Array.from({ length: 3 }, (_, index) => ({
  title: "How to Bill Physical Therapy for Group Therapy Sessions",
  description:
    "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
  image:
    index === 0
      ? "/AR Followup/77_rectangle_79.png"
      : "/Home/49_rectangle_79.png",
  imageAlt: "Medical billing documents and equipment",
  href: "#",
}));

export default function AuthorPage() {
  return (
    <main>
      <AuthorProfileSection
        portrait="/Author/2_ellipse_282.png"
        portraitAlt="Renvik Zylar"
        eyebrow="AUTHER"
        name="Renvik Zylar"
        shortBio="Renvik Zylar, Professional Medical Biller expert in billing, claims processing denial management & revenue cycle optimization, focused on accuracy & compliance."
        aboutHeading="About Us"
        aboutText="Renvik Zylar is a dedicated Medical Billing Professional specializing in medical billing, claims processing, denial management, and revenue cycle optimization. With a strong focus on accuracy, compliance, and efficiency, Renvik helps healthcare providers streamline billing operations, reduce claim denials, and maximize revenue performance. Committed to delivering reliable and detail-oriented solutions, he ensures that every stage of the revenue cycle is managed with precision, supporting financial stability and operational excellence for healthcare organizations."
        stats={stats}
        socialLinks={socialLinks}
      />

      <AuthorExpertiseSection
        heading="Areas of Experties"
        items={expertiseItems}
      />

      <AuthorArticlesSection
        heading="Articles by Renvikzylar"
        articles={articles}
      />
    </main>
  );
}
