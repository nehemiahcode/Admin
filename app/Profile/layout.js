import "../globals.css";
import Themeprovider from "../Components/Themeprovider";


export const metadata = {
  title: "Sydmin | Profile",
  description: "User Profile. ",
};

export default function RootLayouts({ children }) {
  return (
    <html lang="en">
      <body>
        <Themeprovider>
          {children}
        </Themeprovider>
      </body>
    </html>
  );
}