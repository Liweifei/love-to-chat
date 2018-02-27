<template>
    <div class="headModel">
        <mt-header fixed :title="headTitle">
            <router-link to="/" slot="left">
                <span class="iconfont icon-sortlight" @click="sendType"></span>
                <!-- <mt-button icon="back" @click="sendType"></mt-button> -->
            </router-link>
            <router-link to="/" slot="right">
                <mt-button>找人</mt-button>
            </router-link>
        </mt-header>
    </div>
</template>

<script>
let _this;
export default {
  name: 'headModel',
  data () {
    return {
      headTitle: "喜欢聊",
      bg: require("../../src/assets/img/chatBg1.jpg"),
      showType:false
    }
  },
  props:['sendShadowType'],
  created() {
    _this = this;
  },
  methods:{
    toast(){
        Toast('提示信息');
    },
    sendType() {
      this.showType=!this.showType;
      var type=this.showType;
      _this.$emit("getType",type)
    }
  },
  watch:{
    sendShadowType(val){
      console.log(val)
      this.showType=val;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>
