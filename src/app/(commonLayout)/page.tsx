"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex justify-center flex-col items-center">
      <h2 className="text-3xl text-center"> Welcome to Next Js Home Page</h2>
      <h2 className="text-4xl text-center"> React Server Components</h2>

      <button className="p-2 cursor-pointer bg-white/50 mt-4" onClick={handleNavigation}>Dashboard</button>
    </div>
  );
};

export default Home;
