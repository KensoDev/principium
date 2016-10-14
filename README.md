# principium

<div style="text-align: center">
  [Principium Logo](http://assets.avi.io/aHR0cHM6Ly93d3cuZnJlZWxvZ29zZXJ2aWNlcy5jb20vYXBpL21haW4vcGgvempIbDJsZ2VmOWNZclFMMEpGYTdremJ3MnZ1QnBCUkhuUmpQMERwOU9YZEU5ZzVzaG5OMWkuLi5CdjlldHRkVjlkc0JVR3cwcFk.png)
</div>

Principium is a React Native starter kit with Redux. Ready to roll

## Why?

When I started working with React Native I was frustrated about two things.
1. Default configuration was missing a lot of boilerplate
2. Starter projects were too bloated and assumed too many things.

Principium is setting out to solve that with the absolute minimum you need in
order to start your project.

### What it includes

1. React Native
2. Redux
3. Reducer to set the device and the version (so you can use that in conditions
   around your code)


The starter kit has no screens and no navigation pre-baked, you can choose your
own and it will work out of the box.

## Running the project

In order to run the project all you need to do is clone it and run with Xcode
or Android Studio, no other configuration needed.

If you know Redux and React from the web, you should be good to go in minutes.

## Project structure

```
src/
├── actions
│   └── Device
├── constants
│   └── DeviceActionTypes.js
├── containers
│   └── App
├── lib
│   └── configureStore.js
├── principium.js
└── reducers
    ├── Device.js
    └── index.js
```

As you can see above, the project `src` directory is really basic and only
includes the minimum. You have a container called `App` where you start coding
your app and the rest is Redux connections.



## Contributing...

* Fork the project
* Start a feature/bugfix branch
* Commit and push until you are happy with your contribution
