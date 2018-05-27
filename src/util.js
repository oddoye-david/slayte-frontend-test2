export const isValidUrl = url => {
  const urlRegex = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
  return urlRegex.test(url);
}

export const DUMMY_DATA = {
  one: { foo: 'bar' },
  two: { fizz: 'buzz' },
}