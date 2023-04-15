const waitFor = (ms) => new Promise((r) => setTimeout(r, ms));

export async function load() {
  await waitFor(5000);
  return {
    title: "Hello from an ISR page!",
  };
}

export const config = {
  isr: {
    expiration: false,
  },
};
