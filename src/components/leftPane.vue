<template>
    <div class="leftPane">
        <mt-cell class="list" v-for="item in leftPaneData" :title="item.title" :value="item.descride"  :is-link="item.title=='个性标签' || item.title=='年龄'">
            <mt-switch v-if="item.title=='音效'" v-model="switchio"></mt-switch>
        </mt-cell>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.leftPane{
    width: 60%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 40px;
    bottom: 0;
    background: #000;

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

</style>
