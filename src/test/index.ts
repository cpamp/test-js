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

test.new(function throwsException(assert) {
    var asdf = void 0;
    asdf.getSome();
});

test.new(function isNull(assert) {
    assert.isNull(null);
});

test.new(function isNullTest(assert) {
    assert.isNull(test);
});

test.new(function isNullNotNull(assert) {
    assert.isNotNull(null);
});

test.new(function isNotNullTrue(assert) {
    assert.isNotNull(test);
});

console.log('test');
test.run();