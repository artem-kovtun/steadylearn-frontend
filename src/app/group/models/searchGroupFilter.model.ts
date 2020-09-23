export class SearchGroupFilter {

  constructor(page: number, take: number) {
    this.page = page;
    this.take = take;
  }

  page: number;
  take: number;
  search: string;
}
