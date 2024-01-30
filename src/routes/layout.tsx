import { Session } from "@auth/core/types";
import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import Header from "~/components/ui-landing/header";

export interface Product {
  title: string;
}

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

export const useProductDetails = routeLoader$(async () => {
  // This code runs only on the server, after every navigation

  const res = await fetch(
    "https://raw.githubusercontent.com/cruip/cruip-dummy/main/job-board-posts.json",
  );
  if (!res.ok) throw new Error("failed to fetch data");
  const product = await res.json();

  return product as Product[];
});

export const onRequest: RequestHandler = async ({
  sharedMap,
  url,
  redirect,
}) => {
  const session: Session | null = sharedMap.get("session");
  if (!session && url.pathname !== "auth/") {
    // throw redirect(302, `auth/`);
  } else {
    throw redirect(302, `dashboard/`);
  }
};

export default component$(() => {
  return (
    <>
     
      <Header />

      <main class="flex min-h-screen grow flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Slot />
      </main>

      {/* <Footer /> */}
    </>
  );
});
