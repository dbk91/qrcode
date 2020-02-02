const specialChars = ['\\', ';', ',', ':']

export default (value: string) => {
  return value.split('')
    .reduce((acc, cur) => specialChars.includes(cur) ? acc +  '\\' + cur : acc + cur, '')
}
