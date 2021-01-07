import { Artist } from './Artist';
import { ExternalUrl } from './ExternalUrl';

export class Item {
  artists: Artist[];
  available_markets: Object[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: object;
  track_number: number;
  type: string;
  uri: string;
}
