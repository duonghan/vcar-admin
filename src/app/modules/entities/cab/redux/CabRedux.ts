import {type} from 'os'
import { Action } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { put, takeLatest } from 'redux-saga/effects'
import {EntityState} from '../../../util/reducer.utils'
import {defaultValue, CabModel} from '../models/cab.model'
import { getAllCabs } from './CabCRUD'


export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  CabsRequested: '[Request Cab] Action',
  CabsLoaded: '[Load Cab] Cab API',
}

const initialState: EntityState<CabModel> = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
}

// const initialState: ICabState = {
//   cabs: undefined,
// }

export interface ICabState {
  cabs ?: CabModel[]
}

export const reducer = persistReducer(
  {storage, key:'cab', whitelist: ['cabs']},
  (state: EntityState<CabModel>  = initialState, action: ActionWithPayload<EntityState<CabModel>>) => {
    switch (action.type) {
      case actionTypes.CabsRequested: {
        return {...state, loading: true}
      }

      case actionTypes.CabsLoaded: {
        return {...state, loading: false, entities: action.payload?.entities }
      }

      default:
        return state
    }
  }
)

export const actions = {
  requestAllCabs: () => ({
    type: actionTypes.CabsRequested,
  }),
  fulfillAllCabs: (entities: CabModel[]) => ({
    type: actionTypes.CabsLoaded,
    payload: {entities},
  }),
}

export function* saga() {
  yield takeLatest(actionTypes.CabsRequested, function* CabsRequested() {
    const {data: cabs} = yield getAllCabs()
    yield put(actions.fulfillAllCabs(cabs))
  })
}
