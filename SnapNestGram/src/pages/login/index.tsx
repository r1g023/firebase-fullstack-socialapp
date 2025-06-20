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
import { UserLogIn } from "@/types";
import { Label } from "@radix-ui/react-label";
import { useUserAuth } from "@/context/userAuthContext";
import image1 from "@/assets/images/image1-firebase.jpg";
import image2 from "@/assets/images/image2-firebase.jpg";
import image3 from "@/assets/images/image3-firebase.jpg";
import image4 from "@/assets/images/image4-firebase.jpg";

const initialValue: UserLogIn = {
  email: "",
  password: ""
};

const Login: React.FunctionComponent = () => {
  const { googleSignIn, logIn } = useUserAuth();
  const navigate = useNavigate();
  const [userLogInInfo, setuserLogInInfo] =
    React.useState<UserLogIn>(initialValue);

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      alert("Google sign-in failed. Please try again.");
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await logIn(userLogInInfo.email, userLogInInfo.password);
      navigate("/");
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-form-slate-800 w-full h-screen">
      <div className="container mx-auto p-6 flex h-full">
        <div className="flex justify-center items-center w-full">
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
          <div className="max-w-md w-full rounded-xl bg-form-white text-form-black shadow-lg">
            <Card>
              <form onSubmit={handleSubmit} className="w-full">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center mb-4">
                    PhotoGram
                  </CardTitle>
                  <CardDescription className="text-form-gray-500">
                    Enter your email below to log in to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 p-6">
                  <div className="grid">
                    <Button
                      variant="outline"
                      onClick={handleGoogleSignIn}
                      className="bg-form-white text-form-black border-form-black hover:bg-form-white hover:text-form-black w-full py-3">
                      <Icons.google className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                  </div>

                  <div className="relative flex items-center my-4">
                    <div className="flex-grow border-t border-form-gray-300"></div>
                    <span className="mx-4 text-xs uppercase text-form-gray-500">
                      Or
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
                      placeholder="example@example.com"
                      value={userLogInInfo.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setuserLogInInfo({
                          ...userLogInInfo,
                          email: e.target.value
                        })
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
                      placeholder="Password"
                      value={userLogInInfo.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setuserLogInInfo({
                          ...userLogInInfo,
                          password: e.target.value
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
                    Login
                  </Button>
                  <p className="mt-3 text-sm text-center text-form-gray-800">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-form-black hover:text-link-hover hover:underline">
                      Sign up
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

export default Login;
