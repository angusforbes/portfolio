//*** MAKE SURE AND SWITCH THIS WHEN YOU PUT IT ON A LIVE SITE!!!

var PUBLIC_DIR = "http://localhost:8080/Portfolio/portfolio/2009/";
//var PUBLIC_DIR = "http://www.mat.ucsb.edu/~a.forbes/portfolio/2009/";


var bio = "<div style='text-align:justify;position:relative;left:1px;top:0px'> I am a graduate student in Media Arts and Technology (Visual and Spatial Arts emphasis) at UC Santa Barbara. My research interests include information visualization, augmented intelligence, artificial creativity, machine learning, and education. I am particularly interested in developing projects that utilize and visualize theories about the metaphorical nature of language and visual perception. My work experience includes programming, design, and teaching. From 1999 to 2001 I was a director of software development for Micromuse, Inc., a company that develops network management software. In 2002, I founded Synaesthetic Software, a company that develops music education software. Currently I work for the National Geospatial Digital Archive as a programmer and interface designer. As an artist, I am interested in exploring and modelling dynamic, organic multi-dimensional spaces in various mediums. I am also the drummer for Chamisa Mesa, an experimental noise-rock band. In a former life, I was a PhD student in British and American Literature at the University of Utah. <p> This portfolio was created with cross-browser compatible javascript code, using ajax to dynamically load pages. Mouseover the contents at the left to bring up submenus; mouseover the submenus to load content. The \"Current Projects\" pages are still under development. <p> angus.forbes@gmail.com </div> ";


//PHOTOS
var photo_plotterskill = new Array("Plotterskill", "studies of the micro-eco, a walk in the woods, autumn leaves", "plotterskill.html");
var photo_supergirl = new Array("Supergirl", "testifications in character, camera-shy", "supergirl.html");
var photo_warehouse = new Array("Warehouse", "testifications in character, camera-shy", "warehouse.html");
var photo_gta = new Array("Grand Theft Auto", "photo of a video game", "gta.html");
var photos = new Array("Photography", photo_plotterskill, /*photo_supergirl,*/ photo_warehouse, photo_gta);

//PROJECTS
var project_infinitetree = new Array("Catacomb", "This project changed the world", "catacomb.html");
var project_clicksandwhistles = new Array("Clicks & Whistles", "you know it", "clicksandwhistles.html");
var project_theear = new Array("The Ear", "you know it", "theear.html");
var project_selforganizingcalendar = new Array("Self-organizing Calendar", "you know it", "calendar.html");
var project_simile = new Array("Simile", "experimental metaphorical programming interface", "simile.html");
var project_attribute = new Array("Attribute Framework", "a high-level wrapper for openGL methods", "attribute.html");

var projects = new Array("Current Projects", project_infinitetree, project_clicksandwhistles, project_theear, project_selforganizingcalendar, project_attribute/*,project_simile*/);

//var future_projects = new Array("Future Projects", project_simile);

//WIDGETS
var widget_multislider = new Array("Multi Slider", "cross-browser compatable javascript object for navigating information in a small space", "multislider.html");
var widget_flyer = new Array("Flyers", "cross-browser compatable javascript object for finding random information from a large data set", "flyer.html");
var widget_scroller = new Array("Scrollers", "cross-browser compatable javascript object for scrolling through data", "scroller.html");
var widgets = new Array("Widgets", widget_multislider, widget_flyer, widget_scroller)

//EXPERIMENTS
var experiment_intersector = new Array("Intersector", "Art exploration software using constructive-area geometry", "intersector.html");
var experiment_plugin = new Array("Plugin", "A series of plugins that generate algorithmically generated art", "plugin.html");
var experiments = new Array("Experiments", experiment_intersector, experiment_plugin);


//CODE
var code_prophaus = new Array("Prophaus", "a system to navigate information via a overloaded zoomable interface", "prophaus.html");
var code_vdc = new Array("Virtual Drum Clinic", "a music education software suite to accelarate learning of musical and technical concepts applied to the drums set", "synaesthetic.html");
var code_watchpad = new Array("WatchPad", "a social networking calendar/journal hybrid, evolved from a productivity tool for project management", "watchpad.html");

var code = new Array("Code", code_vdc, code_prophaus, experiment_intersector, experiment_plugin, code_watchpad );



