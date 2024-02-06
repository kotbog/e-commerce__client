const Success = () => {
    return <div className={'flex justify-center items-center flex-col h-full pt-20'}>
        <svg className="w-20 h-20 text-gray-800 dark:text-white m-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 16 12">
            <path stroke="green" strokeLinecap={'round'}  strokeLinejoin="round" strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"/>
        </svg>
        <h2 className={'font-black text-2xl'}>Оператор зв'яжеться з вами найближчим часом!</h2>
        <h3 className={'font-thin my-3 text-3xl'}>Дякуєом за покупку!</h3>
    </div>
}
export default Success;