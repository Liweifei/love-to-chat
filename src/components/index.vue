<template>
  <div class="hello">
    <headerBar></headerBar>
  </div>
</template>

<script>
import headerBar from "./header.vue"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: "asd"
    }
  },
  components: {headerBar},
  methods:{
    toast:()=>{
        console.log(55)
        let instance = Toast('提示信息');
        setTimeout(() => {
          instance.close();
        }, 2000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
