import { json } from "@remix-run/node";

// Note: No ": ActionFunction" type definition here
export const action = async ({ request }) => {
  console.log("Webhook received!");

  // Return 200 OK
  return json({ status: "received" }, { status: 200 });
};

export const loader = () => {
  return json({ message: "This is a webhook endpoint. POST requests only." });
};