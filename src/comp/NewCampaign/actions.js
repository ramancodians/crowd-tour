import {
  CREATE_CAMPAIGN_REQUEST,
  CREATE_CAMPAIGN_FAILED,
  CREATE_CAMPAIGN_SUCCESS,
} from "./consts"

export const createCampaign = (data) => ({
  type: CREATE_CAMPAIGN_REQUEST,
  data,
})

export const createCampaignFailed = (error) => ({
  type: CREATE_CAMPAIGN_FAILED,
  error,
})

export const createCampaignSuccess = (res) => ({
  type: CREATE_CAMPAIGN_SUCCESS,
  res,
})
