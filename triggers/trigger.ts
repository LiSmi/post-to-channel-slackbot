import { Trigger } from "deno-slack-api/types.ts";
import Workflow from "../workflows/workflow.ts";

const trigger: Trigger<typeof Workflow.definition> = {
  type: "webhook",
  name: "Post Message",
  description: "triggers post message workflow",
  workflow: "#/workflows/post_message_workflow",
  inputs: {
    channel: {
      value: "{{data.channel_id}}",
    },
    message: {
      value: "{{data.message}}",
    },
  },
};

export default trigger;
