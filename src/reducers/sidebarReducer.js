import * as ACTION from '../actions/index';

export default function sideBarReducer(state = {}, action){
  switch (action.type){
    case ACTION.GET_SIDEBAR_VALUES_RESPONSE:
      return action.values
  }
  return state
}
