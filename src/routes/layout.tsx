import { Session } from "@auth/core/types";
import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Header from "~/components/layout/header";


export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const onRequest: RequestHandler = async ({
  sharedMap,
  url,
  redirect,
}) => {
  const session: Session | null = sharedMap.get("session");
  if (
    !session &&
    url.pathname !== "/signin/" 
  ) {
    throw redirect(302, `/signin/`);
  }
};

export default component$(() => {
  return (
    <>
      <Header />
      <main class="container mx-auto px-4">
        <Slot  />
      </main>
    </>
  );
  return <Slot />;
});
