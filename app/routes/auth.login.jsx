import { useState } from "react";
import { json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { Page, Card, Button, TextField, BlockStack, Text } from "@shopify/polaris";
import { login } from "../shopify.server";

export const loader = async ({ request }) => {
  return await login(request);
};

export const action = async ({ request }) => {
  return await login(request);
};

export default function Login() {
  const { shop } = useLoaderData();
  const actionData = useActionData();
  const [shopName, setShopName] = useState(shop || "");

  return (
    <Page>
      <Card>
        <BlockStack gap="400">
          <Text variant="headingMd" as="h2">Log in</Text>
          <Form method="post">
            <BlockStack gap="400">
              <TextField
                label="Shop domain"
                name="shop"
                value={shopName}
                onChange={setShopName}
                autoComplete="on"
                error={actionData?.errors?.shop}
              />
              <Button submit variant="primary">Log in</Button>
            </BlockStack>
          </Form>
        </BlockStack>
      </Card>
    </Page>
  );
}
