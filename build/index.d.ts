export declare type text = string;
export interface ExampleClassConstructorOptions {
    helloWorldText: text;
}
export declare class ExampleClass {
    private _helloWorldString;
    constructor(opts: ExampleClassConstructorOptions);
}
export default class DefaultExampleClass extends ExampleClass {
}
