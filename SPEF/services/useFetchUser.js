import axios from "axios";
import { errorMessage } from "../utils/errorMessage";

import { IP_API } from "./config";

export default function useFetchUser() {
  const loginFetch = async (userName, password) => {
    try {
      const response = await axios.post(`${IP_API}/user`, {
        username: userName,
        password,
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

  const newUser = async (lastName, firstName, userName, password) => {
    try {
      const body = {
        name: lastName,
        firstname: firstName,
        username: userName,
        password: password,
      };

      console.log(body);

      const response = axios.post(`${IP_API}/Student/NewAccount`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return { status: response.status };
    } catch (e) {
      const message = errorMessage(
        e.response.status,
        e.response.data,
        "Nouveau élève"
      );

      throw new Error(message);
    }
  };

  return { loginFetch, newUser };
}
