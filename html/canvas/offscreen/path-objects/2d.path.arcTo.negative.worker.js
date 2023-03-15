// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.arcTo.negative
// Description:arcTo() with negative radius throws an exception
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("arcTo() with negative radius throws an exception");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

assert_throws_dom("INDEX_SIZE_ERR", function() { ctx.arcTo(0, 0, 0, 0, -1); });
var path = new Path2D();
assert_throws_dom("INDEX_SIZE_ERR", function() { path.arcTo(10, 10, 20, 20, -5); });
t.done();

});
done();
