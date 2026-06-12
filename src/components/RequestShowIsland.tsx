"use client";

import { EmbedForm, KintanaProvider } from "@kintana/sdk/react";

export function RequestShowIsland({
  apiKey,
  baseUrl,
}: {
  apiKey: string;
  baseUrl: string;
}) {
  return (
    <KintanaProvider apiKey={apiKey} baseUrl={baseUrl}>
      <EmbedForm kind="SHOW_REQUEST" />
    </KintanaProvider>
  );
}
