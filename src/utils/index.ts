export function checkUserForm(username: string, password: string) {
  if (!username || !password) {
    return {
      error_code: -1,
      message: '用户名或密码不得为空',
      data: {},
    };
  }
  if (username.length < 5) {
    return {
      error_code: -2,
      message: '用户名长度不可小于5',
      data: {},
    };
  }
  if (password.length < 6) {
    return {
      error_code: -3,
      message: '密码长度不可小于6',
      data: {},
    };
  }
  return {
    error_code: 0,
  };
}

export function generateRandomString(): string {
  const minLength = 10;
  const maxLength = 20;
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (
    let i = 0;
    i < Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
    i++
  ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
