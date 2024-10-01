import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Interactive Comments",
	description: "Interactive Comments with Next.js",
	twitter: {
		images: "/assets/images/social-preview.png",
		card: "summary_large_image",
		creator: "@juliusomo",
		site: "@juliusomo",
		title: "Interactive Comments with Next.js",
		description: "Interactive Comments with Next.js",
	},
	openGraph: {
		images: "/assets/images/social-preview.png",
		type: "website",
		url: "https://interactive-comments-nextjs-6cnxsd2dp.vercel.app/",
		siteName: "Interactive Comments with Next.js",
		title: "Interactive Comments with Next.js",
		description: "Interactive Comments with Next.js",
	}
		
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
