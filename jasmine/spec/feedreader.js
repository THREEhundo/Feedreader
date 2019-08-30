/* Placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. I want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* RSS Feeds */
  describe('RSS Feeds', () => {
    /* are defined */
    it('are defined', () => {
      expect(allFeeds).toBeDefined();
      // Checking to see that allFeeds exists.
      expect(allFeeds.length).not.toBe(0);
      // Checking to see that allFeeds isn't empty
    });
    /* URL defined */
    it('URL defined', () => {
      allFeeds.forEach(feed => {
        // loops through array using forEach
        expect(feed.url).toBeDefined()
          // Check to see if URL exists.
          &&
          expect(feed.url.length).not.toBe(0)
        // Check to see if URL isn't empty.
      })
    })
    /* name defined */
    it('name defined', () => {
      allFeeds.forEach(feed => {
        expect(feed.name).toBeTruthy()
          // Check to see if name exists.
        // Check to see if name isn't empty.
      })
    })
  });
  /* The Menu */
  describe('The menu', () => {
    /* default hidden menu */
    it('default hidden menu', () => {
      expect($('body').hasClass('menu-hidden')).toBe(true)
      // Checks if the menu is hidden when page is loaded
    })
    /* menu visibility */
    it('menu visibility', () => {
      $('.menu-icon-link').click()
      expect($('body').hasClass('menu-hidden')).not.toBe(true)
      // Shown on click
      $('.menu-icon-link').click()
      expect($('body').hasClass('menu-hidden')).toBe(true)
      // Hidden on click
    })
  });

  /* Initial Entries */
  describe('Initial Entries', () => {
    beforeEach((done) => loadFeed(0, done))
    /* loadFeed is an asynchronous function. There is a callback function
     * within loadFeed that allows for the completion of a test by using done.
     */

    /* completes work */
    it('completes work', () => {
      const feed = $('.feed .entry')
      expect(feed.length > 0).toBe(true)
      // Checks for at least one child in the feed.
    })
  })

  /* New Feed Selection */
  describe('New Feed Selection', () => {
    let firstFeed = {}

    beforeEach((done) => {
      loadFeed(0, () => {
        firstFeed = $('.feed').html()
        loadFeed(1, done)
      })
    })

    /* done can be only called once, so it is put into the second
     * call on loadFeed. This is so that Jasmine knows when to
     * run the spec.
     */

    /* load new feed */
    it('load new feed', () => {
      expect(firstFeed).not.toBe($('.feed').html())
      //Compares the first feed against the second
    })
  })
}());
