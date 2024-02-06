import PagePath from "../features/authentication/components/PagePath";
import customers from "../assets/about-customers.png";
import AchievementItem from "../components/AchievementItem";

const About = () => {
    const achievements = [
        {
            amount: "10.5k",
            desc: "Активних користувачів на сайті",
            icon: <path strokeLinecap="round" strokeLinejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"/>
        },
        {
            amount: "33k",
            desc: "Продаж за місяць",
            icon: <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        },
        {
            amount: "45.5k",
            desc: "Активних покупців",
            icon: <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
        },
        {
            amount: "25k",
            desc: "Щорічних продаж на сайті",
            icon: <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"/>
        },
    ]
    return <div className={'container m-auto relative'}>
        <PagePath current={'Про нас'} root={'Головна'} rootPath={'/'}/>
        <div className={"flex items-center py-10 justify-between max-lg:flex-wrap"}>
            <div className={'basis-1/2 flex flex-col max-lg:basis-full max-lg:px-3 mb-5'}>
                <h1 className={'text-5xl font-bold mb-10'}>Наша історія</h1>
                <div>
                    <p className={'text-base mb-3'}>
                        Запущений у 2015 році, Exclusive є провідним онлайн-торговельним ринком у Південній Азії з
                        активною присутністю в Бангладеш. Підтримуваний широким спектром настроєних маркетингових, даних
                        та сервісних рішень, Exclusive має 10 500 продавців і 300 брендів, обслуговує 3 мільйони
                        клієнтів по всьому регіону.
                    </p>
                    <p className={'text-base mb-3'}>
                        У Exclusive є понад 1 мільйон продуктів у своєму асортименті і продовжує швидко розширюватися.
                        Компанія пропонує різноманітний вибір у різних категоріях для споживачів.
                    </p>
                </div>
            </div>
            <div className={'max-lg:m-auto'}>
                <img src={customers} alt={`img-customers`}/>
            </div>
        </div>
        <div className={'flex justify-between py-10 max-lg:flex-wrap max-lg:justify-around gap-5'}>
            {achievements.map(item => <AchievementItem
                icon={item.icon}
                amount={item.amount}
                desc={item.desc}
            />)}
        </div>
    </div>
}
export default About;