<template>
  <div class="hello">
    <button class="mint-button mint-button--default mint-button--large" @click="toast">
      <label class="mint-button-text">自定义 Toast 位置</label>
    </button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
