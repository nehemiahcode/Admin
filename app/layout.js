import "./globals.css";


export const metadata = {
  title: "Sydmin",
  description:
    "Sydmin Admin dashboard Created with React.js/Next.js/Tailwind-Css. Fast, Responsive and Proffesonal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
