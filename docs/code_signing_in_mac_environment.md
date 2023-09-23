### First stage
* Start with opening `Keychain Access`.

### Creating a certificate:

* `Keychain Access` menu > `Certificate Assistant` > `Create a certificate...`
* Enter your name (or whatever you want)
* Identity Type: `Self Signed Root`
* Certificate Type: `Code Signing`
* `Continue`
* `Done`
### Overriding the certificate trust levels:

* Open the certificate (double click)
* Expand > `Trust`
* Set `Code Signing` to `Always Trust`
* Close the certificate to save it
* Verify with security: `find-identity -v -p codesigning`
### Importing a certificate:

* `File` > `Import items`
* Select the certificate file
* Override trust levels as specified above
* Exporting a macOS certificate for signing a Windows application:

### Find the certificate in Keychain Access
* Right click -> `Export`
* Choose .p12 format
* Add a strong password
