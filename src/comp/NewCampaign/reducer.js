import {
  CREATE_CAMPAIGN_FAILED,
  CREATE_CAMPAIGN_REQUEST,
  CREATE_CAMPAIGN_SUCCESS,
} from "./consts"

const initState = {
  creatingCampaign: false,
}

export default function NewCampaignReducer(state = initState, action) {
  switch (action.type) {
    case CREATE_CAMPAIGN_REQUEST:
      return {
        ...state,
        creatingCampaign: true,
      }

    case CREATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        creatingCampaign: false,
        campaignCreated: true,
        lalaJee: "rocks"
      }
    
    default:
      return state

  }
}
