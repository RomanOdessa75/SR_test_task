import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarpathianSecret",
  description: "CarpathianSecret Web-site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

// --------------------------------------------------------

// import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: "CarpathianSecret",
// 	description: "CarpathianSecret Web-site",
// };

// export default function RootLayout({ children }) {
// 	return (
// 		<html lang="en">
// 			<body className={inter.className}>{children}</body>
// 		</html>
// 	);
// }
