<template>
    <div class="list" @click="topic">
        <div class="list-img">
            <img :src="items.scene_pic_url" alt="">
        </div>
        <div class="list-title">
            <h4>{{items.title}}</h4>
            <p class="topicItemSubtitle">{{items.subtitle}}</p>
            <p><span>{{items.price_info}}元起</span></p>
        </div>
    </div>
</template>
<script>
import './css/special.css'
export default {
    props:{
        items:{
            type:Object
        }
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        topic(){
            let id = this.items.id;
            this.$router.push({
                path:'/topic',
                name: 'topic',
                params: {
                    id:id
                }
            })
        }
    },
    created(){
    
    },
    mounted(){

    }
}
</script>
<style lang="scss">


</style>