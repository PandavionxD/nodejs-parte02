import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugins";

const { b, l, s } = yarg;
console.log({ b, l, s });

const number = b;
let message2 = "";
const title = "Tabla de multiplicar".toLocaleUpperCase();
const message1 = `
============================================    
    ${title} = ${number} / limit = ${l}
============================================\n
`;
for (let i = 1; i < l + 1; i++) {
  message2 += ` ${number} x ${i} = ${number * i}\n`;
}

const ruta = "./outputs";
const msjSalida = message1 + message2;
fs.mkdirSync(ruta, { recursive: true });
fs.writeFileSync(`${ruta}/tabla-${number}.txt`, msjSalida);
if (s === true) {
  console.log(msjSalida);
}
console.info("Archivo creado");
