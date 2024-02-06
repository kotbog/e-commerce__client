import {CartItems} from "../../cart/data/types";

export function calcTotal(items : CartItems) {
    let total = 0;

    if(items && items[0]) {
        items.map(item => {
            if(item.price) total += item.price * Number(item.quantity);
            else total += 0 * Number(item.quantity);
        })
    } else {
        return 0;
    }
    return total;

}