import customers from '../assets/about-customers.png'
import {NavLink} from "react-router-dom";
import PagePath from "../features/authentication/components/PagePath";
import AchievementItem from "../components/AchievementItem";

const Contacts = () => {
    return <div className={'container m-auto'}>
        <PagePath current={'Contacts'} root={'Home'} rootPath={'/'}/>

    </div>
}
export default Contacts;