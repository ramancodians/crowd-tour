import {
  FETCH_CAMPAIGN
} from "./consts"

export const fetchCompaign = (params) => ({
  type: FETCH_CAMPAIGN,
  params
})
