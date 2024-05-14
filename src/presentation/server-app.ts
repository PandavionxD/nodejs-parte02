import { createTable } from "../domain/uses-cases/create-table.useCase";
import { SaveFile } from "../domain/uses-cases/save-file.useCase";

interface RunOptions {
  limit: number;
  base: number;
  showTable: boolean;
  name?:string,
  destination?:string
}

export class ServerApp {
  static run({base,limit,showTable,name,destination}: RunOptions) {
    console.log(' Server Runing...!')
    const table = new createTable().execute({base,limit})
    const wasCreated = new SaveFile().execute({fileContent:table,fileDestination:destination,fileName:name})
    if (showTable) {
        console.log(table)
    }
    (wasCreated)
    ? console.log('Archivo creado')
    : console.log('Archivo no creado')

}
}
