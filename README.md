# WhatsAppImageDownload
Download Whats App media images of Chat all in One Go.

#Follow the Following Steps Carefully to download WhatsApp Media Images in One go.

1. Open and Login to whatsapp web
2. Press F12 in your chrome browser and go to sources tab
3. click the ">>" icon and select snippets option and the new snippet.
4. Copy and past the code in snippet
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
            
5. Now open any chat and scroll up to load all media URL's to be fetched 
** Imp if the images are not loaded the wont be downloaded as Blob wont be created. So it is very important to load the images by scrolling 

6. Now right click on the snippet and click run
7. All the images will be downloaded with the senders name and stored in download directory.
