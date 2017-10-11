/**
 * 测试：比较两个数的大小，返回最大值
 */
import test from 'ava';

function compare(x, y) {
	if (x > y) return x;
	else return y;
}

test('max', t => {
	t.is(compare(2, 5), 5);
});

test('max1', t => {
	t.is(compare(9, 2), 9);
});

