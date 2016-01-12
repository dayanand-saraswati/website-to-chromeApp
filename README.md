# website-to-chromeApp
Easy conversion of website to Chrome app for distribution.

If you have a website ready and you wish to convert it to chrome app, for distribution purpose,
fork this repo and follow the following steps:

1. In the app folder paste the entire website code in the folder structure that suits you.
2. Make sure all your dependencies are present as static (use of CDNs cause Content Security Policy(CSP) issues).
3. Now open the "manifest.json" file and modify the name, description, etc. as it suits you. You can add more keys from the documentation page at https://developer.chrome.com/extensions/manifest.
4. In the "background.js" file, place the path to your "index.html" file (or whatever you named your main html file) present inside then "app" folder.
5. Now open chrome browser and type "chrome/extensions" in omnibox. You can also navigate through "Options > More Tools > Extensions".
6. Check the "Developer Mode" checkbox on top (if not already checked).
7. To test the app, click "Load Unpacked Extension" and navigate to the root folder in your computer which directly contains "manifest.json" as its child.
8. To create a .crx click "Pack extension" and navigate to the folder as above. Note that "Private Key" is optional.
9. Once completing Step 8, you get a .crx file in the parent folder containing this entire setup. This crx is transferable over mail, cloud storages, etc. You can share this .crx with anyone you wish.
10. If you wish to make this publickly available, create a Chrome developer account at https://chrome.google.com/webstore/developer/dashboard and upload your app as a zip format to the Chrome App Store.

You have successfully created a chrome app for your website without major changes in the website itself. This is a wrapping method, so you don't need to change much in your site other than replacing CDNs with static resource.  