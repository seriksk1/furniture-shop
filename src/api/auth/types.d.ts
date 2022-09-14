interface User {
  first_name: string
  last_name: string
}

//-------- Requests --------//

interface RegisterRequest {
  email: string
  password: string
}

interface LoginRequest extends RegisterRequest {}

interface ChangePasswordRequest extends RegisterRequest {
  oldPassword: string
}

interface ForgotPasswordRequest {}

//-------- Responses --------//

interface RegisterResponse {
  user: User
  token: string
}

interface LoginResponse extends RegisterResponse {}

interface ChangePasswordResponse extends RegisterResponse {}

interface ForgotPasswordResponse extends RegisterResponse {}
