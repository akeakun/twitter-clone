import { Button } from "@/components/ui/button";
import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/types";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const OAuthButtons = () => {
  const { signIn } = useSignIn();

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: process.env.NEXT_PUBLIC_URL as string,
      redirectUrlComplete: "/",
    });
  };

  return (
    <div className="flex flex-col space-y-5">
      <Button
        variant="default"
        className="rounded-full bg-white hover:bg-gray-200"
        onClick={() => {
          signInWith("oauth_google");
        }}
      >
        <FcGoogle size={25} className="mr-2" />
        <p className="text-black">Sign in with Google</p>
      </Button>
      <Button
        variant="default"
        className="rounded-full bg-white hover:bg-gray-200"
        // onClick={() => {
        //   signInWith("oauth_facebook");
        // }}
      >
        <FaFacebook size={25} style={{ color: "#1d9bf0" }} className="mr-2" />
        <p className="text-black">Sign in with FaceBook</p>
      </Button>
    </div>
  );
};

export default OAuthButtons;
