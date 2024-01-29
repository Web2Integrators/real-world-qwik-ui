import { component$ } from "@builder.io/qwik";
import MobileMenu from "../reusable/mobile-menu";

export default component$(() => {
  return (
    <>
      <header class="absolute z-30 w-full">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
          <div class="flex h-16 items-center justify-between md:h-20">
            {/* Site branding */}
            <div class="flex-1">{/* logo */}</div>

            {/* Desktop navigation */}
            <nav class="hidden md:flex md:grow">
              {/* Desktop menu as */}
              <ul class="flex grow flex-wrap items-center justify-center">
                <li>
                  <a
                    class="mx-4 text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white lg:mx-5"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    class="mx-4 text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white lg:mx-5"
                    href="/integrations"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    class="mx-4 text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white lg:mx-5"
                    href="/pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    class="mx-4 text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white lg:mx-5"
                    href="/customers"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    class="mx-4 text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white lg:mx-5"
                    href="/changelog"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </nav>

            {/* Desktop sign in as */}
            <ul class="flex flex-1 items-center justify-end">
              <li>
                <a
                  class="whitespace-nowrap text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white"
                  href="/signin"
                >
                  Sign in
                </a>
              </li>
              <li class="ml-6">
                <a
                  class="btn-sm group relative w-full text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/30 hover:text-white"
                  href="/signup"
                >
                  <span class="relative inline-flex items-center">
                    Sign up{" "}
                    <span class="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
});
