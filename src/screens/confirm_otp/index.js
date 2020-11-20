import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {images} from '~/assets';
import colors from '~/styles/colors';
import commonStyles from '~/styles';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {login} from '~/stores/actions/auth';
import {LocalizationContext} from '~/translations';
import {requestLogin} from '~/api/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function ConfirmOtpScreen({navigation, route}) {
  const dispatch = useDispatch();

  const {t} = useContext(LocalizationContext);

  const [codeOtp, setCodeOtp] = useState('');

  const [loading, setLoading] = useState(false);

  const {phoneInput} = route.params;

  const phoneNumLabel = phoneInput
    ? phoneInput.prefix + ' ' + phoneInput.number
    : '';

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Spinner visible={loading} />
        <ImageBackground style={styles.headerImg} source={images.loginHeader} />
        <View style={styles.body}>
          <Text style={commonStyles.mediumText}>
            {t('confirmOtp.otpInput.label')}
          </Text>

          <Text style={styles.phoneNumLabel}>{phoneNumLabel}</Text>

          <OTPInputView
            style={{height: 100}}
            pinCount={6}
            code={codeOtp}
            onCodeChanged={(code) => {
              setCodeOtp(code);
            }}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
          />

          <Text style={commonStyles.mediumText}>
            {t('confirmOtp.otpInput.receiveConfirm')}
          </Text>

          <Text
            style={[commonStyles.mediumText, {color: '#0066FF', marginTop: 10}]}
            onPress={() => onResend()}>
            {t('confirmOtp.resend')}
          </Text>

          <View style={styles.bottomWrapper}>
            <Button
              title={t('confirmOtp.continueButton')}
              buttonStyle={[
                commonStyles.primaryButton,
                {width: '100%', marginBottom: 10},
              ]}
              onPress={() => onConfirm()}
              disabled={codeOtp.length !== 6}
            />
            <Button
              title={t('confirmOtp.backButton')}
              buttonStyle={[commonStyles.primaryButton, {width: '100%'}]}
              onPress={() => onBack()}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  function onConfirm() {
    setLoading(true);
    const phone = phoneInput.prefix.replace('+', '') + phoneInput.number;
    dispatch(
      login('tokenFake', {phoneNum: '84971008256', score: 0.5249708073}),
    );
    setLoading(false);
    // requestLogin(phone, codeOtp)
    //   .then((response) => {
    //     if (response.data) {
    //       dispatch(login('tokenFake', response.data));
    //     }
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //   });
  }

  function onResend() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  function onBack() {
    navigation.pop();
  }
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
    top: -70,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'stretch',
    paddingTop: 110,
  },
  bottomWrapper: {
    flex: 1,
    alignItems: 'stretch',
    marginHorizontal: 40,
    marginBottom: 40,
    justifyContent: 'flex-end',
  },
  phoneNumLabel: {
    fontSize: 18,
    lineHeight: 21,
    marginTop: 12,
  },

  underlineStyleBase: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: 'bold',
    borderWidth: 0,
    borderBottomWidth: 1.5,
    borderBottomColor: '#8B8383',
  },

  underlineStyleHighLighted: {
    borderBottomWidth: 1.5,
    borderBottomColor: colors.primary,
    color: colors.primary,
  },
});
