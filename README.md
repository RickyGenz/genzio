# GenzIO (Ricky Genz Profile)

#### This is the website for Ricky Genz's [*Personal Profile*](http://genz.io/).

## Change Log

All notable changes to this project will be documented in this file.

### [1.0.2] - 2016-06-07
#### Removed
- Duplicate files.

### [1.0.1] - 2016-06-07
#### Added
- Google Analytics Tracking ID

#### Changed
- Location & Contact now have unique colors.

### [1.0.0] - 2016-06-07
#### Added
- Initialize Repository

## Code Library

Setup Version Control
```
$ git init
$ git add .
$ git status
$ git commit -m "Initialize Repository"
$ git remote add origin https://github.com/user/repo.git
$ git remote -v # Verify new remote
$ git push -u origin --all # pushes up the repo and its refs for the first time
```

Use Version Control
```
$ git checkout master # Make sure you start on the master branch
$ git checkout -b new-branch # co can be used instead of checkout
$ git branch
$ git status
$ git add -A
$ git commit -m "Add New Cont"
$ git push -u origin new-branch
$ git push # subsequent pushes to new-branch
$ git checkout master
$ git merge new-branch
$ git push
```

Setup and Use Hosting
```
$ firebase init
$ firebase deploy
```

Change Log Tags
```
#### Added - new features
#### Changed - changes in existing functionality
#### Deprecated - once-stable features removed in upcoming releases
#### Fixed - any bug fixes
#### Removed - deprecated features removed in this releases
#### Security - invite users to upgrade in case of vulnerbilities

[YANKED] - versions pulled because of serious bg or security issue

Change Log - http://keepachangelog.com/
Semantic Versioning - http://semver.org/
```