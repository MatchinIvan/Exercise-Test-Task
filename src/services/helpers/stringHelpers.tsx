// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace StringSerializer {
  export const enumToString = (val: string) => {
    return val.replace('_', ' ');
  };
}
