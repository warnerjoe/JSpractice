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

************************************************************************************************
MY ANSWER
***********************************************************************************************/



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


*/