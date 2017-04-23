beforeEach(function () {
    spyOn(window, 'split').and.callThrough();
    spyOn(window, 'mergeSort').and.callThrough();
    spyOn(window, 'merge').and.callThrough();
  });

describe('Split Array function', function() {
  it('is able to split an even numbered array into two halves', function() {
    var result = split([1,2,3,4,5,6]);
    expect(result).toEqual([[1,2,3], [4,5,6]]);
  });

  it('is able to split an odd numbered array into two halves', function() {
    var result = split([1,2,3,4,5]);
    expect(result).toEqual([[1,2], [3,4,5]]);
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays of different lengths into one array', function(){
    var result = merge([1,4,8,9,15],[6,7,8,10]);
    expect(result).toEqual([1,4,6,7,8,8,9,10,15]);
  });

  it('is able to merge two sorted arrays of same length into one sorted array', function(){
  var result = merge([1,4,9],[6,7,10]);
  expect(result).toEqual([1,4,6,7,9,10]);
  });

  it('is able to merge two sorted arrays of same length into one sorted array', function(){
  var result = merge([1,3],[2,4]);
  expect(result).toEqual([1,2,3,4]);
  });
});


describe('Merge Sort', function(){
  it('has methods named `bubbleSort`, `compare`, `swap`', function() {
    expect(typeof merge).toBe('function');
    expect(typeof split).toBe('function');
    expect(typeof mergeSort).toBe('function');
  });


  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles an array with one element', function(){
    var result = mergeSort([1]);
    expect(result).toEqual([1]);
    //expect(window.swap.calls.count()).toEqual(0);
    //expect(window.compare.calls.count()).toEqual(0);
  });

  it('does not alter a sorted array', function(){
    var result = mergeSort([1,2,3]);
    expect(result).toEqual([1,2,3]);
    //expect(window.swap.calls.count()).toEqual(0);
    //expect(window.compare.calls.count()).toEqual(3);
  });

  it('sorts a random array', function(){
    var result = mergeSort([1,4,5,3,2]);
    expect(result).toEqual([1,2,3,4,5]);
    //expect(window.swap.calls.count()).toEqual(0);
    //expect(window.compare.calls.count()).toEqual(2);
  });

  it('is recursive', function() {
    var result = mergeSort([1,4,5,3,2]);
    expect(mergeSort.calls.count()).toBeGreaterThan(1);
  })
});