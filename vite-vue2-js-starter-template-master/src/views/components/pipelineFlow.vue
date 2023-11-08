<script>
import { computed } from 'vue'
import pipelineFlowHeader from './pipelineFlowHeader.vue';
import pipelineFlowCard from './pipelineFlowCard.vue';
import pipelineJobAdd from './pipelineJobAdd.vue';
export default {
    name: 'pipelineFlow',
    components: {
        pipelineFlowHeader,
        pipelineFlowCard,
        pipelineJobAdd
    },
    props: {
        flow: {
            type: Object,
            default: () => { }
        }
    },
    setup(props, {emit}) {
        const title = computed(() => {
            return props.flow.title
        })
        const content = computed(() => {
            const jobsNumber = props.flow.jobs.length;
            return `${jobsNumber}个任务`
        })
        const jobs = computed(() => {
            return props.flow.jobs
        })
        function addJob() {
            emit('onAction', {
                type: 'addJob',
                data: {
                    id: props.flow.id
                }
            })
        }
        function deleteJob(jobId) {
            emit('onAction', {
                type: 'deleteJob',
                data: {
                    id: props.flow.id,
                    jobId: jobId
                }
            })
        }
        function copyJob(jobId) {
            emit('onAction', {
                type: 'copyJob',
                data: {
                    id: props.flow.id,
                    jobId: jobId
                }
            })
        }
        function deleteFlow(){
            emit('onAction', {
                type: 'deleteFlow',
                data: {
                    id: props.flow.id
                }
            })
        }
        function copyFlow() {
            emit('onAction', {
                type: 'copyFlow',
                data: {
                    id: props.flow.id
                }
            })  
        }
        function dragJobEnd(evt) {
            emit('onAction', {
                type: 'dragJobEnd',
                data: {
                    id: props.flow.id,
                    evt
                }
            })
        }
        return {
            title,
            content,
            jobs,
            addJob,
            deleteJob,
            copyJob,
            deleteFlow,
            copyFlow,
            dragJobEnd
        }
    }
}
</script>
<template>
    <div class="pipeline-flow">
        <pipelineFlowHeader :title="title" :content="content" @deleteFlow="deleteFlow" @copyFlow="copyFlow" />
        <pipelineFlowCard :jobs="jobs" @deleteJob="deleteJob" @copyJob="copyJob" @dragEnd="dragJobEnd" />
        <pipelineJobAdd :jobs="jobs" @addJob="addJob" />
    </div>
</template>
<style lang="less" scoped >

</style>