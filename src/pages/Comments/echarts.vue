<template>
<div>
  <div id="echart"></div>

  <Card>
    直接访问','邮件营销','联盟广告','视频广告','搜索引擎直接访问','邮件营销','联盟广告','视频广告','搜索引擎
    直接访问','邮件营销','联盟广告','视频广告','搜索引擎直接访问','邮件营销','联盟广告','视频广告','搜索引擎
  </Card>
</div>
</template>

<script>
import echarts from 'echarts';
import api from '@/api'
import { mapState } from 'vuex';

export default {
  data() {
    return {
      chart: null,
      option: {
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
    };
  },
  mounted() {
    this.chart = echarts.init(document.getElementById('echart'));

    this.chart.setOption(this.option);
  },
  computed: {
      ...mapState(['cid'])
  },
  async created() {
      if (!this.cid) {
          this.$Message.error({
              content: '请选择一个地址'
          });
          this.$router.push('/comments');
          return;
      }
      await api.getMainData({cid: this.cid});
  }
}
</script>

<style lang="scss">
@import '../../assets/style/comments-charts.scss';
</style>
