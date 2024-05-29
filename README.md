## Task 1:
A project titled, “Alex’s Kitchen” from team "Remote Kitchen" uses Git for version control. Several developers are contributing, with each working on their own branch. The team follows certain conventions. Suppose you need to submit a hotfix. How would you name your branch? After finalizing your work in your designated branch, detail the steps you would take to create a PR and merge it with the production branch.

----------

## Task 1 Solution:

## a. Branch Naming:
For a "hotfix", the branch name should follows a convention to indicate its purpose clearly. So, by following this "hotfix/<description>" convention for a hotfix branch I will named it something like "hotfix/fix-critical-bug".

----------

## b. Steps to create a PR and Merge with Production:

## 1. Create the Hottfix Branch:

#. I will check existing branches by commanding:

>> git branch -a
 
Suppose the production branch is named "main";

#. I will switch to the "main" branch by commanding:

>> git checkout main

#. I will Pull and Update the "main" branch to the latest version from Remote:

>> git pull origin main

#. I will create and switch to the "hotfix" branch:

>> git checkout -b hotfix/fix-critical-bug

----------

## 2. Implement the Hotfix:

#. I will make the necessary changes to fix the bugs

#. Then stage and commit those changes:

>> git add .
>> git commit -m "Fix critical bug in production"

----------

## 3. Push the Hotfix Branch to the Remote Repository:

>> git push origin hotfix/fix-critical-bug

----------

## 4. Create a Pull Request (PR):

#. I will go to the repository on GitHub.

#. Navigate to the "Pull Request" tab.

#. Click on the "New Pull Request" button.

#. Select "main" as base and "hotfix/fix-critical-bug" as compare branch.

#. Then fill in the PR details with clear title and description of what the hotfix addresses.

#. Then assign reviewers and add relevant labels (e.g.: "hotfix").

----------

## 5. The PR will Get Reviwed:

#. Responsible team member will review the request and address feedback or requested changes if needed.

----------

## 6. Merge the PR:

#. If everything is okay and the the request is approved then I will able to "Merge" it by clicking the "Merge pull request" button.

----------

## 7. Delete the Branch:

#. Now I can delete the hotfix branch from the remote repository and also from local.

>> git branch -d hotfix/fix-critical-bug