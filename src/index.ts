import { readdir } from 'fs' // test import statement

// just another test code
readdir('/', (err, files) => {
    console.log(files)
})

// you can try to export some module and types
export type text = string

export interface ExampleClassConstructorOptions {
    helloWorldText: text
}

export class ExampleClass {
    private _helloWorldString: text
    constructor (opts: ExampleClassConstructorOptions) {
        this._helloWorldString = opts.helloWorldText
    }
}

export default class DefaultExampleClass extends ExampleClass {}