
import { Utilities } from './utilities';

const EQUALS: string = "===";
const NOT_EQALS: string = "!==";

export class Assert {
    public success: boolean;
    private fn: string;
    constructor(fn) {
        this.fn = Utilities.getFuncName(fn);
    }

    private failed(str: string) {
        this.success = false;
        console.error(str);
    };

    private passed(str: string) {
        this.success = true;
        console.log(str);
    };

    public equals = (expected, actual) => {
        if (expected === actual) {
            this.passed(Utilities.assertPass(this.fn, expected, actual, EQUALS));
        } else {
            this.failed(Utilities.assertFail(this.fn, expected, actual, EQUALS));
        }
    };

    public notEquals = (expected, actual) => {
        if (expected !== actual) {
            this.passed(Utilities.assertPass(this.fn, expected, actual, NOT_EQALS));
        } else {
            this.failed(Utilities.assertFail(this.fn, expected, actual, NOT_EQALS));
        }
    };

    public isNotNull = (actual) => {
        return this.notEquals(null, actual);
    };

    public isNull = (actual) => {
        return this.equals(null, actual);
    };
}