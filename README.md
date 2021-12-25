
![complete](https://user-images.githubusercontent.com/72974932/147395289-51e06ab4-b157-439d-98f9-90d4698fe35f.png)


Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:



## Testing on a Chrome Mobile browser
If you want to test on your mobile browser make sure to start the development server with this command `npm run dev --host --https` this allows the application to run in a secureContext which is required for us to access the `navigator` object.


<span style="color:red">Warning: It is highly recommended to use headphones when testing these samples, as it will otherwise risk loud audio feedback on your system.</span>.

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
