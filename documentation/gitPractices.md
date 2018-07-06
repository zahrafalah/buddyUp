# Best Practices git

### Pushing code:

	1. From anywhere, `git fetch`. This will fetch all the up-to-date information from the project. 
	
	2. `git checkout master`: Switch branches to master. 
	
	3. `git pull`: Pull any recent development changes to master. 

	4. `git checkout yourBranch`(whatever branch you are trying to push up).
	
	5. `git rebase -i master`: This will compare the base of your current branch with the current state of master and then make the current base of your current branch equivalent with master. If there are any merge conflicts, they will show up. Your terminal will tell you how to resolve (it's exactly the same as any other merge conflict, open up VS Code and it'll show you where the confict it). Your terminal will tell you how to continue (usually git rebase --continue). Work through all merge conflicts. When you get a rebase success message, you are rebased. This will make comparing code and looking at our workflow history really clean and simple. 
		- Your terminal will open an environment called vi, which will list the commits that are being
			rebased on top of master next to the word 'Pick'. This is normal. If they are the right commits,
			do: :q or :wq to quit and rebase. If not, then you have a different version of master. Delete
			any commits that are also referenced on master since it means you have different stuff on your
			branch's base, then do: :wq. :wq means "write & quit".
	
	6. `git push origin yourBranch`: This will push your code changes to  remote repository. 

	7. **Alert Briana** that you have code that is ready to merge (since sometimes we push code for the purpose of sharing our progress/debugging, I need to know when it's for master)

### Comparing Two Branches: 
	- git diff branch1 branch2 

### Seeing an overview of your commit history: 

	- git log --oneline for the commit address and commit message
	- git log for all the commit information. 

### Moving commits from one branch to another branch:
	- Move to the branch you want the commit to save to, then: git cherry-pick commitAddress (e.g. df8642)

### Return to a previous commit because you seriously messed up your code and need to delete ALL changes from that commit:
	- git reset HEAD --hard $~N $commit address
	- ~N means, ~ and then the number of commits behind the current commit you want to go to. You can get this information from git log. 
	- commit address: The address of the commit from git log, same as when cherry-picking. 
**NEVER, *NEVER* DO THIS ON MASTER FOR ANY REASON WHATSOEVER. ALWAYS GIT BRANCH BEFORE YOU DO THIS TO MAKE SURE YOU ARE *NOT* ON MASTER**

### Remember, you can add to a commit one file at a time using git add filename. This makes it easy to read your commit history and isolate issues that need to be debugged. Please write meaningful commit messages, as in "Added startup files for Profile" or "Fixed bug where buttons don't load" so that it is easy to debug. 
