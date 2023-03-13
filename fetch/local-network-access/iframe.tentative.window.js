// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/utils.js
// META: script=resources/support.sub.js
//
// Spec: https://wicg.github.io/local-network-access/#integration-fetch
//
// These tests verify that non-secure contexts cannot navigate iframes to
// less-public address spaces, and can navigate them otherwise.
//
// This file covers only those tests that must execute in a non secure context.
// Other tests are defined in: iframe.https.window.js

setup(() => {
  // Making sure we are in a non secure context, as expected.
  assert_false(window.isSecureContext);
});

promise_test_parallel(t => iframeTest(t, {
  source: { server: Server.HTTP_LOOPBACK },
  target: { server: Server.HTTP_LOOPBACK },
  expected: IframeTestResult.SUCCESS,
}), "loopback to loopback: no preflight required.");

promise_test_parallel(t => iframeTest(t, {
  source: { server: Server.HTTP_LOOPBACK },
  target: { server: Server.HTTP_LOCAL },
  expected: IframeTestResult.SUCCESS,
}), "loopback to local: no preflight required.");

promise_test_parallel(t => iframeTest(t, {
  source: { server: Server.HTTP_LOOPBACK },
  target: { server: Server.HTTP_PUBLIC },
  expected: IframeTestResult.SUCCESS,
}), "loopback to public: no preflight required.");

promise_test_parallel(t => iframeTest(t, {
  source: { server: Server.HTTP_LOCAL },
  target: { server: Server.HTTP_LOOPBACK },
  expected: IframeTestResult.FAILURE,
}), "local to loopback: failure.");

promise_test_parallel(t => iframeTest(t, {
  source: { server: Server.HTTP_LOCAL },
  target: { server: Server.HTTP_LOCAL },
  expected: IframeTestResult.SUCCESS,
}), "local to local: no preflight required.");

promise_test_parallel(t => iframeTest(t, {
  source: { server: Server.HTTP_LOCAL },
  target: { server: Server.HTTP_PUBLIC },
  expected: IframeTestResult.SUCCESS,
}), "local to public: no preflight required.");

promise_test_parallel(t => iframeTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_LOOPBACK },
  expected: IframeTestResult.FAILURE,
}), "public to loopback: failure.");

promise_test_parallel(t => iframeTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_LOCAL },
  expected: IframeTestResult.FAILURE,
}), "public to local: failure.");

promise_test_parallel(t => iframeTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_PUBLIC },
  expected: IframeTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => iframeTest(t, {
  source: {
    server: Server.HTTP_LOOPBACK,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_LOOPBACK },
  expected: IframeTestResult.FAILURE,
}), "treat-as-public-address to loopback: failure.");

promise_test_parallel(t => iframeTest(t, {
  source: {
    server: Server.HTTP_LOOPBACK,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_LOCAL },
  expected: IframeTestResult.FAILURE,
}), "treat-as-public-address to local: failure.");

promise_test_parallel(t => iframeTest(t, {
  source: {
    server: Server.HTTP_LOOPBACK,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: IframeTestResult.SUCCESS,
}), "treat-as-public-address to public: no preflight required.");

// The following test verifies that when a grandparent frame navigates its
// grandchild, the IP address space of the grandparent is compared against the
// IP address space of the response. Indeed, the navigation initiator in this
// case is the grandparent, not the parent.

iframeGrandparentTest({
  name: "loopback to loopback, grandparent navigates: success.",
  grandparentServer: Server.HTTP_LOOPBACK,
  child: { server: Server.HTTP_PUBLIC },
  grandchild: { server: Server.HTTP_LOOPBACK },
  expected: IframeTestResult.SUCCESS,
});
