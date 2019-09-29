<template>
    <div class="countOp">
        <div @click="addnumber({name:'del',number:items.number,id:items.id})">-</div>
        <div>{{items.number}}</div>
        <div @click="addnumber({name:'add',number:items.number,id:items.id})">+</div>
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
        ...mapActions("shopcar", ['getGoodscount']),
        
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