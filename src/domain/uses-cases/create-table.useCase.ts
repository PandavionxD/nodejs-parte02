export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  limit: number;
  base: number;
}

export class createTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    const number = base;
    let message2 = "";
    const title = "Tabla de multiplicar".toLocaleUpperCase();
    const message1 = `
============================================    
    ${title} = ${number} / limit = ${limit}
============================================\n
`;
    for (let i = 1; i < limit + 1; i++) {
      message2 += ` ${number} x ${i} = ${number * i}\n`;
    }
    const messageTotal = message1 + message2
    return messageTotal;
  }
}
