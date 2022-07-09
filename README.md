# Exoticca technical test 
How to use: run "npm run dev" in the root folder, then open http://localhost:3000/ in your chosen explorer.

Found this header :D -> x-recruitment: Cool developers inside, but we need some more. Contact us at talent@exoticca.com and mention this header.

// Technologies used:
- React: Base UI framework.
- Redux: in order to save the info from the API request and make it accessible everywhere in the app with cleaner reducers and code.
- Vite: instead of CRA, because of its lightning speed and small package size.
- Typescript: in order to get a robust code with better (thus cheaper) legibility and maintenance.  
- Sass: to create indented css with added funcionalities like variables.
- Styled components: to create reusable react components with its own styles (never used before :D)

// To improve
- Tried testing, but Enzyme seems to be deprecated in React 18, so React Testing Library is recommended
- Data fetch: everything is extracted at the same time from mocked JSON
- Protected routes if user auth is needed.
- Global imports setup with vite.
- Cards suggested: remove duplicate destinations even if they have different prices
- Many other minor changes...

// To consider
- The tech is overkill and with lots of boilerplate. It was developed in this way so that it's highly scalable and easy to maintain.