# Quick PDF

An app to quickly open a PDF file you usually use. Written in Javascript with React-Native

Got the idea to do this from my need to have to constantly open the ID card PDF file on my phone while scanning in and out of the campus gates. Now while only a few days remain, I will still use this as I thought of making it and, why not.

## Setup and Testing

Prerequisites: Android Sdk (adb)

To test, from the root directory run the command `npx react-native run-android` to test on android, while having a either an emulator running in the background (preferred), or a device connected via adb. 

> To use your own android device, connect via USB, select the `File Transfer` mode on your android device, and then go to Developer Options and turn on USB Debugging mode.

On running this command, the app is built and then installed as an apk on the device, all the while Metro watches the file changes at each save of the file and allows us to do hot reloads.

## Current Status and Roadmap:
 - [x] Plain Android App
 - [x] App that shows a pdf
 - [X] Making a release (involved a lot more tasks than I thought it would take.)
 - [X] A hardcoded app that works atleast as a quickPDF for a pre-given PDF (to me) with sort of appropriate zooming levels.
 - [ ] App where we can change the pdf
 - [ ] App with configuration options for the pdf

## Design ideas/plans:
 - Have a settings button that shows only if you tap/move around once on the app somewhere. Use that settings button to change the file being used, or the current zoom level.
 - For changing the zoom level, pressing a button should enable a mode where you can zoom in to whatever you want the default to be. When at that zoom level, pressing a button like 'Done' should save those settings and make that the default.

<br>

> Comments and notes:-
>
> This is such a huge pain and so so so very difficult, apps take so much time to install, and run and there are just so many things that can go wrong. Especially with me since I am a newbie to application development, and ChatGPT hasn't really been that useful, if at all. 
>
> Debug notes: App release
> To make a release, I had to first make a keystore file. Then, I had to store it in the right folder `android\app`, and for the passwords, since I obviously didn't want them to be uploaded to GitHub, I tried to put then in `~\.gradle\gradle.properties` but actually didn't notice the `~` until quite late, and when I did I finally put this configuration file in the right place, didn't really think that would work since it was a folder far away from this stuff, but it did work.