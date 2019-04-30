document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction(){
  chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    var new_url = 'http://inventree-botree.herokuapp.com/products/new?product_url=' + tablink;
    console.log(new_url);    
    chrome.tabs.create({url: new_url});
});
}