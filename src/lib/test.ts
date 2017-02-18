
import { Assert } from './assert';

export interface IAssertion {
    (assert: Assert)
}

export function Test(func: IAssertion) {
    func(new Assert(func));
}