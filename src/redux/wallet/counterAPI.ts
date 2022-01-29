// A mock function to mimic making an async request for data
export function fetchCount(amount:number = 1) {
  return new Promise<number>((resolve) =>
    setTimeout(() => resolve(amount), 500)
  );
}
