import * as types from '../types';

export const loader = (bool)=>{
    return bool ? {
      type: types.SHOW_LOADER,
      data:bool
    }: {
      type: types.HIDE_LOADER,
      data: bool
    }
}

export const disabled = (bool)=>{
  return bool ? {
    type: types.SHOW_DISABLED,
    value:bool
  }: {
    type: types.HIDE_DISABLED,
    value: bool
  }
}