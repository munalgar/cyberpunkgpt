import type {
  MetaArgs as BaseMetaArgs,
  LoaderFunctionArgs as BaseLoaderArgs,
} from "react-router";

export namespace Route {
  export type MetaArgs<T = any> = Omit<BaseMetaArgs, "data"> & { data?: T };
  export type LoaderArgs = BaseLoaderArgs;
}
