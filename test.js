var leftsplit = require("./");
var test = require("tape");

test('left split', function (assert) {
  assert.plan(3);
  assert.deepEqual(leftsplit('foo bar', /(\s+)/), ['foo ', 'bar']);
  assert.deepEqual(leftsplit('1,2,3', /(,)/), ['1,', '2,', '3']);
  assert.deepEqual(leftsplit('foo\nbar\n', /(\r?\n)/), ['foo\n', 'bar\n', '']);
});
