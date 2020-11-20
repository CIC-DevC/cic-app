import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Linking,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {images} from '~/assets';
import colors from '~/styles/colors';
import commonStyles from '~/styles';
import {Input, Button} from 'react-native-elements';
import {validatePhoneNumberVietnam} from '~/utils/validate';
import {LocalizationContext} from '~/translations';
import Spinner from 'react-native-loading-spinner-overlay';

export default function LoginScreen({navigation}) {
  const {t} = useContext(LocalizationContext);

  const [phoneInput, setPhoneInput] = useState({
    ref: React.createRef(),
    prefix: '+84',
    number: '',
    error: null,
  });

  const [loading, setLoading] = useState(false);

  function validatePhone() {
    let errorMess = null;
    if (phoneInput.number === '') {
      errorMess = t('login.phoneInput.validate.empty');
    } else if (
      !validatePhoneNumberVietnam(phoneInput.prefix + phoneInput.number)
    ) {
      errorMess = t('login.phoneInput.validate.invalid');
    }
    if (errorMess !== null) {
      setPhoneInput({...phoneInput, error: errorMess});
      phoneInput.ref.current.shake();
      return false;
    } else {
      if (phoneInput.error != null) {
        setPhoneInput({...phoneInput, error: null});
      }
      return true;
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Spinner visible={loading} />
        <ImageBackground style={styles.headerImg} source={images.loginHeader} />
        <View style={styles.body}>
          <Text style={styles.greetText}>{t('login.greet')}</Text>
          <Text style={commonStyles.mediumText}>
            {t('login.phoneInput.label')}
          </Text>
          <Input
            ref={phoneInput.ref}
            value={phoneInput.number}
            onChangeText={(value) =>
              setPhoneInput({...phoneInput, number: value})
            }
            placeholder={t('login.phoneInput.placeholder')}
            leftIcon={() => (
              <Text
                style={[
                  commonStyles.mediumText,
                  {paddingTop: 20, paddingRight: 5, paddingBottom: 0},
                ]}>
                {phoneInput.prefix}
              </Text>
            )}
            containerStyle={{
              paddingHorizontal: 0,
              marginBottom: 30,
            }}
            renderErrorMessage={false}
            inputStyle={[
              commonStyles.mediumText,
              {paddingTop: 20, paddingBottom: 0},
            ]}
            errorMessage={phoneInput.error}
            placeholderTextColor={'rgba(139, 131, 131, 0.88)'}
            keyboardType={'phone-pad'}
          />

          <Text style={commonStyles.mediumText}>
            {t('login.desc')}
            <Text
              style={{color: '#0066FF'}}
              onPress={() => Linking.openURL('http://google.com')}>
              {t('login.termCondition')}
            </Text>
          </Text>

          <View style={styles.bottomWrapper}>
            <Button
              title={t('login.continueButton')}
              buttonStyle={[commonStyles.primaryButton, {width: '100%'}]}
              onPress={() => onLogin()}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  function onLogin() {
    if (validatePhone()) {
      setLoading(true);
      setTimeout(() => {
        navigation.push('confirm_otp', {
          phoneInput: {
            prefix: phoneInput.prefix,
            number: phoneInput.number,
          },
        });
        setLoading(false);
      }, 1000);
    }
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
    paddingTop: 105,
  },
  greetText: {
    fontSize: 18,
    lineHeight: 21,
    color: '#5C5959',
    marginBottom: 14,
  },
  bottomWrapper: {
    flex: 1,
    alignItems: 'stretch',
    marginHorizontal: 40,
    marginBottom: 40,
    justifyContent: 'flex-end',
  },
});
