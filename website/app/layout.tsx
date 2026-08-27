import Navbar from "@/components/Navbar";
import "./globals.css";
import AuthWrapper from "@/wrappers/AuthWrapper";
import AuthNavigationWrapper from "@/wrappers/AuthNavigationWrapper";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <AuthWrapper>
          <AuthNavigationWrapper>
            <Navbar />
            <div>{children}</div>
          </AuthNavigationWrapper>
        </AuthWrapper>
      </body>
    </html>
  );
}
