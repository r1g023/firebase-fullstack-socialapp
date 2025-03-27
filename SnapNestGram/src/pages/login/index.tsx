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

const Login: React.FC = () => {
  const { googleSignIn, logIn } = useUserAuth();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = React.useState<UserLogIn>(initialValue);

  // Google Sign In
  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard"); // Redirect to dashboard or home after login
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await logIn(userInfo.email, userInfo.password);
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <div className="bg-slate-800 w-full h-screen">
      <div className="container mx-auto p-6 flex h-full">
        <div className="flex justify-center items-center w-full">
          {/* Left side images */}
          <div className="p-6 w-2/3 hidden lg:block">
            <div className="grid grid-cols-2 gap-2">
              <img
                className="w-2/3 h-auto aspect-video rounded-3xl place-self-end"
                src={image2}
              />
              <img
                className="w-2/4 h-auto aspect-auto rounded-3xl"
                src={image1}
              />
              <img
                className="w-2/4 h-auto aspect-auto rounded-3xl place-self-end"
                src={image4}
              />
              <img
                className="w-2/3 h-auto aspect-video rounded-3xl"
                src={image3}
              />
            </div>
          </div>
          {/* Right side form */}
          <div className="p-6 w-full lg:w-1/4">
            <div className="max-w-sm mx-auto rounded-xl border bg-card text-card-foreground shadow-sm">
              <Card>
                <form onSubmit={handleSubmit}>
                  {/* Header */}
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center mb-4">
                      Welcome Back
                    </CardTitle>
                    <CardDescription>
                      Enter your credentials to log in
                    </CardDescription>
                  </CardHeader>

                  {/* Content */}
                  <CardContent className="grid gap-4">
                    <div className="grid">
                      <Button variant="outline" onClick={handleGoogleSignIn}>
                        <Icons.google className="mr-2 h-4 w-4" />
                        Continue with Google
                      </Button>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or
                        </span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={userInfo.email}
                        onChange={e =>
                          setUserInfo({ ...userInfo, email: e.target.value })
                        }
                      />
                    </div>

                    {/* Password */}
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={userInfo.password}
                        onChange={e =>
                          setUserInfo({ ...userInfo, password: e.target.value })
                        }
                      />
                    </div>
                  </CardContent>

                  {/* Footer */}
                  <CardFooter className="flex flex-col">
                    <Button className="w-full" type="submit">
                      Login
                    </Button>
                    <p className="mt-3 text-sm text-center">
                      Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
