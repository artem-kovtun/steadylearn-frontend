export class ItemsList<T> {
    constructor(){
        this.items = [];
        this.isMore = false;
    }

    items: Array<T>;
    isMore: boolean;
}