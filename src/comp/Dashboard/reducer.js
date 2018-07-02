import { getDashboard } from "./actions"

const initState = {
  isDashboardLoading: true,
}

export default function reducer(state = initState, action){
  switch (action.type) {
    case getDashboard.REQUEST:
      return {
        ...state,
        isDashboardLoading: true,
      }
    case getDashboard.SUCCESS:
      return {
        ...state,
        dashboard: action.data,
        isDashboardLoading: false,
      }
    case getDashboard.FAILED:
      return {
        ...state,
        dashboard: null,
        dashboardError: action.data,
        isDashboardLoading: false,
      }
    default:
      return state
  }
}