//WEBSITES
var web_adl = new Array("ADL", "frontend and web interface for the Alexandria Digital Library project", "adl.html");
var web_allosphere = new Array("Allosphere", "website for the Allosphere stadium to be housed in the CSNI builiding at University of California, Santa Barbara", "allosphere.html");
var web_disfarmer = new Array("Disfarmer", "website for the band Disfarmer", "disfarmer.html");
var web_chamisamesa = new Array("Chamisa Mesa", "website for the band Chamisa Mesa", "chamisamesa.html");
var web_synaesthetic = new Array("Synaesthetic Software", "website for Synaesthetic Software", "synaesthetic.html");
var websites = new Array("Websites", web_adl, web_chamisamesa, web_synaesthetic, web_allosphere, web_disfarmer);

//WRITING

var writing_hideseek = new Array("Hide & Seek", "poetry chapbook", "hideseek.html");
var writing_multiball = new Array("Multiball!", "poetry chapbook", "multiball.html");
var writing_cv = new Array("Curriculum Vitae", "", "cv.html");
var writing_phdproposal = new Array("MAT PhD Proposal", "", "phdproposal.html");
//var writing = new Array("Writing", writing_phdproposal, writing_hideseek, writing_multiball, writing_cv);
var writing = new Array("Writing", writing_cv, writing_phdproposal );


//MUSIC
var music_chamisamesa = new Array("Chamisa Mesa", "improvised avant-noise rock", "chamisamesa.html");
var music_disfarmer = new Array("Disfarmer", "indie-rock", "disfarmer.html");
var music_redsoda = new Array("Red Soda", "indie-rock", "redsoda.html");
var music_planets = new Array("The Planets", "indie-rock", "planets.html");

var music = new Array("Music", music_chamisamesa, music_disfarmer, music_planets, music_redsoda);

//VIDEO
var video_eldon = new Array("Eldon", "documentary about Eldon", "eldon.html");
var video_droplet = new Array("Droplet", "collaborative video with Carlton Bright", "droplet.html");
var video = new Array("Video", video_eldon, video_droplet);


//PEN & INK
var penandink_sketches = new Array("2004 Sketches", "documentary about Eldon", "sketches.html");
var penandink = new Array("Pen & Ink", penandink_sketches);

//COURSES
var courses_05f = new Array("Fall 2005", "", "05f.html");
var courses_06w = new Array("Winter 2006", "", "06w.html");
var courses_06s = new Array("Spring 2006", "", "06s.html");
var courses_06f = new Array("Fall 2006", "", "06f.html");
var courses_07w = new Array("Winter 2007", "", "07w.html");
var courses_07s = new Array("Spring 2007", "", "07s.html");
var courses = new Array("Coursework",
  courses_07s,
  courses_07w,
  courses_06f,
  courses_06s,
  courses_06w,
  courses_05f
  );


//var toc = new Array(code, websites, writing, courses, music, video, penandink, photos,  projects ); //writing, experiments, widgets, future_projects;
var toc = new Array(courses, music, projects ); //writing, experiments, widgets, future_projects;

var spacer = new Array("", "", "", "");

var about = new Array("about", "About", "about/about.html", "subHeaderMenu");
var blog = new Array("posts", "Posts", "blog/blog.html", "normalMenu");
var cv = new Array("curriculum vitae", "C.V.", "about/cv.html", "normalMenu");
var git = new Array("github", "", "http://github.com/angusforbes/", "linkMenu");

var academic = new Array("academic", "", "", "subHeaderMenu");
var coursework = new Array("coursework", "Coursework", "courses/courseworkUCSB.html", "normalMenu");

var teaching = new Array("teaching", "Teaching", "teaching/teaching.html", "normalMenu");

var musicStuff = new Array("music", "Music", "music/music.html", "subHeaderMenu");

var demoStuff = new Array("demos", "Demos", "demos/demos.html", "subHeaderMenu");



