import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";

Deno.test("exemplo", () =>  {
  assertEquals("world", "world");
  assertEquals({ hello: "world" }, { hello: "world" });
});