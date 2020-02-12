
import { GetterTree } from 'vuex'
import { InventoryState } from './state'
import { RootState } from '../..'
import { InventoryGetters } from './types'

export const getters: GetterTree<InventoryState, RootState> = {
  [InventoryGetters.inventory]: (state) => state.inventory,
  [InventoryGetters.inventoryList]: (state) => state.inventoryList
}
