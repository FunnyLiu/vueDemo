<script>
import pipelineFlowHeader from './pipelineFlowHeader.vue';
import pipelineStartCard from './pipelineStartCard.vue';
export default {
    name: 'PipelineStart',
    components: {
        pipelineFlowHeader,
        pipelineStartCard
    },
}
</script>
<template>
    <div class="pipeline-start">
        <pipelineFlowHeader :action="false" title="流水线源" content='1个代码源' />
        <pipelineStartCard />
    </div>
</template>
<style lang="less" scoped >
.pipeline-start {}
</style>