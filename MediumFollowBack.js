/*
* Medium Follow Back Clappers
* Author: (EJ) Vivek Pandey (www.viveckh.com)
* Description: This script is to automatically follow people who clapped on your article
*               It will auto expand the list of clappers iteratively and follow all of them
                Ideal only if you have a lot of clappers and manually clicking is a pain

* Run in browser console
*/

// Medium auto changes the classes in these buttons, I believe to prevent bots.
// So you'll have to update the following values manually, but then it does the rest
showMoreButtonQuery = "button.cs.ct.gy.yn.abi.abj.abk.cd.df.aw.b.ax.ay.az.ba.dg.dh.x.bl.di.cg"
followButtonQuery = "button.cs.cu.wh.zz.va.aba.abb.vc.cd.df.aw.b.ax.ay.az.ba.dg.dh.x.bl.di.cg"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function expandAllClaps() {

    //**********************************************************************************
    //This part automatically clicks on the "Show more claps" link to expand the list of people
    //*********************************************************************************

    while (true) {
        console.log("INFO: Expanding claps")
        var showMoreClapsBtn = document.querySelector(showMoreButtonQuery);
        if (showMoreClapsBtn && showMoreClapsBtn.textContent === "Show more claps") {
            showMoreClapsBtn.click();
        }
        else {
            break;
        }
        await sleep(5000)
    }
    return true;
}

expandAllClaps().then(function (data) {
    console.log("INFO: Expanded all claps");

    //**************************************************************************************
    //This part will automatically click on the follow buttons that are visible at the moment
    //**************************************************************************************

    //get all the follow buttons
    var followButtons = document.querySelectorAll(followButtonQuery);
    console.log("INFO: Total clappers: " + followButtons.length);

    //filter only the unclicked follow buttons
    var unclickedFollowButtons = Array.prototype.filter.call(followButtons, function(element) {
            return element.textContent.trim() !== "Following";
    });

    console.log("INFO: Unfollowed clappers: " + unclickedFollowButtons.length);

    Array.prototype.forEach.call(unclickedFollowButtons, function(button) {
        // Click the follow button here
        button.click();
        console.log("INFO: Followed 1 user");
    });
});
    


