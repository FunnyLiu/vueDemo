import { ProductService } from '@/apis/product'
import { GET_PRODUCTS, PUT_PRODUCT_DESCRIPTION_RANDOM, POST_PRODUCT_RANDOM, DEL_PRODUCT } from '@/store/actions.type'
import { SET_PRODUCTS } from '@/store/mutations.type'
import { getProductParams } from '@/declarations/product';

const state = {
  products: [],
  productsCount: 0
}
const getters = {
  products (state: any) {
    return state.products
  },
  productsCount (state: any) {
    return state.productsCount
  }
}
const actions = {
  [GET_PRODUCTS] ({ commit } : { commit: any}, params: getProductParams) {
    return ProductService.getList(params.filters)
      .then(data => {
        commit(SET_PRODUCTS, data)
      })
      .catch((error: any) => {
        throw new Error(error)
      })
  },
  [PUT_PRODUCT_DESCRIPTION_RANDOM] ({ commit }: { commit: any}, slug:string) {
    return ProductService.updateDescriptionRandom(slug)
      .catch((error:any ) => {
        throw new Error(error)
      })
  },
  [POST_PRODUCT_RANDOM] ({ commit }: { commit: any}) {
    return ProductService.postProductRandom()
      .catch((error:any ) => {
        throw new Error(error)
      })
  },
  [DEL_PRODUCT] ({ commit }: {commit: any}, slug:string) {
    return ProductService.delProduct(slug)
    .catch((error:any ) => {
      throw new Error(error)
    })
  }
}
const mutations = {
  [SET_PRODUCTS] (
      state: any,
      { 
        products,
        productsCount
      }:{
        products:any,
        productsCount:any
      }) {
    state.products = products
    state.productsCount = productsCount
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
