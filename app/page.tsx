import HomePage from "@/components/pages/HomePage";

//here I am splitting the page in server/client components.
//HomePage will be a client component in order to use inputs, buttons, etc.
export default function Home() {
  return <HomePage/>
}
