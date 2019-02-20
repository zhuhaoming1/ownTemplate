<template>
    <div class="index">
        <scroll
            ref="scroll"
            :listen-scroll="listenScroll"
            :probe-type="probeType"
            :pullDownRefresh="pullDownRefresh"
            :pullUpLoad="pullUpLoad"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp"
            :click="true"
            @scroll="scroll">
                <h2 v-for="item in 20">index{{item}}</h2>
        </scroll>
    </div>
</template>
<script>
import scroll from '../public/scroll/scroll'
import { setTimeout } from 'timers';
export default {
    data () {
        return { 
            probeType: 1,
            listenScroll: false,
            pullDownRefresh: {
                txt: '刷新完成...'
            },
            pullUpLoad: {
                txt: {
                more: '上啦加载更多...',
                noMore: '已是全部数据...'
                }
            }
        }
    },
    created () {
        this.probeType = 3
        this.listenScroll = true
        
    },
    mounted () {

    },
    components: {
        scroll
    },
    methods: {
        scroll(pos) {
            this.scrollY = pos.y
        },
        onPullingDown () {
            this.searchItems = []
            this.isPullDown = true
            setTimeout(()=>{
                this.$refs.scroll.forceUpdate()
            },2000)
            console.log('down')
        },
        onPullingUp () {
            this.searchItems = []
            this.isPullUp = true
             setTimeout(()=>{
                this.$refs.scroll.forceUpdate()
            },2000)
            console.log('up')
        }
    }
}
</script>
<style lang="scss">
.index{
    height: 100%;width: 100%;
    h2{
        line-height:45px; 
    }
    .list-wrapper{
      width: 100%;
      height: auto;
      background: #f0f0f0;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      overflow: hidden;
    }
}
</style>
