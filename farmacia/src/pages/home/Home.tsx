
function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Bem-vindo a Farmácia!
                        </h2>
                        <p className='text-xl'>
                            Os melhores remédios e produtos russos do mercado!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                            >
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center w-[34.9rem]">
                        <img
                            src="https://i.imgur.com/OAzpZzj.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home