<script setup lang="ts">
import Animate from "@ccpow/devopslib/packages/components/Animate/index.vue";
import Explain from "@ccpow/devopslib/packages/components/Explain/index.vue";
import { earth } from "./animate";
const animateProps = {
  options: { animationData: earth },
  height: 400,
  width: 400,
};
</script>

<template>
  <main>
    <div>TestView</div>
    <Animate v-bind="animateProps" />
    <Explain explain="这里有一段介绍的内容，用来解释这个字段" />
  </main>
</template>
