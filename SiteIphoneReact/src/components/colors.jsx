import { useState } from "react"

function Colors() {

    const colors = [
        { id: 'blue', name: 'Titânio Azul', image: '/img/iphone-blue.jpg', colorClass: 'bg-blue-500' },
        { id: 'silver', name: 'Titânio Natural', image: '/img/iphone-silver.jpg', colorClass: 'bg-gray-300' },
        { id: 'orange', name: 'Titânio Laranja', image: '/img/iphone-orange.jpg', colorClass: 'bg-orange-500' }
    ]

    const models = [
        { name: 'PRO MAX', screen: '6.9 polegadas', storage: '256GB, 512GB ou 1TB', battery: '33h de video', weight: '221g' },
        { name: 'PRO', screen: '6.3 polegadas', storage: '128GB, 512GB ou 1TB', battery: '29h de video', weight: '199g' },
    ]

    const [selectedColor, setSelectedColor] = useState('blue')

    return (
        <section id="cores" className=" bg-black py-20 px-8">
            <div className=" max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className=" text-7xl mb:text-6xl font-bold">Escolha sua cor</h2>
                    <p className="text-xl text-gray-400 mt-1">Quatro acabamentos em titânio lindos</p>
                </div>

                <div className="flex justify-center mb-12 ">
                    <div className=" relative w-full max-w-3xl">
                        <div className=" relative flex items-center justify-center min-h-125">
                            <img src={colors.find(color => color.id === selectedColor).image} 
                            alt="iphone 17"
                            className=" max-h-full max-h-[600px] mx-auto"></img>
                        </div>

                        <div className=" absolute bottom-8 left-0 right-0 text-center">
                            <div className=" px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                                <h3 className=" text-2xl font-semibold">{colors.find(color => color.id ===selectedColor).name}</h3>
                            </div>
                        </div>

                    </div>
                </div>

                <div className=" flex justify-center items-center gap-4">
                    {colors.map(color =>(
                        <button key={color.name} 
                        onClick={() => 
                        setSelectedColor(color.id)}
                        className={` relative transition-all duration-300 cursor-pointer`}>
                            <div className={`w-16 h-16 rounded-full border-4 ${color.colorClass} ${selectedColor === color.id? 'border-white' : 'border-gray-500'}`}></div>
                        </button>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Colors