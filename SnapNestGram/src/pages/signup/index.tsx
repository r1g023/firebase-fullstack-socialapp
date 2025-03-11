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

const initialValue: UserSignIn = {
  email: "",
  password: "",
  confirmPassword: ""
};

interface ISignupProps {}

const Signup: React.FC<ISignupProps> = () => {
  const [userInfo, setUserInfo] = React.useState<UserSignIn>(initialValue);
  return (
    <div className="max-w-sm rounded-xl border bg-card text-card-foreground shadow-sm">
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
                placeholder="dipesh@example.com"
                value={""}
                onChange={() => ""}
              />
            </div>

            {/*Password*/}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={""}
                onChange={() => ""}
              />
            </div>

            {/*Confirm Password*/}
            <div className="grid gap-2">
              <Label htmlFor="confirmpassword">Confirm password</Label>
              <Input
                id="confirmpassword"
                type="password"
                placeholder="Confirm password"
                value={""}
                onChange={() => ""}
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
