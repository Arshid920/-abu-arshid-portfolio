import "./globals.css";

export const metadata = {
  title: "Abu Arshid P | Software Engineer, AI & Machine Learning",
  description: "Portfolio of Abu Arshid P: full-stack development and computer-vision projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
