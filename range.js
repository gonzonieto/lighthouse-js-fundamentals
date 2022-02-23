function range (start, end, step) {
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  }
  
  const rangeArray = [];

  for (let i = 0; i <= Math.ceil((end - start) / step); i++) {
    let val = start + i * step;
    rangeArray.push(val);
  }

  return rangeArray;
}