var projectHeader = new Array("projects", "Projects Menu", "projects/projects.html", "subHeaderMenu");
var reTelling = new Array("retelling", "reTelling", "projects/retelling/retelling.html", "normalMenu");
var dataFlow = new Array("dataflow", "Data Flow", "projects/dataflow/dataflow.html", "normalMenu");
var cellTango = new Array("cell tango", "Cell Tango", "projects/celltango/celltango.html", "normalMenu");
var gcvma = new Array("gcvma", "GCVMA", "projects/gcvma/gcvma.html", "normalMenu");
var behaviorism = new Array("behaviorism", "Behaviorism", "projects/behaviorism/behaviorism.html", "normalMenu");
var voronoi = new Array("voronoi", "Voronoi", "projects/voronoi/voronoi.html", "normalMenu");
var binpack = new Array("packing", "Bin Packing", "projects/binpack/binpack.html", "normalMenu");
var jmcvideo = new Array("jmcvideo", "JMC Bindings for Processing", "projects/jmcvideo/jmcvideo.html", "normalMenu");
var ecotone = new Array("ecotone", "Ecotone", "projects/ecotone/ecotone.html", "normalMenu");
var ngda = new Array("alexandria/ngda", "NGDA Collection Browser", "projects/ngda/ngda.html", "normalMenu");
var corpus = new Array("corpus", "Corpus Browser", "corpus.html", "normalMenu");
var tagriver = new Array("tag river", "Tag River Visualization", "projects/tagriver/tagriver.html", "normalMenu");
var coilmap = new Array("coil maps", "Coil Maps", "projects/coilmaps/coilmaps.html", "normalMenu");
var vdcpage = new Array("virtual drum clinic", "Virtual Drum Clinic", "projects/vdc/vdc.html", "normalMenu");
var watchpad = new Array("watchpad", "WatchPad", "watchpad.html", "normalMenu");
var intersector = new Array("intersector", "Intersector", "intersector.html", "normalMenu");
var igert = new Array("soi3", "Spheres of Influence/Issue Browser", "projects/igert/igert.html", "normalMenu");
var mainMenu = new Array(
  about,
  cv,
  blog,
  git,
  spacer,
  projectHeader,
  behaviorism,
  reTelling,
  dataFlow,
  cellTango,
  coilmap,
  tagriver,
  jmcvideo,
  //voronoi,
  //binpack,
  ecotone,
  igert,
  ngda,
  gcvma,
  //corpus,
  vdcpage,
  //watchpad,
  //intersector,

  spacer,

  demoStuff,

  spacer,

  musicStuff,

  spacer,

  academic,
  teaching,
  coursework,

  spacer
  );


function popmp3(song)
{
  window.open('' + song,'name','height=25,width=250');
}


var browser = new Browser();
function Browser() {

  var ua, s, i;

  this.isIE    = false;
  this.isNS    = false;
  this.version = null;

  ua = navigator.userAgent;

  s = "MSIE";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isIE = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  s = "Netscape6/";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  // Treat any other "Gecko" browser as NS 6.1.

  s = "Gecko";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = 6.1;
    return;
  }
}


var loadedobjects=""
var rootdomain="http://"+window.location.hostname

function ajaxpage(url, containerid){
  var page_request = false
  if (window.XMLHttpRequest) // if Mozilla, Safari etc
    page_request = new XMLHttpRequest()
  else if (window.ActiveXObject){ // if IE
    try {
      page_request = new ActiveXObject("Msxml2.XMLHTTP")
    }
    catch (e){
      try{
        page_request = new ActiveXObject("Microsoft.XMLHTTP")
      }
      catch (e){}
    }
  }
  else
    return false

  page_request.onreadystatechange=function(){
    loadpage(page_request, containerid)
  }
  page_request.open('GET', url, true)
  page_request.send(null)
  return true
}

function loadpage(page_request, containerid){
  if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1))
    document.getElementById(containerid).innerHTML=page_request.responseText
}

function loadobjs(){
  if (!document.getElementById)
    return
  for (i=0; i<arguments.length; i++){
    var file=arguments[i]
    var fileref=""
    if (loadedobjects.indexOf(file)==-1){ //Check to see if this object has not already been added to page before proceeding
      if (file.indexOf(".js")!=-1){ //If object is a js file
        fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", file);
      }
      else if (file.indexOf(".css")!=-1){ //If object is a css file
        fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", file);
      }
    }
    if (fileref!=""){
      document.getElementsByTagName("head").item(0).appendChild(fileref)
      loadedobjects+=file+" " //Remember this object as being already added to page
    }
  }
}


