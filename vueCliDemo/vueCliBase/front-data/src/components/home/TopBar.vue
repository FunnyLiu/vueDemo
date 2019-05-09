<template>
    <div class="topbar">
        <el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/">首页</el-menu-item>
            <el-submenu index="/project">
                <template slot="title">产品列表</template>
                <el-menu-item v-for="item of projects" :key="item.id" :index="`/project/${item.id}/`">{{item.name}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import { FETCH_PROJECTS } from '../../store/actions.type'
@Component({
  name: 'TopBar',
  computed: {
    activeIndex: {
      get () {
        const curRoute = this.$route
        const path = curRoute.path
        const reg = /(\/\w+\/\d+)((\/)\w+)*/
        if (reg.test(path)) {
          return path.replace(reg, `$1$3`)
        }
        return curRoute.path
      }
    },
    ...mapGetters(['projects'])
  }
})
export default class TopBar extends Vue {
  mounted () {
    this.fetchProjects()
  }
  handleSelect (key:string, keyPath:string) {
  }
  fetchProjects () {
    this.$store.dispatch(FETCH_PROJECTS)
  }
}
</script>
