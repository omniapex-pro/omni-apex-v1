import { login } from "../shopify.server";

// This loader handles the initial hit to the app URL
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  
  // If Shopify sends them here with a ?shop param, log them in
  if (url.searchParams.get("shop")) {
    return await login(request);
  }
  
  // Otherwise, send them to the login page
  return await login(request);
};
