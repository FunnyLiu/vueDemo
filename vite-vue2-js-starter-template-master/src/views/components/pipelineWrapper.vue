<script>
import pipelineFlows from './pipelineFlows.vue'
export default {
    name: 'PipelineWrapper',
    components: {
        pipelineFlows
    }
}
</script>
<template>
    <div class="pipeline-wrapper">
        <div class="pipeline-wrapper-inner"></div>
        <pipelineFlows />
    </div>
</template>
<style lang="less" scoped >
.pipeline-wrapper {
    height: 100vh;
    // min-width: 100%;
    // width: 100%;
    background-color: #f6f6f8;
    &-inner {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    &-inner::after {
        background: radial-gradient(rgba(42, 60, 133, .06) 2px, transparent 2px);
        background-size: 24px 24px;
        display: block;
        content: "";
        width: 100%;
        height: 100%;
    }
}
</style>