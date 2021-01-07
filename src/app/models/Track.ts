import { Item } from './Item';

export class Track {
  href: string;
  items: Item[];
  limit: number;
  next: object;
  offset: number;
  previous: object;
  total: number;
}
