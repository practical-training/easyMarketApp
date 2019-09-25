<template>
    <div class="commentItem">
        <div class="userInfo">
            <div v-if="items.user_info.nickname">{{items.user_info.nickname}}</div>
            <div v-else>匿名用户</div>
            <div>{{items.add_time}}</div>
        </div>
        <div class="userComment">{{items.content}}</div>
    </div>
</template>
<script>
import './css/topiclist.css'
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

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style lang="scss">

</style>