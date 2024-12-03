# Expo DocumentPicker Android Bug: Multiple File Selection

This repository demonstrates a bug in the Expo DocumentPicker API on Android. When selecting multiple files using the DocumentPicker, only the URI of the first selected file is returned.  This issue does not occur on iOS.

## Bug Reproduction

1. Clone this repository.
2. Run the app on an Android device or emulator.
3. Select multiple files using the DocumentPicker.
4. Observe that only the URI of the first selected file is logged to the console.

## Expected Behavior

The DocumentPicker should return an array of URIs, one for each selected file, mirroring the behavior on iOS.

## Solution

A proposed solution is included in `bugSolution.js`. This solution is still under investigation for the best way to solve this problem permanently. 

## Workaround (In bugSolution.js)

While this is not an ideal solution, as the official Expo DocumentPicker doesn't currently handle this scenario perfectly in the current version, the workaround in bugSolution.js attempts to recursively gather more files.  It is not a perfect solution, but it is provided as a means for dealing with the limitation until a more permanent solution is implemented.

