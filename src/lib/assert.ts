
import { Utilities } from './utilities';

const EQUALS: string = "===";
const NOT_EQALS: string = "!==";

export class Assert {
    public success: boolean;
    private fn: string;
    private result: string;

    constructor(fn) {
        this.fn = Utilities.getFuncName(fn);
    }

    private failed(str: string) {
        this.success = false;
        this.result = str;
    };

    private passed(str: string) {
        if (this.success == null) {
            this.success = true;
            this.result = str;
        }
    };

    public getResult(): string {
        return this.result;
    };

    public equals(expected, actual) {
        if (expected === actual) {
            this.passed(Utilities.assertPass(this.fn, expected, actual, EQUALS));
        } else {
            this.failed(Utilities.assertFail(this.fn, expected, actual, EQUALS));
        }
    };

    public notEquals(expected, actual) {
        if (expected !== actual) {
            this.passed(Utilities.assertPass(this.fn, expected, actual, NOT_EQALS));
        } else {
            this.failed(Utilities.assertFail(this.fn, expected, actual, NOT_EQALS));
        }
    };

    public isNotNull(actual) {
        this.notEquals(null, actual);
    };

    public isNull(actual) {
        this.equals(null, actual);
    };

    public pass() {
        this.passed(this.fn + ' ' + Utilities.PASSED)
    };

    public fail() {
        this.failed(this.fn + ' ' + Utilities.FAILED);
    };

    public failedOnException(e) {
        this.failed(this.fn + ' ' + Utilities.FAILED + ': ' + e);
    };
}