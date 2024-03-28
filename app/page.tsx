import Link from "next/link";
import { Button } from "@/app/components/Button";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            <section className="relative grid-bg">
                <div className="min-h-[45rem] md:min-h-screen container mx-auto px-8 flex flex-col justify-center">
                    <h1 className="text-5xl md:text-7xl text-white font-semibold md:max-w-4xl">
                        Transform Ideas Into <span className="text-[#06C258]">Reality.</span>
                    </h1>
                    <p className="text-white mt-6 md:mt-4 md:max-w-4xl">
                        A self-motivated Go expert hailing from the vibrant landscape of Sarawak, Malaysia, with four years of immersive experience in the software engineering world.
                    </p>
                    <div className="mt-12 gap-4 flex flex-row">
                        <Link href="/about">
                            <Button>
                                About Me
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="secondary">
                                Contact
                            </Button>
                        </Link>
                    </div>
                </div>
                {/** Hidden for now. */}
                <div className="absolute top-0 bottom-0 right-0 h-full flex items-center opacity-0 px-8">
                    <img src="/amogus.png" className="h-40" />
                </div>
                <p className="absolute bottom-0 right-0 px-8 py-12 text-base font-mono text-white/20 text-right uppercase">
                    println!(&quot;Hello, world!&quot;);
                    <br />
                    &copy; 2024 Zackry Rosli
                </p>
            </section>
            <section className="min-h-screen py-12 container mx-auto flex flex-col px-8">
                <h2 className="text-5xl text-white font-semibold">
                    Projects
                </h2>
                <p className="mt-4 text-white">SOON.</p>
            </section>
        </main>
    );
}
