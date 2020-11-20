import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import {images} from '~/assets';
import colors from '~/styles/colors';
import commonStyles from '~/styles';
import {Button} from 'react-native-elements';
import HistoryChart from './test';
import StockChartScreen from './demo_chart';
import InfiniteScrollLineChartScreen from './line_chart';

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container} alwaysBounceVertical={false}>
      <ImageBackground style={styles.headerImg} source={images.homeHeader} />
      <View style={styles.body}>
        <Text style={styles.helloText}>Xin chào!</Text>
        <View style={[commonStyles.containerRadius, styles.messageWrapper]}>
          <Text
            style={[
              commonStyles.largeText,
              {color: colors.white, textAlign: 'center'},
            ]}>
            GOOD JOB ! ĐIỂM SCORE CỦA BẠN ĐÃ ĐƯỢC CẢI THIỆN 20% SO VỚI TUẦN
            TRƯỚC
          </Text>
        </View>
        <Text style={styles.titleLabel}>Your Score History</Text>
        <HistoryChart />
        <InfiniteScrollLineChartScreen />
        <StockChartScreen />
        <Button
          title="Improve Score"
          buttonStyle={[commonStyles.primaryButton, {marginTop: 25}]}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerImg: {
    position: 'absolute',
    width: '100%',
    aspectRatio: 436 / 169,
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'stretch',
  },
  helloText: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 14,
    marginTop: 55,
    marginLeft: 40,
    marginBottom: 20,
  },
  messageWrapper: {
    backgroundColor: colors.primary,
    paddingVertical: 25,
    paddingHorizontal: 4,
    marginHorizontal: 20,
  },
  titleLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: colors.primary,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 15,
  },
});
