import { ProjectService } from '@/apis/project'
import { FETCH_PROJECTS } from '@/store/actions.type'
import { SET_PROJECT } from '@/store/mutations.type'
import ProductService from '@/apis/product';

const state = {
  projects: []
}
const getters = {
  projects (state: any) {
    return state.projects
  }
}
const actions = {
  [FETCH_PROJECTS] ({ commit } : { commit: any}) {
    return ProductService.getList()
      .then(data => {
        commit(SET_PROJECT, data)
      })
      .catch((error: any) => {
        throw new Error(error)
      })
  }
}
const mutations = {
  [SET_PROJECT] (state: any, projects: any) {
    state.projects = projects.products
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
