# Frontend Mentor - IP address tracker solution

This is my solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](/public/screenshot/ip-address.png)

### Links

- Solution URL: [here](https://www.frontendmentor.io/solutions/responsive-ip-address-tracker-7qDlOkgv91)
- Live Site URL: [here](https://ip-address-tracker-alpha-blush.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- [react-leaflet](https://react-leaflet.js.org/) - a javascript map library
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learnt the basics of the leaflet library, an open source library for maps.

```js
<MapContainer center={center} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={center} icon={locationIcon}>
    <Popup>{region}</Popup>
  </Marker>
</MapContainer>
```

### Continued development

I haven't been able to rerender the map after state has been updated. I will do more research and add that feature.

### Useful resources

- [react-leaflet](https://react-leaflet.js.org/) - The react leaflet documentation.
- [leaflet setup](https://blog.logrocket.com/react-leaflet-tutorial/) - A good blog on setting up react leaflet.

## Author

- Website - [Kiprop](https://www.tanuikiprop.gq)
- Frontend Mentor - [@kiprop-dave](https://www.frontendmentor.io/profile/kiprop-dave)
