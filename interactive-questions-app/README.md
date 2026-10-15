# CBE Nexus Interactive Questions app

This folder is reserved for the separately integrated Grades 6–10 Interactive Questions frontend.

Upload only the app frontend files here:
- `index.html` from `cbenexus-all-grades/index.html`
- `supabase-config.js` from `cbenexus-all-grades/supabase-config.js`

Do not upload secret keys. The current `supabase-config.js` contains blank URL and publishable-key values and must be configured with the public project URL and publishable key only. Never add a Supabase service-role/secret key or OpenAI API key to browser files.

The app is kept in this subfolder so it does not overwrite the existing CBE Nexus homepage or marketplace files. The backend function and deployment configuration will be handled separately after the frontend is in place.