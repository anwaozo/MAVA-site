"use server";

export async function pushToSheet(data: {
  name: string;
  email: string;
  location: string;
}) {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_WEB_APP_URL;
  if (!url) {
    throw new Error("Google Script Web App URL is not defined");
  }
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
