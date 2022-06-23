
// Include the necessary modules from other files

const modules = require('./assert-equals')

//=========================================================================================================
// Testing assertEquals()
// Comparing strings and numbers with and without throwing errors
// 
//=========================================================================================================

describe('assertEquals', () => {
  
  describe('when expected and actual are the same', () => {

    it('Comparing strings : returns without throwing an error', () => {
      expect(() => modules.assertEquals('abc', 'abc')).not.toThrow()
    });

    it('Comparing numbers : returns without throwing an error', () => {
      expect(() => modules.assertEquals(1, 1)).not.toThrow()
    });

  })

  describe('when expected and actual are different', () => {
    it('Expected "abcef" but found "abc"', () => {
      expect(() => modules.assertEquals('abcef', 'abc')).toThrow();
    });

    it('Expected 1 but found 2', () => {
      expect(() => modules.assertEquals(1, 2)).toThrow();
    });

    it( 'Expected type number but found type string', () => {
      expect(() => modules.assertEquals(1, '1')).toThrow();
    });

  })
})


//=========================================================================================================
// Testing arrayEquals()
// Comparing arrays with and without throwing errors
// 
//=========================================================================================================

describe('arrayEquals', () => {

  describe('when expected and actual are the same', () => {

    it('Comapring arrays : returns without throwing an error', () => {
      expect(() => modules.arrayEquals(['a','b','c'], ['a','b','c'])).not.toThrow()
    });

  })

  describe('when expected and actual are different', () => {

    it( 'Expected array length 2 but found 3', () => {
      expect(() => modules.arrayEquals(['a','b'], ['a','b','c'])).toThrow();
    });

    it( 'Expected "b" but found "d"', () => {
      expect(() => modules.arrayEquals(['a','b'], ['a','d'])).toThrow();
    });

  })
})