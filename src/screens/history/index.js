import React, {useContext} from 'react';
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
import HistoryChart from './history_chart';
import {LocalizationContext} from '~/translations';

export default function HistoryScreen() {
  const {t} = useContext(LocalizationContext);
  return (
    <ScrollView style={styles.container} alwaysBounceVertical={false}>
      <ImageBackground style={styles.headerImg} source={images.homeHeader} />
      <View style={styles.body}>
        <Text style={styles.helloText}>{t('common.hello')}</Text>
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
        <Text style={styles.titleLabel}>
          {t('history.label.yourScoreHistory')}
        </Text>
        <HistoryChart />
        <Button
          title={t('history.improveScore')}
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
