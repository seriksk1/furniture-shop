import React from "react"
import { LogoIcon } from "../../assets/icons"
import { Button, InputField } from "../../components"

const authBackgroundImage = require("../../assets/images/auth-bg-1.png")

export const Auth: React.FC = () => {
  return (
    <div>
      <div>
        <LogoIcon />
        <div>
          <InputField />
          <InputField />
          <Button>Forgot Password?</Button>
          <Button>Login</Button>
        </div>
      </div>
      <div>
        <img src={authBackgroundImage} alt="interior" />
      </div>
    </div>
  )
}
