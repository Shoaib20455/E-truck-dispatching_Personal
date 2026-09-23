import Image from "next/image";

const softwarePartners = [
  {
    name: "Kareo",
    src: "/Home/32_rectangle_859.png",
    width: 98,
    height: 42,
  },
  {
    name: "Claim.MD",
    src: "/Home/33_rectangle_850.png",
    width: 156,
    height: 42,
  },
  {
    name: "Apex EDI",
    src: "/Home/34_rectangle_849.png",
    width: 140,
    height: 42,
  },
  {
    name: "Osmind",
    src: "/Home/35_rectangle_853.png",
    width: 170,
    height: 42,
  },
  {
    name: "IntakeQ",
    src: "/Home/36_rectangle_854.png",
    width: 170,
    height: 42,
  },
  {
    name: "PracticeEHR",
    src: "/Home/37_rectangle_1922.png",
    width: 205,
    height: 42,
  },
  {
    name: "Office Ally",
    src: "/Home/38_rectangle_1923.png",
    width: 80,
    height: 42,
  },
];

export default function SoftwarePartners() {
  return (
    <section className="w-full bg-cyan-50">
      <div className="mx-auto max-w-[1520px] px-6 py-10 lg:px-0">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {softwarePartners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center rounded-[10px] bg-teal-500/10 px-7 py-4"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="block h-[42px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}