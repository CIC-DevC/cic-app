import axios from 'axios';
import apiConfig from './config';
import {Alert} from 'react-native';

export default class APIService {
  static instance = null;
  localizationContext = null;
  token = null;
  service = null;

  static getInstance() {
    if (this.instance === null) {
      this.instance = new APIService();
    }
    return this.instance;
  }

  setLocalizationContext(localizationContext) {
    this.localizationContext = localizationContext;
  }

  setToken(token) {
    this.token = token;
    if (this.service) {
      this.createService();
    }
  }

  createService() {
    this.service = axios.create({
      baseURL: apiConfig.baseUrl, // api base_url
      timeout: 120000, // request timeout
    });
    this.service.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        if (this.token) {
          config.headers['Authorization'] = 'Bearer ' + this.token;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );
    const self = this;
    this.service.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (!axios.isCancel(error)) {
          let mess = self.localizationContext.t('error.connectionlost');
          //   if (error.response && error.response.status === 401) {
          //     if (
          //       !error.response.data ||
          //       error.response.data.code === null ||
          //       error.response.data.code === undefined
          //     ) {
          //       bus.$store.dispatch('logOut');
          //       bus.$router.push({
          //         name: 'login',
          //         params: { sessionExpired: true },
          //       });
          //       return Promise.reject(error);
          //     }
          //   }

          if (error.response && error.response.data) {
            const data = error.response.data;
            if (data.message) {
              mess = data.message;
            } else {
              mess = self.localizationContext.t('error.noMessage');
            }
          }
          setTimeout(() => {
            Alert.alert(
              self.localizationContext.t('error.title'),
              mess,
              [
                {
                  text: self.localizationContext.t('button.OK'),
                  onPress: () => {},
                  style: 'cancel',
                },
              ],
              {cancelable: false},
            );
          }, 500);

          return Promise.reject(error);
        } else {
          return Promise.resolve({});
        }
      },
    );
  }

  getService() {
    if (!this.service) {
      this.createService();
    }
    return this.service;
  }
}
