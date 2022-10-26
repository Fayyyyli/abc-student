
chrome.storage.sync.get(['text'], function(result) {
    console.log(result.text+"is loaded");
   
    if(result.text =="undefined"){
        document.getElementById("display").innerHTML = "";
    }else{
         document.getElementById("display").innerHTML = result.text;
    }
    document.getElementById("save").addEventListener('click', () => {
    downloadToFile(result.text, 'my-new-notes.txt', 'text/plain');
      });
});

const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});
    
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
      URL.revokeObjectURL(a.href);
  };

  document.getElementById("clean").addEventListener("click",()=>{
    chrome.runtime.sendMessage(
        {msg:"clear"}
    );
})
  //code for downloading from:
  //https://robkendal.co.uk/blog/2020-04-17-saving-text-to-client-side-file-using-vanilla-js