describe('Bubble Sort', function(){

  beforeEach(function () {
    //spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });

  it('has methods named `bubbleSort`, `compare`, `swap`', function() {
    expect(typeof bubbleSort).toBe('function');
    expect(typeof compare).toBe('function');
    //expect(typeof swap).toBe('function');
  });


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one element', function(){
    var result = bubbleSort([1]);
    expect(result).toEqual([1]);
    //expect(window.swap.calls.count()).toEqual(0);
    expect(window.compare.calls.count()).toEqual(0);
  });

  it('does not alter a sorted array', function(){
    var result = bubbleSort([1,2,3]);
    expect(result).toEqual([1,2,3]);
    //expect(window.swap.calls.count()).toEqual(0);
    expect(window.compare.calls.count()).toEqual(3);
  });

  it('sorts a random array', function(){
    var result = bubbleSort([1,4,5,3,2]);
    expect(result).toEqual([1,2,3,4,5]);
    //expect(window.swap.calls.count()).toEqual(0);
    //expect(window.compare.calls.count()).toEqual(2);
  });
});