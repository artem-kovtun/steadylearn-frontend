import { NewsFilter } from './newsFilter.model';
import { User } from 'src/app/user/models/user.model';

export class NewsFiltersDialogModel {
    filters: NewsFilter;
    senders: Array<User>;
}
