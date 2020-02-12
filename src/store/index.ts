import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import VuexPersistence, { PersistOptions } from 'vuex-persist'
import { inventory } from '@/store/modules/inventory'
import { product } from '@/store/modules/product'

Vue.use(Vuex)

export interface RootState {
  [index: string]: any;
  version: string | undefined
}

const defaultState: RootState = {
  version: undefined // TODO:
}

const saveState = (key: string, state: {}, storage?: Storage) => {
  if (!storage) {
    return
  }
  try {
    storage.setItem(key, JSON.stringify(state))
  } catch (err) {
    const msg = `There was an error saving state [${key}]: ${err}`
  }
}

const VuexPersistInventory = new VuexPersistence<RootState>({
  key: 'inventory',
  storage: window.localStorage,
  saveState,
  modules: ['inventory'],
  filter: (mutation: any) => mutation.type.includes('[Inventory]')
})
const VuexPersistProduct = new VuexPersistence<RootState>({
  key: 'product',
  storage: window.localStorage,
  saveState,
  modules: ['product'],
  filter: (mutation: any) => mutation.type.includes('[Product]')
})

const store: StoreOptions<RootState> = {
  state: defaultState,
  modules: {
    inventory,
    product
  },
  getters: {
    version: state => state.version
  },
  mutations: {
    setVersion (state, version) {
      state.version = version
    },
    clearStore () {
      window.localStorage.clear()
    }
  },
  plugins: [VuexPersistInventory.plugin, VuexPersistProduct.plugin]
}

export default new Vuex.Store<RootState>(store)
