import Image from "next/image";
import LoginForm from "@/app/loginForm/page";



export default function Home() {
  return (
      <div className="home-page">
          <div>
              <LoginForm/>
          </div>
      </div>
  );
}
