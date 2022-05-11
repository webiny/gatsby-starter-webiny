<p align="center">
  <a href="https://www.webiny.com">
    <img alt="Gatsby" src="https://github.com/webiny/webiny-js/raw/next/static/webiny-logo.svg" width="250" />
  </a>
</p>
<h1 align="center">
  Gatsby starter for Webiny Headless CMS
</h1>

Kick off your project with this blog boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._


## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/webiny/gatsby-starter-webiny)


## Getting started with Webiny

1.  **Create a Webiny instance.**

	Follow the [Webiny docs](https://www.webiny.com/docs/tutorials/install-webiny) to install a Webiny project on your cloud hosting provider. Because Webiny is a distributed system we don't run it locally. This also means you don't need to worry about setting up Docker, or installing databases and drivers on your local machine for Postgres, MongoDB or similar. The cloud takes care of that for you.

	If you get stuck or have any questions, please [join the community](http://webiny-community.slack.com "Webiny slack channel") and reach out for some help.


1.  **Add content models.**

	Once you have an app up and running click into the "HeadlessCMS" app in the sidebar, click on *models* and add the following models and fields:

	### Authors

- `text` field with the value "name"
- `text` field with the value "slug" (optionally add a validator using this regex which will make sure you have valid urls: `^(?!.*--)[a-z0-9\-]+$`)
- `files` field with the value "picture"
- `text` field with the value "description"
- `text` field with the value "twitterHandle"

	### Posts

- `text` field with the value "title"
- `text` field with the value "slug" (optionally use the regex above as a validator)
- `files` field with the value "featured image"
- `rich text` field with the value "body"
- `reference` field with the value "Author"
- `text` field with the value "description"

	Next, choose **API Keys** in the sidebar. Add an API key with any name and description. Select "Headless CMS" and choose a Custom access level for all content model groups with the values `read` and `preview`. Save the API token and the token itself will be revealed.

	Copy this token and keep it somewhere private


1.  **Connect Gatsby to your Webiny install!**

    Add a new file called `.env` and add the following:
    
    ```shell
    WEBINY_API_TOKEN=<token goes here>
	WEBINY_API_URL=<your Headless CMS API (to find out run `yarn webiny info from the root of your local Webiny project`)>
    ```
    
    When you run Gatsby you should now be sourcing data from your Webiny API. Visit `http://localhost:8000/___graphql` and click on the "webiny" data source to see your content.
    
## Getting started with Gatsby

1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the blog starter.

    ```shell
    # create a new Gatsby site using the blog starter
    gatsby new gatsby-frontend-webiny https://github.com/webiny/gatsby-starter-webiny
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd gatsby-frontend-webiny/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link:_ `http://localhost:8000/___graphql`. _This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the `atsby-frontend-webiny` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

Deploy now with one click:

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/webiny/gatsby-starter-webiny)


