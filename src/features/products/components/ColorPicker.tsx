import {FunctionComponent} from "react";

type ColorPickerProps = {
    colors: Array<string> | undefined
}
const ColorPicker : FunctionComponent<ColorPickerProps> = ({colors}) => {
    return <div className={'flex items-center'}>
        <h2 className={'text-xl'}>Color: </h2>
        {
            colors?.map(item => <button className={`m-2 rounded-full w-7 h-7 border-2 bg-${item}-500`} key={item}></button>)
        }
    </div>
}

export default ColorPicker;