<template>
    <footer class="footer">
        <router-link class="logo-font" :to="{name:'home', params: {} }">
            首页
        </router-link>
    </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Footer'
})
export default class Footer extends Vue {
}
</script>

<style lang="scss" scoped>
.footer {
    position: absolute;
    bottom: 0;
}
</style>
