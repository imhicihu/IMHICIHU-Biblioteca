### Signing
Internet Explorer's SmartScreen Filter and antivirus programs may flag your package as malware if it's not signed. Luckily, signing your package with electron-installer-windows is pretty easy. Let's test the process with a self-signed certificate.
To generate the certificate, open the Developer Command Prompt for Visual Studio and execute the following:
```
$ makecert -sv my_private_key.pvk -n "CN=MyTestCertificate" my_test_certificate.cer -b 01/01/2016 -e 01/01/2026 -r
$ pvk2pfx -pvk my_private_key.pvk -spc my_test_certificate.cer -pfx my_signing_key.pfx -po my_password
```

Now we can tell electron-installer-windows to sign the packages that it generates with that certificate:
```
$ electron-installer-windows --src dist/app-win32-x64/ --dest dist/installers/ --certificateFile my_signing_key.pfx --certificatePassword my_password
```

That's it.

### Guidelines
* Check this [checklist](https://www.electron.build/code-signing#windows)
* [How to Code Sign an Electron App for Windows](https://interactiveknowledge.com/insights/how-code-sign-electron-app-windows)
* [Digicert EV certs and CI/CD](https://electricui.com/blog/digicert-ev-ci)