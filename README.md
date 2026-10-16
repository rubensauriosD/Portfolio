# Ruben Bazan · Portfolio

Personal portfolio built with React and styled-components. It presents my background, freelance services, personal applications and training projects.

![Original animated artwork](src/assets/misIMG/anigif_enhanced-buzz-24540-1374525281-13.gif)

## Content

- Software Developer experience, technical skills and education in progress.
- Downloadable CVs in [English](public/cv/Ruben_Bazan_CV_EN.pdf) and [Spanish](public/cv/Ruben_Bazan_CV_ES.pdf).
- FitApp and LoL Personal Stats Tracker: local personal applications, with clearly labelled illustrations and feature summaries.
- MACHI, VideoGames and Pokémon: earlier training projects with links to public repositories.
- Direct email and LinkedIn contact links.

Professional source code and internal company tools are private and are not included in this repository. Public demos and source repositories for the two local applications are not available yet.

## Stack

React 17, React Router 5, styled-components 5, Swiper 6 and Create React App 4. The existing dependency versions are preserved.

## Run locally

```sh
npm ci --legacy-peer-deps
npm start
```

Create the production bundle with `npm run build`. This older Create React App toolchain may need `NODE_OPTIONS=--openssl-legacy-provider` when used with recent Node.js versions. Static hosting must serve `index.html` for client-side routes; `public/_redirects` contains the Netlify fallback.

## Update content

- `src/assets/data/projects.js`: project descriptions, stacks and source links.
- `src/pages/About.js`: experience and education.
- `src/components/HeroSection.js`: introduction and original animation.
- `src/components/ContactSection.js`: contact details and CV downloads.
- `public/cv/`: downloadable PDFs.

Contact: [LinkedIn](https://www.linkedin.com/in/ruben-bazan-598234201/) · [Email](mailto:rubenalejandro23@gmail.com)
