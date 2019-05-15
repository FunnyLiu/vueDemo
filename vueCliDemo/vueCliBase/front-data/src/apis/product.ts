import Api from '@/common/api'

export const ProductService = {
  getList (params?:any) {
    return Api.query('products',{params:params})
  },
  updateDescriptionRandom (slug:string) {
      return Api.put(`products/${slug}`,{description:`我又变了${+new Date()}`})
  }
}
export default ProductService
