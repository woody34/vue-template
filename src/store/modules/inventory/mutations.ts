import { MutationTree } from 'vuex'
import { InventoryState, InventoryItem } from './state'
import { InventoryMutations } from './types'

export const mutations: MutationTree<InventoryState> = {
  [InventoryMutations.setInventory]: (state, payload: InventoryItem) => {
    state.inventory = payload
  },
  [InventoryMutations.setInventoryList]: (state, payload: InventoryItem[]) => {
    state.inventoryList = payload
  }
}
