import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/ui-landing/hero";
import { useProductDetails } from "./layout";

export default component$(() => {
  const signal = useProductDetails();
 
  return (
    <>
      {signal.value ? (
        <ul >
          {Object.entries(signal.value).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value?.title}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li>No user data available.</li>
        </ul>
      )}
      <Hero></Hero>
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
