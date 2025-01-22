export const onSubmit = async (data, handleLogin, reset) => {
  if (!handleLogin) {
    throw new Error("handleLogin is not a function");
  }
  await handleLogin(data);
  reset();
};
