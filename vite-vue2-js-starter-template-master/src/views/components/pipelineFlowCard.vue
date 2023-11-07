<script>
import { ref, onMounted } from 'vue';
import { Sortable } from 'sortablejs/modular/sortable.core.esm';

export default {
    name: 'PipelineFlowCard',
    props: {
        jobs: {
            type: Array,
            default: () => []
        }
    },
    setup(props, { emit }) {
        const cardsWrapper = ref(null);
        const isDragging = ref(false);
        const sortable = ref(undefined);
        function deleteJob(id) {
            emit('deleteJob', id)
        }
        function copyJob(id) {
            emit('copyJob', id)
        }
        function initSortable() {
            sortable.value = null;
            sortable.value = new Sortable(cardsWrapper.value, {
                animation: 0,
                onStart: function (env) {
                    isDragging.value = true
                    console.log('onStart')
                },
                onEnd: function (env) {
                    console.log('onEnd')
                    isDragging.value = false
                }
            });
        }
        onMounted(() => {
            initSortable()
        })
        return {
            pipelineJobs: props.jobs,
            deleteJob,
            copyJob,
            cardsWrapper,
            isDragging
        }
    }
}
</script>
<template>
    <div ref="cardsWrapper" class="pipeline-flow-cards" :class="isDragging ? 'dragging' : ''">
        <div class="pipeline-flow-card" :key="job.id" v-for="(job) in pipelineJobs">
            <div class="pipeline-flow-card-job">
                <div class="first-before-line"></div>
                <div class="before-line"></div>
                <div class="before-arc"></div>
                <div class="before-line-fill"></div>
                <div class="content">
                    <div class="content-info">{{ job.title }}</div>
                    <div class="action">
                        <i class="el-icon-document-copy" @click="() => copyJob(job.id)"></i>
                        <i class="el-icon-delete" @click="() => deleteJob(job.id)"></i>
                    </div>
                </div>
                <div class="next-line"></div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.pipeline-flow-cards {
    // .sortable-ghost.pipeline-flow-card{
    //     background: red;
    //     .before-line {
    //         display: block !important;
    //     }
    // }
    .pipeline-flow-card:nth-child(1){
        .first-before-line {
            display: block;
        }

        .next-line {
            display: block;
        }
    }

    .pipeline-flow-card:nth-child(2) {
        .before-arc {
            display: block;
        }
    }

    .pipeline-flow-card:not(:nth-child(1)):not(:nth-child(2)) {
        .before-line-fill {
            display: block;
        }
    }

    .pipeline-flow-card:not(:nth-child(1)) {
        .before-line {
            display: block;
        }
    }

    .sortable-drag.pipeline-flow-card {
        .before-line,.first-before-line,.next-line,.before-arc,.before-line-fill {
            opacity: 0;
        }
    }
}

.pipeline-flow-card {
    display: flex;
    padding: 20px 0;
    justify-content: center;
    font-size: 14px;

    &-job {
        position: relative;
        border: 1px solid rgba(0, 0, 0, 0);

        &::after {
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: absolute;
            top: 16px;
            left: -4px;
            background: #96adfa;
            border: 2px solid #ffffff;
        }

        &:hover {
            border: 1px solid var(--devui-link-light, #96adfa);
            box-shadow: var(--devui-shadow-length-hover, 0 8px 16px 0) var(--devui-connected-overlay-shadow, rgba(37, 43, 58, .16));

            .content .action {
                display: block;
            }
        }


        .next-line {
            display: none;
            border-bottom: 2px solid var(--devui-link-light, #96adfa);
            width: 40px;
            position: absolute;
            right: -40px;
            top: 20px;
        }

        .before-arc {
            display: none;
            position: absolute;
            border-top: 2px solid var(--devui-link-light, #96adfa);
            border-right: 2px solid var(--devui-link-light, #96adfa);
            height: 21px;
            width: 12px;
            left: -19px;
            top: -64px;
            border-radius: 0 12px 0 0;
        }

        .before-line {
            display: none;
            border-left: 2px solid var(--devui-link-light, #96adfa);
            border-bottom: 2px solid var(--devui-link-light, #96adfa);
            border-radius: 0 0 0 12px;
            width: 12px;
            height: 73px;
            position: absolute;
            left: -9px;
            top: -50px;
        }

        .before-line-fill {
            display: none;
            position: absolute;
            height: 30px;
            top: -70px;
            border-left: 2px solid var(--devui-link-light, #96adfa);
            left: -9px;
        }

        .first-before-line {
            display: none;
            border-bottom: 2px solid var(--devui-link-light, #96adfa);
            width: 50px;
            position: absolute;
            right: 210px;
            top: 20px;
        }

        .content {
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            width: 220px;
            height: 42px;
            padding: 10px 16px;
            background: var(--devui-base-bg, #ffffff);
            border: 1px solid var(--devui-embed-search-bg, #f2f5fc);
            border-radius: var(--devui-border-radius, 2px);
            position: relative;
            display: flex;
            box-shadow: var(--devui-shadow-length-base, 0 2px 6px 0) var(--devui-light-shadow, rgba(37, 43, 58, .12));

            &-info {
                overflow: hidden;
                max-width: 120px;
                text-overflow: ellipsis;
                word-break: keep-all;
            }

            .action {
                display: none;

                i {
                    margin-left: 16px;
                }
            }
        }
    }
}
</style>