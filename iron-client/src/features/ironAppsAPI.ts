import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IronApp {
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

interface RequestBody {
  age: number;
  appRating: number;
  categories: string[];
}

type IronApps = IronApp[];

export const ironAppsApi = createApi({
  reducerPath: "ironAppsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://iron-server:7000/api",
  }),
  tagTypes: ["ironApps"],
  endpoints: (builder) => ({
    fetchRandomApps: builder.query<IronApps, RequestBody>({
      query({ age, appRating, categories }) {
        return `random/?age=${age}&rating=${appRating}&categories=${categories.join(
          ","
        )}`;
      },
    }),
  }),
});

export const { useFetchRandomAppsQuery } = ironAppsApi;
