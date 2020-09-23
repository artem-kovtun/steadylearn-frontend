import { Order } from './order.enum';

export class NewsFilter {

    public constructor(page: number, take: number){
        this.page = page;
        this.take = take;
        this.search = '';
        this.startDate = null;
        this.endDate = null;
        this.order = Order.Descending;
        this.senders = null;
    }

    page: number;
    take: number;
    search: string;
    startDate: Date;
    endDate: Date;
    order: Order;
    senders: Array<string>;
}
