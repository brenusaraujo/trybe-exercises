interface Logger {
  log(string: string): void;
}

class ConsoleLogger implements Logger {
  // constructor(parameters) {}
  log(string: string): void {
    console.log(string);
  }
}

class ConsoleLogger2 implements Logger {
  log(string: string): void {
    console.log("logger2", string);
  }
  // constructor(parameters) {

  // }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: ConsoleLogger) {}

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}
