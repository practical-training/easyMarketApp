<template>
    <a  class="relateTopicItem" :href="'/topic/'+this.id">
        <img :src="items.scene_pic_url" alt />
        <div>{{items.title}}</div>
    </a>
</template>
<script>
import './css/relateTopicItem.css'
export default {
    props:{
        items: {
      type: Object
    }
    },
    components:{

    },
    data(){
        return {
            id:this.items.id
        }
    },
    computed:{

    },
    methods:{
        // topic() {
        //     let id = this.items.id;
        //     this.$emit("func",id)
        // }
    },
    created(){
        // console.log(this.items)
    },
    mounted(){

    }
}
</script>
<style lang="scss">

</style>