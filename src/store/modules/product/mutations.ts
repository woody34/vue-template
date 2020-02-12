import { MutationTree } from 'vuex'
import { ProductState, ProductItem } from './state'
import { ProductMutations } from './types'

export const mutations: MutationTree<ProductState> = {
  [ProductMutations.setProduct]: (state, payload: ProductItem) => {
    state.product = payload
  },
  [ProductMutations.setProductList]: (state, payload: ProductItem[]) => {
    state.productList = payload
  }
}
