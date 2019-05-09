<template>
  <div class="project">
    <SideBar />
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SideBar from '@/components/project/SideBar.vue'

@Component({
  components: {
    SideBar
  }
})
export default class Project extends Vue {
}
</script>
