import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <section>
        <div class="relative max-w-6xl px-4 mx-auto sm:px-6">

       
          {/* Particles animation */}
          {/* <Particles class="absolute inset-0 -z-10" /> */}

          {/* Illustration */}
          <div
            class="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden rounded-b-[3rem]"
            aria-hidden="true"
          >
            
            {/* <div class="absolute bottom-0 -translate-x-1/2 left-1/2 -z-10">
              <Image
                src={Illustration}
                class="max-w-none"
                width={2146}
                priority
                alt="Hero Illustration"
              />
            </div> */}
          </div>

          <div class="pt-32 pb-16 md:pb-32 md:pt-52">
            {/* Hero content */}
          
            <div class="max-w-3xl mx-auto text-center">
              <div class="mb-6" data-aos="fade-down">
                <div class="relative inline-flex before:absolute before:inset-0 before:bg-purple-500 before:blur-md">
                  <a
                    class="btn-sm group relative py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white"
                    href="#0"
                  >
                    <span class="relative inline-flex items-center">
                      Qwik feature demo{" "}
                      <span class="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <h1
                class="pb-4 text-transparent h1 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text"
                data-aos="fade-down"
              >
                The API Security Framework
              </h1>
              <p
                class="mb-8 text-lg text-slate-300"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div
                class="max-w-xs mx-auto space-y-4 sm:inline-flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div>
                  <button onClick$={() => alert('CLICKED!')}
                    class="w-full transition duration-150 ease-in-out btn group bg-gradient-to-r from-white/80 via-white to-white/80 text-slate-900 hover:bg-white"
                   
                  >
                    Get Started{" "}
                    <span class="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </button>
                </div>
                <div>
                  <a
                    class="w-full transition duration-150 ease-in-out bg-opacity-25 btn bg-slate-900 text-slate-200 hover:bg-opacity-30 hover:text-white"
                    href="#0"
                  >
                    <svg
                      class="mr-3 shrink-0 fill-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                    </svg>
                    <span>Read the docs</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
