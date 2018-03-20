import {
  SEARCH_LOCATIONS,
  GET_CAMPAIGNS_FAILED,
  GET_CAMPAIGNS_REQUEST,
  GET_CAMPAIGNS_SUCCESS,
} from "./consts"

export const searchLocations = (params) => ({
  type: SEARCH_LOCATIONS,
  params,
})

export const getCampaigns = () => ({
  type: GET_CAMPAIGNS_REQUEST,
})

export const getCampaignsSuccess = (res) => ({
  type: GET_CAMPAIGNS_SUCCESS,
  res,
})

export const getCampaignsFailed = (err) => ({
  type: GET_CAMPAIGNS_FAILED,
  err,
})
