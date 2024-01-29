import { component$ } from "@builder.io/qwik";
import MobileMenu from "../reusable/mobile-menu";




export default component$(() => {
  

  return (
    <>
      <header class="absolute z-30 w-full">
      <div class="max-w-6xl px-4 mx-auto sm:px-6">
        <div class="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div class="flex-1">
            {/* logo */}
          </div>

          {/* Desktop navigation */}
          <nav class="hidden md:flex md:grow">

            {/* Desktop menu as */}
            <ul class="flex flex-wrap items-center justify-center grow">
              <li>
                <a class="mx-4 text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white lg:mx-5" href="/about">About</a>
              </li>
              <li>
                <a class="mx-4 text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white lg:mx-5" href="/integrations">Integrations</a>
              </li>
              <li>
                <a class="mx-4 text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white lg:mx-5" href="/pricing">Pricing</a>
              </li>
              <li>
                <a class="mx-4 text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white lg:mx-5" href="/customers">Customers</a>
              </li>
              <li>
                <a class="mx-4 text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white lg:mx-5" href="/changelog">Changelog</a>
              </li>
            </ul>

          </nav>

          {/* Desktop sign in as */}
          <ul class="flex items-center justify-end flex-1">
            <li>
              <a class="text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white whitespace-nowrap" href="/signin">Sign in</a>
            </li>
            <li class="ml-6">
              <a class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" href="/signup">
                <span class="relative inline-flex items-center">
                  Sign up <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
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
