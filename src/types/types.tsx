export interface ITrack {
  artists: {
    name: string;
  }[];
  name: string;
  duration_ms: number;
  album?: {
    name: string;
    images: {
      url: string;
    }[];
    artists: {
      name: string;
    }[];
  };
  preview_url: string;
}

export interface IMergedData {
  name: string;
  images: {
    url: string;
  }[];
  id: string;
  description?: string;
  tracks: {
    href: string;
  };
}

export interface IPlaylist {
  name: string;
  type: string;
  owner: { display_name: string };
  id: string;
  images: {
    url: string;
  }[];
  tracks?: {
    href: string;
  };
}

export interface IPlayerState {
  isRandom: boolean;
  isPlaying: boolean;
  isOutlineQueueList: boolean;
  isMicrophone: boolean;
  isText: boolean;
  isDevice: boolean;
}
