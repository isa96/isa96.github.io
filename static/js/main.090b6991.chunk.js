(this["webpackJsonpizzansilmiaziz.github.io"]=this["webpackJsonpizzansilmiaziz.github.io"]||[]).push([[0],{27:function(e,t,a){e.exports=a(50)},32:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/money.549ccf31.png"},34:function(e,t,a){e.exports=a.p+"static/media/Google.38d369e8.png"},35:function(e,t,a){e.exports=a.p+"static/media/mask.5536f5bd.png"},38:function(e,t,a){e.exports=a.p+"static/media/ws.1a4d4e96.png"},39:function(e,t,a){e.exports=a.p+"static/media/save.e1770bd1.png"},40:function(e,t,a){e.exports=a.p+"static/media/dome.b7a4bcf7.png"},41:function(e,t,a){e.exports=a.p+"static/media/doctor.18c7be41.png"},42:function(e,t,a){e.exports=a.p+"static/media/scala.88768ebf.png"},43:function(e,t,a){e.exports=a.p+"static/media/gp.7fd85796.png"},44:function(e,t,a){e.exports=a.p+"static/media/cosmetic.dabc23cf.png"},45:function(e,t,a){e.exports=a.p+"static/media/cats.0b4742bb.png"},46:function(e,t,a){e.exports=a.p+"static/media/credit_card.02be168e.png"},47:function(e,t,a){e.exports=a.p+"static/media/netflix.17cd2472.png"},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a.n(i),o=(a(32),a(6)),s=a(7),c=a(9),m=a(8),p=a(19),d=a.n(p),u=a(20),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.linkedin,t=this.props.data.github,a=this.props.data.firstname,n=this.props.data.lastname,i=this.props.data.description;return r.a.createElement("header",{id:"home"},r.a.createElement(u.a,{type:"circle",bg:!0}),r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("div",null,r.a.createElement("h1",{className:"responsive-headline"},r.a.createElement("span",null,r.a.createElement("span",{style:{color:"#11abb0"}},a)," ",r.a.createElement("span",{style:{color:"lightgray"}},n))),r.a.createElement("h3",null,r.a.createElement("span",{style:{padding:5}},r.a.createElement("span",{style:{padding:5}},r.a.createElement("em",null,i)),r.a.createElement("br",null))),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"button btn project-btn"},r.a.createElement("i",{className:"fa fa-linkedin"}),"LinkedIn"),r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"button btn github-btn"},r.a.createElement("i",{className:"fa fa-github"}),"Github"))))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component),g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.className,style:{color:"white"}})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("span",{style:{fontSize:"40px",color:"white",fontWeight:"800",margin:"30px 0px",display:"inline-block",fontVariant:"small-caps"}},"Looking to Hire?"),r.a.createElement("h5",{style:{color:"#d3d3d3",fontWeight:"0px",maxWidth:500,margin:"auto"}},"Looking for a freelance developer? Looking to hire a full time position? Please reach out below!"),r.a.createElement("hr",{style:{maxWidth:"100px",borderWidth:"2px",borderColor:"#11ABB0",margin:"auto",marginTop:"50px",marginBottom:"50px",background:"#11ABB0"}}),r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",{style:{color:"white"}},"Copyright \xa9"," "+(new Date).getFullYear()))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.firstname+" "+this.props.data.lastname,t="images/"+this.props.data.image,a=this.props.data.bio,n=this.props.data.email;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:t,alt:"Izzan Silmi Aziz Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e),r.a.createElement("br",null),r.a.createElement("span",null,n)))))))}}]),a}(n.Component),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree," ",r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.graduated)),r.a.createElement("p",null,e.description,r.a.createElement("br",null),r.a.createElement("a",{href:"https://eprints.umm.ac.id/76117/",target:"_blank",rel:"noopener noreferrer"},e.description2)))})),a=this.props.data.patens.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree," ",r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.released)),r.a.createElement("p",null,r.a.createElement("a",{href:"https://eprints.umm.ac.id/36730/",target:"_blank",rel:"noopener noreferrer"},e.description)))})),n=this.props.data.work.map((function(e){return r.a.createElement("div",{key:e.company},r.a.createElement("h3",null,e.company),r.a.createElement("div",null,r.a.createElement("p",{className:"info"},e.title,r.a.createElement("span",null,"|")," ",r.a.createElement("em",{className:"date"},e.years))),r.a.createElement("p",{className:"info"},e.project,r.a.createElement("span",null,"|")," ",r.a.createElement("em",{className:"date"},e.years1),r.a.createElement("br",null),"\u2022 ",e.description,"  ",r.a.createElement("br",null),"\u2022 ",e.description2," ",r.a.createElement("br",null),"\u2022 ",e.description3," ",r.a.createElement("br",null),"\u2022 ",e.description4," ",r.a.createElement("br",null),"\u2022 ",e.description5," ",r.a.createElement("br",null),"\u2022 ",r.a.createElement("u",null,"Leveraged knowledge")," in ",e.description6),r.a.createElement("p",{className:"info"},e.project2,r.a.createElement("span",null,"|")," ",r.a.createElement("em",{className:"date"},e.years2),r.a.createElement("br",null),"\u2022 ",e.description7,"  ",r.a.createElement("br",null),"\u2022 ",e.description8," ",r.a.createElement("br",null),"\u2022 ",e.description9," ",r.a.createElement("br",null),"\u2022 ",e.description10," ",r.a.createElement("br",null),"\u2022 ",e.description11," ",r.a.createElement("br",null),"\u2022 ",r.a.createElement("u",null,"Leveraged knowledge")," in ",e.description12))}));return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Skills"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null,e),r.a.createElement("table",{style:{width:"100%",borderWidth:"thick"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left",minWidth:"120px"}},r.a.createElement("b",null,"Languages")),r.a.createElement("td",{colSpan:"3"},"Python, Javascript, PHP, C++, HTML, C, Java, SQL, MongoDB, CSS, Go, R")),r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left",minWidth:"120px"}},r.a.createElement("b",null,"Frameworks")),r.a.createElement("td",{colSpan:"3"},"VueJS, NodeJS, Jest, CodeIgniter, TensorFlow, Keras, PyTorch, Scikit-learn, Matplotlib, Pandas, Scipy, OpenCV, PySide6, Numpy, Mito, Pandas Profiling, Seaborn, Bokeh, Plotly")),r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left",minWidth:"120px"}},r.a.createElement("b",null,"Utilities")),r.a.createElement("td",{colSpan:"3"},"Git, AWS, Docker, Heroku, GCP, Arduino, STM32, KeilUvision, EagleEDA, MLFlow, Netlify, Google Colaboratory, Apache Superset, Google Data Studio, PowerBi, Tableau")),r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left",minWidth:"120px"}},r.a.createElement("b",null,"Coursework")),r.a.createElement("td",{colSpan:"3"},"Electronics, Electonic Circuit Design, Microcontroller, Digital Circuit Design, Control System, Analog Circuit Design, Statistics and Probability, Digital Signal Processing, Database, Computer Vision, Embedded System, Artificial Intelligence, Data Mining, Robotics")))))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"nine columns main-col"},n)),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"AWARDS"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null,e),r.a.createElement("table",{style:{width:"100%",borderWidth:"thick"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left",minWidth:"120px"}},r.a.createElement("b",null,"2022")),r.a.createElement("td",{colSpan:"3"},r.a.createElement("a",{href:"https://drive.google.com/file/d/10Q4C10FmBqBmMQD5QQjxVRJHHhK4Kmte/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"Cloud Digital Leader Course Certifications"))),r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left",minWidth:"120px"}},r.a.createElement("b",null,"2021")),r.a.createElement("td",{colSpan:"3"},r.a.createElement("a",{href:"https://drive.google.com/file/d/1yBnJ-TC0BypgC3UI-GpXJNaFFr_N1ZMl/view",target:"_blank",rel:"noopener noreferrer"},"Data Engineer Course Certifications"))),r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left",minWidth:"120px"}},r.a.createElement("b",null,"2019")),r.a.createElement("td",{colSpan:"3"},r.a.createElement("a",{href:"https://drive.google.com/file/d/1Eg2OdKjrrQ0dz7WpGYjBUMpek_fuUJ7U/view",target:"_blank",rel:"noopener noreferrer"},"1st Winner Kontes Robot Pemadam Api Indonesia"))),r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left",minWidth:"120px"}},r.a.createElement("b",null,"2016")),r.a.createElement("td",{colSpan:"3"},r.a.createElement("a",{href:"https://drive.google.com/file/d/10BYgj4fW-jDt5N6-FZg_R8BMzpkaIpIg/view",target:"_blank",rel:"noopener noreferrer"},"3rd Winner Embedded System Dan Piranti Cerdas"))))))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Patens"))),r.a.createElement("div",{className:"nine columns main-col"},a)),r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},t)))))}}]),a}(n.Component),b=[{title:"Glassdoor Analysis",category:"Created a web application that will estimate data scientist salaries to help data scientists better understand what salary they will receive during the COVID-19 pandemic.",image:a(33),url:"https://github.com/isa96/Glassdoor_Analysis"},{title:"Google Play Store Analysis",category:"Create a web application that will analyze what applications are often downloaded by users on the Google Play Store.",image:a(34),url:"https://github.com/isa96/Google_Play_Store_Dash"},{title:"Face Mask Detection",category:"Developed a prototype project that aims to identify someone wearing a mask or not when visiting a place.",image:a(35),url:"https://github.com/isa96/Project4"}],v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Check out my 3 spotlight projects"),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-thirds s-bgrid-thirds cf"},b.map((function(e){return r.a.createElement("div",{key:e.title,className:"columns portfolio-item"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",title:e.title},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("img",{alt:e.title,src:e.image,style:{objectFit:"cover",width:"100%",height:"300px"}}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.title),r.a.createElement("p",null,e.category))))))}))))))}}]),a}(n.Component),y=a(21),w=a(24),k=a(64),N=a(66),x=a(22),j=[{title:"Zhafran",category:"Developed a prototype of a wheeled soccer robot which will later become Indonesia's representative in the 2050 World Cup.",image:a(38),url:"https://www.Itube.com/watch?v=ItzuHgerkvY",className:"fa fa-youtube-play"},{title:"SAVE",category:"Created a prototype of a vest that aims to help mountain climbers when lost and hypothermic.",image:a(39),url:"https://www.Itube.com/watch?v=P-VWoNQZOIE",className:"fa fa-youtube-play"},{title:"DOME",category:"Developed a prototype of a fire fighting robot which can later be projected as a robot that helps firefighters extinguish fires and evacuate victims.",image:a(40),url:"https://www.Itube.com/watch?v=FAATEKN3NZc",className:"fa fa-youtube-play"},{title:"Medical No Show Data Analysis",category:"The goal of this project is to investigate a dataset of appoinment records for Brasil public hospitals. The data includes some attributes of patients and state if the patients showed up to appointments. The analysis should be focused on finding trends influencing patients to show or not show up to appointments. Using descriptive statistics the following question should be answered: What factors are important for us to know in order to predict if a patient will show up for their scheduled appointment? Predictive analytics is out of scope of this project.",image:a(41),url:"https://github.com/isa96/Project8",className:"fa fa-github"},{title:"The GitHub History Of The Scala Language",category:"Open source projects contain entire development histories, such as who made changes, the changes themselves, and code reviews. In this project, I'll be challenged to read in, clean up, and visualize the real-world project repository of Scala that spans data from a version control system (Git) as well as a project hosting site (GitHub). With almost 30,000 commits and a history spanning over ten years, Scala is a mature language. I will find out who has had the most influence on its development and who are the experts.",image:a(42),url:"https://github.com/isa96/Project22",className:"fa fa-github"},{title:"The Android App Market On Google Play",category:"Mobile apps are everywhere. They are easy to create and can be lucrative. Because of these two factors, more and more apps are being developed. In this project, I will do a comprehensive analysis of the Android app market by comparing over ten thousand apps in Google Play across different categories. I'll look for insights in the data to devise strategies to drive growth and retention. The data for this project was scraped from the Google Play website. While there are many popular datasets for Apple App Store, there aren't many for Google Play apps, which is partially due to the increased difficulty in scraping the latter as compared to the former. The data files are as follows:apps.csv : contains all the details of the apps on Google Play. These are the features that describe an app. user_reviews.csv: contains 100 reviews for each app, most helpful first. The text in each review has been pre-processed, passed through a sentiment analyzer engine and tagged with its sentiment score.",image:a(43),url:"https://github.com/isa96/Project21",className:"fa fa-github"},{title:"Comparing Cosmetics by Ingredients",category:"Buying new cosmetic products is difficult. It can even be scary for those who have sensitive skin and are prone to skin trouble. The information needed to alleviate this problem is on the back of each product, but it's tought to interpret those ingredient lists unless I have a background in chemistry. Instead of buying and hoping for the best, we can use data science to help us predict which products may be good fits for us. In this Project, I am going to create a content-based recommendation system where the 'content' will be the chemical components of cosmetics. Specifically, I will process ingredient lists for 1472 cosmetics on Sephora via word embedding, then visualize ingredient similarity using a machine learning method called t-SNE and an interactive visualization library called Bokeh.",image:a(44),url:"https://github.com/isa96/Project20",className:"fa fa-github"},{title:"Mobile Games AB Testing with Cookie Cats",category:"Cookie Cats is a hugely popular mobile puzzle game developed by Tactile Entertainment. It's a classic connect three style puzzle game where the player must connect tiles of the same color in order to clear the board and win the level. It also features singing cats. We're not kidding! As players progress through the game they will encounter gates that force them to wait some time before they can progress or make an in-app purchase. In this project, we will analyze the result of an A/B test where the first gate in Cookie Cats was moved from level 30 to level 40. In particular, we will analyze the impact on player retention. To complete this project, I should be comfortable working with pandas DataFrames and with using the pandas plot method. I should also have some understanding of hypothesis testing and bootstrap analysis.",image:a(45),url:"https://github.com/isa96/Project19",className:"fa fa-github"},{title:"Predicting Credit Card Approvals",category:"Commercial banks receive a lot of applications for credit cards. Many of them get rejected for many reasons, like high loan balances, low income levels, or too many inquiries on an individual's credit report, for example. Manually analyzing these applications is mundane, error-prone, and time-consuming (and time is money!). Luckily, this task can be automated with the power of machine learning and pretty much every commercial bank does so nowadays. In this project, I will build an automatic credit card approval predictor using machine learning techniques, just like the real banks do. The dataset used in this project is the Credit Card Approval dataset from the UCI Machine Learning Repository.",image:a(46),url:"https://github.com/isa96/Project18",className:"fa fa-github"},{title:"Netflix Movies and Guest Stars in The Office",category:"In this project, I\u2019ll apply the skills I learned in Introduction to Python and Intermediate Python to solve a real-world data science problem. I\u2019ll press watch next episode to discover if Netflix\u2019s movies are getting shorter over time and which guest stars appear in the most popular episode of The Office, using everything from lists and loops to pandas and matplotlib. I\u2019ll also gain experience in an essential data science skill \u2014 exploratory data analysis. This will allow me to perform critical tasks such as manipulating raw data and drawing conclusions from plots I create of the data. ",image:a(47),url:"https://github.com/isa96/Project17",className:"fa fa-github"}];function C(){var e=Object(y.a)(['\n                display: flex;\n                justify-content: center;\n                padding-top: 50px;\n                span {\n                  height: 20px;\n                  width: 20px;\n                  margin: 0 3px;\n                  display: flex;\n                  align-items: center;\n                  justify-content: center;\n                  cursor: pointer;\n                }\n                span::before {\n                  content: "";\n                  height: 13px;\n                  width: 13px;\n                  background-color: #d4d4d4;\n                  border-radius: 50%;\n                  transition: background-color 0.3s ease;\n                }\n                span:hover::before {\n                  background-color: #11abb0;\n                }\n                span[data-image="','"]::before {\n                  background-color: #11abb0;\n                }\n              ']);return C=function(){return e},e}var S=Object(k.a)((function(e){return{rightArrow:{cursor:"pointer",position:"absolute",align:"left"},leftArrow:{cursor:"pointer",position:"absolute"},testimonialSmall:{"@media (min-width: 960px)":{display:"None"}},testimonialLarge:{"@media (max-width: 959px)":{display:"None"}},picture:{width:"400px",height:"250px","@media (max-width: 480px)":{width:"150px",height:"150px"},justify:"left",borderRadius:"10%"},header:{fontFamily:"Nunito Sans",fontSize:"22px","@media (max-width: 480px)":{fontSize:"15px"},textTransform:"uppercase",fontWeight:"bolder",textAlign:"center",paddingLeft:"30px",paddingRight:"30px",paddingBottom:"60px"},carousal:{alignItems:"center",paddingTop:"4%",paddingBottom:"8%",backgroundColor:"white"},paragraph:{margin:"auto",fontFamily:"Nunito",fontSize:"20px","@media (max-width: 480px)":{fontSize:"15px"},paddingLeft:"40px",paddingRight:"40px",fontStyle:"italic",color:"#484848"},title:{fontSize:"22px","@media (max-width: 480px)":{fontSize:"18px",paddingLeft:"20px",paddingRight:"20px"},fontFamily:"Nunito",fontWeight:"bold",color:"#484848"},image:{width:"100%",height:"100%",padding:"2%",borderRadius:"10%","@media (min-width: 960px)":{textAlign:"center"}}}}));var A,I=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).HandleRightArrowClick=function(e){n.state.active<n.state.numQuotes-1?n.setState({current:j[parseInt(n.state.active)+1],active:parseInt(n.state.active)+1}):n.state.active===n.state.numQuotes-1&&n.setState({current:j[0],active:0}),n.timer()},n.HandleLeftArrowClick=function(e){n.state.active>0?n.setState({current:j[n.state.active-1],active:n.state.active-1}):0===n.state.active&&n.setState({current:j[n.state.numQuotes-1],active:n.state.numQuotes-1}),n.timer()},n.HandleSetClick=function(e){n.setState({active:e.target.getAttribute("data-image"),current:j[e.target.getAttribute("data-image")]}),n.timer()},n.state={current:j[0],active:0,numQuotes:j.length},n}return Object(s.a)(a,[{key:"timer",value:function(){var e=this;clearInterval(this.interval),this.interval=setInterval((function(){return e.HandleRightArrowClick()}),8e3)}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.HandleRightArrowClick()}),8e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(x.a,{onSwipedRight:this.HandleLeftArrowClick,onSwipedLeft:this.HandleRightArrowClick},r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:t.carousal},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",{style:{width:"98vw",textAlign:"center"}},"Check out some of my other projects")),r.a.createElement(N.a,{container:!0,item:!0,alignItems:"center",justify:"center",id:"projects"},r.a.createElement(N.a,{container:!0,item:!0,xs:1,spacing:1,alignItems:"center",justify:"center"},r.a.createElement("img",{className:t.leftArrow,src:"images/arrow_left.png",onClick:this.HandleLeftArrowClick,alt:"Testimonial Left Arrow"})),r.a.createElement(N.a,{container:!0,item:!0,xs:9,sm:9,md:4,lg:3,spacing:1,alignItems:"center",justify:"center"},r.a.createElement("p",{className:t.picture},r.a.createElement("img",{className:t.image,src:this.state.current.image,alt:this.state.current.title}))),r.a.createElement(N.a,{container:!0,item:!0,xs:1,spacing:1,alignItems:"center",justify:"center",className:t.testimonialSmall},r.a.createElement("img",{className:t.rightArrow,src:"images/arrow_right.png",onClick:this.HandleRightArrowClick,alt:"Testimonial Right Arrow"})),r.a.createElement(N.a,{container:!0,item:!0,xs:12,sm:9,md:6,lg:5,spacing:1,justify:"center"},r.a.createElement("p",{className:t.title},this.state.current.title),r.a.createElement("a",{href:this.state.current.url,target:"_blank",rel:"noopener noreferrer",style:{paddingLeft:"10px"}},r.a.createElement("i",{className:this.state.current.className,style:{color:"black"}})),r.a.createElement("p",{className:t.paragraph},this.state.current.category)),r.a.createElement(N.a,{container:!0,item:!0,xs:1,spacing:1,alignItems:"center",justify:"center",className:t.testimonialLarge},r.a.createElement("img",{className:t.rightArrow,src:"images/arrow_right.png",onClick:this.HandleRightArrowClick,alt:"Testimonial Right Arrow"}))),r.a.createElement("div",{className:Object(w.a)(C(),this.state.active)},Object.keys(j).map((function(t){return r.a.createElement("span",{onClick:e.HandleSetClick,"data-image":t,key:t})}))))))}}]),a}(n.Component);A=I;var O=I=function(e){var t=S();return r.a.createElement(A,Object.assign({},e,{classes:t}))},P=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={foo:"bar",resumeData:{}},n}return Object(s.a)(a,[{key:"getResumeData",value:function(){d.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{data:this.state.resumeData.main}),r.a.createElement(f,{data:this.state.resumeData.main}),r.a.createElement(E,{data:this.state.resumeData.resume}),r.a.createElement(v,null),r.a.createElement(O,null),r.a.createElement(g,{data:this.state.resumeData.main}))}}]),a}(n.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(P,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");D?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):W(e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.090b6991.chunk.js.map