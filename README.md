# Strapi.io + Next.js
- Strapi.io (BACKEND)
- Next.js (FRONTEND)

#### Strapi is a backend content management system that can build API' for us quickly (Headless CMS)
#### Next.js is a React framework that allows us to create really fast dynamic applications quickly

## Strapi.io
- A Headless CMS
- [Strapi.io API - Developer Docs](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html#open-source-contribution)
### Headless CMS
- [Headless CMS explained in 1 minute - Click to watch the video!](https://youtu.be/-Uor3I0n_vQ)

- A headless CMS is a content management system (CMS) that provides backend-only functionalities, making content accessible through a GraphQL or REST API and displayable on any device possible.

- A headless CMS completely separates the backend (creation and storage) from the frontend (design and deployment). It doesn't manage the frontend presentation layer.

### Built-In Security
- Simpler and clearer systems of headless architecture do more than boost performance, they also provide better security by reducing the number of exposed elements end-users can access. When only parts of the stack are activated, entry points for malicious actors are limited. The built-in security gets even stronger when using a static site on a CDN (Content Delivery Network).

- The only component accessible to end-users is two layers removed from anything that could cause harm. The steps from creating content to deployment involve a lot of movement behind the scenes. In traditional models of monolithic websites, that often meant leaving a vulnerable hole into the backend.

- With a headless CMS, content creation and content delivery are always separated, making it nearly impossible for end-users to access the back-end. The flexibility of headless architecture also allows for stronger security through easier updates. When every part of the stack isn’t needed all the time, it’s possible to schedule updates and maintenance with little to no downtime at all.
### Traditional vs. Headless Backend
- [See more](https://strapi.io/blog/traditional-vs-headless-cms-a-comparison?utm_source=devto&utm_medium=post&utm_campaign=blog)
### Creating an API in about 5 minutes
1. ```npx create-strapi-app blog-strapi --quickstart``` (--quickstart flag at the end of this command will start your strapi.io using a SQLite instance);
2. Go to "http://localhost:1337/admin/auth/register-admin" or wait until it loads the admin page;
3. Create your admin account (**email**: joaovitorlessa@gmail.com / **pass**: Admin123);
4. Start creating your Content-Types;

### Content-Type
- The Content Types Builder allows you to create your content architecture using single or collection types. 
The Content-type Builder is however only accessible when the application is in a development environment;

#### Collection types
- Are content-types that can manage several entries;

#### Single types
- Are content-types that can only manage one entry;

#### Components
- Are a data structure that can be used in multiple collection types and single types;

5. Create the Collection Type, using Content Type Manager;
6. Add some fields;
7. Add the permission in the Posts settings, so Public viewers can be able to retrieve the information;
8 Access the api using this address: http://localhost:1337/api/[colletion-type]