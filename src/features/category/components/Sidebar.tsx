import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../context/CategoryActions";
import {IRootState} from "../../../data/types";
import {state} from "sucrase/dist/types/parser/traverser/base";

const categories = [
    {
        id: 1,
        name: "Пластикові контейнери",
        sub_cat: ['120 л', '240 л', '1100 л']
    },
    {
        id: 2,
        name: "Залізні контейнери"
    },
    {
        id: 3,
        name: "Підземні системи"
    }
];
const Sidebar = () => {

    const categories = useSelector<IRootState, Array<{name:string, _id: string}>>(state => state.Category.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch]);

    return <ul className={'border-r-2 flex flex-col basis-1/4 max-lg:hidden'}>
        {categories ? categories.map(item => <li key={item._id}
                className={'font-semibold'}>
                <NavLink className={'flex justify-between p-2'} to={'/category/' + item.name}>
                    {item.name}
                </NavLink>
            </li>)
        : <div>No categories</div>
        }
    </ul>
}

export default Sidebar;
