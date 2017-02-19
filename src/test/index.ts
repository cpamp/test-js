import { Test } from '../lib/test';

var test = new Test('Test1');

test.new(function testing(assert) {
    assert.equals(1,2);
});

test.new(function testing2(assert) {
    assert.equals(1,1);
});

test.new(function oneNotEqualsTwo(assert) {
    assert.notEquals(1, 2);
});

test.new(function oneNotEqualsOne(assert) {
    assert.notEquals(1,1);
});

console.log('test');
test.run();