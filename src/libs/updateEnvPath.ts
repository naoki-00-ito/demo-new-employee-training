// パス本番変換用関数
const updateEnvPath = (filename: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  const prefixPath = isProd ? '/lecture-demo-app' : '';

  return prefixPath + filename;
};

export default updateEnvPath;
