import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { BRAND_MOTTO } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sbe.studio"),
  title: {
    default: `${BRAND_MOTTO} — Space Bot Engineering Studio`,
    template: "%s · Space Bot Engineering Studio",
  },
  description:
    `${BRAND_MOTTO}. An engineering studio in Oklahoma City building Ai systems that run in production.`,
  keywords: [
    "Ai consulting Oklahoma City",
    "Ai implementation",
    "Space Bot Engineering Studio",
    "production Ai systems",
    "small business Ai",
  ],
  openGraph: {
    title: BRAND_MOTTO,
    description:
      "Space Bot Engineering Studio builds Ai systems that run in production.",
    type: "website",
    locale: "en_US",
    siteName: "Space Bot Engineering Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_MOTTO,
    description:
      "Space Bot Engineering Studio builds Ai systems that run in production.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Space Bot Engineering Studio",
  alternateName: "SBE",
  url: "https://sbe.studio",
  description:
    "An engineering studio in Oklahoma City. Building Ai systems that run in production. Every claim on this site links to a file on a hard drive.",
  slogan: BRAND_MOTTO,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oklahoma City",
    addressRegion: "OK",
    addressCountry: "US",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="bg-sbe-canvas text-sbe-ink font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
