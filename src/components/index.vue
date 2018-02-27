<template>
    <div class="index">
        <div class="shadow" v-show="leftPaneType" @click="leftPaneType=!leftPaneType" ></div>
        <head-model @getType="setType" :sendShadowType="leftPaneType"></head-model>
        <leftPane :sendType="leftPaneType"></leftPane>
        <p class="declaration">愿无岁月可回头，且以深情共白首！</p>
        <div class="chose-sex" id="chose-sex" :chose="chose" @click="sheetVisible=!sheetVisible">
          <i class="iconfont icon-friendfavor"></i>
          <p :class="chose">{{sex}}</p>
        </div>
        <mt-actionsheet :actions="actions" v-model="sheetVisible">
        </mt-actionsheet>
        <section class="btn-group">
            <mt-button class="btn" v-for="item in btnGroup" type="primary" size="large">{{item}}</mt-button>
        </section>
    </div>
    
</template>

<script>
import headModel from "./headModel.vue"
import leftPane from "./leftPane.vue"
export default {
  name: 'index',
  data () {
    return {
      msg: "asd",
      leftPaneType: false,
      btnGroup:["开始聊天","输入vip代码"],
      sheetVisible:false,
      actions:[
        { 
          name:"男",
          method:this.boy
        },
        {
          name:"女",
          method:this.girl
        }
      ],
      chose:"",
      sex:"选择性别"
    }
  },
  components: {headModel,leftPane},
  methods:{
    setType(type){
      this.leftPaneType=type;
    },
    shadowIo(type){
        this.shadow=type;
    },
    boy(){
      this.chose="boy";
      this.sex="男"
    },
    girl(){
      this.chose="girl";
      this.sex="女"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index{
    padding-top: 40px;
    
    .shadow{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 19950111;
        position: absolute;
    }
    .declaration{
        color: #fff;
        text-align: center;
        margin-top: 30px;
    }
    .chose-sex{
        position: absolute;
        left: 50%;
        transform:translateX(-50%);
        -webkit-transform:translateX(-50%);
        -ms-transform:translateX(-50%);
        -o-transform:translateX(-50%);
        -moz-transform:translateX(-50%);
        bottom: 200px;
        text-align: center;
        color: #fff;
        font-size: 20px;

        .iconfont{
            font-size: 40px;
            color: #fff;
            margin-bottom: 10px;
        }
        .boy{
            color: #81a7ff;
        }
        .girl{
            color: #db7373;
        }
    }
    .btn-group{
        position: absolute;
        left: 0;
        right: 0;
        padding: 0 30px;
        bottom: 30px;
        box-sizing: border-box;
        
        .btn+.btn{
            margin-top: 10px;
            background: #ef4f4f;
        }
    }
}
</style>
