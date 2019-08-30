# Feed Reader Overview

This web app reads RSS feeds. This is a test suite that makes sure that the web app is
error free (RSS feed testing, RSS feed properties, menu default state, and menu hiding/showing).

# Development Strategy

1. An IIFEE is used because some of the tests require the use of DOM elements. This prevents the tests from running before the DOM is ready.
2. `RSS Feeds` has three tests that checks the `allFeeds` array of objects.
    * `are defined` checks to see if the array exists and also not empty.
    * `URL defined` calls a forEach method on `allFeeds` to check to see if URL's exist and are not empty for each object in the array.
    * `name defined` calls another forEach method on `allFeeds` to check to see if names exist and are not empty for each object in the array.
3. `The Menu` has two tests that focus on the appearance and functionality of you guessed it~ the menu.
    * `default hidden menu` checks to see if the class `menu-hidden` is toggled on the `body` when the page loads.
    * `menu visibility` uses `.click()` to simulate a mouse click two times. The first click is expected to show the menu and the subsequent click hides it again.
4. `Initial Entries` runs a single test that checks the success of `loadFeed`.
    * `loadFeed` is an asynchronous function which is being called by the beforeEach method. There is a callback function within `loadFeed` that allows for the completion of the spec by calling `done()`.
    * `completes work` checks for one or more links to be present in the `.feed`.
5. `New Feed Selection` runs a single test to confirm that the children of `.feed` aren't copies.
    * This time beforeEach has two arguments. `done()` can only be called once so it is put in the second argument.
    * `load new feed` Grabs the innerText of both the first and second child and are checked against each other to make sure that they are not copies of each other.
