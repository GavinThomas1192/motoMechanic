export const photoToDataUrl = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', () => reject(reader.error));
    return file ? reader.readAsDataURL(file) : reject(new Error('USAGE ERROR; requires file'));
  });
};

export const renderIf = (test, component) => test ? component : undefined;
