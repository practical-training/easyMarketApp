<template>
    <div class="countOp">
        <div @click="addnumbers({name:'del',number:items.number,id:items.id})">-</div>
        <div>{{items.number}}</div>
        <div @click="addnumbers({name:'add',number:items.number,id:items.id})">+</div>
    </div>
</template>
<script>
import './css/countOp.css'
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
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
        ...mapMutations('shopcar',['addnumber']),
        ...mapActions("shopcar", ['getGoodscount',"getUpdate"]),
        addnumbers(data){
           this.addnumber(data)
           console.log(this.items)
            this.getUpdate({  goodsId: this.items.goods_id,id: this.items.id,number:this.items.number,productId: this.items.product_id,})
        }
    },
    created(){
        this.number
    },
    mounted(){

    }

}
</script>
<style lang="scss">

</style>
