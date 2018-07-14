## General tips

* Don't over-engineer; embrace the possibility of refactoring code
* Git hooks have been added to run tests every push 
  * if you don't want to run the tests, add the `--no-verify` flag
  * Eg. `git push origin mybranch --no-verify

## Making issues

* In general, never hesistate to make an issue
* If you're working on an issue, please assign it to yourself
* If somebody is working on an issue, try to avoid touching anything related to what they're doing

## Making pull requests

* Name the issue after the anticipated squashed git commit message (see "Merging")
* Please fill out the "Context", and "Objective" section; it does not need to be long!
* If you're addressing an issue, put it in the "References" section
* Add any subtleties and difficulties you experienced in the "Lessons learned" section, if you struggled
* If you're not going to fill out the "References" and "Lessons learned" section, **please remove it**

## Merging

* All PRs will be squashed and merged
  * This means all the commits in a branch will be combined into a single commit, which will be merged into master
* When merging, you can choose the commit message of the squashed commit, _please follow the following set of rules_:
  * Follow the AngularJS git commit message [convention](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
  * Use present tense in commit messages!
  * TLDR; format your commit message as follows:

```
<type>(<scope>): <subject>
```

Examples:

```
// "34" refers to the issue number; <scope> should always be an issue number
// if there isn't an issue, then omit scope
docs(34): Add documentation for HumanPlayer

fix: Fix --public-url path for Parcel
feat(29): Add attackPlayer()
// for the full list of types, see https://gist.github.com/stephenparish/9941e89d80e2bc58a153
```
