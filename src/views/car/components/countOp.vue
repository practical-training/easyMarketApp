<template>
    <div class="countOp">
        <div @click="addnumber({name:'del',number:items.number})">-</div>
        <div>{{items.number}}</div>
        <div @click="addnumber({name:'add',number:items.number})">+</div>
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