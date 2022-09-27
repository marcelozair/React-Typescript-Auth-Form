import { IUser } from '../types/user';

const TOKEN_KEY = 'Authorization';
const USER_KEY = 'Users';

const getUsers = (): IUser[] => {
  const users: IUser[] = JSON.parse(localStorage.getItem(USER_KEY) as string);
  if (!users) return [];
  return users;
}

const getUserById = (id: number): IUser => {
  const users = getUsers();
  const userFound = users.find((user) => user.id === id);
  if (!userFound) throw new Error('User does not found');

  return userFound;
}

export const haveSession = (): boolean => {
  try {
    const userId = Number(localStorage.getItem(TOKEN_KEY) as string);
    if (isNaN(userId)) return false;
    const user = getUserById(userId);
    return true;
  } catch(error) {
    return false;
  }
}