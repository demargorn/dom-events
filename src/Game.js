import RandomInt from './RandomInt';

class Game {
   constructor(element) {
      if (typeof element === 'string') {
         element = document.querySelector('.cells');
      }

      this._element = element;
      this.killedGoblins = document.querySelector('.killed');
      this.passedGoblins = document.querySelector('.missed');
      this.image = document.createElement('img');
      this.image.src = './public/goblin.png';
      this.boardSize = 16;

      this._element.addEventListener('click', (e) => this.checkGoblin(e));
      this.init();
   }

   // создание игрового поля
   init() {
      for (let i = 0; i < this.boardSize; i += 1) {
         this.cell = document.createElement('div');
         this.cell.classList.add('cell');
         this._element.appendChild(this.cell);
      }
   }

   // начало игры
   start() {
      this.cellsArray = Array.from(document.querySelectorAll('.cell'));
      setInterval(() => {
         this.image.style.display = 'block';
         this.randomIndex = null;
         this.randomNumber = RandomInt.get(0, this.cellsArray.length - 1);

         if (this.randomNumber === this.randomIndex) {
            if (this.randomNumber === this.cellsArray.length - 1) {
               this.randomIndex -= 1;
            } else {
               this.randomIndex += 1;
            }
         } else {
            this.randomIndex = this.randomNumber;
         }
         this.cellsArray[this.randomIndex].appendChild(this.image);
      }, 800);
   }

   // механизм поимки гоблина
   checkGoblin(e) {
      if (e.target === this.image) {
         this.image.style.display = 'none';
         this.killedGoblins.textContent++;
      } else {
         this.passedGoblins.textContent++;
      }

      if (this.killedGoblins.textContent === '5') {
         this.restart('You win!');
      }

      if (this.passedGoblins.textContent === '5') {
         this.restart('You lose!');
      }
   }

   // перезапуск игры
   restart(text) {
      alert(text);
      this.killedGoblins.textContent = '0';
      this.passedGoblins.textContent = '0';
   }
}

export default Game;
