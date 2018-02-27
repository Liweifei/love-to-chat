<template>
    <div :class="{leftPane:true, hide:sendType}" @click="sendType=false">
        <mt-cell class="list" v-for="(item,index) in leftPaneData" to="javascript:;" :title="item.title" :value="item.descride"  :is-link="item.title=='个性标签' || item.title=='年龄'"  @click.native.stop="mtClick(index)">
            <mt-switch v-if="item.title=='音效'" v-model="switchio"></mt-switch>
        </mt-cell>
        <div>{{sendType}}</div>
        <mt-actionsheet :actions="actions" v-model="sheetVisible">
        </mt-actionsheet>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'leftPane',
  data () {
    return {
        switchio: true,
        sheetVisible:false,
        age:0,
        leftPaneData: [
            {
                title:"设置",
                descride:""
            },
            {
                title:"音效",
                descride:""
            },
            {
                title:"个性标签",
                descride:"请选择"
            },
            {
                title:"年龄",
                descride:"请选择"
            },
            {
                title:"购买VIP",
                descride:""
            },
            {
                title:"输入VIP代码",
                descride:""
            },
            {
                title:"帖子大厅",
                descride:""
            },
            {
                title:"查看我的id",
                descride:""
            }
        ],
        actions:[
            {name:"18以下",method:this.choseAge1},
            {name:"18-23",method:this.choseAge2},
            {name:"23以上",method:this.choseAge3},
        ]
    }
  },
  props:['sendType'],
  watch:{
    sendType(va){
        // console.log(va)
    }
  },
  methods:{
    choseAge1(){
        this.age="18";
        this.ts()
    },
    choseAge2(){
        this.age="18-23";
        this.ts()
    },
    choseAge3(){
        this.age="23";
        this.ts()
    },
    ts(){
        console.log(this.age)
        Toast({
          message: this.age,
          position: 'bottom',
          duration: 2000
        });
        this.leftPaneData[3].descride=this.age
    },
    mtClick(index){
        if (index==3) {
            this.sheetVisible=!this.sheetVisible
        }
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.mint-toast,.mint-actionsheet{
    z-index: 19950111 !important;
}
.leftPane{
    width: 60%;
    height: 100%;
    background: #000;
    position: fixed;
    left: -60%;
    top: 40px;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    z-index: 19950111;
    
    .list{
        background: #000;
        color: #bbb;
        z-index: 19950111;

        &:first-child {
            height: 70px;

            .mint-cell-wrapper{
                height: 100% !important;
            }
        }
    }
    .switctio{
        display: inline-block;
        vertical-align: middle;
    }
}
.hide{
    left: -0;
}

</style>
