<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { InventoryGetters, InventoryMutations, InventoryActions } from '../store/modules/inventory/types'

export default Vue.extend({
  name: 'home',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(Object.values(InventoryGetters))
  },
  mounted () {
    console.log(this[InventoryGetters.inventory])
    this[InventoryActions.updateInventoryList]()
  },
  methods: {
    ...mapMutations(Object.values(InventoryMutations)),
    ...mapActions(Object.values(InventoryActions))
  }

})
// // import HelloWorld from '@/components/HelloWorld.vue'
// // import { InventoryGetters, InventoryMutations, InventoryActions } from '../store/modules/inventory/types'
// // import { InventoryItem } from '../store/modules/inventory/state'
// // import Component from 'vue-class-component'
// // import { Action, Mutation, Getter } from 'vuex-class'
// // import { home } from '@/common/data-cy'

// // @Component({
// //   name: 'home',
// //   components: {}
// // })
// // export default class Home extends Vue {
// //   @Getter(InventoryGetters.inventory) inventory!: InventoryItem
// //   @Getter(InventoryGetters.inventoryList) inventoryList!: InventoryItem[]
// //   @Mutation(InventoryMutations.setInventory) setInventory!: (payload: InventoryItem) => void
// //   @Action(InventoryActions.updateInventoryList) updateInventoryList!: () => void

// //   mounted () {
// //     this.updateInventoryList()
// //   }

// //   home = home
// // }
// </script>
