import * as deviceActions from '../constants/DeviceActionTypes';
import { Record } from 'immutable'

var InitialState = Record({
  platform: null,
  version: null,
});

const initialState = new InitialState();

export default function device(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state)

  if (action.type === deviceActions.SET_DEVICE) {
    let platform = action.payload;
    return state.set('platform', platform);
  }

  if (action.type === deviceActions.SET_VERSION) {
    let version = action.payload;
    return state.set('version', version);
  }

  return state;
}
