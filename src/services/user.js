import { UsersCollection } from '../db/models/user.js';

export const getUserById = async (userId) => {
  const user = await UsersCollection.findOne({ _id: userId });
  return user;
};
