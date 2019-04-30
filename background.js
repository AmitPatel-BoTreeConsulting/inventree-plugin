debugger;
chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostContains: 'developer.chrome.com' },
      }),
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostContains: '.amazon.com' },
      }),
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostContains: '.flipkart.com' },
      }),
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostContains: '.bewakoof.com' },
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
    
  });
});