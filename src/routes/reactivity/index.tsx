import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({ count: 0 });
  console.log(store);
  return (
    <>
      <div class="flex m-10 flex-col align-middle justify-center pb-16 pt-32 md:pb-32 md:pt-52">
        <h1 class="h1">Fine grained reactivity</h1>
        <p>
          <button class="text-center -mt-80" onClick$={() => store.count++}>
            {store.count}
          </button>
          
        </p>
      </div>
    </>
  );
});
