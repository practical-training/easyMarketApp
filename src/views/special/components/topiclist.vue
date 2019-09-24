<template>
    <div class="commentItem">
        <div class="userInfo">
            <div>preo</div>
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