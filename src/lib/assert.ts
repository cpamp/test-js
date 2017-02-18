
import { Utilities } from './utilities';

const EQUALS: string = "==="

function failed(str: string) {
    console.error(str);
}

function passed(str: string) {
    console.log(str);
}

export class Assert {
    private fn: string;
    constructor(fn) {
        this.fn = Utilities.getFuncName(fn);
    }

    public equals(expected, actual) {
        expected === actual ?
            passed(Utilities.assertPass(this.fn, expected, actual, EQUALS)) :
            failed(Utilities.assertFail(this.fn, expected, actual, EQUALS));
    }
}