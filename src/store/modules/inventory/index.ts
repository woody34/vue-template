
import { Module } from 'vuex'
import { RootState } from '../..'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'
import { InventoryStateDefault, InventoryState } from './state'

export const inventory: Module<InventoryState, RootState> = {
  state: InventoryStateDefault,
  mutations,
  actions,
  getters
}
