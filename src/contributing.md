---
layout: layouts/default.njk
title: Become a Contributor
---

Welcome! First off; _**THANK YOU**_ for your interest in contributing to Zinc!
Your time is valuable, so let's get started!

Zinc products and services would stagnate without our _Contributors_.
Contributors suggest and implement changes to our products and services for
[_Maintainers_][maintainer-guide] to apply.

Anyone and everyone can be a Contributor! All we ask is that Contributors follow
a few ground rules to help Zinc Maintainers and Contributors work well together.

[maintainer-guide]: /maintaining/

### Contributor Ground Rules

The keywords _must_, _must not_, and _should_ in this document are to be
interpreted as described in [RFC 2119][rfc-2119].

- Contributors _must_ comply with Zinc's [code of conduct][code-of-conduct].
- Contributors _must_ [assign ownership][assign-ownership] of their
  contributions to Zinc.
- Contributors _should_ [ask for help][get-help] when they get stuck.
- Contributors _should_ expect others to build their Contributions.

[rfc-2119]: https://tools.ietf.org/html/rfc2119

## How can I contribute...

### Features or requests?

Gaps between what a Contributor _wishes_ a product did and what it does is a
_missing feature_. Small, incremental features with clear use cases are the
easiest and fastest to build.

Contributors are encouraged to [create a feature requests in the issue
tracker][issue-tracker].

To start building the feature, review the [development
workflow][development-workflow].

### Bug reports or fixes?

Gaps between what a Contributor _expects_ a product to do and what it _actually
does_ is a _*bug*_. Bug reports that clearly express what was expected to happen
and what did happen are the easiest to resolve.

If you notice something unexpected in a product, please [create a bug report in
our issue tracker][issue-tracker]. We try to prioritize fixing bugs over adding
features.

If you want to try squashing the bug yourself; review the [development
workflow][development-workflow].

### Security concerns or patches?

We take security seriously, but that doesn't mean we will always get it right.
We encourage Contributors to [create a security report][issue-tracker] with
security concerns.

If the concern may expose a vulnerability in a released version of a product,
please [email the maintainers][email-maintainers].

If you think you can resolve the concern yourself; start by reviewing the
[development workflow][development-workflow].

### Documentation improvements?

We strive for documentation to be findable, clear, and in plain language. If you
are unable to find an answer to your questions, please [create a documentation
request in our issue tracker][issue-tracker].

If you think you can fix the documentation yourself, feel free to [use the
GitHub editor][editing-files-in-github].

### Translations?

At present, we do not have a strategy for internationalization of our products
or documentation. If you have recommendations, please start a conversation in
our [issue tracker][issue-tracker].

## Getting Help

There are two ways to get help; one is through [opening a ticket in our issue
tracker][issue-tracker], where we will do our best to provide support in a
timely manner.

For people or businesses with urgent support needs, we offer professional
support at \$250USD per hour. Support can be scheduled by [emailing
maintainers@zinc.coop][email-maintainers].

## Development Guide

This guide is the starting point for people who would like to directly modify a
Zinc product to fix a bug or enhance a feature.

If you are unsure what change you would like to make to a product, [find
something to do!][find-something-to-do]

If know what you would like to change, start [learning the
system][learn-the-system].

If you know what you want to change and are comfortable with the product's
design and architecture, Try to [make the change][make-a-change].

### Find Something To Do

We encourage Contributors to _"eat their own dog food"_ and make changes that
are interesting or useful to them.

When that fails, we recommend taking a look at the open tickets in our [issue
tracker][issue-tracker].

The label "Help Wanted" is where we need some help. "Good First Issue" is for we
think new contributors can chip in. The labels "Code", "Design", or
"Documentation" indicate what particular skills an issue likely takes.

### Learn the System

[Fork and clone the project repository][fork-a-repository] and review the
product design and architecture documentation found in the projects `README.md`.

### Make a Change

First, review the dependencies and install the tools needed to build and run the
product. Many projects have automated these steps by including a script called
`bin/setup`.

We recommend Contributors write a test to isolate the bug or demonstrate the
feature.

Test are ran by executing `bin/test` within the projects top-level directory.

If you are unsure how to proceed at any point, please take some time to [learn
the system][learn-the-system] or [ask for help][get-help].

### Submit a Patch

We closely follow [GitHub Flow][github-flow], with the following exceptions:

1.  We encourage contributors to [create a draft pull
    request][creating-a-pull-request] early, even if the work isn't 'done' as
    this is the easiest way to [get help][get-help]. Sharing work early makes it
    possible for other Contributors to keep up with and build on top of the work
    done, instead of needing to reinvent the wheel.
2.  We name our primary branch `production`, `staging`, and `development` for
    services and the major version (`0.X`, `1.X`, etc) for libraries.

We encourage Contributors to name their branches in such a way as to indicate
why the branch exists. For example: `fix/login-error` or `enhance/typography` or
`document/how-to-contribute`.

## Legal

Before Maintainers can merge a Contributor's changes, Contributors _must_ grant
Zinc all rights to the work performed on the project by sending the following
message to [operations@zinc.coop][email-operations] or as a comment on your
[pull request][creating-a-pull-request].

> "I assign all rights, including copyright, to any of my future work on Zinc
> projects to Zinc Collective LLC."

### Why?

To put it bluntly, long term viability.

Copyright assignment grants Zinc the flexibility to decide how best to leverage
the changes Contributors provide.

Because Zinc is a cooperative, any Contributor may [become an owner of
Zinc][become-an-owner], granting rights to board representation and to share in
the near and long term wealth generated by our products and services.

[development-workflow]: #development-guide
[contributor-ground-rules]: #contributor-ground-rules
[find-something-to-do]: #find-something-to-do
[learn-the-system]: #learn-the-system
[make-a-change]: #make-a-change
[get-help]: #getting-help
[assign-ownership]: #legal
[become-an-owner]:
  https://www.zinc.coop/operating-agreement/#b-2-becoming-a-member
[code-of-conduct]: https://www.zinc.coop/code-of-conduct/
[maintainers]: https://github.com/orgs/zinc-collective/teams/maintainers
[fork-a-repository]: https://guides.github.com/activities/forking/
[github-flow]: https://guides.github.com/introduction/flow/
[cloning-a-repository]:
  https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository
[creating-a-pull-request]:
  https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
[editing-files-in-github]:
  https://help.github.com/en/github/managing-files-in-a-repository/editing-files-in-another-users-repository
[email-operations]: mailto:operations@zinc.coop
[email-maintainers]: mailto:maintainers@zinc.coop
[issue-tracker]: https://github.com/zinc-collective/www.zinc.coop/issues