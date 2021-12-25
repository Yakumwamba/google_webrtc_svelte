
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


```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
