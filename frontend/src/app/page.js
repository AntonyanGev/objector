import Main from "@/components/main";
import Navigation from "../components/navigation";
import Signup from "@/components/signUp";
import Login from "@/components/logIn";

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
