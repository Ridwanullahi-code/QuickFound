import { createClient, type ClientConfig } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-02-23",
  useCdn: true,
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN,
};

export const client = createClient(config)

const builder = ImageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
