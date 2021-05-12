<template>
    <div>
        <div v-for="item in items" :key="item.id">
            {{ item }}
        </div>
        <input v-model="data" type="text" />
        <div @click="handler(arg, event)"></div>
        <img :src="'/path/to/images/' + fileName" alt="altText"/>

        <div :class="{ className: data }"></div>

        <div :class="[classNameA, classNameB]"></div>

        <div :class="[classNameA, {classNameB : condition}]"></div>

        <transition
            mode="out-in"
            @before-enter="beforeEnter"
            @enter="enter"
        
            @before-leave="beforeLeave"
            @leave="leave"
            :css="false">
        
        </transition>

        <router-link :to="{name: 'name'}">LinkTitle</router-link>

        <router-link :to="{name: 'name', params:{id: 'value'} }">LinkTitle</router-link>

        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>