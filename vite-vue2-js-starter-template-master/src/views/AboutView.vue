<template>
  <pipelineWrapper></pipelineWrapper>
</template>

<script>
import User from '@/api/user';
import pipelineWrapper from './components/pipelineWrapper.vue';

export default {
  components: {
    pipelineWrapper
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {},
  created() {
    this.login();
  },
  methods: {
    async login() {
      const res = await User.login(this.username, this.password);
      console.log(res);
    },
  },
};
</script>

<style lang="less">
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    h1 {
      color: red;
    }
  }
}
</style>
