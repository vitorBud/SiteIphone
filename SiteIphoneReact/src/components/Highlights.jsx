function Highlights() {

    return (
        <section className=" bg-black py-20 px-6" id="design">
            <div className=" max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Design Revolucionario</h2>
                    <p className=" text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor experiencia</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">
                    <div className=" bg-gray-900 rounded-3xl p-8">
                        <img className=" w-full rounded-2xl mb-4" src="../../public/img/titanium-design.jpg" alt="iphone titanium"></img>
                        <h3 className=" font-bold mb-2 text-3xl">Titanium Premium</h3>
                        <p className="text-gray-300">Estrutura em titanio de grau aeroespacial. O smartphone mais forte e leve</p>
                    </div>

                    <div className=" bg-gray-900 rounded-3xl p-8">
                        <img src="../../public/img/ios-features.jpg" alt="ios 2025" />
                        <h3 className=" font-bold mb-2 text-3xl">IOS 26</h3>
                        <p className="text-gray-300">Sistema operacional mais avançado do mundo com IA integrada. </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Highlights