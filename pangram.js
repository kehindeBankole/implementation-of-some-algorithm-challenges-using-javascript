function pangram(nums) {
  const hhs = new Set([...nums.toLowerCase()]);

  return [...hhs].length === 26;
}

console.log(pangram('This is not a pangram'));

