export function cn(...names: (string | boolean | undefined)[]): string {
  return names
    .reduce((results: string[], name) => {
      if (typeof name !== "string" || !name) {
        return results;
      }

      return results.concat([`${name}`]);
    }, [])
    .join(" ");
}
