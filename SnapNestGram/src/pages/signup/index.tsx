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
import { UserSignIn, UserLogIn } from "@/types";
import { Label } from "@radix-ui/react-label";
import { useUserAuth } from "@/context/userAuthContext";

const initialValue: UserSignIn = {
  email: "",
  password: "",
  confirmPassword: ""
};

interface ISignupProps {}

const Signup: React.FC<ISignupProps> = () => {
  const { googleSignIn, signUp } = useUserAuth();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = React.useState<UserSignIn>(initialValue);

  // Google Sign In
  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Google Sign In");
    try {
      console.log("Google Sign In");
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  // submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("userInfo-->", userInfo);

    try {
      console.log("The user info is: ", userInfo);
      await signUp(userInfo.email, userInfo.password);
      navigate("/");
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  };

  return (
    <div
      className="max-w-sm rounded-xl border bg-card text-card-foreground shadow-sm"
      style={{ border: "3px solid red" }}>
      <Card>
        {/*Header*/}
        <form onSubmit={e => e.preventDefault()}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center mb-4">
              SnapNestGram
            </CardTitle>
            <CardDescription>
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>

          {/*Content*/}
          <CardContent className="grid gap-4">
            <div className="grid">
              <Button variant="outline" onClick={() => ""}>
                <Icons.google className="mr-2 h-4 w-4" />
                Google
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

            {/*Email*/}
            <div className="grid gap-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={userInfo.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
            </div>

            {/*Password*/}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={userInfo.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />
            </div>

            {/*Confirm Password*/}
            <div className="grid gap-2">
              <Label htmlFor="confirmpassword">Confirm password</Label>
              <Input
                id="confirmpassword"
                type="password"
                placeholder="Confirm password"
                value={userInfo.confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserInfo({ ...userInfo, confirmPassword: e.target.value })
                }
              />
            </div>
          </CardContent>

          {/*Footer*/}
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
            <p className="mt-3 text-sm text-center">
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
