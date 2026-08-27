import Navbar from "@/components/Navbar";
import "./globals.css";
import AuthWrapper from "@/wrappers/AuthWrapper";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <AuthWrapper>
          <Navbar />
          <div>{children}</div>
        </AuthWrapper>
      </body>
    </html>
  );
}
