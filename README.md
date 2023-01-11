# infotech-mobile
Anutio Mobile App Dev


<!-- [Powered by: Amazin Trips](https://tellit.io/) -->


## Building and Debugging (common-issues)
if react-native run-android builds old version of the app. Go to the root of the project in the terminal and run the below command:
```python
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```
[https://stackoverflow.com/questions/63607158/xcode-12-building-for-ios-simulator-but-linking-in-object-file-built-for-ios/63955114#63955114](https://stackoverflow.com/questions/63607158/xcode-12-building-for-ios-simulator-but-linking-in-object-file-built-for-ios/63955114#63955114)

## Genirate Release APK 
* Open Andriod Studio `open -a /Applications/Android\ Studio.app`
* Then sync Gradle
* Genirate Signed bundle

Generate Release Bundle 
```python
cd android && ./gradlew bundleRelease
```

Generate Debug APK 
```python
cd android && ./gradlew assembleDebug
```

Generate Release APK 
```python
cd android && ./gradlew assembleRelease
```

Clean XCode/IOS Project 
```python
cd ios && xcodebuild clean
```

Clean Android Project 
```python
cd android && ./gradlew clean
```

Clean Android Cache 
```python
cd android && ./gradlew cleanBuildCache
```

## Debugger Error
app is crashing when running RN debugger. global.performance.now is not a function
make change to this file: node_modules/react-native-reanimated/src/reanimated2/core.ts Line 386, remove this:

```python
react-native-reanimated issue
```

if change line 386 from core.ts
```python
   global.performance = {
        now: global._chronoNow,
      };
```
to
```python
    if (global.performance == null) {
        global.performance = {
          now: global._chronoNow,
        };
      }
```

## Setting up your local environment
* Clone the git repo by running `git@github.com:Anutio/AnutioMobile.git`
* run `yarn install` 
* install pod config `cd ios` then run  `pod install --repo-update` 
* run `yarn start` 
* run ios or android app