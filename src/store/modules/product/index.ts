
import { Module } from 'vuex'
import { RootState } from '../..'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'
import { ProductStateDefault, ProductState } from './state'

export const product: Module<ProductState, RootState> = {
  state: ProductStateDefault,
  mutations,
  actions,
  getters
}
