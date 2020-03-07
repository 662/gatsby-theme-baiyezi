# gatsby-theme-baiyezi

## Description

Based on Gatsby's blog theme and added netlify-cms for rapid blog generation and online writing.

### Dependencies (optional)

- [gatsby-theme-baiyezi-core](https://github.com/662/gatsby-theme-baiyezi/tree/master/packages/gatsby-theme-baiyezi-core)
- gatsby-plugin-react-helmet

## How to install

### For a new site

If you're creating a new site and want to use the blog theme, you can use the blog theme starter. This will generate a new site that pre-configures use of the blog theme.

```shell
gatsby new my-baiyezi-blog https://github.com/662/gatsby-starter-baiyezi
```

### For an existing site

1. Install the theme

```shell
npm install gatsby-theme-baiyezi
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-baiyezi`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
}
```

3. Add blog posts to your site by creating `md` files inside `/content/posts`.

4. Run your site using `gatsby develop` and navigate to your blog posts. If you used the above configuration, your URL will be `http://localhost:8000/blog`

## Usage

### Theme options

| Key        | Default value | Description                 |
| ---------- | ------------- | --------------------------- |
| `basePath` | `/`           | Root url for all blog posts |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-baiyezi`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
}
```

### Blog Post Fields

The following are the defined blog post fields based on the node interface in the schema

| Field    | Type             |
| -------- | ---------------- |
| id       | String           |
| title    | String           |
| body     | String           |
| slug     | String           |
| date     | Date             |
| tags     | String[]         |
| category | String           |
| excerpt  | String           |
| draft    | Boolean          |
| type     | 'post' \| 'page' |
