import React, {useMemo, useEffect, useState, useRef} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  processColor,
} from 'react-native';
import commonStyles from '~/styles';

import {LineChart} from 'react-native-charts-wrapper';
import cloneDeep from 'lodash/cloneDeep';
import colors from '~/styles/colors';
import dayjs from 'dayjs';

function HistoryChart() {
  //   const [data, setData] = useState({
  //     dataSets: [
  //       {
  //         values: [],
  //         label: 'Score',
  //         config: {
  //           color: processColor(colors.green),
  //           drawValues: false,
  //           axisDependency: 'LEFT',
  //           circleColor: processColor(colors.green),
  //           circleHoleColor: processColor(colors.green),
  //           circleRadius: 3,
  //           lineWidth: 2,
  //         },
  //       },
  //     ],
  //   });

  const [chartState, setChartState] = useState({
    marker: {
      enabled: true,
      digits: 2,
      backgroundTint: processColor('teal'),
      markerColor: processColor('#F0C0FF8C'),
      textColor: processColor('white'),
    },

    data: {
      dataSets: [
        {
          values: [],
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
  });

  //   const chartRef = useRef();

  useEffect(() => {
    // const clone = cloneDeep(data);
    // clone.dataSets[0].values = getData();
    // setData(clone);
    // chartRef.current.setDataAndLockIndex({
    //   dataSets: clone.dataSets,
    // });
    // setVisibleRange({
    //   x: {
    //     min: 2,
    //     max: 2,
    //   },
    // });
    setTimeout(() => {
      setChartState({
        ...chartState,
        data: {
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
        },
        xAxis: {
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
        visibleRange: {
          x: {
            min: 10,
            max: 20,
          },
        },
      });
    }, 100);

    // setTimeout(() => {
    //   if (clone.dataSets[0].values.length > 0) {
    //     chartRef.current.visibleRange = {
    //       x: {
    //         min: 10,
    //         max: 10,
    //       },
    //     };
    //   }
    // }, 100);
  }, []);

  function handleSelect(event) {
    let entry = event.nativeEvent;
    // if (entry == null) {
    //   this.setState({...this.state, selectedEntry: null});
    // } else {
    //   this.setState({...this.state, selectedEntry: JSON.stringify(entry)});
    // }
  }

  function getData() {
    const data = [];
    const now = dayjs();
    for (let i = 100; i >= 0; i--) {
      data.push({
        x: now.subtract(i, 'day').toDate().getTime(),
        y: Math.random() * 10 + 500,
      });
    }
    console.log(data.length);
    return data;
  }

  return (
    <View style={[styles.container, commonStyles.containerRadius]}>
      <LineChart
        data={chartState.data}
        // ref={chartRef}
        style={styles.chart}
        chartDescription={{text: ''}}
        // marker={chartState.marker}
        visibleRange={chartState.visibleRange}
        xAxis={chartState.xAxis}
        yAxis={chartState.yAxis}
        drawGridBackground={false}
        legend={{
          enabled: false,
        }}
        autoScaleMinMaxEnabled={false}
        touchEnabled={true}
        dragEnabled={true}
        scaleXEnabled={true}
        scaleYEnabled={false}
        pinchZoom={true}
        doubleTapToZoomEnabled={true}
        highlightPerTapEnabled={true}
        highlightPerDragEnabled={false}
        dragDecelerationEnabled={false}
        keepPositionOnRotation={false}
        onSelect={handleSelect.bind(this)}
        // onChange={(event) => console.log(event.nativeEvent)}
      />
    </View>
  );
}

const MemoziedLineChart = React.memo(
  ({chartRef, visibleRange, handleSelect}) => {
    console.log('build');
    const chartConfig = {
      marker: {
        enabled: true,
        digits: 2,
        backgroundTint: processColor('teal'),
        markerColor: processColor('#F0C0FF8C'),
        textColor: processColor('white'),
      },
      xAxis: {
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
      visibleRange: {visibleRange},
    };
    return (
      <LineChart
        data={{
          dataSets: [],
        }}
        ref={chartRef}
        style={styles.chart}
        chartDescription={{text: ''}}
        marker={chartConfig.marker}
        xAxis={chartConfig.xAxis}
        yAxis={chartConfig.yAxis}
        drawGridBackground={false}
        legend={chartConfig.legend}
        autoScaleMinMaxEnabled={false}
        touchEnabled={true}
        dragEnabled={true}
        scaleXEnabled={true}
        scaleYEnabled={false}
        pinchZoom={true}
        doubleTapToZoomEnabled={true}
        highlightPerTapEnabled={true}
        highlightPerDragEnabled={false}
        dragDecelerationEnabled={false}
        keepPositionOnRotation={false}
        onSelect={handleSelect.bind(this)}
        // onChange={(event) => console.log(event.nativeEvent)}
      />
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  chart: {
    flex: 1,
    height: 220,
  },
});

export default HistoryChart;
