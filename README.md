# postman-docs

[Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)

## Build your Jekyll site locally

    bundle exec jekyll serve

## Project Structure

There are 2 independent versions of docs currently in the project (v5 and v6)
`www.getpostman/docs` is redirected to `www.getpostman/docs/v6/`

*To update v6 (same procedure to update v5):*

* Landing page reference links is maintained at `/_data/v6_map.json`

* Posts are maintained under `/v6`

* The folder structure of /v6 is the URL structure for posts. For example, `/v6/Do_what_ever/As_long_as/It_is_fun.md` is mapped to URL `www.getpostman/docs/v6/Do_what_ever/As_long_as/It_is_fun`

* Popular Topics is maintained at `/_includes/_popular_topics.html`

* Version selector is maintained at `/_includes/_version_selector.html`

* Docs specific styling is maintained at `/_includes/_meta.html` (we currently hide the version selector via css, when the time comes, change the css in this _meta.html file to display the version selector.)

This project does not have any hacky implementations, follows strictly the standard way of implementing pages and it is documented in [Jekyll's docs](https://jekyllrb.com/docs/home/)
