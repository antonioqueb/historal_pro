import { Search } from "lucide-react";
import Image from "next/image";
import SearchHome from "@/components/SearchHome";
import Header from "@/components/Header"


export default function Home() {
  return (
    <>
    <Header />
    <main  className="w-full">
    <SearchHome />

    </main>
    </>
  );
}
