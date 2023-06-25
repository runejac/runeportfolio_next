import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rune Oliveira",
  description: "Rune's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
