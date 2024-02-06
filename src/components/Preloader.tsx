import preloader from "../assets/preloader.svg"


const Preloader = () => {
    return <div className={'flex justify-center items-center'}>
        <img src={preloader} alt="loading..."/>
    </div>
}

export default Preloader;
