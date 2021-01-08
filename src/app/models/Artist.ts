import { ExternalUrl } from './ExternalUrl';
import { Follower } from './Follower';
import { Image } from './Image';

export class Artist {
  external_urls: ExternalUrl;
  followers: Follower;
  genres: object[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
