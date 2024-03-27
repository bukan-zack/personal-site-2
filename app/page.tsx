export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            <section className="relative grid-bg">
                <div className="min-h-screen container mx-auto px-8 flex flex-col justify-center items-center text-center">
                    <h1 className="text-6xl text-white font-bold max-w-4xl">
                        Software engineer who transforms ideas into reality.
                    </h1>
                    <p className="text-white mt-4 max-w-4xl">
                        A self-motivated Go expert hailing from the vibrant landscape of Sarawak, Malaysia, with four years of immersive experience in the software engineering world.
                    </p>
                </div>
                <p className="absolute bottom-0 right-0 px-8 py-12 text-base font-mono text-white/20 text-right uppercase">
                    println!("Hello, world!");
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
