/***********************************************************************************************
TEMPLATE
************************************************************************************************

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

// URL: 

************************************************************************************************
PREP
***********************************************************************************************

PARAMETERS - A string containing a URL of varying structures

RESULTS - Just the domain name

EXAMPLE - http://codewars.com would return "codewars"

PSEUDOCODE - 

Remove the suffix (http://www.)

Remove the end (after .ext/anything)

Return domain

************************************************************************************************
MY ANSWER
***********************************************************************************************/

function domainName(url){
    let result = ""
    
    if (url.includes("www")) {
      let smaller = url.split("."); // ["http://www", "google", "com"]  
      result = smaller[1];
    } else if (url.includes("http")) {
      let smaller = url.split("//") // ["http:", "google.com"]
      let domain = smaller[1].split(".")
      result = domain[0];
    } else {
      result = url.split(".")[0]
    }
    
    return result;
  }

/***********************************************************************************************
BEST ANSWER
************************************************************************************************

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

************************************************************************************************
WHAT I LEARNED
************************************************************************************************

I had not practiced with .replace() yet and have looked it up on MDN and added to my Anki deck.

The best solution and mine are in constant time, which is both great.

*/