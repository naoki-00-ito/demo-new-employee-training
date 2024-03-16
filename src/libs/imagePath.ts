// 画像パス変換用関数

const imagePath = (filename: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  const prefixPath = isProd ? '/lecture-demo-app' : '';

  return prefixPath + filename;
};

export default imagePath;
