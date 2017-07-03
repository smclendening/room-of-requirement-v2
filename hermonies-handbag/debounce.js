//Debounce from scratch;

let debounce = (func, wait) => {
  var timeout;
  return () => {
    var context = this;
    var args = arguments;

    //Clear current timeout sessions
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(ctx, args);
    }, wait);
  };

};