function Footer() {

    const sections = [
        {
            tittle: 'comprar e saber mais',
            links: ['iphone 17 pro', 'iphone 17 pro max', 'comparar modelos', 'acessorios']
        },
        {
            tittle: 'Especificaçoes',
            links: ['Caracteristicas tecnicas', 'camera', 'Bateria', 'Display']
        },
        {
            tittle: 'Suporte',
            links: ['Suporte ao iphone', 'Apple Care', 'IOS 19', 'Contato']
        },
        {
            tittle: 'Apple',
            links: ['Sobre a apple', 'Sobre a Newsroom', 'Privacidade', 'Carreiras']
        }
    ];


    const buttonLinks = ['Politica de privacidade', 'Termos de uso', 'Vendas']

    return (
        <footer className=" bg-gray-900 border-t border-y-gray-800">
            <div className=" max-w-7xl mx-auto px-6 py-12">
                <div className=" grid md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className=" font-semibold mb-4">{section.tittle}</h4>
                            <ul className=" space-y-2 text-sm text-gray-400">
                                {section.links.map((link, linkindex) => (
                                    <li key={linkindex}>
                                        <a href="#" className=" hover:text-white cursor-pointer">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className=" border-t border-gray-800 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4    ">
                    <p className="text-xs text-gray-600">copyright 2026 APPLE Inc. Todos os direitos reservados</p>
                    <div className=" flex gap-6 text-sm text-gray-400">
                        {buttonLinks.map((buttonlink, buttonindex) =>(
                        <a href="#" key={buttonindex} className="hover:text-white">{buttonlink}</a>
                    ))}
                    </div>
                </div>
                <p className="text-xs text-gray-600 mt-6">Site criado para estudo</p>
            </div>

            </div>
        </footer>
    )

}

export default Footer