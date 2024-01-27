import { component$ } from "@builder.io/qwik";



import { useAuthSession } from "~/routes/plugin@auth";
import SignIn from "../auth/sign-in";
import SignOut from "../auth/sign-out";

export default component$(() => {
  const session = useAuthSession();

  return (
    <header class="flex m-8 bg-gray-500">
      <h1>{JSON.stringify(session.value)}</h1>
      <ul>
        <li>
          
          {session.value?.user?.email ? (
           
             <div class="flex m-3">
              <SignOut />
             </div> 
            
          ) : (
            <SignIn />
          )}
        </li>
      </ul>
    </header>
  );
});
