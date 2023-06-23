
import { assertRejects } from "https://deno.land/std@0.192.0/testing/asserts.ts";

Deno.test("doesThrow", async function () {
    await assertRejects(
      async () => {
        throw new Error("OIEEEEEEEEE");
      },
    );
    await assertRejects(
      async () => {
        return Promise.reject(new Error());
      },
    );
  });
  

  Deno.test("fails", async function () {
    await assertRejects(
      async () => {
        console.log("Olaaaaaaaaaaaaaaaaaaaaaaaaa");
      },
    );
  });