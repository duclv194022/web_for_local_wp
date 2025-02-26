"use client";

import { useRouter } from "next/navigation";
import type React from "react";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithAuth(props: P) {
    const { authData, isLoading } = useAuth();
    console.log("AAAAA", authData, isLoading);
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !authData) {
        router.push("/user/login");
      }
    }, [authData, isLoading, router]);

    if (isLoading) {
      return null; // or a loading spinner
    }

    if (!authData) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
