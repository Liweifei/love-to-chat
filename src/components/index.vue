<template>
    <div class="index">
        <head-model @aaaa="fromChild"></head-model>
        <leftPane></leftPane>
        <p class="declaration">愿无岁月可回头，且以深情共白首！</p>
    </div>
    
</template>

<script>
import headModel from "./headModel.vue"
import leftPane from "./leftPane.vue"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: "asd"
    }
  },
  components: {headModel,leftPane},
  methods:{
    toast:()=>{
        console.log(55)
        let instance = Toast('提示信息');
        setTimeout(() => {
          instance.close();
        }, 2000);
    },
    fromChild:()=>{
        console.log(22)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .index{
        padding-top: 40px;

        .declaration{
            color: #fff;
        }
    }
    .dd{
        color: red;
        .aa{
            color: #fff;
        }
    }
</style>
