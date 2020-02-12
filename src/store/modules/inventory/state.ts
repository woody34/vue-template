import Product, { Platform } from '@/models/Product'

export interface InventoryState {
  inventory: InventoryItem,
  inventoryList: InventoryItem[]
}

export interface InventoryItem {
  [key: string]: string | number;
  product: string;
  cost: number;
  adjustedCost: number;
  sourcePlatform: Platform;
  quantity: number;
  targetPlatform: Platform;
}

export const InventoryDefault = {
  product: '',
  cost: 0.00,
  adjustedCost: 0.00,
  sourcePlatform: Platform.Na,
  quantity: 0,
  targetPlatform: Platform.Na
}

export const InventoryStateDefault: InventoryState = {
  inventory: InventoryDefault,
  inventoryList: []
}
