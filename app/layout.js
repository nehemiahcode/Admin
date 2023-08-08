import "./globals.css";


export const metadata = {
  title: "Nehemiah | Portfolio",
  description:
    "Hi my name is Nehemiah, i am a fullstack web developer I am quietly confident, naturally curious and keep working on improving my skills Feel free to get in touch with me for your awesome Project today. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
