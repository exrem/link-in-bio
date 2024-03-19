export type IconName =
  | "discord"
  | "instagram"
  | "github"
  | "reddit"
  | "tiktok"
  | "wikimedia"
  | "x"
  | "youtube";

export type SpotifyDisallows = {
  resuming: boolean;
};

export type Actions = {
  disallows: SpotifyDisallows;
};

export type SpotifyExternalIDS = {
  isrc: string;
};

export type SpotifyExternalUrls = {
  spotify: string;
};

export type SpotifyImage = {
  height: number;
  url: string;
  width: number;
};

export type SpotifyArtist = {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type SpotifyAlbum = {
  album_type: string;
  artists: SpotifyArtist[];
  available_markets: string[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export type SpotifyItem = {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: SpotifyExternalIDS;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type SpotifyPlayingResponse = {
  timestamp: number;
  context: null;
  progress_ms: number;
  item: SpotifyItem;
  currently_playing_type: string;
  actions: Actions;
  is_playing: boolean;
};
