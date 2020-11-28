# www.zinc.coop

This is the core website for Zinc Collective LLC.
It serves primarily as a public repository of information about the cooperative.

## Contributing

1. Clone the repository
1. Read the contents of `bin/setup`, make sure you understand it; and then run it.
1. Run `npm run dev` to start development server.
1. Make your desired changes to the HTML files.
1. Make [a commit that explains your motivation for the change you made](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).
1. Submit a patch!

## Quick technology tour

This site uses:
* [Eleventy](https://www.11ty.dev/) as its static site generator
* [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) as the templating language
* [Tailwind UI](https://tailwindui.com/components) as our CSS and UI framework
* [pandoc](https://pandoc.org/) to compile some parts of the site into PDF

## Design

We rely on [TailwindUI] for our components, and have a [draft sitemap] we're working from. Password for Tailwind is in the contributor password vault.

[TailwindUI]: https://tailwindui.com/components
[draft sitemap]: https://www.figma.com/file/CohXLEIN3RXd0Zc8buIV8A/Zinc?node-id=0%3A756

## Deploying

Changes merged into the `development` branch are auto-deployed to [https://www.zinc.coop].
