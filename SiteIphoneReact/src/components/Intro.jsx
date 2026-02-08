function Intro (){

    const specs =[
        {value: '6.3', label: 'Display Super Retina XDR', color: 'text-blue-600' },
        {value: 'A18 Pro', label: 'Chip mais rapido', color: 'text-orange-500' },
        {value: '48MP', label: 'Sistema de câmera', color: 'text-blue-600' },
        {value: '28h', label: 'Bateria', color: 'text-orange-500' }
    ]

    return(
        <section className=" bg-black py-20 px-6">
            <div className=" max-w-5xl mx-auto text-center">
                <h1 className=" text-6xl md:text-8xl font-bold mb-6">Iphone 17 Pro</h1>
                <p className=" text-2xl md:text-3xl mb-4 text-gradient font-bold">Titânio.Tão Forte. Tão Leve. Tão Pro.</p>
                <p className=" text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">O designe mais refinado que ja criamos, Titânio de grau aeroespacial. Chip A18 Pro. Sistema de câmera Pro revolucionario</p>
            </div>
            <div>
                <button>Compre agora</button>
                <button>Saiba mais</button>
            </div>
        </section>
    )
}

export default Intro