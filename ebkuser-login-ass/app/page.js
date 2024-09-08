import Image from "next/image";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div>
        <main className="row-span-1 gap-3">
        <LoginForm />
      </main>
    </div>
  );
}
