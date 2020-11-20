export default {
  routes: {
    home: 'Home',
    history: 'History',
    scoreIncrement: 'Increase Score',
    borrowMoney: 'Borrow Money',
  },
  error: {
    title: 'Thông báo',
    connectionlost: 'Lỗi kết nối',
    unauthorized: 'Bạn không có quyền truy cập',
    noMessage: 'Có lỗi xảy ra',
  },
  button: {
    OK: 'OK',
    cancel: 'Cancel',
  },
  common: {
    hello: 'Hello!',
  },
  scoreStatus: {
    veryGood: 'Very good',
    good: 'Good',
    average: 'Average',
    belowAverage: 'Below average',
    poor: 'Poor',
  },
  login: {
    greet: 'Welcome!',
    phoneInput: {
      label: "Input your's phone number to continue",
      placeholder: 'Phone number',
      validate: {
        empty: 'Please input phone number',
        invalid: 'Phone number is invalid',
      },
    },
    desc: 'Use of CIC application is you accepted ',
    termCondition: 'The Terms and Conditions',
    continueButton: 'Continue',
  },
  confirmOtp: {
    otpInput: {
      label: 'Enter the 6-digit verification code sent to',
      receiveConfirm: "Haven't received the code?",
    },
    resend: 'Resend',
    continueButton: 'Continue',
    backButton: 'Back',
  },
  home: {
    label: {
      yourScore: 'Your CIC Score',
      summaryReport: 'Summary of your credit report',
    },
  },
};
