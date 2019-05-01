//
//
//function listElContent(){
//    console.log("this worked");
//    var content = document.createElement('div');
//    content.setAttribute("id", "myDiv");
//     var thisOne = document.getElementById("thisOne");	
//    
//   // content.innerHTML = html;
//    var container = document.getElementById("myDiv");	
//    var html = '<div id="myDiv"><img class="centerPic" src="./WillemHilliard_files/ajt.jpg" /></div>';
//    container.appendTo(thisOne);
//     
//    
//   
//}

    

function contentEl(id, img_src,img_link,title, descrip){
    var html =  
            ` <li>
                    <div>

                        <div style="text-align: center">
                        <a href=${img_link} title="View A Jester's Tale">
                        <img class="centerPic" src=${img_src} alt='missing' />
                        </a>
                        </div>

                        <span class="title">
                            <a href=${img_link} title="view ${title}">${title}</a>
                        </span>

                        <span class="caption"> 
                           ${descrip}
                        </span>
                    </div>   
                </li> `;
    

    var mylist = document.getElementById(id);
    mylist.innerHTML = html;
    
    
}

function contentElImage(id, img_src, title, descrip){
    var html =  
            ` <li>
                    <div>

                        <div style="text-align: center">
                        
                        <img class="centerPic" src=${img_src} alt='missing' />
                      
                        </div>

                        <span class="title">
                            ${title}
                        </span>

                        <span class="caption"> 
                           ${descrip}
                        </span>
                    </div>   
                </li> `;
    

    var mylist = document.getElementById(id);
    mylist.innerHTML = html;
    
    
}


//
//
//function createElementFromHTML(htmlString) {
//     console.log("this worked");
//document.body.innerHTML = '<div> this rked </div>';
//    
//var div = document.body.createElement('div');
//div.innerHTML = htmlString.trim();
//
//  // Change this to div.childNodes to support multiple top-level nodes
//  return div.firstChild; 
//}
//
//createElementFromHTML('<div> this worked </div>');


//       
//function listElContent(img_src,img_link,title, descrip){
//    console.log("this worked");
//   return         
//    
//   ` <li>
//                    <div>
//
//                        <div style="text-align: center">
//                        <img class="centerPic" src="${img_src}" alt='missing' />
//                        </div>
//
//                        <span class="title">
//                            <a href="${img_link}" title="view ${title}">${title}</a>
//                        </span>
//
//                        <span class="caption"> 
//                           ${descrip}
//                        </span>
//                    </div>   
//                </li> `
