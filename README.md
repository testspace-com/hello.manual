# Hello Manual
This repo provides manual test examples used for demonstration purposes. 

Refer to the [Manual Overview](https://help.testspace.com/manual/overview) for more details. 

## Setup
Testspace will automatically discover manual tests - called "test specs" - captured in your repository. Manual tests are implemented using plain text markdown and managed in GitHub. 

```md
  ---
  testspace:
  ---
  # Hello
  ## Case 1
   - do this
   - do that
  ## Case 2
    ..
```

> Check out the [github.dev](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor#about-the-web-based-editor) web-based editor for creating and editing manual tests.

## Test Case Management
Testspace offers the following unique functionality regarding Manual testing:

- Integration with GitHub Repositories
- Built-in Liquid [templating language](https://help.testspace.com/manual/implementation-spec#template-language) support
- [Automated Fixturing](https://help.testspace.com/manual/implementation-spec#automated-fixtures)
- GitHub [issues](https://help.testspace.com/manual/execution-session#issues) integration
- [Exploratory testing](https://help.testspace.com/manual/execution-session#exploratory) built-in


How to implement and run manual tests based on a repository can be found in the Testspace [Help Tutorial](https://help.testspace.com/tutorial/setup) section.

