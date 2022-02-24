export const rules = {
  number: [
    {
      required: true,
      message: '请输入手机号码',
      trigger: 'blur'
    },
    {
      pattern: /^1[0-9]{10,10}$/,
      message: '请输入11位手机号码',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6,6}$/,
      message: '请输入6位验证码',
      trigger: 'blur'
    }
  ]
};
