'use strict'
import * as deviceActions from '../../constants/DeviceActionTypes';

export function setPlatform (platform) {
  return {
    type: deviceActions.SET_DEVICE,
    payload: platform
  }
}

export function setVersion (version) {
  return {
    type: deviceActions.SET_VERSION,
    payload: version
  }
}
