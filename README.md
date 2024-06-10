This is Matt Bano's submission to the Preqin technical test.

I have written a Next.js/React/Typescript solution using the [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) workflow.

## Getting Started

 - Run the API according to the instructions.
 - Create and run the front-end Docker container:
```
docker build -t nextjs-docker .
docker run -p 3000:3000 nextjs-docker
```

Open [http://localhost:3000](http://localhost:3000) to browse the site.

To instead run the unit tests, or run in dev mode:
```
npm install
npm test
npm run dev
```

## Background

The majority of my recent experience has been server-side, and I treated this as an opportunity to learn some React, as it matches the technology used by Preqin. A basic webpage with only two API calls and two pages seemed like a good opportunity to get some background.

My approach can be seen in the commit history on the repo:
 - Get the basic page, with the query of the investment firms working.
 - Add basic CSS using Bootstrap.
 - Add the second page with the commitment dropdown.
 - Polish and tidy up, some bug fixes.
 - Add unit tests using Jest.
 - Add a Dockerfile - the default one for create-next-app worked without modification.
 - Write Docs, followed by some additional typo fixes in the GibHub UI.

 I did not use GitHub CoPilot, but I did make some use of ChatGPT:
  - I couldn't find the JSON schema for the DTOs, so I got ChatGPT to translate the python objects found in the model directory.
  - ChatGPT generated the mock data used in the DataTable.test.tsx file.
  - While most of my React knowledge came from tutorials, I did find ChatGPT useful to clarify some points.

## Im provement opportunities

I did in truth spend rather longer than an hour on this, but there are still some things I would have liked to have done differently given more time:
 - I should perhaps have a FirmListProvider object that could be injected into each page rather than repeating the API call.
 - More util functions to do things like capitalise 'bank' would make the site look more professional.
 - Only one component has unit tests. Similar tests should be written for all components, as well as other aspects of the site.
 - While the testing does seem to work I did do rather a lot of trial-and-error changes on the Babel and Jest configuration files, and do not understand them as well as I might wish.
