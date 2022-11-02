export default function Preferences() {
    return (
        <div className="bg-zinc-50 flex justify-center py-5 px-10 min-h-screen">
            <div className="bg-white w-1/2 m-0 shadow-sm">
                <header className="border-b border-solid border-zinc-150 p-5">
                    <h1 className="text-3xl">Bem-vindo a central de preferências</h1>
                </header>
                <div className="py-4 px-8">
                    <div className="grid ">
                        <header className="grid grid-cols-2 pb-3">
                            <h3 className="text-lg font-medium">Propósito de processamento</h3>
                            <h3 className="text-lg font-medium">Consentimentos coletados</h3>
                        </header>

                        <section className="grid grid-cols-2 border-b border-solid border-zinc-150 pb-10">
                            <div>
                                <h4 className="font-semibold">Contato</h4>
                                <p>Contato</p>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="e-mail"  />
                                <label htmlFor="e-mail" className="pl-2">Enviar e-mail</label>
                            </div>
                        </section>

                        {/* <section className="grid grid-cols-2 border-b border-solid border-zinc-150">

                            <div>
                                <h4>Contato</h4>
                                <p>Contato</p>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="e-mail" />
                                <label htmlFor="e-mail">Enviar e-mail</label>
                            </div>
                        </section>

                        <section className="grid grid-cols-2">

                            <div>
                                <h4>Contato</h4>
                                <p>Contato</p>
                            </div>
                            <div>
                                <div className="">
                                <input type="checkbox" name="" id="e-mail" />
                                <label htmlFor="e-mail">Enviar e-mail</label>
                                </div>
                            </div>
                        </section> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
