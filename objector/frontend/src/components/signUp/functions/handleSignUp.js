export const handleSignup = async (
  data,
  addUser,
  closeSignUpModal,
  reset,
  setSuccessMessage
) => {
  try {
    await addUser(data);
    setSuccessMessage("Registration succeeded!");
    setTimeout(() => {
      closeSignUpModal();
      reset();
    }, 2000);
  } catch (error) {
    console.error("Error during signup:", error.message);
    throw error;
  }
};
