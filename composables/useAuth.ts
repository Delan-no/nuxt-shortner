import axios from "axios"
import type { LoginPayload, RegisterPayload, User } from "~/@types";
export const useAuth = () => {


  /**
    * C'est une fonction qui récupère l'utilisateur connecté dans la base de données
    */
  async function getUser(): Promise<User  | null> {
    try {
      const res = await axios.get("/user");
      const user = res.data;
      return user;
    } catch (e: unknown) {
      return null;
    }
  }
  async function login(payload: LoginPayload) {
    const res = await axios.post('/api/login', payload)

    if (res.data) {
      useRouter().replace("/profiles");
    }
    console.log(res);

  }

  async function logout() {
    await axios.post('/api/logout');
    useRouter().replace("/auth/login");
  }

  async function register(payload: RegisterPayload) {
    try {
      await axios.post('/api/register', payload)
      await axios.post('/auth/login', {
        email: payload.email,
        password: payload.password
      })
    } catch (error) {

    }
  }

  return {
    login,
    logout,
    register
  }


}
