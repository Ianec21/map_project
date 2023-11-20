import { Button } from "../ui/button";

const HomePage: React.FC = () => {
    return (
        <main className="flex grow h-screen justify-center items-center flex-col gap-5">
            <p className="text-6xl font-bold">Countries.</p>
            <Button>Get Started</Button>
        </main>
    )
}

export default HomePage;