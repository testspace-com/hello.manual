# Hello Manual
This repo provides example test specs for demonstration purposes: 


- Repo based test specs
- Using [Liquid](https://jekyllrb.com/docs/liquid/) for leveraging [variables](https://help.testspace.com/manual/implementation-spec#variables) and [includes](https://help.testspace.com/manual/implementation-spec#includes) and [logic](https://help.testspace.com/manual/implementation-spec#includes) when implementing test specs
- Using [GitHub Actions](https://help.testspace.com/manual/implementation-automation#github-workflows) for automating fixturing

> The repo is a [template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template), making it easy to create your own "sandbox" repo(s) to experiment with writing test specs.


How to implement and run manual tests based on a repository can be found in the Testspace [Help Tutorial](https://help.testspace.com/tutorial/getting-started) section.


### Spec Preview
The Testspace Spec model is compatible with the GitHub [Jekyll](https://jekyllrb.com/) model, where a separate parsing and static HTML generation step occurs. As a result of this approach, it is easy to leverage Jekyll for local Spec development and previewing.

> Use Jekyll for local spec development and previewing.


#### Setup
To leverage Jekyll on the desktop, a few one-time steps are required. It is recommended to set up Jekyll in the same folder as your test specs (i.e. cd specs).

> Note that [Ruby](https://www.ruby-lang.org/en/downloads/) version **2.5.0** or higher is required to be installed.

Install dependencies.

```
cd specs
gem install jekyll bundler
bundle install
```

View the Specs using Jekyll in the *specs* folder.

```
cd specs
bundle exec jekyll serve 
```
