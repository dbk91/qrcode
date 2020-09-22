const specialChars = ['\\', ';', ',', ':']

const escapeString = (value: string) => {
  return value.split('')
    .reduce((acc, cur) => specialChars.includes(cur) ? acc +  '\\' + cur : acc + cur, '')
}

export default escapeString
