import BlogListingSection from "../Components/BlogListingSection";
import ServiceHero from "../Components/ServiceHero";

const blogPosts = Array.from({ length: 12 }, () => ({
  title: "How to Bill Physical Therapy for Group Therapy Sessions",
  description:
    "Do you run group physical therapy sessions? Are you billing them correctly every time? Group therapy...",
  image: "/Home/49_rectangle_79.png",
  imageAlt: "Medical billing and physical therapy claim documents",
  href: "#",
}));

export default function BlogListingPage() {
  return (
    <main>
      <ServiceHero
        variant="compact"
        heading="Information"
        description="If you are interested in our services, want to know more or have got any question's, We would be glad to answer your query. Get in touch now to find out how we can skyrocket your practice growth."
        backgroundImage="/Medical Billing analysis/1_rectangle_1893.png"
        highlights={[]}
        formHeading="Ready to Improve Your Medical Billing Revenue?"
        namePlaceholder="Name"
        phonePlaceholder="Phone Number"
        emailPlaceholder="Email"
        organizationPlaceholder="Organization"
        buttonText="Submit"
      />

      <BlogListingSection
        heading="Read Latest News."
        categories={[
          { label: "Icd 10 Codes", href: "#" },
          { label: "Denial Codes", href: "#" },
          { label: "CPT Codes", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Athena", href: "#" },
        ]}
        posts={blogPosts}
        currentPage={1}
        totalPages={9}
      />
    </main>
  );
}
