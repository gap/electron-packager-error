
# Electron Package Error

## Problem

In development the filesystem object can be loaded.  When packaged and run the file system object can not be found.

## Directions

To repeat the problem do the following

1. Clone repository
2. yarn
3. yarn build
4. yarn electron

In the console the fs object will be displayed

5. yarn package
6. yarn exe

The same electron project is run.  This time it displays the following error.

```
Uncaught Error: Cannot find module 'fs-extra'
```