<template>
    <div :class="{leftPane:true, hide:sendType}">
        <mt-cell class="list" v-for="item in leftPaneData" :title="item.title" :value="item.descride"  :is-link="item.title=='个性标签' || item.title=='年龄'">
            <mt-switch v-if="item.title=='音效'" v-model="switchio"></mt-switch>
        </mt-cell>
        <div>{{sendType}}</div>
    </div>
</template>

<script>
export default {
  name: 'leftPane',
  data () {
    return {
        switchio: true,
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
        ]
    }
  },
  props:['sendType']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.leftPane{
    width: 60%;
    height: 100%;
    position: fixed;
    left: -60%;
    top: 40px;
    bottom: 0;
    background: #000;
    transition: all 0.3s ease-in-out;

    .list{
        background: none;
        color: #bbb;

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
