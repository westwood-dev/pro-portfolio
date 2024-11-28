---
title: Full-Stack E-Commerce Site
description: Design and development of a clothing focused e-commerce website, using PayPal API for payment validation.
date: 07-2024
---

### Design and development of a clothing focused e-commerce website, using PayPal API for payment validation

![Placeholder Image (1920x1080)](https://placehold.co/1920x1080)

<br/>

The main goal of this project was to create a fully functional e-commerce website that would allow users to browse and purchase clothing items. The website was designed to be responsive and user-friendly, with a focus on simplicity and ease of use.

## 3D character

![Character gif](https://placehold.co/512x512)
![Character gif](https://placehold.co/512x512)

<br/>

The client asked for a 3D interactive element. I designed a PS1 style character to wear the clothing when the user adds an item to their cart. The design intention of a PS1 style 3D element allows the for a light 3D element that fits the brands design intentions.

The 3D elements were added with <a href="https://www.babylonjs.com/" target="_blank">babylon.js</a>, a 3D library for JavaScript. When a user adds an item of clothing to their basket, the character will animate and be wearing the clothing.

## PayPal SDK

Payment processing is done with the <a href="https://developer.paypal.com/sdk/js/" target="_blank">PayPal SDK</a>. The PayPal SDK is a JavaScript library that allows you to integrate PayPal payments into your website. The SDK provides a simple and secure way to accept payments from customers using PayPal.

The client had a business account and workflows with PayPal so this was the best integration option. We had considered Shopify but the client wanted to integrate the site with their existing PayPal workflow.
