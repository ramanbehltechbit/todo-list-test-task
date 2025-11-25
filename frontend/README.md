
# Project Name

This is a React Native mobile application for managing tasks and todos.  
It supports both iOS and Android platforms.

---

## Prerequisites

Before running the app, make sure you have installed:

- **Node.js** (v22+ recommended)  
- **npm** or **yarn**  
- **React Native CLI**:  
```bash
npm install -g react-native-cli
```
- **Xcode** (for iOS development)  
- **Android Studio** (for Android development)  
- **CocoaPods** (for iOS dependencies):  
```bash
sudo gem install cocoapods
```

---

## Getting Started

1. **Clone the repository**  
```bash
git clone <your-repo-url>
cd <your-project-folder>
```

2. **Install dependencies**  
```bash
npm install
# or
yarn install
```

---

## Running on iOS

1. **Install iOS pods**  
```bash
cd ios
pod install
cd ..
```

2. **Start Metro bundler**  
```bash
npx react-native start
```

3. **Run on iOS simulator**  
In a separate terminal:
```bash
npx react-native run-ios
```
> By default, it will open the app in the iPhone simulator.  
> To run on a specific device:  
```bash
npx react-native run-ios --device "iPhone 15"
```

---

## Running on Android

1. **Start Metro bundler**  
```bash
npx react-native start
```

2. **Run on Android emulator or connected device**  
In a separate terminal:
```bash
npx react-native run-android
```
> Make sure the emulator is running or an Android device is connected via USB with **USB debugging enabled**.

---

## Running on a Real Device

- **iOS device:**  
  - Connect the device via USB and select it in Xcode as the build target.  
  - Run the app through Xcode or:  
  ```bash
  npx react-native run-ios --device "<Your Device Name>"
  ```

- **Android device:**  
  - Enable **USB Debugging** on your Android device.  
  - Connect via USB and run:  
  ```bash
  npx react-native run-android
  ```

---

## Troubleshooting

- **iOS pods error:**  
```bash
cd ios
pod repo update
pod install
cd ..
```

- **Xcode command line tools not installed:**  
```bash
xcode-select --install
```

- **Metro bundler issues:**  
Stop all running Metro instances and restart:
```bash
npx react-native start --reset-cache
```

---

## Folder Structure

```
/android         # Android native files
/ios             # iOS native files
/src             # React Native source code
  /components    # Reusable UI components
  /screens       # Screens or pages of the app
  /hooks    
  /api      # API calls or business logic
  /utils         # Utility functions
  /types        # declare type
```

---

## Scripts

| Script             | Description                                      |
|-------------------|--------------------------------------------------|
| `npm start`        | Start Metro bundler                              |
| `npm run ios`      | Run app on iOS simulator                         |
| `npm run android`  | Run app on Android emulator/device               |
| `npm run test`     | Run unit tests (if any)                          |

---

## License

Add your license here (e.g., MIT, Apache 2.0, etc.)
