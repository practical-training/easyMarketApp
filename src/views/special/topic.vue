<template>
    <div>
        <header><span>&lt;</span><h4>关爱每一个成长的痕迹</h4></header>
        <div></div>
    </div>
</template>
<script>
import './css/topic.css'
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['topicxq'])
    },
    methods:{
        ...mapActions(['getTopic'])
    },
    created(){
        let id = this.$route.params.id;
        this.getTopic({id})
        console.log(this.topicxq)
    },
    mounted(){

    }
}
</script>
<style lang="">

</style>