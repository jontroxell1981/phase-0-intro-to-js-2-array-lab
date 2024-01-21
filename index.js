// Write your solution here!
    const cats = ["Milo", "Otis", "Garfield"];

    beforeEach(function () {
        cats.length = 0;
      
        cats.push("Milo", "Otis", "Garfield");
      });

      function destructivelyAppendCat(name) {
        cats.push("Ralph")
      }

      function destructivelyPrependCat(name) {
        cats.unshift("Bob")
      }

      function destructivelyRemoveLastCat() {
        cats.pop()
      }

      function destructivelyRemoveFirstCat() {
        cats.shift()
      }

      function appendCat(name) {
        var appendCat = [...cats]
        appendCat.push("Broom")
        return appendCat
      }

      function prependCat(name) {
        var prependCat = [...cats]
        prependCat.unshift("Arnold")
        return prependCat
      }
      
      function removeLastCat() {
        var removeLastCat = [...cats]
        removeLastCat.pop()
        return removeLastCat
      }

      function removeFirstCat() {
        var removeFirstCat = [...cats]
        removeFirstCat.shift()
        return removeFirstCat
      }