<script>
export default {
    name: 'Splitline',
    setup(props, {emit}) {
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
    <div class="splitline">
        <div class="splitline-content">
            <div class="vertical-base">
                <div class="vertical-icon">
                    <i class="el-icon-plus" @click="addFlow"></i>
                </div>
                <div class="vertical-line">

                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped >
.splitline {
    &-content {
        position: absolute;
        top: 0;
        left: -8px;
        width: 16px;
        height: 100%;
        padding-top: 66px;

        &:hover {
            .vertical-line {
                background: transparent;
                border-right-width: 2px;
                border-right-style: solid;
                border-image: linear-gradient(to top, transparent, var(--devui-brand, #5e7ce0)) 1;
                position: relative;
                z-index: 10;
                left: -1px;
            }
            .vertical-icon {
                i {
                    color: #fff;
                    background-color: #7693f5;
                    cursor:pointer;
                }
            }
        }

        .vertical-base {
            width: 1px;
            height: 100%;
            margin: 0 auto;
        }

        .vertical-line {
            display: block;
            width: 1px;
            height: 100%;
            background-image: linear-gradient(to top, #bdbdbd 0%, #bdbdbd 60%, transparent 40%);
            background-size: 1px 8px;
            background-repeat: repeat-y;
        }

        .vertical-icon {
            position: absolute;
            z-index: 11;
            top: 29px;
            left: -9px;
            i {
                color: #7693f5;
                border: 2px solid #7693f5;
                border-radius: 50%;
                background-color: #fff;
            }
        }
    }
}
</style>