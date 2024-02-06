import {FC, ReactNode, useState} from "react";

type AchievementItemProps = {
    amount: string,
    desc: string,
    icon: ReactNode
}

const AchievementItem : FC<AchievementItemProps> = ({amount, desc, icon}) => {
    const [onMouse, setOnMouse] = useState(false);
    return <div className={`flex basis-[270px] justify-center items-center flex-col border-2 ease-out duration-100 p-10 ${onMouse && 'bg-red-500'}`}
                onMouseEnter={() => {setOnMouse(true)}}
                onMouseLeave={() => {setOnMouse(false)}}
    >
        <div className={'rounded-full bg-slate-300 p-2 flex items-center justify-center mb-3'}>
            <span className={`rounded-full bg-black p-3 flex items-center justify-center ${onMouse && 'bg-white'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke={onMouse ? '#000' : '#fff'} className="w-6 h-6">
                {icon}
                </svg>
            </span>
        </div>
        <span className={`font-bold text-2xl ${onMouse && 'text-white'}`}>{amount}</span>
        <p className={`text-center ${onMouse && 'text-white'}`}>{desc}</p>
    </div>
}

export default AchievementItem;