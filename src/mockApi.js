const waitFor = (ms) => new Promise((r) => setTimeout(r, ms));

export const subscribe = async () => {
  await waitFor(1000);
  return true;
};
