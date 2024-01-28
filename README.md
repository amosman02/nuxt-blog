# Nuxt.js Blog Application with Vuex and Localization

This project is a blog application built using Nuxt.js framework with Vuex for state management and localization support for multiple languages using nuxt/i18n.

---

## Features

- View a list of blog posts
- Read individual blog posts
- Add new blog posts
- Manage state using Vuex
- Support localization for at least two languages

---

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/amosman02/nuxt-blog.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nuxt-blog
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and navigate to http://localhost:3000 to view the application.

---

## Vuex Store

The Vuex store manages the state of the application, including blog posts and localization settings.

`plugins/vuex.js`: Contains the Vuex store configuration, mutations, actions, and initial state.

---

## Localization

The application supports localization for multiple languages using the nuxt-i18n module.

Configuration for localization settings can be found in `nuxt.config.js`.

Language files are stored in the `locales` directory.

---

## Pages

`pages/index.vue`: The homepage which have a brief about the website and latest blogs.

`pages/blogs/index.vue`: Displays a list of all blog posts.

`pages/blogs/[slug].vue`: Displays an individual blog post based on the slug in the URL.

`pages/about.vue`: About page providing information about the project or the team.

`pages/contact.vue`: Contact page providing contact information or a contact form.

---

## Styling

The application uses Tailwind CSS for styling.

---

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.
