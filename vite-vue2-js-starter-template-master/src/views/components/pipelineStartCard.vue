<script>
export default {
    name: 'PipelineStartCard'
}
</script>
<template>
    <div class="pipeline-start-card">
        <div class="item">
            <div class="next-line"></div>
            <div class="item-content">
                应用信息
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped >
.pipeline-start-card {
    padding-left: 30px;

    .item {
        width: 220px;
        background: transparent;
        margin: 20px 0 24px;
        position: relative;

        .next-line {
            border-bottom: 2px solid var(--devui-link-light, #96adfa);
            width: 50px;
            position: absolute;
            right: -50px;
            top: 20px;
        }

        &-content {
            width: 100%;
            height: 124px;
            padding: 24px;
            border: 2px solid transparent;
            background: #ffffff;
            border-radius: 4px;
            box-shadow: 0 2px 6px 0 rgba(37, 43, 58, .12);
            position: relative;
            cursor: pointer;

            &::after {
                content: "";
                width: 10px;
                height: 10px;
                border-radius: 50%;
                position: absolute;
                top: 14px;
                right: -7px;
                background: #96adfa;
                border: 2px solid #ffffff;
            }
        }
    }
}
</style>