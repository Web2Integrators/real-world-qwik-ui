import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <main class="container mx-auto px-4">
      <h1>auth layout</h1>
        <Slot />
      </main>
    </>
  );
});
