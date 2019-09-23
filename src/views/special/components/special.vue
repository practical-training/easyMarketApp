<template>
    <div class="list">
        <div class="list-img">
            <img :src="items.scene_pic_url" alt="">
        </div>
        <div class="list-title">
            <h4>{{items.title}}</h4>
            <p>{{items.subtitle}}</p>
            <p><span>{{items.price_info}}元起</span></p>
        </div>
    </div>
</template>
<script>
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
.list{
    width: 98%;
    height: 290px;
    display: flex;
    flex-direction: column;
    background: #fff;
    margin: 5px auto;
}
.list .list-img{
    width: 100%;
    height: 190px;
}
.list .list-img img{
    width: 100%;
    height: 100%;
}
.list .list-title{
    width: 100%;
    flex: 1;
    text-align: center;
    h4{
        width: 100%;
        height: 26px;
        margin-top: 10px;
        line-height: 26px;
    }
    p{
        width: 100%;
        height: 20px;
        margin-top: 10px;
        line-height: 20px; 
        span{
            color: red;
        }
    }
}

</style>