import Image from "next/image";

export default function AboutUsCTASection() {
  return (
    <section className="w-full bg-cyan-50 pb-14 pt-10 lg:pb-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div
          className="relative overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/about us/6_rectangle_627.png")' }}
        >
          <div className="absolute inset-0 bg-teal-500/85" />

          <div className="relative grid min-h-[400px] grid-cols-1 items-center gap-8 px-8 py-12 md:px-12 lg:grid-cols-[minmax(0,1fr)_500px] lg:px-16 lg:py-16">
            <div className="relative z-10 max-w-[650px] text-white">
              <h2 className="font-inter text-3xl font-semibold leading-10 md:text-4xl">
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

            <div className="relative hidden h-full min-h-[330px] lg:block">
              <Image
                src="/Services Location/13_1.png"
                alt="Medical billing healthcare professional"
                width={466}
                height={587}
                className="absolute bottom-[-64px] right-2 h-auto w-[430px] max-w-none object-contain xl:w-[466px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
