import Main from "@/components/main/Main";
import Navigation from "../components/navigation/Navigation";
import Signup from "@/components/signUp/SignUp";
import Login from "@/components/logIn/Login";

export default function Home() {
  return (
    <>
      <Navigation />
      <Main />
      <Signup />
      <Login />
    </>
  );
}
