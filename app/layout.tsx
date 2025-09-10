import "./globals.css";

export const metadata = {
  title: {
    default: "Welcome to Mava",
    template: "%s | Mava",
  },
  description: "",
  ogImage: "/mava-ogimage.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}
