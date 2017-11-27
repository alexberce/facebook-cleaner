(function () {
    var groupIdRegex = /{"id":(\d+),.*/g;
    var groupsBoxesLists = document.querySelectorAll('div._3u1._gli._uvb');

    for (var j = 0; j < groupsBoxesLists.length; j++) {
        var dataAttribute = groupsBoxesLists[j].getAttribute('data-bt');

        var matches, groupId;
        while ((matches = groupIdRegex.exec(dataAttribute)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (matches.index === groupIdRegex.lastIndex) {
                groupIdRegex.lastIndex++;
            }

            groupId = matches[1] || null;

            if (groupId) {
                var deleteLink = document.createElement('a');
                deleteLink.className = 'itemAnchor';
                deleteLink.setAttribute('role', 'menuitem');
                deleteLink.setAttribute('tabindex', '-1');
                deleteLink.setAttribute('ajaxify', '/ajax/groups/membership/leave.php?ref=graph_search_results&group_id=' + groupId);
                deleteLink.setAttribute('href', '#');
                deleteLink.setAttribute('rel', 'dialog-post');
                deleteLink.innerHTML = '<span class="itemLabel fsm">Leave Group</span>';

                document.getElementById('globalContainer').appendChild(deleteLink);
                deleteLink.click();
            }

        }
    }

    setTimeout(function(){
        setInterval(function(){
            try {
                var leaveGroupButton = document.querySelectorAll('.groupsLeaveButton.uiOverlayButton')[0];

                if (typeof leaveGroupButton !== 'undefined') {
                    leaveGroupButton.click();
                }
                else {
                    window.location.reload;
                }
            } catch (error) {

            }
        }, 2000);
    }, 5000);
})();