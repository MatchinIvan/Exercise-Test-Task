export type Stringifiable = string | boolean | number | null | undefined;

export type CustomStringifiableRecord = Record<
  string,
  Stringifiable | readonly Stringifiable[]
>;

export const networkGetPropsTransformer = (
  urlString: string,
  query: CustomStringifiableRecord,
) => {
  const queryKeys = Object.keys(query);

  const params = queryKeys.reduce((acc, key): string => {
    if (!query[key]) {
      return acc;
    }
    return acc + `${key}=${query[key]}&`;
  }, '');

  const url = urlString + '?' + params;

  return url.slice(0, -1);
};
