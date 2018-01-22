<template>
    <div class="headModel">
        <mt-header fixed title="固定在顶部">
            <router-link to="/" slot="left">
                <mt-button icon="back" @click="sendType"></mt-button>
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
      bg: require("../../static/img/chatBg1.jpg"),
      showType:false
    }
  },
  created() {
    _this = this;
  },
  methods:{
    sendType() {
      console.log(this.showType)
      this.showType=!this.showType;
      console.log(this.showType)
      var type=this.showType;
      _this.$emit("getType",type)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
