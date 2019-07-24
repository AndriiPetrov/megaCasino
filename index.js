let casinoMoney = 1000000;
let arrayOfMachines = [];
let casino;

class SuperAdmin extends User {
  constructor(name, money) {
    super(name, money)
  }

  createNewCasino(name) {
    casino = new Casino(name);
  }
  createNewMachine() {
    let number = casinoMoney / (arrayOfMachines.lenght + 1);
    arrayOfMachines[arrayOfMachines.lenght] = new GameMachine(number);
  }
}

class User {
  conustructor(name, money) {
    this.name = name;
    this.money = money;
  }

  play(money) {
    if(money < 0) {
      return 'You owe us money';
    } else {
      let numberOfMachine = Math.floor(Math.random() * arrayOfMachines.length);
      return arrayOfMachines[numberOfMachine]
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