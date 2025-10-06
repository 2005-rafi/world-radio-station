export interface RadioStation {
  changeuuid: string;
  stationuuid: string;
  name: string;
  url: string;
  url_resolved: string;
  homepage: string;
  favicon: string;
  tags: string;
  country: string;
  countrycode: string;
  state: string;
  language: string;
  languagecodes: string;
  votes: number;
  lastchangetime: string;
  codec: string;
  bitrate: number;
  hls: boolean;
  lastcheckok: boolean;
  lastchecktime: string;
  lastcheckoktime: string;
  lastlocalchecktime: string;
  clicktimestamp: string;
  clickcount: number;
  clicktrend: number;
  ssl_error: boolean;
  geo_lat: number;
  geo_long: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  created_at: string;
}

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  user_id: string;
  stations: RadioStation[];
  created_at: string;
  updated_at: string;
}

export interface ListeningHistory {
  id: string;
  user_id: string;
  station: RadioStation;
  listened_at: string;
  duration: number;
}