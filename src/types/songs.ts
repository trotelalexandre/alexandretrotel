export type Status = "WIP" | "Finished" | "Paused" | "Dropped" | "Released";

export type Link = {
  platform: Platform;
  url: string;
  icon: React.ReactNode;
};

export type Links = Link[];

export type Asset = {
  type: string;
  url: string;
  version: string;
};

export type Assets = Asset[];

export type Author = "Alexandre Trotel" | "Alex Lander" | "Allan Adams";

export type Authors = Author[];

export type Style =
  | "Future House"
  | "Progressive House"
  | "Big Room"
  | "EDM"
  | "Trance"
  | "Happy Hardcore"
  | "Chill House"
  | "Future Bass"
  | "Piano"
  | "Dubstep"
  | "Electro Pop"
  | "Brazilian Bass"
  | "Melbourne Bounce"
  | "Moombahton"
  | "Trap"
  | "Future Rave"
  | "House"
  | "Bass House"
  | "Tropical House"
  | "Hyperpop";

export type Styles = Style[];

export type RecordLabel = "Self Released" | "Connected Sounds" | "GOTTA RCRDS";

export type RecordLabelItem = {
  name: string;
  url: string;
};

export type RecordLabels = RecordLabelItem[];

export type Platform = "YouTube" | "Spotify";

export type Platforms = Platform[];

export type Song = {
  slug: string;
  title: string;
  description: string;
  authors: Authors;
  status: Status;
  featured?: boolean;
  links?: Links;
  cover?: string;
  assets?: Assets;
  styles: Styles;
  date: Date;
  labels: RecordLabels;
};

export type Songs = Song[];
