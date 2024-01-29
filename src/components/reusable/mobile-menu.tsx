import { component$, useSignal, useTask$ } from "@builder.io/qwik"


export default  component$(() =>{
  //const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const mobileNavOpen = useSignal<boolean>(false);
  const trigger = useSignal<HTMLButtonElement>();
  const mobileNav = useSignal<HTMLDivElement>()

  // close the mobile menu on click outside
  // useTask$(() => {
  //   const clickHandler = ({ target }: { target: EventTarget | null }): void => {
  //     if (!mobileNav.value || !trigger.value) return;
  //     if (!mobileNavOpen.value || mobileNav.value.contains(target as Node) || trigger.value.contains(target as Node)) return;
  //     mobileNavOpen.value = false;
  //   };
   
  // })

  // // close the mobile menu if the esc key is pressed
  // useTask$(() => {
  //   const keyHandler = ({ keyCode }: { keyCode: number }): void => {
  //     if (!mobileNavOpen.value || keyCode !== 27) return;
  //     mobileNavOpen.value = false;
  //   };
  //   // document.addEventListener('keydown', keyHandler)
  //   // return () => document.removeEventListener('keydown', keyHandler)
  // })

  return (
    <div class="flex items-center ml-4 md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        class={`hamburger ${mobileNavOpen.value && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick$={() => mobileNavOpen.value = !mobileNavOpen.value}
        
      >
        <span class="sr-only">Menu</span>
        <svg class="w-5 h-5 transition duration-150 ease-in-out fill-current text-slate-300 hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <rect y="2" width="20" height="2" rx="1" />
          <rect y="9" width="20" height="2" rx="1" />
          <rect y="16" width="20" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        class="absolute left-0 z-20 w-full px-4 overflow-hidden transition-all duration-300 ease-in-out top-full sm:px-6"
        style={mobileNavOpen.value ? { maxHeight: mobileNav.value?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul class="border border-transparent [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] rounded-lg px-4 py-1.5">
          <li>
            <a class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" href="/about">About</a>
          </li>
          <li>
            <a class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" href="/integrations">Integrations</a>
          </li>
          <li>
            <a class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" href="/pricing">Pricing</a>
          </li>
          <li>
            <a class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" href="/customers">Customers</a>
          </li>
          <li>
            <a class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" href="/changelog">Changelog</a>
          </li>
        </ul>
      </nav>
    </div>
  )
})
