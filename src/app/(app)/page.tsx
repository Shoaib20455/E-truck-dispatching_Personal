import HomeHero from "./Components/HomeHero";

export default function Page() {
  return (
    <main>
      <HomeHero
        eyebrow="Avenue Billing Services"
        heading="Best Medical Billing Services for US Healthcare Practices"
        description="At Avenue Billing Services (ABS), we support healthcare facilities nationwide by handling their medical billing and revenue cycle management with precision. Our certified medical coders and billers strengthen your organization’s financial stability and compliance as per CMS & AMA guidelines through professional coding and billing services."
        backgroundImage="/Home/2_rectangle_1895.png"
        reviews={[
          {
            logo: "/Home/90_rectangle_1898.png",
            alt: "Clutch reviews",
          },
          {
            logo: "/Home/72_rectangle_1899.png",
            alt: "Customer reviews",
          },
          {
            logo: "/Home/78_rectangle_1901.png",
            alt: "Testimonials",
          },
          {
            logo: "/Home/65_rectangle_1897.png",
            alt: "Trustpilot reviews",
          },
        ]}
        stats={[
          {
            value: "310+",
            label: "Providers Supported",
            icon: "/Home/3_rectangle_1920.png",
            iconAlt: "Providers supported",
          },
          {
            value: "98%",
            label: "Clean Claim Rate",
            icon: "/Home/4_rectangle_1920.png",
            iconAlt: "Clean claim rate",
          },
          {
            value: "10+",
            label: "Years Experience",
            icon: "/Home/5_rectangle_1920.png",
            iconAlt: "Years of experience",
          },
        ]}
      />
    </main>
  );
}