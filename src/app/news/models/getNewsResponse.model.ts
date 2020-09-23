import { News } from './news.model';

export class GetNewResponse {
    news: Array<News>;
    isMore: boolean;
}