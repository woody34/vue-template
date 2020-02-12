
import { GetterTree } from 'vuex'
import { ProductState } from './state'
import { RootState } from '../..'
import { ProductGetters } from './types'

export const getters: GetterTree<ProductState, RootState> = {
  [ProductGetters.product]: (state) => state.product,
  [ProductGetters.productList]: (state) => state.productList
}
