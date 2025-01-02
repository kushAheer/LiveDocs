import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./Provider";


const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Live Docs",
	description: "Your go-to Collaborative Documentation Platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{ 
				baseTheme: dark,
				variables : {
					colorPrimary : "#3371FF",
					fontSize : "16px",
				}
			 }}
		>
			<html lang="en">
				<body className={cn("min-h-screen", "font-sans", geistSans, geistMono)}>
					<Provider>
			 			

							{children}
						
					</Provider>
				</body>
			</html>
		</ClerkProvider>
	);
}
