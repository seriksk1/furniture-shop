import React from "react"
import { LogoIcon } from "../../assets/icons"
import { Button, InputField } from "../../components"

const authBackgroundImage = require("../../assets/images/auth-bg-1.png")

export const Auth: React.FC = () => {
  return (
    <div className="h-screen flex ">
      <div className="relative h-full flex flex-1 flex-col justify-center items-center px-[25px] py-[25px]">
        <LogoIcon className="absolute top-[25px]" />

        <div className="w-[375px]">
          <InputField />
          <InputField />
          <Button className="my-[20px] justify-end" color="text-gray" asText>
            Forgot Password?
          </Button>
          <Button fullWidth>Login</Button>
        </div>
      </div>
      <div className="h-full flex flex-1">
        <img className="w-full h-full object-cover" src={authBackgroundImage} alt="interior" />
      </div>
    </div>
  )
}
