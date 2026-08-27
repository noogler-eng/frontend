import Navbar from "@/components/Navbar";
import AuthWrapper from "@/wrappers/AuthWrapper";
import AuthNavigationWrapper from "@/wrappers/AuthNavigationWrapper";
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <AuthWrapper>
        <body className="h-full w-full flex flex-row">
          <AuthNavigationWrapper>
            <Navbar />
            <div className="flex-1">
              {children}
            </div>
          </AuthNavigationWrapper>
        </body>
      </AuthWrapper>
    </html>
  );
}
