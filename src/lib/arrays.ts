export const unique = <T>(array: T[]) =>
  array.filter((elem, index, self) => self.indexOf(elem) === index)
