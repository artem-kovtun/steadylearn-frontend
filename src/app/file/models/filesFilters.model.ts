import { OrderByProperty } from 'src/app/subject/models/orderByProperty.enum';
import { Order } from 'src/app/news/models/order.enum';
import { FileStatus } from './fileStatus.enum';

export class FilesFilter {
    constructor(page: number, take: number){
        this.page = page;
        this.take = take;
        this.search = '';
        this.status = FileStatus.Active;
        this.orderBy = OrderByProperty.CreationDate;
        this.sortOrder = Order.Descending;
    }

    page: number;
    take: number;
    search: string;
    status: FileStatus;
    orderBy: OrderByProperty;
    sortOrder: Order;
}
