unction split(wholeArray) {
  var halfwayPoint = Math.floor(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0,halfwayPoint);
  var secondHalf = wholeArray.slice(halfwayPoint);
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf,compFunc) {
  var mergedArr = [];
  var i = 0;
  var j = 0;
  if(!compFunc){
    compFunc=function(arg1,arg2){
      return (arg1>arg2);
    }

  }
  while(i < firstHalf.length && j < secondHalf.length) {
    if(compFunc(firstHalf[i],secondHalf[j])) {
      mergedArr.push(secondHalf[j]);
      j++;
    } else {
      mergedArr.push(firstHalf[i]);
      i++;
    }
  }
  if(i < firstHalf.length) {
    mergedArr = mergedArr.concat(firstHalf.slice(i));
  } else if(j < secondHalf.length) {
    mergedArr = mergedArr.concat(secondHalf.slice(j));
  }
  return mergedArr;
}

function mergeSort(arr,compFunc) {
  if(arr.length < 2) {
    return arr;
  } else {
    var splitArr = split(arr);
    var firstHalf = mergeSort(splitArr[0]);
    var secondHalf = mergeSort(splitArr[1]);
    return merge(firstHalf, secondHalf,compFunc);
  }
}