import { api } from "../api";

interface UserData {
  id: string;
  email: string;
  password: string;
  name: string;
  balance: number;
}

export const login = async (
  email: string,
  password: string
): Promise<UserData | null> => {
  const data = await api as UserData;

  if (email !== data.email || password !== data.password) {
    alert(`E-mail ou senha invalidos!`); // sem acento
    return null;
  }

  return data; // 👈 agora retorna o usuário
};