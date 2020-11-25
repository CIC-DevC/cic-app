import APIService from './index';

export function getHistoryScore(phoneNumber) {
  const request = APIService.getInstance().getService();
  return request({
    url: `/check-history/${phoneNumber}`,
    method: 'get',
  });
}
