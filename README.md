# lottie-to-avd

This is a simple command line lottie json to android animated vector drawable xml converter.  
It is fork of https://github.com/bodymovin/bodymovin-to-avd. Currently I just added command line interface. Core code is not changed.

# Usage:

**Option 1:**

Clone this repo

In cmd or terminal inside project directory run command like:

node lottie-to-avd.js -i sample.json

**Option 2:**

Clone this repo

npm install -g .

then outside project directory run command like:

lottie-to-avd -i sample.json

**Option 3:**

npm install -g lottie-to-avd

then outside project directory run command like:

lottie-to-avd -i sample.json

Usage: lottie-to-avd -i path/input.json -o path/output.xml

Options:

\-i, --input Input file path(required) \[string\] \[required\]

\-o, --output Output file path(optional) \[string\]

\-h, --help Show help \[boolean\]

\-v, --version Show version number \[boolean\]

Examples:  
lottie-to-avd -i sample.json -o sample.xml
