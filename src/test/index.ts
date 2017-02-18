import { Test } from '../lib/test';

Test(function testing(assert) {
    assert.equals(1,2);
});

Test(function testing2(assert) {
    assert.equals(1,1);
})