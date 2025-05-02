import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { UserSignIn } from "@/types";
import { Label } from "@radix-ui/react-label";
import { useUserAuth } from "@/context/userAuthContext";
import image1 from "@/assets/images/image1-firebase.jpg";
import image2 from "@/assets/images/image2-firebase.jpg";
import image3 from "@/assets/images/image3-firebase.jpg";
import image4 from "@/assets/images/image4-firebase.jpg";

const initialValue: UserSignIn = {
  email: "",
  password: "",
  confirmPassword: ""
};

const Signup: React.FC = () => {
  const { googleSignIn, signUp } = useUserAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState<UserSignIn>(initialValue);

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInfo.password !== userInfo.confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }
    try {
      await signUp(userInfo.email, userInfo.password);
      navigate("/");
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  };

  return (
    <div className="bg-form-slate-800 w-full h-screen">
      <div className="container mx-auto p-6 flex h-full">
        <div className="flex justify-center items-center w-full">
          {/* Image Gallery - Left Side */}
          <div className="p-6 w-2/3 hidden lg:block">
            <div className="grid grid-cols-2 gap-2">
              <img
                className="w-2/3 h-auto aspect-video rounded-3xl place-self-end"
                src={image2}
                alt="Image 2"
              />
              <img
                className="w-2/4 h-auto aspect-auto rounded-3xl"
                src={image1}
                alt="Image 1"
              />
              <img
                className="w-2/4 h-auto aspect-auto rounded-3xl place-self-end"
                src={image4}
                alt="Image 4"
              />
              <img
                className="w-2/3 h-auto aspect-video rounded-3xl"
                src={image3}
                alt="Image 3"
              />
            </div>
          </div>

          {/* Signup Form - Right Side */}
          <div className="max-w-md w-full rounded-xl bg-form-white text-form-black shadow-lg">
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center mb-4">
                    Create Account
                  </CardTitle>
                  <CardDescription className="text-form-gray-500">
                    Join our community today
                  </CardDescription>
                </CardHeader>

                <CardContent className="grid gap-4">
                  <div className="grid">
                    <Button
                      variant="outline"
                      onClick={handleGoogleSignIn}
                      className="bg-form-white text-form-black border-form-black hover:bg-form-white hover:text-form-black w-full py-3">
                      <Icons.google className="mr-2 h-4 w-4" />
                      Sign up with Google
                    </Button>
                  </div>

                  <div className="relative flex items-center my-4">
                    <div className="flex-grow border-t border-form-gray-300"></div>
                    <span className="mx-4 text-xs uppercase text-form-gray-500">
                      Or continue with email
                    </span>
                    <div className="flex-grow border-t border-form-gray-300"></div>
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="email"
                      className="text-form-black font-bold">
                      Email address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={userInfo.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                      }
                      className="border border-form-black text-form-black"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="password"
                      className="text-form-black font-bold">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={userInfo.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({ ...userInfo, password: e.target.value })
                      }
                      className="border border-form-black text-form-black"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="confirmPassword"
                      className="text-form-black font-bold">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={userInfo.confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({
                          ...userInfo,
                          confirmPassword: e.target.value
                        })
                      }
                      className="border border-form-black text-form-black"
                    />
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col">
                  <Button
                    className="w-full bg-form-black text-form-white hover:bg-button-hover py-3"
                    type="submit">
                    Sign Up
                  </Button>
                  <p className="mt-3 text-sm text-center text-form-gray-800">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-form-black hover:text-link-hover hover:underline">
                      Log in
                    </Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
