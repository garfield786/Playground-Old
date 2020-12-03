- Run the following commands
```Bash
git clone http://git.stratos.xfusioncorp.com/max/story_beta.git
cd story_beta/
cp /usr/data/* .
git add -A 
git commit -m "add stories"
git push -u origin master
git checkout -b max_games
cp /tmp/stories/story-index-max.txt .
```
- Edit `story-index-max.txt` file and change *Mooose* to *Mouse*
```Bash
vi story-index-max.txt
git add -A
git commit -m "typo fixed for Mooose"
git push -u origin max_games
```