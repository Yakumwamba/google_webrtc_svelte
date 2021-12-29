
![complete](https://user-images.githubusercontent.com/72974932/147395289-51e06ab4-b157-439d-98f9-90d4698fe35f.png)

## About this project 

 I created this project to learn how to use the Svelte library and to learn how to use the Svelte CLI. 
 This acts as a guide to how to use the Svelte CLI and webrtc in Svelte. It includes all the examples from https://webrtc.github.io/samples/ that demonstrate how the WebRTC API functions work.
 
 ## Demo 
 https://webrtc-mauve.vercel.app/webrtc
 
Once you've cloned this repo and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:



## Testing on a Chrome Mobile browser
If you want to test on your mobile browser make sure to start the development server with this command `npm run dev --host --https` this allows the application to run in a secureContext which is required for us to access the `navigator` object.

⚠️WARNING⚠️ *It is highly recommended to use headphones when testing these samples, as it will otherwise risk loud audio feedback on your system.*

Todo List
=========

The first part of this todo list todo list is to implement the getUserMedia() inside a svelete app which allows us to access the media devices on the client side (browser)

1. Basic getUserMedia demo
2. Use getUserMedia with canvas
3. Use getUserMedia with canvas and CSS filters
4. Choose camera resolution
5. Audio-only getUserMedia() output to local audio element
6. Audio-only getUserMedia() displaying volume
7. Record stream
8. Screensharing with getDisplayMedia
9. Control camera pan, tilt, and zoom


## 💖 Support the project

This is my truly first open-source project, and I will try to reply to everyone needing help using these projects. Obviously, this takes time. You can use this service for free.

However, if you are using this project and are happy with it or just want to encourage me to continue creating stuff, there are few ways you can :-

1. Giving credit when you use it in your project.
2. Starring and sharing the project 🚀

Contributions are welcome! 

Thanks 🦃

Made with ❤️ and Svelte.
