import {NavLink} from "react-router-dom";
import {FC} from "react";

type PagePathProps = {
    current: string,
    root: string,
    rootPath: string
};


const PagePath : FC<PagePathProps> = ({current,rootPath, root}) => {
    return <p className={'py-3 text-sm w-36 flex justify-between max-md:px-3'}>
        <NavLink to={rootPath} className={'text-gray-400'}>{root}</NavLink>
        <span className={'text-gray-400'}>/</span>
        <span className={'font-semibold'}>{current}</span>
    </p>
}
export default PagePath;