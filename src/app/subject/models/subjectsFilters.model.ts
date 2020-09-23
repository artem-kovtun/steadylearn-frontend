import { ActivityStatus } from './activityStatus.enum';
import { OrderByProperty } from './orderByProperty.enum';
import { Order } from 'src/app/news/models/order.enum';

export class SubjectsFilters {
    constructor(page: number, take: number){
        this.page = page;
        this.take = take;
        this.search = "";
        this.status = ActivityStatus.Active;
        this.orderBy = OrderByProperty.CreationDate;
        this.sortOrder = Order.Descending;
    }

    page: number;
    take: number;
    search: string;
    status: ActivityStatus;
    orderBy: OrderByProperty;
    sortOrder: Order;
}