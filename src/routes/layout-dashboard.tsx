import { Slot, component$ } from "@builder.io/qwik";
import SignOut from "~/components/auth/sign-out";

export default component$(() => {
  return (
    <>
      <main class="container mx-auto px-4">
      sign out -------<SignOut />
      <h1>~dashboard layout</h1>
      
        <Slot />
      </main>
    </>
  );
});
