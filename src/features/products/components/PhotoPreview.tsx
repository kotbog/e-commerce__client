import preview from '../../../assets/preview.svg'
import {FunctionComponent, MouseEventHandler, useState} from "react";

type PhotoPreviewProps = {
    images?: Array<string>
}

const PhotoPreview : FunctionComponent<PhotoPreviewProps> = ({images}) => {
    const [currentImg, setCurrentImg] = useState<string>(images ? images[0] : preview);
    const [imgList, setImgList] = useState(images?.slice(1))

    function handleImgClick(src : string) {
        if (imgList) {
            imgList.splice(imgList.indexOf(src), 1);
            imgList.push(currentImg);
        } // delete from preview
        setCurrentImg(src);

    }

    return <div className={'flex flex-row basis-3/5 p-3 max-md:basis-full'}>
        <div className={'basis-1/4 flex flex-col justify-evenly items-end overflow-y-auto scrollbar'}>
            {imgList?.map(img => {
              return <div className={'w-full'} key={imgList.indexOf(img)}><img onClick={() => {handleImgClick(img)}} src={img} alt="product-img" className={'object-contain m-auto'}/></div>
            })}
        </div>
        <div className={'flex-grow-1 basis-full'}>
            <img src={currentImg} alt="product-img" className={'m-auto'}/>
        </div>
    </div>
}

export default PhotoPreview;