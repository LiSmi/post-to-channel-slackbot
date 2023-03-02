import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

/** A workflow which receives a channel id and message content
 * and posts the message to the specified Slack channel.
 */
const Workflow = DefineWorkflow({
  callback_id: "post_message_workflow",
  title: "Post message workflow",
  description: "Posts a message to a Slack channel",
  input_parameters: {
    properties: {
      channel: {
        type: Schema.slack.types.channel_id,
      },
      message: {
        type: Schema.types.string,
      },
    },
    required: ["channel", "message"],
  },
});

Workflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: Workflow.inputs.channel,
  message: Workflow.inputs.message,
});

export default Workflow;
