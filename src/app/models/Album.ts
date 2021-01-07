import { Artist } from './Artist';
import { Copyright } from './Copyright';
import { ExternalId } from './ExternalId';
import { ExternalUrl } from './ExternalUrl';
import { Follower } from './Follower';
import { Image } from './Image';
import { Track } from './Track';

export class Album {
  album_type: string;
  artists: Artist[];
  available_markets: object[];
  copyrights: Copyright[];
  followers: Follower[];
  external_ids: ExternalId;
  external_urls: ExternalUrl;
  genres: object[];
  href: string;
  id: string;
  images: Image[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precisison: string;
  total_tracks: number;
  tracks: Track;
  type: string;
  uri: string;
}
