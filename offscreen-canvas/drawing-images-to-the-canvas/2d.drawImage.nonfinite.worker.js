// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.nonfinite
// Description:drawImage() with Infinity/NaN is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("drawImage() with Infinity/NaN is ignored");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/images/redtransparent.png');
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function() {
        resolve(xhr.response);
    };
});
promise.then(function(response) {
    createImageBitmap(response).then(bitmap => {
        ctx.drawImage(bitmap, Infinity, 0);
ctx.drawImage(bitmap, -Infinity, 0);
ctx.drawImage(bitmap, NaN, 0);
ctx.drawImage(bitmap, 0, Infinity);
ctx.drawImage(bitmap, 0, -Infinity);
ctx.drawImage(bitmap, 0, NaN);
ctx.drawImage(bitmap, Infinity, Infinity);
        ctx.drawImage(bitmap, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, -Infinity, 0, 100, 50);
ctx.drawImage(bitmap, NaN, 0, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, -Infinity, 100, 50);
ctx.drawImage(bitmap, 0, NaN, 100, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, -Infinity, 50);
ctx.drawImage(bitmap, 0, 0, NaN, 50);
ctx.drawImage(bitmap, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, -Infinity);
ctx.drawImage(bitmap, 0, 0, 100, NaN);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity);
        ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, -Infinity, 0, 100, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, NaN, 0, 100, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, -Infinity, 100, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, NaN, 100, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, -Infinity, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, NaN, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, -Infinity, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, NaN, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, -Infinity, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, NaN, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, -Infinity, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, NaN, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, -Infinity, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, NaN, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, 100, -Infinity);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, 100, NaN);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, 0, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, Infinity, 100, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, 0, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, 0, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, 0, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, Infinity, Infinity, 50);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, Infinity, Infinity, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, Infinity, 100, Infinity);
ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, Infinity, Infinity);
        _assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
    }, t_fail);
}).then(t_pass, t_fail);

});
done();
