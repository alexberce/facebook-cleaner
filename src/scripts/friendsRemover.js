(function(){
    var ownerProfileId = ''; //SET THIS TO YOUR PROFILE ID
    var wrapperId = '[id^="pagelet_timeline_app_collection_' + ownerProfileId + '"]';
    var profileIdRegex = /.+\?id=(\d+).+/g;

    var friendsBoxesWrapper = document.querySelector(wrapperId);
    var friendsBoxesLists = friendsBoxesWrapper.getElementsByTagName('ul');

    for (var i = 0; i < friendsBoxesLists.length; i++) {
        var friendsBoxes = friendsBoxesLists[i].getElementsByTagName('li');

        for (var j = 0; j < friendsBoxes.length; j++) {
            var profileLink = friendsBoxes[j].getElementsByTagName('a')[0];
            var profileHoverCard = profileLink.getAttribute('data-hovercard');

            var matches, profileId;
            while ((matches = profileIdRegex.exec(profileHoverCard)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (matches.index === profileIdRegex.lastIndex) {
                    profileIdRegex.lastIndex++;
                }

                profileId = matches[1] || null;
            }

            if (profileId) {
                var deleteLink = document.createElement('a');
                deleteLink.className = 'itemAnchor';
                deleteLink.setAttribute('role', 'menuitem');
                deleteLink.setAttribute('tabindex', '-1');
                deleteLink.setAttribute('ajaxify', '/ajax/profile/removefriendconfirm.php?uid=' + profileId + '&unref=bd_friends_tab&floc=friends_tab');
                deleteLink.setAttribute('href', '#');
                deleteLink.setAttribute('rel', 'async-post');
                deleteLink.innerHTML = '<span class="itemLabel fsm">Unfriend</span>';

                document.getElementById('globalContainer').appendChild(deleteLink);
                deleteLink.click();
            }
        }
    }
})();