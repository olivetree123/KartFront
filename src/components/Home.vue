<template>
<div class="container">
    <div class="charts">
        <div class="chart">
            <v-echart ref="chart1" :options="orgOptions" :auto-resize="true"></v-echart>
        </div>
        <div class="chart">
            <v-echart ref="chart1" :options="orgOptions" :auto-resize="true"></v-echart>
        </div>
        <div class="chart">
            <v-echart ref="chart1" :options="orgOptions" :auto-resize="true"></v-echart>
        </div>
        <div class="chart">
            <v-echart ref="chart1" :options="orgOptions" :auto-resize="true"></v-echart>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Home",
    data () {
        return {
            orgOptions: {},
        }
    },
    mounted() {
        this.orgOptions = {
            title: {
                show:"true",
                text: 'ECharts 入门示例',
                left: 15
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: false
            }]
        }
    }
}
</script>

<style scoped>
@import '../css/kart.css';
</style>
