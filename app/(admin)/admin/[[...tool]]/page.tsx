import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

export const dynamic = "force-static";
// export const revalidate = 60;
export { metadata, viewport } from "next-sanity/studio";
export default function AdminPage() {
  return <NextStudio config={config} />;
}
