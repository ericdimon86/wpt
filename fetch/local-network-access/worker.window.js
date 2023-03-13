// META: script=/common/utils.js
// META: script=resources/support.sub.js
//
// Spec: https://wicg.github.io/local-network-access/#integration-fetch
//
// These tests check that initial `Worker` script fetches are subject to Local
// Network Access checks, just like a regular `fetch()`. The main difference is
// that workers can only be fetched same-origin, so the only way to test this
// is using the `treat-as-public` CSP directive to artificially place the parent
// document in the `public` IP address space.
//
// This file covers only those tests that must execute in a non secure context.
// Other tests are defined in: worker.https.window.js

promise_test(t => workerScriptTest(t, {
  source: {
    server: Server.HTTP_LOOPBACK,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_LOOPBACK },
  expected: WorkerScriptTestResult.FAILURE,
}), "treat-as-public to loopback: failure.");

promise_test(t => workerScriptTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_LOCAL },
  expected: WorkerScriptTestResult.FAILURE,
}), "treat-as-public to local: failure.");

promise_test(t => workerScriptTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_PUBLIC },
  expected: WorkerScriptTestResult.SUCCESS,
}), "public to public: success.");
