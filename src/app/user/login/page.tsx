"use client";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { apis } from "@/lib/apis";
import { useEffect } from "react";

interface LoginInputs {
  username: string;
  password: string;
}

export default function UserLogin() {
  const router = useRouter();
  const { login, isLoading, authData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  useEffect(() => {
    if (!isLoading && authData) {
      router.push("/user/other-users");
    }
  }, [authData, isLoading, router]);

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const response = await fetch(apis.user_login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.statusCode === 200) {
        const { token, user } = result.data;
        login({ token, user });
        router.push("/user/other-users");
      } else {
        // Handle login error
        console.error("Login failed:", result.message);
        // You might want to show an error message to the user here
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle network or other errors
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  if (authData) {
    return null; // We're redirecting, no need to render anything
  }

  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle>User Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
