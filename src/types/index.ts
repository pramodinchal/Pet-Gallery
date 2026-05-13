export interface Pet {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  species: string;
  breed: string;
  age: number;
  gender: string;
  weight: string;
  location: string;
  status: string;
  tags: string[];
  fileSizeKb: number;
  createdAt: string;
}

export type SortOption =
  | "name-asc"
  | "name-desc"
  | "date-newest"
  | "date-oldest";

export interface FilterState {
  search: string;
  sort: SortOption;
  species: string;
}