function switchSubContents(num)
{
  document.getElementById("contentDiv").innerHTML ="";
  this.subnode = toc[num];

  var curheader = document.getElementById("header_"+num);
  curheader.style.background = "gray";
  for (var i = 0; i < toc.length; i++)
  {
    if (i != num)
    {
      document.getElementById("header_"+i).style.background = 'white';
    }
  }

  //this.subnode = subnode;
  //alert("here");
  var col2 = document.getElementById("col2");

  col2.innerHTML = "";

  //var heightinc = 180 / (this.subnode.length - 2 );
  var heightinc = 180 / (this.subnode.length - 2 );

  if (browser.isIE)
  {
  //return;
  }

  for (var i = 1; i < this.subnode.length; i++)
  {
    var subcontent = this.subnode[i];

    var subheader = document.createElement("a");

    var thepage = subcontent[2];
    subheader.id = "subheader_"+(i-1);

    if (browser.isIE)
    {
      subheader.attachEvent("onmouseover", makeEventFunc2(thepage, (i-1), (this.subnode.length - 1) ) );


    }
    else
    {
      subheader.setAttribute("onmouseover", "switchPageContents('" + thepage+"', "+(i-1)+", "+(this.subnode.length - 1)+");");
    }

    //subheader.setAttribute("style", "position:absolute;text-align:left;background:transparent;top:"+(heightinc * (i-1))+"px;width:160px");
    //subheader.setAttribute("style", "position:absolute;text-align:right;background:transparent;top:"+(200 - (20 * i))+"px;width:200px");
    subheader.innerHTML += subcontent[0] + "<p>";
    //subheader.innerHTML += subcontent[1] + "<p>";

    col2.appendChild(subheader);
  }


//col2.innerHTML = subnode[0];
}

function homepage()
{
/*
  var contentDiv = document.getElementById("contentDiv");
  contentDiv.innerHTML = bio;
  */
}

function makeEventFunc2( param1, param2, param3 )
{
  return function()
  {
    //alert( "param1 = " + param1 + "\nparam2 = " + param2 );
    switchPageContents(param1, param2, param3);
  }

}


function handleMouseOut(title, page, num )
{
  if (num == currentSelectionIdx)
  {
    return;
  }
  var curheader = document.getElementById("header_"+num);
  curheader.style.color = "black";

//curheader.style.fontSize = "12px";

}

function handleMouseOver(title, page, num )
{
  if (num == currentSelectionIdx)
  {
    return;
  }
  //alert("csi = " + currentSelectionIdx);
  var curheader = document.getElementById("header_"+num);
  //curheader.style.background = "#4790be"; //gray
  curheader.style.color = "#4790be";
  //curheader.style.color = "#54A754";
  //curheader.style.fontSize = "14px";
  for (var i = 0; i < mainMenu.length; i++)
  {
    if (i != num && i != currentSelectionIdx)
    {
      var testheader = document.getElementById("header_"+i);
      // alert(testheader.style.color);
      //if (testheader.style.color != "rgb(71, 144, 190)")
      {
    //document.getElementById("header_"+i).style.color = 'black';

    }
    //document.getElementById("header_"+i).style.background = 'white';

    }
  }
}

/**
 * Method to switch to a particular page by its name.
 */
function switchToPageNamed(nameOfPage)
{
  for (var i = 0; i < mainMenu.length; i++)
  {
    if (mainMenu[i][0] == nameOfPage)
    {
      switchPageContents2(mainMenu[i][1], mainMenu[i][2],i);
    }
  }
}

var currentSelectionIdx = -1;
var selectedSize = "12px"; //18
var unselectedSize = "10px"; //13
function switchPageContents2(title, page, num )
{

  currentSelectionIdx = num;
  var curheader = document.getElementById("header_"+num);
  //curheader.style.background = "#4790be"; //gray
  curheader.style.color = "#4790be";
  // curheader.style.fontWeight = "bold"; //#4790be"; //gray
  curheader.style.fontSize = selectedSize; //#4790be"; //gray
  //curheader.style.border = "red solid 1px"; //#4790be"; //gray

  for (var i = 0; i < mainMenu.length; i++)
  {
    if (i != num)
    {
      //document.getElementById("header_"+i).style.background = 'white';
      document.getElementById("header_"+i).style.color = 'black';
      // document.getElementById("header_"+i).style.fontWeight = 'normal';
      document.getElementById("header_"+i).style.fontSize = unselectedSize;
    // document.getElementById("header_"+i).style.border = 'white solid 0px';

    }
  }

  /*
  var curheader = document.getElementById("subheader_"+num);
  curheader.style.background = "gray";
  for (var i = 0; i < lengths; i++)
  {
    if (i != num)
    {
      document.getElementById("subheader_"+i).style.background = 'white';
    }
  }

  var contentDiv = document.getElementById("contentDiv");
  */

  if (page != "")
  {


    var topic = document.getElementById("topicheader");
    topic.innerHTML = title;

    ajaxpage(page, "contentDiv");
  }
//contentDiv.innerHTML = page;
}


