<template>
    <div class="header">
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
import { Header } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      bg: require("../../static/img/chatBg1.jpg")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
