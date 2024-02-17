import axios from "axios";
import { errorMessage } from "../utils/errorMessage";

import { IP_API } from "./config";

export default function useFetchUser() {
  const loginFetch = async (userName, password) => {
    try {
      const response = await axios.post(`${IP_API}/user`, {
        username: userName,
        password: password,
      });

      return { status: response.status, data: response.data };
    } catch (e) {
      const message = errorMessage(
        e.response.status,
        e.response.data,
        "Pseudo ou mot de passe incorrect. Utilisateur"
      );

      throw new Error(message);
    }
  };

  return { loginFetch };
}
