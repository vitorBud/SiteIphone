

function Hero() {
    return (
        <section className=" relative h-screen overflow-hidden bg-black">
            <div className="absolute top-18 bottom-0 right-0 left-0 z-0 ">
                <img src="../../img/hero.jpg" className=" p10 w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
            </div>

            {/* svg da seta apontando pra baixo */}
            <div className=" absolute bottom-8 left-1/2 z-10 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </div>
        </section>
    )
}

export default Hero