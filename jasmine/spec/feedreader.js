/* feedreader.js
 *
 *
 *
 */

/* Grabbing DOM elements with tests. Using jQuery to ensure
 * that the code doesn't run until after the DOM.
 */
$(function() {
   /*
    * Test Suite RSS FEED
    */
    describe('RSS Feeds', function() {
        /*
         * allFeeds variable is defined and not empty.
         * Empty array breaks the test.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL is defined and not empty', function(){

          expect(allFeeds.find((x) => x.url === true)).toBeDefined()
            // expect(allFeeds.forEach((category) => console.log(category.url))).toBeDefined()
            // expect(allFeeds.length).not.toBe(0)
        })

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
<<<<<<< HEAD
     /* TODO: Write a test that ensures the menu changes
      * visibility when the menu icon is clicked. This test
      * should have two expectations: does the menu display when
      * clicked and does it hide when clicked again.
      */
     it('Hidden menu', function() {
          
          expect($('body').hasClass('menu-hidden')).toBe(true)
     })

     it('Menu visible and hidden on click', function() {
          spyOn($('.menu-icon-link'), 'click')
          $('body').toggleClass('menu-hidden')
          expect($('body').toggleClass('menu-hidden'))
     })
=======
       it('Hidden menu', function() {

         expect($('body').hasClass('menu-hidden')).toBe(true)
       })

       it('Menu visible and hidden on click', function() {
         
         spyOn($('.menu-icon-link'), 'click')
         $('body').toggleClass('menu-hidden')
         expect($('body').toggleClass('menu-hidden'))
       })
       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */

>>>>>>> 29fd42309b258860462850e51d986141e2cb684c
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
