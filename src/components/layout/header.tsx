import { component$ } from "@builder.io/qwik";

import styles from "./header.module.css";

import { useAuthSession } from "~/routes/plugin@auth";
import SignIn from "../auth/sign-in";
import SignOut from "../auth/sign-out";

export default component$(() => {
  const session = useAuthSession();

  return (
    <header class={styles.header}>
      <ul>
        <li>
          {session.value?.user?.email ? (
            <>
              <SignOut />
            </>
          ) : (
            <SignIn />
          )}
        </li>
      </ul>
    </header>
  );
});
