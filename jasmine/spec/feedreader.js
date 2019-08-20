/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* URL Defined Test:
         * Loops through each feed/index of allFeeds and
         * expects each feed/index.url to be defined.
         * Also expects each feed/index.url.length to not be
         * empty.
         */
        it('URL defined', () => {
          allFeeds.forEach( feed => {
            // loops through array using forEach
            expect(feed.url).toBeDefined()
            // Check to see if URL is defined.
            &&
            expect(feed.url.length).not.toBe(0)
            // Check to see if URL isn't empty.
          })
        })
        /* Name Defined Test:
         * Loops through each feed/index of allFeeds and
         * expects each feed/index.name to be defined.
         * Also expects each feed/index.name.length to not be
         * empty.
         */
        it('Name defined', () => {
          allFeeds.forEach( feed => {
            // loops through array using forEach
            expect(feed.name).toBeDefined()
            // Check to see if name is defined.
            &&
            expect(feed.name.length).not.toBe(0)
            // Check to see if name isn't empty.
          })
        })
    });


    /* The Menu Test Suite */
    describe('The menu', () => {
      /* Default Hidden Menu Test:
       * Check to see if the menu is hidden by default.
       */
       it('Default hidden menu', () => {
         expect($('body').hasClass('menu-hidden')).toBe(true)
       })
       /* Menu Visibility Test:
        * If the menu-hidden class on the body is toggled on
        * expect the output to be true. (Menu is HIDDEN)
        * Otherwise if toggled off expect the output to be
        * false. (Menu is VISIBLE)
        */
       it('Menu visibility', () => {
         if ($('body').hasClass('menu-hidden')) {
           expect($('body').hasClass('menu-hidden')).toBe(true)
           //hides menu (menu-hidden === true)
         } else {
           expect($('body').hasClass('menu-hidden')).toBe(false)
           //shows menu (menu-hidden === false)
         }
       })
    });


    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
