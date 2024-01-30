import { component$, createContextId, useContextProvider } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/ui-landing/hero";
import type { Product} from "./layout";
import { useProductDetails } from "./layout";

export const CTX = createContextId< Product[] >('CTX');
export default component$(() => {
  const signal = useProductDetails();
  useContextProvider(CTX, signal.value);
  return (
    <>
      <Hero userData={signal.value}></Hero>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