function switchPageContents(page, num, lengths)
{


  var curheader = document.getElementById("subheader_"+num);
  curheader.style.background = "gray";
  for (var i = 0; i < lengths; i++)
  {
    if (i != num)
    {
      document.getElementById("subheader_"+i).style.background = 'white';
    }
  }

  var contentDiv = document.getElementById("contentDiv");

  ajaxpage(page, "contentDiv");
//contentDiv.innerHTML = page;
}

function changephoto(beg, num, type)
{
  if (!type)
  {
    type = "jpg";
  }

  var big = document.getElementById("big");

  big.innerHTML = "<img src='"+beg+"/"+beg+"_"+num+"."+type+"' width='500px'  style='border:1px solid black'/>";

}

function makeMenu(pageName)
{
  var bod = document.getElementById("thebody");
  var col1 = document.getElementById("col1");

  var num = -1;

  for (var i = 0; i < mainMenu.length; i++)
  {
    var menuHeader = mainMenu[i];
    var header = document.createElement("a");

    header.className=menuHeader[3];
    header.id = "header_"+i;
    col1.appendChild(header);

    //either attach an HREF...
    if (menuHeader[3] == "linkMenu")
    {
      header.href = menuHeader[2];
    }
    else
    {
     
      if (menuHeader[2] != "")
      {



        //header.href="../../"+menuHeader[2];
        header.href=PUBLIC_DIR+menuHeader[2];
      //header.href="javascript:switchPageContents2('" + menuHeader[1]+"','"+ menuHeader[2]+"',"+i+");";
      }
    }
    //or attach an event/attribute
    if (menuHeader[2] != "")
    {

      if (browser.isIE)
      {
        header.attachEvent("onmouseover", makeEventFunc(i) );
      //header.attachEvent("onclick", makeEventFunc(i) );
      }
      else
      {
        header.setAttribute("onmouseover","handleMouseOver('" + menuHeader[1]+"','"+ menuHeader[2]+"',"+i+");");
        header.setAttribute("onmouseout","handleMouseOut('" + menuHeader[1]+"','"+ menuHeader[2]+"',"+i+");");
      //header.setAttribute("onclick","switchPageContents2('" + menuHeader[1]+"','"+ menuHeader[2]+"',"+i+");");
      }

      if (menuHeader[0] == pageName)
      {
        num = i;
      }
    }
    header.innerHTML = menuHeader[0] + "<br>";
  }

  //check to see if we should open to a particular page
  //      getQueryVariable('page');
  //      for (var i = 0; i < mainMenu.length; i++)
  //      {
  //        var menuHeader = mainMenu[i];
  //
  //        if (menuHeader[0] == openpage)
  //        {
  //          switchPageContents2(menuHeader[1],menuHeader[2],i);
  //        }
  //      }

  if (num >= 0)
  {
    setFontOfCurrentMenuSelection(num);
  }
}

function setFontOfCurrentMenuSelection(num)
{

  currentSelectionIdx = num;
  var curheader = document.getElementById("header_"+num);
  //curheader.style.background = "#4790be"; //gray
  curheader.style.color = "#4790be";
  // curheader.style.fontWeight = "bold"; //#4790be"; //gray
  curheader.style.fontSize = selectedSize; //#4790be"; //gray
  //curheader.style.border = "red solid 1px"; //#4790be"; //gray

  for (var i = 0; i < mainMenu.length; i++)
  {
    if (i != num)
    {
      //document.getElementById("header_"+i).style.background = 'white';
      document.getElementById("header_"+i).style.color = 'black';
      // document.getElementById("header_"+i).style.fontWeight = 'normal';
      document.getElementById("header_"+i).style.fontSize = unselectedSize;
    // document.getElementById("header_"+i).style.border = 'white solid 0px';

    }
  }

 
 
}
