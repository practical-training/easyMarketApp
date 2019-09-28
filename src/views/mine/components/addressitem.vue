<template>
    <div class="addressItem">
        <div class="isChooseAddress"></div>
        <div class="addressMsg">
            <div class="concatName">{{items.name}}</div>
            <div class="addressDetail">
                <div class="concatPhone">{{items.mobile}}</div>
                <div class="concatAddress">{{items.full_region}}</div>
                <div class="concatAddress">{{items.address}}</div>
            </div>
            <div class="deleteAddress">
                <img :src="flagimgs" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import './css/addressitem.css'
export default {
    props:{
        items:{
        type: Object
        }
    },
    components:{

    },
    data(){
        return {
            flagimgs:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEVmZmZtbW1ubm5wcHCJiYmKioqOjo6Tk5OUlJSVlZXm5ubn5+fv7+/y8vL////PAON/AAAAa0lEQVQ4y2N4hwsw0F8mgIGBgRWrDAMIoMokMKADNoIy6O5gwCAHgUwoThkGEmWexiFTyDIP+JCpUZmBkXnqh0wRH9shA5dGBe4hSbxlRJJpqEGSOcmBJLMYJS9aIcm8noQkobluoModNAAADGfUnhuYO1kAAAAASUVORK5CYII=",
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        console.log(this.items)
    },
    mounted(){

    }
}
</script>
<style lang="scss">

</style>