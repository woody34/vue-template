import { ActionTree, Commit } from 'vuex'
import { RootState } from '../../index'
import { ProductState } from './state'
import { ProductMutations, ProductActions } from './types'

export const actions: ActionTree<ProductState, RootState> = {
  [ProductActions.updateProductList] ({ commit }: {commit: Commit}): void {
    commit(ProductMutations.setProductList, [])
  }
}
