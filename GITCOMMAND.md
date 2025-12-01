#### Stash 

*Scenario :- Goto the friend branch then write some code save it and try to checkout to another branch* 

error: Your local changes to the following files would be overwritten by checkout:
        index.js
Please commit your changes or stash them before you switch branches.
Aborting

*Solution : Either you commit it or provide a git command git stash git stash will revert changes in code that we have changed in the friend code* 

#### ACP


1. Add --> git add .
2. commit-->git commit -m "yourMessage"
3. Push-->git push origin -u 'yourBranchName'


#### Chekout to another branch

1. git cd 'pathNameYouHave'
2. git checkout 'branchNameYouWantToSwitch'

#### Merged conflict 

*scenario :- when the branch is pushed by another friend or partner with same line of code and if we want to push the same code then it gives an error message*

! [rejected]        prakash -> prakash (fetch first)
error: failed to push some refs to 'https://github.com/kaylinkhanal/git2.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.


*solution : git pull "workingBranchName"   and resolve it*
