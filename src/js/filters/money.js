

Vue.filter('money', function (value, sign = '$') {
  if (!value) return 0;
  return sign + (value/100).toFixed( 2 );
})