import Image from "next/image";

export default function AboutUsCTASection() {
  return (
    <section className="w-full bg-cyan-50 pb-10 pt-6 lg:pb-14 lg:pt-8">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="relative pt-28 md:pt-32 lg:pt-36">
          <div className="relative min-h-[360px] overflow-hidden rounded-[20px] bg-teal-500">
            <Image
              src="/about us/5_1.png"
              alt=""
              fill
              sizes="1520px"
              aria-hidden="true"
              className="pointer-events-none select-none object-cover object-center opacity-80"
            />

            <div className="relative z-10 max-w-[720px] px-8 py-14 text-white md:px-12 lg:px-16 lg:py-16">
              <h2 className="max-w-[620px] font-inter text-3xl font-semibold leading-10 md:text-4xl">
                Ready to work with a reliable billing partner?
              </h2>

              <p className="mt-6 max-w-[560px] font-manrope text-base font-normal leading-8 md:text-lg">
                Get a free consultation and see how Avenue Billing Services can strengthen your revenue cycle.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="rounded-[44px] bg-white px-7 py-2.5 text-center font-manrope text-base font-normal leading-8 text-neutral-600"
                >
                  Request a Free Consultation
                </a>

                <a
                  href="#"
                  className="rounded-[44px] bg-primary-light px-7 py-2.5 text-center font-manrope text-base font-normal leading-8 text-white"
                >
                  Talk to a Billing Expert
                </a>
              </div>
            </div>
          </div>

          <Image
            src="/about us/6_rectangle_627.png"
            alt="Medical billing healthcare professional"
            width={466}
            height={587}
            priority={false}
            className="pointer-events-none absolute bottom-0 right-4 z-20 hidden h-auto w-[330px] object-contain sm:block md:right-8 md:w-[390px] lg:right-16 lg:w-[466px]"
          />
        </div>
      </div>
    </section>
  );
}
