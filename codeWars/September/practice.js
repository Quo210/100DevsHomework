function removeUrlAnchor(url){
    return url.split('#')[0];
  }

  const sequenceSum = (begin, end, step) => {
    if(begin > end) return 0;
    const arr = [];
    let accum = begin;
    while (accum <= end){
      arr.push(accum)
      accum += step
    }
    return  arr.reduce((a,b)=>a+b)
  };

  function solution(nums){
if(nums == null) return [];
return nums.sort((a,b) => a - b )
}