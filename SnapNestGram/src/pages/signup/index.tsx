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
    <div className="w-full min-h-screen bg-dark-navy">
      <div className="container mx-auto p-6 flex h-full">
        <div className="flex justify-center items-center w-full">
          {/* Image Gallery - Left Side */}
          <div className="p-6 w-2/3 hidden lg:block">
            <div className="grid grid-cols-2 gap-2">
              <img
                className="w-2/3 h-auto aspect-video rounded-lg object-cover place-self-end"
                src={image2}
                alt="Gallery 2"
              />
              <img
                className="w-2/4 h-auto aspect-auto rounded-lg object-cover"
                src={image1}
                alt="Gallery 1"
              />
              <img
                className="w-2/4 h-auto aspect-auto rounded-lg object-cover place-self-end"
                src={image4}
                alt="Gallery 4"
              />
              <img
                className="w-2/3 h-auto aspect-video rounded-lg object-cover"
                src={image3}
                alt="Gallery 3"
              />
            </div>
          </div>

          {/* Signup Form - Right Side */}
          <div className="p-6 w-full lg:w-1/3 flex justify-center">
            <Card className="w-full max-w-md border border-border bg-card text-card-foreground shadow-lg">
              <form onSubmit={handleSubmit}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center font-bold text-foreground">
                    Create Account
                  </CardTitle>
                  <CardDescription className="text-center text-muted-foreground">
                    Join our community today
                  </CardDescription>
                </CardHeader>

                <CardContent className="grid gap-4">
                  <div className="grid">
                    <Button
                      variant="outline"
                      onClick={handleGoogleSignIn}
                      className="flex items-center justify-center border-border bg-background hover:bg-accent text-foreground">
                      <Icons.google className="mr-2 h-4 w-4" />
                      Sign up with Google
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="px-2 bg-card text-muted-foreground">
                        Or continue with email
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="border-border bg-background text-foreground"
                      value={userInfo.email}
                      onChange={e =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="password" className="text-foreground">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="border-border bg-background text-foreground"
                      value={userInfo.password}
                      onChange={e =>
                        setUserInfo({ ...userInfo, password: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="confirmPassword"
                      className="text-foreground">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="border-border bg-background text-foreground"
                      value={userInfo.confirmPassword}
                      onChange={e =>
                        setUserInfo({
                          ...userInfo,
                          confirmPassword: e.target.value
                        })
                      }
                      required
                    />
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col">
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    type="submit">
                    Sign Up
                  </Button>
                  <p className="mt-4 text-sm text-center text-muted-foreground">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary hover:underline">
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
