# figma-zoho-dashboard

A minimal **Vite + React + Tailwind** dashboard that embeds your **Zoho Creator** report via iframe.

## Prereqs

- Node.js 18+
- A Zoho Creator account (log in to the same browser to see the embedded report)

## Local Dev

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).  
Ensure you are **logged into Zoho Creator** in the same browser.

## Build

```bash
npm run build
npm run preview
```

## Netlify

Netlify settings:
- **Build command**: `npm run build`
- **Publish directory**: `dist`

You can also use the included `netlify.toml`

## Where is the Zoho link?

The embed URL is set in `src/components/ZohoCreatorFrame.jsx`:

```js
const url = "https://creatorapp.zoho.com/nutreevit/property-management-system#Report:Draw_Schedule_Report1";
```

If you later enable public sharing, you can swap this for your public permalink (creator.zohopublic.com).

## Notes

- If the iframe is blank or blocked, make sure third-party cookies are allowed and you are logged into Zoho Creator.
- Alternative approach (always works): embed your React app **inside** Zoho Creator as a **Widget**.
