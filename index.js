let casinoMoney = 1000000;
let arrayOfMachines = [];
let casino = null;

class GameMachine {
  constructor(money) {
    this.machineMoney = money;
  }

  get getMoney() {
    return this.machineMoney;
  }

  getMoneyFromMachine(number) {
    if (this.machineMoney - number >= 0) {
      this.machineMoney -= numbrer;
      return number;
    } else {
      let moneyToReturn = this.machineMoney;
      this.machineMoney = 0;
      return moneyToReturn;
    }
  }

  putMoney(number) {
    return this.machineMoney += number;
  }

  play(number) {
    this.machineMoney += number;

    let randomNumber = Math.floor(Math.random() * 1000);
    let arrayOfNumbers = [];

    for (let i = 0; randomNumber > 0; i++) {
      arrayOfNumbers[i] = randomNumber % 10;
      randomNumber = parseInt(randomNumber / 10);
    }

    if (
      arrayOfNumbers[0] === arrayOfNumbers[1] && 
      arrayOfNumbers[1] === arrayOfNumbers[2]
    ) {
      this.machineMoney -= (number * 3);
      return number * 3;
    } else if (
      arrayOfNumbers[0] === arrayOfNumbers[1] || 
      arrayOfNumbers[0] === arrayOfNumbers[2] ||
      arrayOfNumbers[1] === arrayOfNumbers[2]
    ) {
      this.machineMoney -= (number * 2);
      return number * 2;
    } else {
      return 0;
    }
  }
}

class Casino {
  constructor(name) {
    this.name = name;
  }

  get getMoney() {
    return casinoMoney;
  }
  get getMachineCount() {
    return arrayOfMachines.length;
  }
}

class User {
  conustructor(name, money) {
    this.name = name;
    this.money = money;
  }

  play(money) {
    if(money < 0 || mmoney === 'undefined') {
      return 'You owe us money';
    } else {
      let numberOfMachine = Math.floor(Math.random() * arrayOfMachines.length);
      return arrayOfMachines[numberOfMachine];
    }
  }
}

class SuperAdmin extends User {
  constructor(name, money) {
    super(name, money)
  }

  createNewCasino(name) {
    casino = new Casino(name);
  }
  createNewMachine() {
    let number = casino.getMoney() / (arrayOfMachines.lenght + 1);
    
    if (arrayOfMachines.length > 0) {
      for (let i = 0; i < arrayOfMachines.length; i++) {
        casinoMoney += arrayOfMachines[i].getMoneyFromMachine(Number.MAX_VALUE);
        arrayOfMachines[i].putMoney(number);
        casinoMoney -= number;
      }
    }

    arrayOfMachines[arrayOfMachines.lenght] = new GameMachine(number);
  }
  takeMoneyFromCasino(number) {
    let money = 0;
    arrayOfMachines.sort( (a, b) => b - a);
    for (let i = 0; i < arrayOfMachines.length; i++) {
      money += arrayOfMachines[i].getMoneyFromMachine(number);
      if (number === money) {
        casinoMoney -= number;
        return number;
      } else if ( money < number) {
        continue;
      } else if (money > number) {
        money -= number;
        arrayOfMachines[i].putMoney(money);
        casinoMoney -= number;
        return number;
      }
    }
  }
  putMoneyToCasino(number) {
    casinoMoney += number;
    for (let i = 0; i < arrayOfMachines.length; i++) {
      casinoMoney += arrayOfMachines[i].getMoneyFromMachine(Number.MAX_VALUE);
      arrayOfMachines[i].putMoney(number);
      casinoMoney -= number;
    }
  }
  deleteMachine(number) {
    let money = arrayOfMachines[number - 1].getMoneyFromMachine(Number.MAX_VALUE);
    arrayOfMachines.splice(number - 1, 1);
    money /= arrayOfMachines.length;
    for (let i = 0; i < arrayOfMachines.lenght; i++) {
      arrayOfMachines[i].putMoney(money);
    } 
  }
}