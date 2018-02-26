import {
  SEARCH_LOCATIONS,
} from "./consts"

export const searchLocations = (params) => ({
  type: SEARCH_LOCATIONS,
  params,
})
