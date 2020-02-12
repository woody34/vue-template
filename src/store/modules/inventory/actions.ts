import { ActionTree, Commit } from 'vuex'
import { RootState } from '../../index'
import { InventoryState } from './state'
import { InventoryMutations, InventoryActions } from './types'

export const actions: ActionTree<InventoryState, RootState> = {
  [InventoryActions.updateInventoryList] ({ commit }: {commit: Commit}): void {
    commit(InventoryMutations.setInventoryList, [])
  }
}
