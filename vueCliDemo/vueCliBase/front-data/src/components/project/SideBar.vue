<template>
    <div>
        <el-col :span="4">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-vertical-demo"
                @select="handleSelect"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item :index="routes.HOME_PROJECT_PANEL">
                    <i class="el-icon-menu"></i>
                    <span slot="title">概况</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>性能面板</span>
                    </template>
                    <el-menu-item :index="routes.HOME_PROJECT_LOAD">页面加载</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { HOME_PROJECT_PANEL, HOME_PROJECT_LOAD } from '@/router/name'

@Component({
  name: 'SideBar',
  computed: {
    activeIndex: {
      get () {
        const curRoute = this.$route
        return curRoute.name
      }
    }
  }
})
export default class SideBar extends Vue {
  routes = {
    HOME_PROJECT_PANEL,
    HOME_PROJECT_LOAD
  }
  handleOpen (key:string, keyPath:string) {
  }
  handleClose (key:string, keyPath:string) {
  }
  handleSelect (key:string, keyPath:string) {
    const router = this.$router
    router.push({ name: key })
  }
}
</script>
