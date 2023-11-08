<script>
import { ref, onMounted, nextTick } from 'vue';
import Sortable from '@ccpow/devopslib/packages/utils/sortable'
import pipelineStart from './pipelineStart.vue';
import splitline from './splitline.vue';
import pipelineFlow from './pipelineFlow.vue';
import pipelineEnd from './pipelineEnd.vue';
// 给某个阶段增加一个并行任务
function newJobInSomeflow(pipelineData, data) {
    pipelineData.flows.forEach(element => {
        if (element.id === data.id) {
            element.jobs.push({
                id: +new Date(),
                title: `新的任务${+new Date() % 10000}`
            });
        }
    });
}
// 给某个阶段中删除一个任务
function deleteJobInSomeflow(pipelineData, data) {
    pipelineData.flows.forEach(element => {
        if (element.id === data.id) {
            element.jobs.splice(element.jobs.findIndex(item => item.id === data.jobId), 1);
        }
    });
}
// 给某个阶段中的任务复制一个任务
function copyJobInSomeflow(pipelineData, data) {
    pipelineData.flows.forEach(element => {
        if (element.id === data.id) {
            const sourceItem = element.jobs.filter(item => item.id == data.jobId)?.[0];
            element.jobs.splice(element.jobs.findIndex(item => item.id == data.jobId), 0,
                {
                    id: +new Date(),
                    title: `${sourceItem.title}`
                }
            );
        }
    });
}
// 增加阶段
function addFlow(pipelineData, data = {}) {
    const { id, type } = data;
    const newFlow = {
        id: +new Date(),
        title: `阶段${+new Date() % 10000}`,
        jobs: []
    }
    if(type == 'after') {
        pipelineData.flows.push(newFlow);
        return 
    }
    if(type == 'before'){
        pipelineData.flows.splice(0, 0 ,newFlow);
        return
    }
    pipelineData.flows.splice(pipelineData.flows.findIndex(item => item.id == id) + 1, 0 ,newFlow);
}
// 删除阶段
function deleteFlow(pipelineData, data = {}) {
    const { id } = data;
    pipelineData.flows.splice(pipelineData.flows.findIndex(item => item.id == id), 1);
}
// 复制阶段
function copyFlow(pipelineData, data = {}) {
    const { id } = data;
    const copyFlow = pipelineData.flows.find(flow => flow.id == id)
    const newFlow = {
        id: +new Date(),
        title: `阶段${+new Date() % 10000}`,
        // todo 此处未来需要考虑job的id也要单独定制
        jobs: [...copyFlow.jobs]
    }
    pipelineData.flows.splice(pipelineData.flows.findIndex(item => item.id == id) + 1, 0 ,newFlow);
}
// 任务纵向拖动完成
function dragJobEnd(pipelineData, data = {}) {
    // id为flow的id
    const { id, evt } = data
    pipelineData.flows.forEach(flow => {
        if(flow.id == id) {
            const movedItem = flow.jobs[evt.oldIndex]
            flow.jobs.splice(evt.oldIndex, 1);
            flow.jobs.splice(evt.newIndex, 0, movedItem);
        }
    })
}
// 阶段横向拖动完成
function dragFlowEnd(pipelineData, data = {}){
    const { evt } = data
    const movedItem = pipelineData.flows[evt.oldIndex]
    pipelineData.flows.splice(evt.oldIndex, 1);
    pipelineData.flows.splice(evt.newIndex, 0, movedItem);
}
export default {
    name: 'PipelineFlows',
    components: { pipelineStart, splitline, pipelineFlow, pipelineEnd },
    setup() {
        const pipelineData = ref({
            start: {
                info: {}
            },
            flows: [
                {
                    title: '构建阶段',
                    id: 1,
                    jobs: [
                        {
                            id: '1',
                            title: 'Build构建'
                        }
                    ]
                }, {
                    title: '部署',
                    id: 2,
                    jobs: [
                        {
                            id: 2,
                            title: '部署任务'
                        },
                        {
                            id: 3,
                            title: 'Kubernetes发布'
                        }
                    ]
                }, {
                    title: '发布CDN',
                    id: 3,
                    jobs: [
                        {
                            id: 5,
                            title: '发布测试环境'
                        },
                        {
                            id: 6,
                            title: '发布到一长的2'
                        },
                        {
                            id: 7,
                            title: '发布到一长的3'
                        },
                        {
                            id: 8,
                            title: '发布到一长的4'
                        },
                        {
                            id: 9,
                            title: '发布到一长的5'
                        },
                        {
                            id: 10,
                            title: '发布到一个很长的6'
                        }
                    ]
                },{
                    title: '新阶段',
                    id: 4,
                    jobs: []
                }
            ]
        })
        const sortable = ref(undefined)
        // vue2没有proxy，这里只能有状态处理数据
        function onAction({ type, data }) {
            switch (type) {
                case 'addJob':
                    newJobInSomeflow(pipelineData.value, data)
                    break;
                case 'deleteJob':
                    deleteJobInSomeflow(pipelineData.value, data)
                    break;
                case 'copyJob':
                    copyJobInSomeflow(pipelineData.value, data)
                    break;
                case 'addFlow':
                    addFlow(pipelineData.value, data)
                    break
                case 'deleteFlow':
                    deleteFlow(pipelineData.value, data)
                    break
                case 'copyFlow':
                    copyFlow(pipelineData.value, data)
                    break
                case 'dragJobEnd':
                    dragJobEnd(pipelineData.value, data)
                    break
                case 'dragFlowEnd':
                    dragFlowEnd(pipelineData.value, data)
                    break
                default:
                    break;
            }
        }
        function initSortable() {
            sortable.value = null;
            sortable.value = new Sortable(document.querySelector('.pipeline-flows-core'), {
                handle: '.j-flow-drag',
                animation: 0,
                delay: 100,
                onEnd: function(evt) {
                    onAction({
                        type: 'dragFlowEnd',
                        data: {
                            evt
                        }
                    })
                }

            });
        }
        onMounted(async ()=> {
            await nextTick()
            initSortable()
        })
        return {
            pipelineData,
            onAction
        }
    }
}
</script>
<template>
    <div class="pipeline-flows">
        <pipelineStart></pipelineStart>
        <splitline @addFlow="() => onAction({type: 'addFlow', data: { type: 'before'}})"></splitline>
        <div class="pipeline-flows-core">
            <div style="display:flex" :key="flow.id" v-for="flow in pipelineData.flows">
                <pipelineFlow :flow="flow" @onAction="onAction">
                </pipelineFlow>
                <splitline @addFlow="()=> onAction({type: 'addFlow', data: {id :flow.id}})"></splitline>
            </div>
        </div>
        <pipelineEnd @addFlow="() => onAction({type: 'addFlow', data: { type: 'after'}})"></pipelineEnd>
    </div>
</template>
<style lang="less" scoped >
.pipeline-flows {
    display: flex;
    // width: 100%;
    min-width: 100vw;
    height: 100%;
    clear: both;
    // overflow: hidden;

    &-core {
        display: flex;
    }
}
</style>