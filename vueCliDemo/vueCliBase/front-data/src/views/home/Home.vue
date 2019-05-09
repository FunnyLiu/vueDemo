<template>
  <div class="home">
    <TopBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopBar from '@/components/home/TopBar.vue' // @ is an alias to /src
import Footer from '@/components/home/Footer.vue'

@Component({
  components: {
    TopBar,
    Footer
  }
})
export default class Home extends Vue {

}
</script>
