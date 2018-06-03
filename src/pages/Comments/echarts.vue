<template>
<div>
  <div id="echart"></div>

  <Card>
    <div v-if="data.name">
        <h4>小区名称: {{data.name}}</h4>
        <div>上班方式: {{data.how_go}}</div>
        <div>干净程度: {{`${data.is_clean}分`}}</div>
        <div>周边美食: {{`${data.has_food}分`}}</div>
        <div>周边商业区: {{`${data.has_mall}分`}}</div>
    </div>
    <div v-else>点击一个小区可以查看小区的评价详情</div>
  </Card>
</div>
</template>

<script>
import echarts from 'echarts';
import api from '@/api'
import { mapState } from 'vuex';
const keyCnMap = {
  village: '小区名称',
  how_go: '上班方式',
  how_long: '上班时间',
  is_clean: '干净程度',
  has_food: '周边美食',
  has_mall: '周边商业区',
};

export default {
  data() {
    return {
      chart: null,
      option: {},
      data: {}
    };
  },
  async mounted() {
    if (!this.cid) {
        this.$Message.error({
            content: '请选择一个地址'
        });
        this.$router.push('/comments');
        return;
    }
    const res = await api.getMainData({cid: this.cid});
    this.chart = echarts.init(document.getElementById('echart'));
    this.option = {
        title : {
            text: '周围房源评价统计',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        //     // data: Object.keys(res)
        // },
        series : [
            {
                name: '小区评价数',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data: Object.entries(res).map(([key, value]) => ({
                    name: key,
                    value: value.total,
                    ...value
                })),
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      };
    this.chart.setOption(this.option);
    this.chart.on('click', this.onChartClick);
  },
  computed: {
      ...mapState(['cid'])
  },
  methods: {
      onChartClick(params) {
          this.data = JSON.parse(JSON.stringify(params.data));
          const goWays = ['班车', '地铁', '公交', '骑行', '步行', '开车', '其他'];
          this.data.how_go = Object.entries(this.data.how_go).map(([key, value]) => `${goWays[key - 1]}${value}分钟`).join(' # ')
      }
  }
}
</script>

<style lang="scss">
@import '../../assets/style/comments-charts.scss';
</style>
