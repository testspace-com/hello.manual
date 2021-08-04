# Hello Manual
This is a `template` repo that can be **forked** and used for creating new `repos` on your ogranization. 

## Purpose
This repo is used to demonstrate 

- Repo based test specs
- Leveraging [Liquid](https://jekyllrb.com/docs/liquid/) when implementing tests
- Using [GitHub Actions](https://help.testspace.com/manual/implementation-automation#github-workflows) for improving coverage

## Usage
The **Specs** folder contains a few sample `Test Specs` for demonstration purposes. Manual testings can be easily integrated with automated testing, even though the execution of the tests can occur at different times. 

- Hello World
- Hello Liquid - refer [here](https://help.testspace.com/manual/implementation-spec#variables)
- Hello Automation - refer [here](https://help.testspace.com/manual/implementation-automation)

How to implement and run manual tests based on a repository can be found in the Testspace [Help Tutorial](https://help.testspace.com/tutorial/getting-started) section.


## Spec Preview
The Testspace Spec model is compatible with the GitHub [Jekyll](https://jekyllrb.com/) model, where a separate parsing and static HTML generation step occurs. As a result of this approach, it is easy to leverage Jekyll for local Spec development and previewing.

> Use Jekyll for local spec development and previewing.

We are recommending using the Jekyll documentation theme called [Just The Docs](https://github.com/pmarsceill/just-the-docs) for reviewing specs. 

### Setup
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
