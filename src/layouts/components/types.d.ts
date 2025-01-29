export interface HorizontalMenuItem {
  name: string;
  icon: string;
  to?: {
    name: string;
    params?: { [key: string]: string };
  };
  target?: string;
  href?: string;
  children?: HorizontalMenuItem[];
}


export interface VerticalMenuItem {
  heading?: string; // optional heading property
  name: string;
  icon: string;
  to?: {
    name: string;
    params?: { [key: string]: string };
  };
  target?: string;
  href?: string;
  children?: VerticalMenuItem[];
}
