const re = new RegExp(' (.+) to 888222');
var latest_tweet;

// let example_tweet = "AND THERE'S THE FIRST GOAL‼️ YOU KNOW WHAT THAT MEANS 👇 Text STRIKE007 to 888222 for a FREE entrée from Chipotle. 5,000 codes avail. 50 US & DC, 13+. Stnrd text and data rates may apply.  Terms:";

function getTweets() {
    console.log("Checking...");

    let tweet = document.getElementsByClassName("tweet-text")[0].innerHTML;

    if (tweet != latest_tweet) {
        console.log("New tweet:", tweet);
        const found = tweet.match(re);
        if (found && found.length > 1) {
            let code = found[1];
            console.log("Code found:", code);
            window.open('https://chipotlecodes.netlify.app/?c=' + code, '_blank');
        }
    }

    latest_tweet = tweet;

    setTimeout(getTweets, 5000);
}

getTweets();