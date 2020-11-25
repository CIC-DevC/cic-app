import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, processColor} from 'react-native';

import {LineChart} from 'react-native-charts-wrapper';
import colors from '~/styles/colors';
import dayjs from 'dayjs';
import commonStyles from '~/styles';
import {getHistoryScore} from '~/api/history';
import {useSelector} from 'react-redux';

const pageSize = 100;

function HistoryChart() {
  const user = useSelector((state) => state.auth.user);
  const [xMin, setXMin] = useState(0);
  const [xMax, setXMax] = useState(0);
  const [chartState, setChartState] = useState({
    data: {},
    marker: {
      enabled: true,
      digits: 2,
      backgroundTint: processColor('teal'),
      markerColor: processColor('#000'),
      textColor: processColor('white'),
    },
    xAxis: {
      avoidFirstLastClipping: true,
      granularityEnabled: true,
      granularity: 1,
      position: 'BOTTOM',
      axisLineColor: processColor('#000'),
      axisLineWidth: 2,
      gridLineWidth: 1,
      gridDashedLine: {
        lineLength: 10,
        spaceLength: 10,
        phase: 0,
      },
      textSize: 12,
      labelCount: 5,
      valueFormatter: 'date',
      valueFormatterPattern: 'dd/MM',
      timeUnit: 'DAYS',
    },
    legend: {
      enabled: false,
    },
    yAxis: {
      right: {
        enabled: false,
      },
      left: {
        axisLineColor: processColor('#000'),
        axisLineWidth: 2,
        gridLineWidth: 1,
        gridDashedLine: {
          lineLength: 10,
          spaceLength: 10,
          phase: 0,
        },
        textSize: 12,
      },
    },
  });

  const chartRef = useRef();

  useEffect(() => {
    // mockLoadDataFromServer(-pageSize, pageSize).then(function (data) {
    //   setChartState({
    //     ...chartState,
    //     data: data,
    //     visibleRange: {x: {min: 5, max: 30}},
    //   });
    //   if (data.dataSets[0].values && data.dataSets[0].values.length > 0) {
    //     setTimeout(() => {
    //       chartRef.current.moveViewToX(
    //         data.dataSets[0].values[data.dataSets[0].values.length - 1].x,
    //       );
    //     }, 50);
    //   }
    // });
    getDataHistoryScore();
  }, []);

  function getDataHistoryScore() {
    getHistoryScore(user.phoneNum)
      .then((response) => {
        let data = [];
        if (
          response.data &&
          response.data.score &&
          response.data.score.length > 0
        ) {
          console.log(response.data);
          data = response.data.score.map((item) => {
            // console.log(item.createdDate instanceof Date);
            // console.log(item.createdDate.getTime());

            console.log(dayjs(item.createdDate).toDate());
            return {
              x: Math.floor(
                dayjs(item.createdDate).toDate().getTime() / 8.64e7,
              ),
              y: item.score ? Math.round((1 - item.score) * 1000) : 0,
            };
          });
          console.log(data);
        }
        updateChart(data);
      })
      .catch(() => {
        updateChart([]);
      });
  }

  function updateChart(data) {
    setChartState({
      ...chartState,
      data: {
        dataSets: [
          {
            values: data,
            label: 'Score',
            config: {
              color: processColor(colors.green),
              drawValues: false,
              axisDependency: 'LEFT',
              circleColor: processColor(colors.green),
              circleHoleColor: processColor(colors.green),
              circleRadius: 3,
              lineWidth: 2,
            },
          },
        ],
      },
      visibleRange: {x: {min: 5, max: 30}},
    });
    if (data.length > 0) {
      setTimeout(() => {
        chartRef.current.moveViewToX(data[data.length - 1].x);
      }, 50);
    }
  }

  function getData() {
    const data = [];
    for (let i = 100; i >= 0; i--) {
      data.push({
        x: Math.floor(dayjs().subtract(i, 'day').toDate().getTime() / 8.64e7),
        y: Math.random() * 10 + 500,
      });
    }
    return data;
  }

  function mockLoadDataFromServer(from, to) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        setXMin(from);
        setXMax(to);

        console.log('load data from ' + from + ' to ' + to);
        resolve({
          dataSets: [
            {
              values: getData(),
              label: 'Score',
              config: {
                color: processColor(colors.green),
                drawValues: false,
                axisDependency: 'LEFT',
                circleColor: processColor(colors.green),
                circleHoleColor: processColor(colors.green),
                circleRadius: 3,
                lineWidth: 2,
              },
            },
          ],
        });
      }, 50);
    });
  }

  return (
    <View style={[styles.container, commonStyles.containerRadius]}>
      <LineChart
        style={styles.chart}
        data={chartState.data}
        chartDescription={{text: ''}}
        xAxis={chartState.xAxis}
        yAxis={chartState.yAxis}
        touchEnabled={true}
        dragEnabled={true}
        scaleEnabled={true}
        scaleXEnabled={true}
        scaleYEnabled={false}
        doubleTapToZoomEnabled={false}
        pinchZoom={false}
        visibleRange={chartState.visibleRange}
        dragDecelerationEnabled={false}
        marker={chartState.marker}
        drawGridBackground={false}
        legend={chartState.legend}
        highlightPerTapEnabled={true}
        highlightPerDragEnabled={false}
        keepPositionOnRotation={false}
        ref={chartRef}
        // onChange={this.handleChange.bind(this)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  chart: {
    flex: 1,
    height: 300,
  },
});

export default React.memo(HistoryChart);
