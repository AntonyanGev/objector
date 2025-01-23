import { useMutation } from "@apollo/client";
import { SIGNUP } from "@/app/service/mutation/signUp";

export const useAddUser = () => {
  const [signUp] = useMutation(SIGNUP);

  const addUser = async (formData) => {
    try {
      const { data } = await signUp({ variables: { add: formData } });

      return data.addUser;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return { addUser };
};
