import Api from '@/common/api'

export const ProjectService = {
  getList () {
    return Api.get('project')
  }
}
export default ProjectService
