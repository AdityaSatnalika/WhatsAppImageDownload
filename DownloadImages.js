if(document.getElementsByClassName('_3BqNZ').length==1)
    alert("Please Select Chat");
else
{   var images = document.getElementsByClassName("_1JVSX"); 
    var srcList = [];
    for(var i = 0; i < images.length; i++) {
        if(!(images[i].src).search("blob"))
            srcList.push(images[i].src);
    }
    if(srcList.length>0)
    {
    var link = document.createElement('a');
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var name = document.getElementsByClassName('_3XrHh')[0].childNodes[0].title;
    name = name  + " " + date;
      link.setAttribute('download', name);
      link.style.display = 'none';
      document.body.appendChild(link);
      for (var i = 0; i < srcList.length; i++) {
        link.setAttribute('href', srcList[i]);
        link.click();
      }

      document.body.removeChild(link);

    alert (" Downloading Complete")
    }
    else
      alert("No Images Found")
}