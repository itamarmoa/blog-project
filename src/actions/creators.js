import * as ACTION from './index';

export function setCurrentPost(title){
  return {type: ACTION.SET_CURRENT_POST, title}
}
