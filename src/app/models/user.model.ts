export interface User {
  id: number;
  nameTitle: string;
  firstName: string;
  lastName: string;
  image: string;
}

export interface UsersRes {
  data: User[];
  total: number;
  page: number;
  limit: number;
}
