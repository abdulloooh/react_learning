// import * as Sentry from "@sentry/browser";
// import Raven from "raven-js";

function init() {
  //   Sentry.init({
  //     dsn:
  //       "https://1b4158bfbb564573a23586b0ae7d471e@o388115.ingest.sentry.io/5224486",
  //     release: "1-0-0",
  //     environment: "staging",
  //   });
  //   // Sentry.configureScope(function(scope) {
  //   //   scope.setTag("version", "1.0.0");
  //   // });
  //   //   Raven.config(
  //   //     "https://1b4158bfbb564573a23586b0ae7d471e@o388115.ingest.sentry.io/5224486",
  //   //     {
  //   //       release: "1-0-0",
  //   //       environment: "development-test",
  //   //     }
  //   //   ).install();

  return;
}

function log(err) {
  // Raven.captureException(err);
  // Sentry.captureMessage(err);
  console.error("Error Message:", err);
}

export default {
  init,
  log,
};
