<template>
    <div class="headModel" @click="openz">
        <mt-header fixed title="固定在顶部">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <router-link to="/" slot="right">
                <mt-button>找人</mt-button>
            </router-link>
        </mt-header>
    </div>
</template>

<script>
export default {
  name: 'headModel',
  data () {
    return {
      bg: require("../../static/img/chatBg1.jpg")
    }
  },
  methods:{
    openz:()=>{
      console.log("zxl")
      this.$emit("aaaa")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
