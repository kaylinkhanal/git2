# stash 

Scenario

Goto the friend branch then write some code save it and try to checkout to another branch 

error: Your local changes to the following files would be overwritten by checkout:
        index.js
Please commit your changes or stash them before you switch branches.
Aborting

Solution : Either you commit it or provide a git command git stash

git stash will revert changes in code that we have changed in the frien code 

# ACP

Add --> git add .
commit-->git commit -m "yourMessage"
Push-->git push origin -u 'yourBranchName'

# Chekout to another baranch

git cd 'pathYouHave'
git checkout 'branchNameYouWantToSwitch'