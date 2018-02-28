// PLEASE DON'T change function name
module.exports = function makeExchange( currency ) {
  let result = {},
    halves, quarters, dimes, nickels;

  if ( !currency ) {
    return {};
  } else if ( currency > 10000 ) {
    return {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  } else { //main part

    if ( currency >= 50 ) {
      halves = Math.floor( currency / 50 );
      result.H = halves;
      currency = currency % 50;
    }
    if ( currency >= 25 ) {
      quarters = Math.floor( currency / 25 );
      result.Q = quarters;
      currency = currency % 25;
    }
    if ( currency >= 10 ) {
      dimes = Math.floor( currency / 10 );
      result.D = dimes;
      currency = currency % 10;
    }
    if ( currency >= 5 ) {
      nickels = Math.floor( currency / 5 );
      result.N = nickels;
      currency = currency % 5;
    }
    if ( currency >= 1 ) {
      result.P = currency;
    }

    return result;
  }
}