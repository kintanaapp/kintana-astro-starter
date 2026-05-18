"use client";

import { EmbedForm, KintanaProvider } from "@kintana/sdk/react";

export function RequestShowIsland({
  apiKey,
  baseUrl,
  formId,
}: {
  apiKey: string;
  baseUrl: string;
  formId: string;
}) {
  return (
    <KintanaProvider apiKey={apiKey} baseUrl={baseUrl}>
      <EmbedForm id={formId} />
    </KintanaProvider>
  );
}
