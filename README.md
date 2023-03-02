# Post To Channel Slackbot

This is a basic workflow that allows posting a message to a Slack channel via
webhook, based off Slack's recommended scaffold.

**Guide Outline**:

- [Setup](#setup)
  - [Install the Slack CLI](#install-the-slack-cli)
- [Local Development](#local-development)
- [Deploying Your App](#deploying-your-app)
  - [Viewing Activity Logs](#viewing-activity-logs)
- [Project Structure](#project-structure)
- [Resources](#resources)

---

## Setup

Before getting started, make sure you have a development workspace where you
have permissions to install apps. If you don’t have one set up, go ahead and
[create one](https://slack.com/create). Also, please note that the workspace
requires any of [the Slack paid plans](https://slack.com/pricing). A workspace
owner or admin will need to make sure that the workspace is opted into the Slack
Platform Beta, which can be done via the Slack workspace settings.

### Install the Slack CLI

You first need to install and configure the Slack CLI. Step-by-step instructions
can be found in our [Quickstart Guide](https://api.slack.com/future/quickstart).

## Local Development

While building your app, you can see your changes propagated to your workspace
in real-time with `slack run`. In both the CLI and in Slack, you'll know an app
is the development version if the name has the string `(dev)` appended.

```zsh
# Run app locally
$ slack run

Connected, awaiting events
```

The first time you run this, you should be prompted to create a trigger - go
ahead and select the existing triggers file, and make a note of the webhook URL.

To stop running locally, press `<CTRL> + C` to end the process.

## Deploying Your App

Once you're done with development, you can deploy the production version of your
app to Slack hosting using `slack deploy`:

```zsh
$ slack deploy
```

You should be prompted to create a trigger for the production environment - go
ahead and select the existing triggers file, and make a note of the webhook URL.

### Collaborating

Make sure `.slack/apps.json` is checked into the repo, while
`./slack/apps.dev.json` is ignored. See the
[FAQ page](https://api.slack.com/future/faq#collaboration).

### Viewing Activity Logs

Activity logs for the production instance of your application can be viewed with
the `slack activity` command:

```zsh
$ slack activity
```

## Project Structure

### `manifest.ts`

The [app manifest](https://api.slack.com/future/manifest) contains the app's
configuration. This file defines attributes like app name and description.

### `slack.json`

Used by the CLI to interact with the project's SDK dependencies. It contains
script hooks that are executed by the CLI and implemented by the SDK.

### `/workflows`

A [workflow](https://api.slack.com/future/workflows) is a set of steps that are
executed in order. Each step in a workflow is a function.

Workflows can be configured to run without user input or they can collect input
by beginning with a [form](https://api.slack.com/future/forms) before continuing
to the next step.

### `/triggers`

[Triggers](https://api.slack.com/future/triggers) determine when workflows are
executed. A trigger file describes a scenario in which a workflow should be run,
such as a user pressing a button or when a specific event occurs.

You can view a list of currently installed triggers with the command
`slack triggers list`. This will show you all relevant info including the
webhook URL for the trigger.

## Resources

To learn more about developing with the CLI, you can visit the following guides:

- [Creating a new app with the CLI](https://api.slack.com/future/create)
- [Configuring your app](https://api.slack.com/future/manifest)
- [Developing locally](https://api.slack.com/future/run)

To view all documentation and guides available, visit the
[Overview page](https://api.slack.com/future/overview).
