"use server";

import client from "@/db";

export async function signup(username: string, password: string) {
  // should add zod validation here
  console.log(username, password);
  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });

  console.log(user.id);

  return "Signed up!";
}
