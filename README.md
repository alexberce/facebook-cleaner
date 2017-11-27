# Facebook Cleaner

A collection of scripts to help clean your facebook profile.

## Features

##### Remove friends

1. Navigate to `facebook.com/me/friends` and scroll down until all friends are loaded.
2. Copy the content of the script from [`/src/scripts/friendsRemover.js`](/src/scripts/friendsRemover.js).
3. Change the value of the `ownerProfileId ` variable to your facebook profile id.
4. Open browser console, paste the code and hit `ENTER`.
5. Wait for the script to finish deleting your friends.

> _No notification is displayed on completion._

##### Remove groups

1. Navigate to `facebook.com/search/me/groups` and scroll down until all groups are loaded.
2. Open browser console, paste the code from [`/src/scripts/groupsRemover.js`](/src/scripts/groupsRemover.js) and hit `ENTER`.
3. Wait for the script to finish deleting your groups.

> _The popup button will be automatically clicked every 2 seconds (5 seconds for the first one)._

> _The page will reload on completion._

## Coming soon

* Unlike photos
* Unlike posts
* Remove photos
* Remove comments
* Remove posts
* Chrome Extension

## License

Please see the [LICENSE](LICENSE.md) included in this repository for a full copy of the MIT license,
which this project is licensed under.