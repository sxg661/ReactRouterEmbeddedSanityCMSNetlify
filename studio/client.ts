import { createClient } from "@sanity/client";

export default createClient({
  projectId: 'xtdehwie',
  dataset: 'dev',
  useCdn: true,
  apiVersion: '2026-03-01',
});