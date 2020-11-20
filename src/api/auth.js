import APIService from './index';

export function requestLogin(phoneNumber, codeOtp) {
  const request = APIService.getInstance().getService();
  return request({
    url: `/check/${phoneNumber}`,
    method: 'get',
  });
}
