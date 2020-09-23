import { ActivityStatus } from 'src/app/subject/models/activityStatus.enum';
import { OrderByProperty } from 'src/app/subject/models/orderByProperty.enum';
import { Order } from 'src/app/news/models/order.enum';

export class AssociatedPeopleFilters {
    constructor(page: number, take: number){
        this.page = page;
        this.take = take;
        this.search = "";
        this.status = ActivityStatus.Active;
        this.orderBy = OrderByProperty.Name;
        this.sortOrder = Order.Ascending;
    }

    page: number;
    take: number;
    search: string;
    status: ActivityStatus;
    orderBy: OrderByProperty;
    sortOrder: Order;
}