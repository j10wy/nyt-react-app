### Instructions

1. Connect to NYT API

2. Save data to article database

     * `*` (get) - will load your single HTML page (with ReactJS) in `client/build/index.html`. Make sure you put this after all other GET routes

   * The layout should include at least two React Components for each page `Home` and `Saved`.

     * **Home** - contains all of the JSX to be rendered on the homepage. This component may contain other smaller components or JSX that renders plain HTML elements. This component should be able to query the NYT API for articles. It displays the results from the API search in a rendered list that displays the article title, publication date, and allows the user to visit an article's url or save the article to the MongoDB.

     * **Saved** - Renders articles that are saved in the MongoDB and allows the user to visit the article's url or delete it from the MongoDB. This page may be made up of multiple smaller components or JSX that renders plain HTML elements.

* Deploy your application to Heroku once complete. Feel free to use the [Mern Example](../../01-Activities/07-Ins_Mern) as a starting point. **You must use Create React App** and current versions of React and React-Router-Dom for this assignment.

- - -

### Bonus Live Updates to Saved Articles

* Use React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an article. Your message should include the title of the saved article.
  
  * Say you have multiple browsers open, each one visiting your site. If you save an article in one browser, then all of your browsers should notify you that a new article was saved.
  
  * [Socket.io NPM package](https://www.npmjs.com/package/socket.io)

- - -

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.