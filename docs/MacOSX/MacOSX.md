### Github
* Go to the `Releases` tab right above the green `clone/download` button
![github.jpg](/images/2861323947-clone_or_download.jpeg)
* Download the most recent build file _e.g_: `IMHICIHU-Biblioteca.dmg` file
* Open it up and drag it to your `Applications` folder
* If you get an error about an unidentified developer, <kbd>⌃ Control</kbd>-click the app and hit `Open`

### Mac security
![caveat.jpeg](/images/4208514379-searcher_error.jpeg)
* If you get a warning that `IMHICIHU-Biblioteca.dmg` can't be opened due to an unidentified developer you have to make sure that under `System Preferences` > `Security & Privacy` > `General` it is allowed to open apps from the `Mac App Store and identified developers`. Then try to open `IMHICIHU-biblio-searcher.dmg` and under `System Preferences` > `Security & Privacy` > `General` click on `Open Anyway`
* If you encounter the error message "IMHICIHU-Biblioteca" is damaged and can't be opened, you should move it to the Trash. It may be due to particular security settings restrictions in macOS. To solve this problem, please try the following command in Terminal:
```
sudo xattr -r -d com.apple.quarantine /Applications/IMHICIHU-Biblioteca.app`
```
### Security strategies
![caveat.jpeg](/images/pgp.png)

> [!TIP]
> [Checksum on mac environment](https://gist.github.com/imhicihu/0c4d4dba1b73df41af1066253c5d4c3d)
