const Footer = () => {
        return <footer className={'bg-black w-full'}>
            <div className={'container m-auto'}>
                <div className={'flex w-1/4 flex-col py-8 max-md:p-3 max-md:w-1/2 max-sm:w-full'}>
                    <h2 className={'text-white font-bold text-2xl py-4'}>Exclusive</h2>
                    <h3 className={'text-white font-bold py-4'}>Підпишіться</h3>
                    <p className={'text-white text-sm py-2'}>Отримайте 10% на перше замовлення</p>
                    <label className="relative block">
                        <input
                            className="w-full text-white bg-black border border-white rounded-xl py-2 pl-3 pr-10 focus:outline-none"
                            placeholder="Введіть свою пошту..." type="text"
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </span>
                    </label>
                </div>
            </div>
        </footer>
}

export default Footer;