import PagePath from "../features/authentication/components/PagePath";

const Contacts = () => {
    return <div className={'container m-auto'}>
        <PagePath current={'Contacts'} root={'Home'} rootPath={'/'}/>
        <div className={'flex w-80 flex-col shadow-md p-5 mt-10'}>
            <div className={'flex flex-col border-b-2'}>
                <p className={'inline-flex items-center'}>
                    <span className={'bg-red-600 rounded-full p-2 block'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </span>
                    <h1 className={'pl-5 font-semibold'}>
                        Подзвоніть Нам
                    </h1>
                </p>
                <p className={'my-5 text-sm'}>Ми доступні 24/7</p>
                <p className={'my-2 text-sm'}>Phone: +88016111122</p>
            </div>
            <div className={'flex flex-1 flex-col py-5'}>
                <p className={'inline-flex items-center'}>
                    <span className={'bg-red-600 rounded-full p-2 block'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </span>
                    <h1 className={'pl-5 font-semibold'}>
                        Напишіть Нам
                    </h1>
                </p>
                <p className={'my-5 text-sm'}>Заповніть форму і ми зв'яжемось з вами протягом 24 години</p>
                <p className={'my-2 text-sm'}>Email: support@exclusive</p>
            </div>
        </div>
        <div className={'flex flex-5'}></div>
    </div>
}

export default Contacts;