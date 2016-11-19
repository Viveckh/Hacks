/*
* FB Automatic FanPage Inviter
* Author: Vivek Pandey (EJ/ Vake) (www.viveckh.com)
* Description: This script will automatically send invites to like your page on facebook to those people who've liked a certain post on your facebook page.
*               It will have to be manually put in until the list hits the bottom, since consecutive button presses obstructs 'See More' from expanding continuosly
* Procedures:
    1) Go to your Facebook Page in admin mode, find any post with huge number of likes and open the list of people who liked the post.
    2) On your browser menu, navigate to Developer Tools. Path should be something like Tools>Developer tools/options
    3) In the developer tool window that comes up, go to Console.
    4) Paste the following script and hit enter.
*/

//**********************************************************************************
//This part automatically clicks on the "See More" link to expand the list of people
//*********************************************************************************
var aTags = document.getElementsByTagName("a");
var searchText = "See More";

var countExpansionButtonsOnDisplay = 0;    // Counter to maintain a count of all 'See More' buttons on the page

for (var i = 0; i < aTags.length; i++) {
    if ((aTags[i].textContent === searchText) && (aTags[i].className === "pam uiBoxLightblue uiMorePagerPrimary")) {

        //There is one extra unncessary See More being clicked somewhere which has same properties
        aTags[i].click();
        console.log("See More expanded");
        countExpansionButtonsOnDisplay++;
    }
}

//****************************************************
//Deciding whether to continue or break the loop
//****************************************************
console.log(countExpansionButtonsOnDisplay);
if (countExpansionButtonsOnDisplay < 2) {
    console.log("No invites to send");
}

//**************************************************************************************
//This part will automatically click on the invite buttons that are visible at the moment
//**************************************************************************************

//get all the invite buttons
var inviteButtons = document.getElementsByClassName("_42ft _4jy0 _4jy3 _517h _51sy");
console.log("total buttons: " + inviteButtons.length);

//filter only the unclicked invite buttons
var unclickedInviteButtons = Array.prototype.filter.call(inviteButtons, function(element) {
        return element.getAttribute("disabled") != 1;
});
console.log("unclicked buttons: " + unclickedInviteButtons.length);

Array.prototype.forEach.call(unclickedInviteButtons, function(button) {
    // Click the invite button here
    button.click();
    console.log("An invite has been sent");

});