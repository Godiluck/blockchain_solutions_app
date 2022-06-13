<script>
import {h} from 'vue'

import {Line} from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
)

export default ({
  name: 'LineChart',
  components: {
    Line
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    width: {
      type: Number,
      default: 700
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
  },
  setup(props) {
    const chartData = {
      labels: [],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          amount: []
        }
      ]
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    }

    return () =>
        h(Line, {
          chartData,
          chartOptions,
          chartId: props.chartId,
          width: props.width,
          height: props.height,
        })
  }
})
</script>