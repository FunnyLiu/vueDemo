<script>
import { computed } from 'vue'
export default {
    name: 'PipelineJobAdd',
    props: {
        jobs: {
            type: Array,
            default: () => []
        }
    },
    setup(props, { emit }) {
        function addJob() {
            emit('addJob')
        }
        const jobs = computed(() => props.jobs)
        return {
            addJob,
            jobs
        }
    }
}
</script>

<template>
    <div class="pipeline-job-add" @click="addJob">
        <div v-if="jobs.length > 0" class="add-before-line"></div>
        <div v-else class="first-before-line"></div>
        <div v-if="jobs.length > 0" class="content">+ 并行任务</div>
        <div v-else class="content">+ 新建任务</div>
        <div v-if="jobs.length == 0" class="next-line"></div>
    </div>
</template>


<style lang="less" scoped>
.pipeline-job-add {
    position: relative;
    width: 220px;
    height: 42px;
    font-size: 14px;
    border-radius: var(--devui-border-radius, 2px);
    background: var(--devui-base-bg, #ffffff);
    color: var(--devui-brand, #5e7ce0);
    margin-left: 42px;
    margin-top: 21px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        box-shadow: var(--devui-shadow-length-connected-overlay, 0 2px 12px 0) var(--devui-connected-overlay-shadow, rgba(37, 43, 58, .16))
    }

    .first-before-line {
        border-bottom: 2px solid var(--devui-link-light, #96adfa);
        width: 43px;
        position: absolute;
        right: 220px;
        top: 20px;
    }

    .add-before-line {
        left: -11px;
        border-radius: 0 0 0 12px;
        position: absolute;
        height: 87px;
        width: 12px;
        top: -63px;
        border-left: 2px dashed var(--devui-link-light, #96adfa);
        border-bottom: 2px dashed var(--devui-link-light, #96adfa);
        opacity: .6;
    }

    .next-line {
        border-bottom: 2px solid var(--devui-link-light, #96adfa);
        width: 40px;
        position: absolute;
        right: -40px;
        top: 20px;
    }

    .content {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 42px;
    }
}
</style>