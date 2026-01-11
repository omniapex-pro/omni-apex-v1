import { redirect } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { isMockShop } = await authenticate.admin(request);

  if (isMockShop) {
     return null; 
  }

  return redirect(
    `/?shop=${new URL(request.url).searchParams.get("shop")}`
  );
};
