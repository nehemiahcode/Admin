
import "../globals.css";


export const metadata = {
  title: "Sydmin | Dashboard",
  description: "User Dashboard. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>

  );
}
