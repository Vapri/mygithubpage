"use strict";var asosnovsky=angular.module("asosnovsky",["ui.bootstrap","ui.highlight"]);asosnovsky.service("$vppathfinder",[function(){this.pathfinder=function(){var a=window.location.hash.replace(new RegExp("#/","g"),"");return""===a||"#/"===a?"views/home.html":"views/"+a+".html"},this.pathchange=function(a,b){window.location.hash=a,b.view=this.pathfinder()}}]),asosnovsky.directive("vpexpand",function(){return function(a,b,c){function d(a,c){b[0].offsetHeight<b[0].scrollHeight&&a.bind("click",function(){b.css({"max-height":b[0].scrollHeight+100}),c?(h.attr("class","fa fa-minus-circle"),g.html("Show Less ")):(f.css({background:""}),h.attr("class","")),a.bind("click",function(){b.css({"max-height":""}),c?(h.attr("class","fa fa-plus-circle"),g.html("Show More ")):(f.css({background:e.nobtn.background}),h.attr("class","fa fa-plus-circle")),d(a,c)})})}var e={nobtn:{width:"100%",height:"30px",position:"absolute",bottom:"0",cursor:"pointer","text-align":"center",background:"linear-gradient(rgba(255, 255, 255, 0), rgb(216, 216, 216))"},btn:{"font-size":"30px","text-align":"center",left:"40%",position:"absolute",bottom:"0",cursor:"pointer",border:"3px groove","border-radius":"8px",background:"rgba(237, 247, 255, 0.82)"}},f=$("<div></div>"),g=$("<span></span>"),h=$('<i class="fa fa-plus-circle"></i>'),i=a.$eval(c.vpexpand);f.css(i?e.btn:e.nobtn),/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)||i===!1?(setTimeout(function(){b[0].offsetHeight<b[0].scrollHeight&&(b.append(f),f.append(h))},1),b.bind("mouseenter",function(){d(b,i)})):(f.append(g),g.html("Show More "),f.append(h),b.bind("mouseenter",function(){(b[0].offsetHeight<b[0].scrollHeight||b.css("max-height")===b[0].scrollHeight+100+"px")&&(b.append(f),d(f,i))}),b.bind("mouseleave",function(){f.detach()}))}}),asosnovsky.controller("MainCtrl",["$scope","$modal","$vppathfinder","$rootScope","$location",function(a,b,c,d,e){a.view=c.pathfinder(),$(window).bind("hashchange",function(){a.view=c.pathfinder()}),d.$on("$locationChangeSuccess",function(){d.actualLocation=e.path()}),d.$watch(function(){return e.path()},function(b){d.actualLocation===b&&(e.path(b),c.pathchange("#"+b,a))}),a.ok=function(){c.pathchange("#/",a)},a.emailModal=function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)?c.pathchange("#/email",a):b.open({templateUrl:"views/email.html",controller:"EmailCtrl"})},a.aboutModal=function(d){/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)?c.pathchange("#/"+d,a):b.open({templateUrl:"views/"+d+".html",controller:"ModallCtrl",size:"lg"})},a.imgModal=function(d){/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)?(c.pathchange("#/img-modal",a),a.slide=d):b.open({templateUrl:"views/img-modal.html",controller:"ImgCtrl",resolve:{slide:function(){return d}}})}}]),asosnovsky.controller("EmailCtrl",["$scope","$modalInstance",function(a,b){a.ok=function(){b.close()}}]),asosnovsky.controller("ModallCtrl",["$scope","$modalInstance","$http","$sce",function(a,b,c,d){a.ok=function(){b.close()},a.tooltips={sfl:'<div class="tooltips-wrapper"><img src="http://ssdp.org/assets/sfl-logo.png"></div>',york:'<div class="tooltips-wrapper"><img src="http://www.yorku.ca/liaskos/images/sotirios.jpg"></div>',major:"",actsci:'<div class="tooltips-wrapper"><img style="width:200px" src="https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10696214_1491856511098536_1217672413771580967_n.jpg?oh=f0e7c9b21bc97a05b05b61c320945efa&oe=551AAED4&__gda__=1427625963_8ebeba705f094d96c4db31748b61d92d"></div>',stockrender:'<div class="tooltips-wrapper"><img style="width:300px" src="http://static.tumblr.com/0bf1a42dbb5c62f8d0995840b8b1e7b6/r0wa4v2/fU4nebwu8/tumblr_static_cz4g1ks1m5ckws40ks0cg00g0_2048_v2.jpg"></div>'},c.get("docs/json/courses.json").success(function(b){a.courses=b}),a.highlight=function(a,b){return d.trustAsHtml(b?a.replace(new RegExp(b,"gi"),'<span class="highlightedText">$&</span>'):a)},c.get("docs/json/tutoring.json").success(function(b){a.tutoring=b})}]),asosnovsky.controller("DocumentCtrl",["$rootScope","$scope",function(a,b){(new WOW).init(),a.$on("$routeChangeStart",function(){(new WOW).sync()}),b.documents=[{image:"docs/img/Pexam.jpg",text:"Society of Actuaries Probability Exam",link:{href:"https://www.soa.org/education/exam-req/edu-exam-p-detail.aspx",btnName:"Link to Institute"},descprition:"The Society of Actuaries Probability Exam, tests the candidates skills and knowledge in the fundamentals of probability for assessing quantitative risk, A through command of the supporting calculus is assumed. Additional, knowledge of insurance and risk management is assumed."},{image:"docs/img/placeholder.png",text:"R-Short Courses",link:{href:"http://www.isr.yorku.ca/courses/winter2014/index.html#introR",btnName:"Link to Institute"},descprition:"This short course is a step-by-step hands-on introduction to R. Participants learned how to install R on their computers; enter, import, and manipulate data; and carry out basic mathematical, statistical and graphical operations and procedures. Upon completion of this course, participants will be comfortable with, and able to do, statistical work in R. Additionally, they will become familiar with resources to seek follow-up help for learning more about R."}],b.programs=[{image:"docs/img/placeholder.png",text:"Death Clock",link:{href:"https://www.dropbox.com/sh/usc3edrknvw6loc/AAAEe6ROIyQisNv9HwlyNTRNa?dl=0",btnName:"Link to Work"},descprition:"A project I completed in one of my classes using matlab. I was asked to construct a mathematical software using matlab. I chose to create a 'Death-Clock' based on the science I learned from my Life Tables class."},{image:"docs/img/stockan.jpg",text:"Stock Analysis Tool",link:{href:"https://arisosnovsky.shinyapps.io/App04",btnName:"Link to Work"},descprition:"Out of my personal curiosity for programming and math, as well as a favour to a friend, I construct a stock-analysis tool using the statistical programming language R."},{image:"docs/img/asayuweb.jpg",text:"Actuarial Society at York Website",link:{href:"http://math.yorku.ca/asayu",btnName:"Link to Work"},descprition:"The previous website for club was outdated and irrelevant to the current members or major. I was asked to scrap the old site and make a new one, with a news-feed section and more relevant information."}],b.engages=[{image:"docs/img/Market-Failure.jpg",text:"Institute for Liberal Studies",link:{href:"https://www.liberalstudies.ca/socratic-seminars/",btnName:"Link to Institute"}},{image:"docs/img/actsci.jpg",text:"Actuarial Society at York, Director of Communication",link:{style:{display:"none"}}},{image:"docs/img/sfl.jpg",text:"Students for Liberty, Club Organizer and Founder",link:{style:{display:"none"}}},{image:"docs/img/placeholder.png",text:"Part-Time Tutor",link:{style:{display:"none"}}}]}]),asosnovsky.controller("ImgCtrl",["$scope","$modalInstance","slide",function(a,b,c){a.ok=function(){b.close()},a.slide=c}]);