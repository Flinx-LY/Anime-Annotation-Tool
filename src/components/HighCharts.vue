<template>
  <div class="highcharts-container"></div>
</template>

<script>
import axios from 'axios'
import Highcharts from 'highcharts/highstock'
// import HighchartsMore from 'highcharts/highcharts-more'
// import HighchartsDrilldown from 'highcharts/modules/drilldown'
// import Highcharts3D from 'highcharts/highcharts-3d'
// HighchartsMore(Highcharts)
// HighchartsDrilldown(Highcharts)
// Highcharts3D(Highcharts)

export default {
  props: ['options', 'styles'],
  name: 'highcharts',
  data() {
    return {
      chart: null,
      diffValue: null,
      options: {
        title: {
          text: null,
        },
        legend: {
          enabled: false,
        },
        chart: {
          type: 'column',
          animation: false,
          backgroundColor: 'transparent',
          events: {
            load: this.initData,
          },
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
            pointStart: low,
            animation: false,
            borderWidth: 0,
            cursor: 'pointer',
            point: {
              events: {
                click: function () {
                  get_frame(this.x)
                },
              },
            },
          },
        },
        xAxis: {
          plotLines: [
            {
              color: '#0bd699',
              value: 0,
              width: 3,
            },
          ],
        },
        yAxis: {
          title: {
            text: null,
          },
          tickPositions: [0, 1e7, 2e7, 3e7, 6.5e7],
          // visible: false,
        },
        series: [
          {
            data: [],
            zones: [
              {
                value: 1e7,
                color: '#7cb5ec',
              },
              {
                color: '#FF9655',
              },
            ],
          },
        ],
        credits: {
          enabled: false,
        },
      },
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initData() {
      axios
        .post(
          '/get',
          JSON.stringify({
            keys: ['diff_value_cut'],
          })
        )
        .then(function (res) {
          this.diffValue = res.data.diffValue
          this.updateChart(0)
        })
    },
    initChart() {
      console.log(this.$el)
      this.chart = new Highcharts.Chart(this.$el, this.options)
    },
    updateChart(numToGet) {
      let low = numToGet - 200
      let high = numToGet + 200
      if (low < 0) {
        low = 0
        high = 400
      } else if (high > this.diffValue.length) {
        low = this.diffValue.length - 400
        high = this.diffValue.length
      }
      this.chart.series[0].setData(this.diffValue.slice(low, high))
    },
  },
}
</script>

<style scoped>
.highcharts-container {
  transform: translateY(-45%);
  max-width: 100%;
  min-width: 100%;
  height: 240px;
  z-index: -1;
}
.highcharts-container svg > .highcharts-yaxis-grid > path:last-child {
  opacity: 0;
}
.highcharts-container svg > .highcharts-yaxis-labels > text:last-child {
  opacity: 0;
}
.highcharts-container svg > g.highcharts-plot-lines-0 {
  transform: scaleY(0.5) translateY(85%);
}
</style>