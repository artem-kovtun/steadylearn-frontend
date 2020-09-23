export class UsersFilters {
  constructor(page: number, take: number){
    this.page = page;
    this.take = take;
    this.search = '';
  }

  page: number;
  take: number;
  search: string;
}
