function bubbleSort(arr) {
  var help;
  for (var i=arr.length-1;i>=0; i--){
    for(var j=0;j<i;j++){
      if(compare(arr[j],arr[j+1])){
        help=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=help;
      }
    }
  }
  console.log(arr);
  return arr;
}

  //loop1: cuts off the last element every time we loop thru
    //cut off last element & repeat loop 1 for new array
  //loop2: compare the elements in pairs from the beginning
    //0>end


// function swap(arr[4], arr[5]) {

// }

function compare(ele1, ele2) {
  if(ele1 > ele2){
    return true;
  }
  else {
    return false;
  }
}