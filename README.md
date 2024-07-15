![stability-workinprogress](images/stability-work_in_progress.png)
![internaluse-green](images/internal_use_Stable.png)
![issues-open](images/issues_open.png)

                                                 (...) a single JSON file can be used as a database.
# IMHICIHU-Biblioteca

* _Quick summary_: an application for search digital records through up our library
* The goals proposed and achieved have been minimalism in its design, consistency with other tools and real-time response
* This repo is a living document that will grow and adapt over time
<BR></BR>
![graphics.png](images/2023-09-11.gif)

### Requirements
* Tested on MacOSX Mojave (version 10.14) to MacOSX Ventura (version 13.6.6)
* Not tested on MacOSX Sonoma

### Usage
* To run this repository locally in your computer, you'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.
* Then, from your command line:

```bash
$ npm install
$ npm start
```

### Installation
* Download the latest [mac application](dist/mac/IMHICIHU%20-%20Biblioteca-darwin-x64/IMHICIHU%20-%20Biblioteca.app.zip)
* Unzip `IMHICIHU - Biblioteca.app.zip`
* Move `IMHICIHU - Biblioteca.app` to your `Applications` folder
> [!TIP]
> Since `IMHICIHU - Biblioteca.app` is not signed ([due to its costs](https://developer.apple.com/programs/whats-included/)) so you will need to use a workaround for the first run. The workaround depends on if [you're running an Intel or Apple Silicon](https://www.makeuseof.com/how-to-find-out-if-your-mac-uses-intel-or-apple-silicon/) chip.
> * For macs with Intel chips, follow this [steps](https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac). 
> * For macs with Apple chips, [open a Terminal session](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) and type and run this command:
> - `sudo xattr -r -d com.apple.quarantine /Applications/IMHICIHU - Biblioteca.app.app` 
> - You can check other procedures of installation in MacOSX environments from our [internal documentation](docs/MacOSX)
> - You can verify which chip your mac have checking this [procedure](https://support.apple.com/en-us/116943)

### Disclaimer
* This repository is for academic purposes only. It is intended for educational and research use, and should not be used for any commercial purposes

### Code of Conduct
* Please, check our [Code of Conduct](code_of_conduct.md)

### Legal ###
* All trademarks are the property of their respective owners.

### License ###
* The content of this project itself is licensed under the ![MIT Licence](images/2049852260-MIT-license-green.png)
