import { Platform } from '@/models/Product'

export interface ProductState {
  product: ProductItem,
  productList: ProductItem[]
}

export interface ProductItem {
  [key: string]: string | number | object;
  type: string; // FIXME: ProductType
  sku: string;
  size: string;
  name: string;
  color: string;
  sourcePlatform: Platform;
}

export const ProductDefault = {
  type: 'na',
  sku: '0',
  size: 'na',
  name: 'na',
  color: 'na',
  sourcePlatform: Platform.Na
}

export const ProductStateDefault: ProductState = {
  product: ProductDefault,
  productList: []
}
