# Pro-Portfolio

## Description

This is a portfolio that showcases my work and skills as a developer. It includes a portfolio of projects and contact information. The portfolio is built using Nuxt and builds to a static site that is hosted on GitHub Pages.

## Projects

The main project data is stored in markdown files in the '[content/projects](/content/projects)' directory. The project data is built into a static page at build using [Nuxt Content](https://content.nuxt.com/).

## Theming

The site contains a custom theming engine, made up of a theme.ts util, useTheme compostable and ThemeChanger component. The theming currently affects: text, background and link colours. The themes are stored in an object in '[utils/theme.ts](/utils)'
