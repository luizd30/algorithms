export const bruteForce = (
  nums: number[],
  target: number
): [number, number] | [] => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [nums[i], nums[j]];
      }
    }
  }
  return [];
};

export const hashmap = (
  nums: number[],
  target: number
): [number, number] | [] => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [diff, nums[i]];
    }
    map.set(nums[i], i);
  }
  return [];
};
