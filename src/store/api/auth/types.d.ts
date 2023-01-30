interface AuthState {
  user: User | null
  token: string | null
}

interface User {
  email: string
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
  token: string
}

interface LoginResponse extends RegisterResponse {}

interface ChangePasswordResponse extends RegisterResponse {}

interface ForgotPasswordResponse extends RegisterResponse {}
