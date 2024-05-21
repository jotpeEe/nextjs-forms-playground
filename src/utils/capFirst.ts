export const capFirst = (input?: string) => {
  if (!input) {
    return undefined;
  }

  return input.charAt(0).toUpperCase() + input.slice(1);
};
