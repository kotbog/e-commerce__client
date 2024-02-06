import {ChangeEvent, useEffect, useState} from "react";
import useDebounce from "../../../hooks/useDebounce";
import {useDispatch} from "react-redux";
import {searchProducts} from "../context/SearchActions";
import SearchResult from "./SearchResult";

const Search = () => {
    const [openSearch, setOpenSearch] = useState(true);
    const [value, setValue] = useState('');
    const [showResult, setShowResult] = useState(false)
    const dispatch = useDispatch();
    function openSearchInput() {
        setOpenSearch(!openSearch)
    }
    function handleInputChange (e : ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value);
    }

    const debounceSearch = useDebounce(value, 1000);

    useEffect(() => {
        if(debounceSearch) {
            dispatch(searchProducts(debounceSearch))
        }
    }, [debounceSearch]);

    return <>
        <label
            className={`relative block max-lg:basis-full ${openSearch ? 'max-lg:block' : 'max-lg:hidden'}`}>
            <input
                onBlur={() => {
                    setOpenSearch(false)
                    setShowResult(false)
                }}
                onFocus={() => setShowResult(true)}
                value={value}
                onChange={handleInputChange}
                className="w-full bg-white border border-slate-400 rounded-xl py-2 pl-3 pr-10 focus:outline-none"
                placeholder="Шукаєте щось?" type="text"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="30"
                             height="30" viewBox="0 0 30 30">
                            <path
                                d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                            </path>
                        </svg>
                    </span>
        </label>
        <button onClick={openSearchInput}
                className={`hidden ${openSearch ? 'max-lg:hidden' : 'max-lg:block'}`}>
            <svg className="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="30"
                 height="30" viewBox="0 0 30 30">
                <path
                    d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                </path>
            </svg>
        </button>
        {showResult &&
            <SearchResult/>}
    </>
}

export default Search;