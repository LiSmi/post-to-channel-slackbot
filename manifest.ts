import { Manifest } from "deno-slack-sdk/mod.ts";
import Workflow from "./workflows/workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "post-to-channel",
  description: "An app that allows posting to a channel via webhook",
  icon: "assets/default_new_app_icon.png",
  workflows: [Workflow],
  outgoingDomains: [],
  datastores: [],
  botScopes: [
    "chat:write",
    "chat:write.public",
  ],
});
