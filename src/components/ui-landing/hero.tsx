import { component$ } from "@builder.io/qwik";
import { Product } from "~/routes/layout";
interface ChildProps {
  userData: Product[];
}
export default component$<ChildProps>(({ userData }) => {
  return (
    <>
      <section>
        <div class="relative mx-auto max-w-6xl px-4 sm:px-6">
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

          <div class="pb-16 pt-32 md:pb-32 md:pt-52">
            {/* Hero content */}
           <h1 class="h1 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">Some Random data from api</h1>
            {userData ? (
        <ul>
          {Object.entries(userData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value.title}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li>No user data available.</li>
        </ul>
      )}

            <div class="mx-auto max-w-3xl text-center">
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
                class="h1 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent"
                data-aos="fade-down"
              >
                Instant Web app
              </h1>
              <p
                class="mb-8 text-lg text-slate-300"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                1.Server side rendered out of box.
              </p>
              <p
                class="mb-8 text-lg text-slate-300"
                data-aos="fade-down"
                data-aos-delay="200"
              >
               2.Resumable
              </p>
              <p
                class="mb-8 text-lg text-slate-300"
                data-aos="fade-down"
                data-aos-delay="200"
              >
               3.avoid javscript as much possible
              </p>
              <p
                class="mb-8 text-lg text-slate-300"
                data-aos="fade-down"
                data-aos-delay="200"
              >
               4.Javascript streaming
              </p>
              <p
                class="mb-8 text-lg text-slate-300"
                data-aos="fade-down"
                data-aos-delay="200"
              >
               5.Fine grained reactivity using signal /This is possible in angular using signal..
              </p>
              <div
                class="mx-auto max-w-xs space-y-4 sm:inline-flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div>
                  <button
                    onClick$={() => alert("CLICKED!")}
                    class="btn group w-full bg-gradient-to-r from-white/80 via-white to-white/80 text-slate-900 transition duration-150 ease-in-out hover:bg-white"
                  >
                    Get Started{" "}
                    <span class="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </button>
                </div>
                <div>
                  <a
                    class="btn w-full bg-slate-900 bg-opacity-25 text-slate-200 transition duration-150 ease-in-out hover:bg-opacity-30 hover:text-white"
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
