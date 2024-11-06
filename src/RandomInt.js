class RandomInt {
   static get(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
   }
}

export default RandomInt;
