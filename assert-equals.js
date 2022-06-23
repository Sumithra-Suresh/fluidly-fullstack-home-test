
//=========================================================================================================
// assertEquals(expect, actual)
// Compares the expect and actual parameters. 
// 
//=========================================================================================================

function assertEquals(expect, actual) {
    if(expect !== actual){
        throw new Error();
    }
    return true;
  }
  
  //=========================================================================================================
  // arrayEquals(expect, actual)
  // Compares the two arrays are equal or not.
  // 1. If length is not as expected, throw an error.
  // 2. Compare every element, return true for success and error otherwise.
  //
  //=========================================================================================================
  
  function arrayEquals(expect, actual) {
     
    if (expect.length === actual.length) {
  
      return expect.every((element, index) => {
  
        if (element === actual[index]) {
          return true;
        }
        
        throw new Error();
      });
  
    }
    throw new Error();
  }
  
  //=========================================================================================================
  // module exports
  // exports the functions to be reusable in other files.
  // 
  //=========================================================================================================
  
  module.exports = {
    assertEquals,
    arrayEquals
  }