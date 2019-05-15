import Api from '@/common/api'

export const ProductService = {
  getList (params?:any) {
    return Api.query('products',{params:params})
  }
}
export default ProductService
