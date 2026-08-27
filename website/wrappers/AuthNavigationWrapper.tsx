"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthNavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const navigation = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "authenticated") {
      navigation.replace("/dashboard");
    } else if (status === "unauthenticated") {
      navigation.replace("/");
    }
  }, [status, navigation]);

  return <>{children}</>;
}
