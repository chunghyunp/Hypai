export interface NavTab {
  id: string;
  label: string;
  href: string;
}

export interface NavConfig {
  tabs: NavTab[];
}
