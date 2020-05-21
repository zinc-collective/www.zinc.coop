---
title: "Become a Maintainer"
layout: default
---

Zinc products and services would devolve into absurdity without the efforts of
our lovely _Maintainers_.

Maintainers guide our products by facilitating conversations, soliciting and
listening to feedback, breaking work down into pieces that Contributors can
digest safely and easily, applying the changes submitted by Contributors.

## Maintainer Ground Rules

The keywords _must_, _must not_, and _should_ in this document are to be
interpreted as described in [RFC 2119][rfc-2119].

- Maintainers _must_ comply with Zinc's [code of conduct][code-of-conduct].
- Maintainers _must not_ erase authorship information from any Contributors.
- Maintainers _should_ ensure that all feedback provided to Contributors is
  specific, actionable, and kind.
- Maintainers _should_ respond to Contributors' issues, comments, and patches
  within two weeks.

[code-of-conduct]: https://www.zinc.coop/code-of-conduct/
[rfc-2119]: https://tools.ietf.org/html/rfc2119

## Launching a Product

Any Maintainer may create a new project within Zinc at any time for any reason.
In fact, we encourage Maintainers to sprout new projects to explore new problem
domains, scratch an itch, decompose some functionality, or pretty much any
reason.

By creating space for everyone to explore and play in the manner they see fit,
we'll have a more vibrant ecosystem of products and more entrance points for
people to plug in and contribute their time, attention, and expertise.

## First, Create a New Project on GitHub

We encourage (but do not require) Maintainers to use our [New Project Template]
when [creating a new project][create-a-project-on-github].

It includes:

1. Our Code of Conduct.
1. A README Template.
1. Our Default License.
1. Our Contributing guide.
1. Default tags.
1. Issue templates.

[new project template]: https://github.com/zinc-collective/new-project-template
[create-a-project-on-github]:
  https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template

## Then, Write a Readme!

While there's nothing stopping you from changing the name in the default Readme
and calling it a day; we encourage Maintainers to try and include:

1. The _goal_ of the project.
1. The _target personas_ (or fauxsonas) ordered roughly by priority.
1. A brief of the intended _module architecture_. (A module is an _independently
   buildable, testable, and deployable_ piece of the project.
1. Instructions for building and running the project locally.

## Finally, Create some Issues!

If you still have some energy to spend on making it easy for folks to
co-conspire with you, we recommend Maintainers take the time to flesh out one to
three issues.

Issues ["call our shots"][shot-calling] and allow people to co-conspire on a
project by adding comments, asking clarifying questions, proposing directions,
and otherwise helping us think about what we are doing.

Well-written issues center a [persona] the work benefits, express a [User
Story], and illustrate how with [feature scenarios]. For example:

Tagging issues helps contributors find work that will show off or stretch their
skills. We recommend tagging to signal that an issue:

- `epic` - Needs more time than a single person or work-session.
- `enhancement` - Improves the project's customer facing functionality.
- `bug` - Resolves a contributor or customer facing rough edge.
- `code` - Changes the project's programming.
- `design` - Shifts the project's experience, interaction, information or visual
  design.
- `documentation` - Changes the project's contributor or user facing
  documentation.
- `infrastructure` - Adjusts the project's integration and deployment pipeline,
  linting, documentation or testing tooling, etc.

[feature scenarios]: https://cucumber.io/docs/guides/overview/
[user story]: https://en.wikipedia.org/wiki/User_story#Principle
[persona]: https://www.nngroup.com/articles/persona/
[shot-calling]: https://idioms.thefreedictionary.com/call+your+shots
