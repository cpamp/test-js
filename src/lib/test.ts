
import { Assert } from './assert';

export interface IAssertion {
    (assert: Assert)
}

export interface IForEach {
    (func: IAssertion, assert: Assert)
}

export class TestCollection {
    private funcList: IAssertion[] = [];
    private assertList: Assert[] = [];

    public add = (func: IAssertion, assert: Assert) => {
        this.funcList.push(func);
        this.assertList.push(assert);
    }

    public forEach = (f: IForEach) => {
        for (var i = 0; i < this.funcList.length; i++) {
            f(this.funcList[i], this.assertList[i]);
        }
    }
}

export class Test {
    private successCount: number = 0;
    private failCount: number = 0;

    private tests: TestCollection = new TestCollection();

    constructor(private name: string) { }

    public "new" = (func: IAssertion) => {
        this.tests.add(func, new Assert(func));
    };

    public run = () => {
        this.tests.forEach((func, assert) => {
            try {
                func(assert);
            } catch (e) {
                assert.failedOnException(e);
            }

            if (assert.success) {
                this.successCount++;
                console.log(assert.getResult());
            } else {
                this.failCount++;
                console.error(assert.getResult());
            }
        });
        var total = this.successCount + this.failCount;
        console.log(this.name + ': ' + this.successCount + ' of ' + total + ' tests passed (' + (this.successCount / total * 100) + '%)');
    };
}