<script>
export default {
    name: 'PipelineEnd',
    setup(props, { emit }) {
        function addFlow() {
            emit('addFlow')
        }
        return {
            addFlow
        }
    }
}
</script>

<template>
    <div class="pipeline-end" @click="addFlow">
        <div class="first-before-line"></div>
        <div class="content">+ 新建阶段</div>
    </div>
</template>


<style lang="less" scoped>
.pipeline-end {
    position: relative;
    width: 220px;
    height: 42px;
    font-size: 14px;
    border-radius: var(--devui-border-radius, 2px);
    background: var(--devui-base-bg, #ffffff);
    color: var(--devui-brand, #5e7ce0);
    margin-left: 42px;
    margin-right: 42px;
    margin-top: 86px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        box-shadow: var(--devui-shadow-length-connected-overlay, 0 2px 12px 0) var(--devui-connected-overlay-shadow, rgba(37, 43, 58, .16))
    }

    .first-before-line {
        border-bottom: 2px solid var(--devui-link-light, #96adfa);
        width: 50px;
        position: absolute;
        right: 220px;
        top: 20px;
    }

    .add-before-line {
        left: -11px;
        border-radius: 0 0 0 12px;
        position: absolute;
        height: 100px;
        width: 12px;
        top: -79px;
        border-left: 2px dashed var(--devui-link-light, #96adfa);
        border-bottom: 2px dashed var(--devui-link-light, #96adfa);
        opacity: .6;
    }

    .content {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 42px;
    }
}
</style>