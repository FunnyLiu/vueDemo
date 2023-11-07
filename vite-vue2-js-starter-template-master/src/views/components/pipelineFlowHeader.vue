<script>
import { computed } from 'vue'
export default {
    name: 'PipelineFlowHeader',
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const title = computed(() => props.title)
        const content = computed(() => props.content)
        function deleteFlow() {
            emit('deleteFlow')
        }
        function copyFlow() {
            emit('copyFlow')
        }
        return {
            title,
            content,
            deleteFlow,
            copyFlow
        }
    }
}
</script>
<template>
    <div class="pipeline-flow-header">
        <div class="pipeline-flow-header-background"></div>
        <div class="pipeline-flow-header-content">
            <div class="pipeline-flow-header-info">
                <div class="title">{{ title }}</div>
                <div class="content">{{ content }}</div>
            </div>
            <div class="pipeline-flow-header-commands">
                <i class="el-icon-rank j-flow-drag"></i>
                <i class="el-icon-document-copy" @click="copyFlow"></i>
                <i class="el-icon-delete" @click="deleteFlow"></i>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped >
.pipeline-flow-header {
    position: relative;
    width: 300px;
    height: 66px;

    &-background {
        position: absolute;
        background-image: url(https://devops.cm-iov.com:9000/system-static/img/Xnip2023-11-06_15-35-29.png);
        background-size: 100% 100%;
        width: 300px;
        height: 66px;
        border-radius: 10px;
    }

    &-content {
        display: flex;
        justify-content: space-between;
        padding: 10px 16px;
        width: 100%;
        height: 100%;
    }

    &-info {
        .title {
            font-weight: 700;
            font-size: 16px;
        }
    }

    &-commands {
        i {
            margin-left: 10px;
            cursor: pointer;
        }
    }
}</style>