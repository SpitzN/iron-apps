export interface IronAppType {
  id: number;
  name: string;
  category: string;
  external_id: string;
  rating: number;
  install_count: number;
  description: string;
  url: string;
  publisher: string;
  icon: string;
  min_age: number;
}

export type IronApps = IronAppType[];

export interface IronAppsState {
  apps: IronApps;
  isAppsLoading: boolean;
  isAppsError: any;
}
