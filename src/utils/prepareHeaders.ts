import { BaseQueryApi } from "@reduxjs/toolkit/dist/query/baseQueryTypes"
import { MaybePromise } from "@reduxjs/toolkit/dist/query/tsHelpers"
import { RootState } from "../store/store"

export type PrepareHeadersFunction = (
  headers: Headers,
  api: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">
) => MaybePromise<Headers>

export const prepareHeadersWithToken: PrepareHeadersFunction = (headers, { getState }) => {
  const token = (getState() as RootState).user.auth.token
  if (token) {
    headers.set("authorization", `Bearer ${token}`)
  }
  return headers
}
