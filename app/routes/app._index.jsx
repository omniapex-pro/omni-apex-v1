import { json } from "@remix-run/node";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { Page, Layout, Card, Text, Button, BlockStack, Badge } from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import { getSchema, syncSchema } from "../services/schema.server";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const schema = await getSchema(session.shop);
  return json({ schema, shop: session.shop });
};

export const action = async ({ request }) => {
  await syncSchema(request);
  return json({ status: "synced" });
};

export default function Index() {
  const { schema, shop } = useLoaderData();
  const fetcher = useFetcher();
  const isLoading = fetcher.state === "submitting";

  return (
    <Page fullWidth>
      <div style={{ marginBottom: "2rem" }}>
        <Text variant="heading3xl" as="h1">OMNIGRAPH APEX</Text>
        <Text variant="bodySm" as="p" tone="subdued">
          Connected to: <span style={{ fontFamily: "monospace" }}>{shop}</span>
        </Text>
      </div>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Text variant="headingMd" as="h2">SCHEMA VAULT</Text>
                <fetcher.Form method="post">
                  <Button submit loading={isLoading} variant="primary" tone="critical">FORCE SYNC</Button>
                </fetcher.Form>
              </div>
              <Text as="p">Total Definitions Monitored: <strong>{schema.length}</strong></Text>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
