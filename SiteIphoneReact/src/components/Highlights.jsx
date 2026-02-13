function Highlights() {

    const carac = [
        { value: '48MP', label: 'Principal', text: 'Sensor quad-pixel com foco aumentado', color: 'text-blue-600' },
        { value: '12MP', label: 'Ultra Wide', text: 'Campo de Visão 120° em visao noturno ', color: 'text-orange-500' },
        { value: '12MP', label: 'Telefoto 5x', text: 'Zoom óptico de 5x com estabilização', color: 'text-blue-600' },
    ]

    return (
        <section className=" bg-black py-20 px-6" id="design">
            <div className=" max-w-5xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Design Revolucionario</h2>
                    <p className=" text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor experiencia</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">
                    <div className=" bg-gray-900 rounded-3xl p-8">
                        <img className=" w-full rounded-2xl mb-4" src="../../img/titanium-design.jpg" alt="iphone titanium"></img>
                        <h3 className=" font-bold mb-2 text-3xl">Titanium Premium</h3>
                        <p className="text-gray-300">Estrutura em titanio de grau aeroespacial. O smartphone mais forte e leve</p>
                    </div>

                    <div className=" bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../img/ios-features.jpg" alt="ios 2025" />
                        <h3 className=" font-bold mb-2 text-3xl">IOS 26</h3>
                        <p className="t">Sistema operacional mais avançado do mundo com IA integrada. </p>
                    </div>
                </div>


                <div className=" bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className=" text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip mais poderoso em um smartphone</p>
                    <img className=" w-full rounded-2xl mb-4" src="../../img/chip-a18-pro.jpg" alt="chip a18" />

                    <ul className="space-y-3 text-gray-300 ">
                        <li className=" list-disc">CPU 20% mais rápida</li>
                        <li className=" list-disc">GPU 25% mais eficiente</li>
                        <li className=" list-disc">Neural Engine com 16 núcleos</li>
                        <li className=" list-disc">Ray TRacing acelerado por hardware</li>
                    </ul>
                </div>

                <div className=" text-center mb-12" id="camera">
                    <h3 className="text-3xl font-bold mb-4">Sistema de câmera Pro avançado</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-5xl">
                    {carac.map((carac, index) => (
                        <div key={index} className=" bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer">
                            <p className={`text-3xl font-bold mb-2 ${carac.color}`}>{carac.value}</p>
                            <p className=" mb-1 font-bold">{carac.label}</p>
                            <p className=" text-gray-400">{carac.text}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default Highlights