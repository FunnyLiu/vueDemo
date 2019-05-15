import Api from '@/common/api'

export const ProductService = {
  getList (params?:any) {
    return Api.query('products',{params:params})
  },
  updateDescriptionRandom (slug:string) {
    return Api.put(`products/${slug}`,{description:`我又变了${+new Date()}`})
  },
  postProductRandom() {
    return Api.post(`products`,{
      name:`新名称${+new Date()}`
    })
  },
  delProduct(slug:string){
    return Api.delete(`products/${slug}`)
  }
}
export default ProductService
