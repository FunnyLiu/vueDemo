import { ProjectService } from '@/apis/project'
import { FETCH_PROJECTS } from '@/store/actions.type'
import { SET_PROJECT } from '@/store/mutations.type'

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
    return ProjectService.getList()
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
    state.projects = projects
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
