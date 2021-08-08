function seriesLoadScripts(t,i,e){if("object"!=typeof t)var t=[t];var o=document.getElementsByTagName("head").item(0)||document.documentElement,s=new Array,n=t.length-1,c=function(a){s[a]=document.createElement("script"),s[a].setAttribute("type","text/javascript"),s[a].onload=s[a].onreadystatechange=function(){this.onload=this.onreadystatechange=null,this.parentNode.removeChild(this),a!=n?c(a+1):"function"==typeof i&&i()},s[a].onerror=function(){"function"==typeof e&&e()},s[a].setAttribute("src",t[a]),o.appendChild(s[a])};c(0)}function EventManger(){var t={};this.subscribe=function(i,e){void 0===t[i]&&(t[i]=[]),t[i].push({context:this,callback:e})},this.unsubscribe=function(i){return void 0!==t[i]&&(t[i]=[]),this},this.publish=function(i){if(void 0===t[i])return!1;for(var e=Array.prototype.slice.call(arguments,1),o=0,s=t[i].length;o<s;o++){var n=t[i][o];n.callback.apply(n.context,e)}}}var DEBUG=!0;$.ajaxSettings.beforeSend=function(t){"_PAGE"in window&&window._PAGE.zp_token&&t.setRequestHeader("zp_token",window._PAGE.zp_token)};var zpToken=function(){function t(){function t(t){try{window._PAGE.zp_token=t}catch(t){}}function o(t){try{cookie.add("zp_token",t,1,"/",".zhipin.com")}catch(t){}}function s(t,i){n.reject(),++b>g||(m&&e(5e3),"httpError"===t&&0==i.status||r(t,i))}try{cookie.add("zp_token","",1,"/",".zhipin.com")}catch(t){}var n=$.Deferred(),c="/wapi/zppassport/get/zpToken?v="+(new Date).getTime();return $.get({url:c,beforeSend:function(t){t.setRequestHeader("traceId",p())},success:function(c){if(0===c.code&&c.zpData&&c.zpData.token)t(c.zpData.token),o(c.zpData.token),u=i(),e(),b=0,n.resolve();else switch(c.code){case 7:case 1011:n.reject(),b=0,r("logout",c);break;default:s("tokenError",c)}},error:function(t){s("httpError",t)}}),f=n,n.promise()}function i(){return(new Date).getTime()}function e(i){i=i||v,h&&clearTimeout(h),h=setTimeout(function(){t()},i)}function o(){t().done(function(){l("success")}).fail(function(){l("error")}),c()}function s(){var t=$.Deferred();return f&&"pending"===f.state()?f.then(t.resolve,t.resolve):t.resolve(),t.promise()}function n(){return h&&clearTimeout(h),b=0,t()}function c(){function t(t,i,e){t.addEventListener?t.addEventListener(i,e,!1):t.attachEvent?t.attachEvent("on"+i,e):t["on"+i]=e}t(window,"online",function(){n(),m=!0}),t(window,"offline",function(){m=!1})}function a(){if(0!==u){var t=i();if(t>=u+v+1e3)n(),r("checkInvalid","");else{e(u+v-t)}}}function r(t,i){try{var e=u?new Date(u).Format("yyyy-MM-dd hh:mm:ss.S"):"null";_T.sendTracking("refresh_zpToken_error_boss_"+t+"_"+window._PAGE.uid+"_"+e+"_"+m+"_"+JSON.stringify(i))}catch(t){}}function l(t){try{_T.sendTracking("init_zpToken_boss_"+t+"_"+window._PAGE.uid+"_"+m)}catch(t){}}function d(){return{lastUpdateTime:u}}function p(t,i){var e,o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),s=[];if(i=i||o.length,t)for(e=0;e<t;e++)s[e]=o[0|Math.random()*i];else{var n;for(s[8]=s[13]=s[18]=s[23]="-",s[14]="4",e=0;e<36;e++)s[e]||(n=0|16*Math.random(),s[e]=o[19==e?3&n|8:n])}return s.join("")}var h=null,u=0,f=null,m=!0,v=24e4,g=10,b=0;return o(),{init:o,checkInitialized:s,update:n,checkValid:a,getUpdateInfo:d}}();!function(t,i,e){"use strict";var o=(t(i),t(document),!1),s=function(i){if("string"==typeof i)var i={content:i};this.settings=t.extend({},s.defaults,i),this.init()};s.defaults={content:"提示",lock:!1,wrapClass:null,type:null,position:"top",parentWrap:"body",time:2300,pending:""},s.prototype={init:function(){this.create(),this.settings.lock&&this.lock()},create:function(){var i="",e="",o=this;this.settings.type&&(i='<i class="icon-toast-'+this.settings.type+'"></i>'),e='<div data-pending="'+this.settings.pending+'" id="toast"><div class="toast-con">'+i+this.settings.content+"</div></div>",t("#toast").length&&t("#toast").remove(),this.toast=t(e).appendTo(this.settings.parentWrap),this.settings.wrapClass&&this.toast.addClass(this.settings.wrapClass),this.settings.position&&this.position(),this.time(),this.toast.on("click",function(){o.close()})},position:function(){"top"==this.settings.position&&this.toast.css("top",0),"center"==this.settings.position&&this.toast.css("bottom",0),"bottom"==this.settings.position&&this.toast.css("bottom",0)},lock:function(){o||(t("html,body").css("overflow","hidden"),o=!0)},unLock:function(){this.settings.lock&&o&&(t("html,body").css("overflow","visible"),o=!1)},close:function(){var t=this;t.toast.addClass("slideup"),setTimeout(function(){t.toast.removeClass("slideup").remove()},500),t.unLock()},time:function(){var t=this;this.settings.time&&"loading"!=this.settings.type&&(this.closeTimer=setTimeout(function(){t.close()},this.settings.time))}},t.toast=function(t){new s(t)}}(jQuery,window);var mediator=window.mediator||new EventManger,uploadAvatar=function(){var t={cWidth:350,cHeight:350,cR:175,show:function(i){this.opts=i,t.uploadEl=i.element,this.inited?this.html.find(".left-count").html("每月可修改"+this.opts.totalCount+"次，您本月还剩"+this.opts.leftCount+"次机会"):(this.bindFileInput(i.defaultAvatarHtml),this.inited=!0,this.selected=!1),i.title&&this.html.find(".hd span").text(i.title),1==this.opts.type?KZ.pageLock.show(1e3,".avatar_layer_html5",".avatar_layer_html5 .close"):KZ.pageLock.show(1e3,".avatar_layer_new",".avatar_layer_new .icon-close")},hide:function(){1==this.opts.type?this.html.find(".close").click():this.html.find(".icon-close").click()},bindFileInput:function(i){var e=this;this.html||(1==this.opts.type?this.html=i||$('<div class="avatar_layer guide_layer avatar_layer_html5">                                                    <div class="hd"><i class="close"></i></div>                                                    <div class="main">                                                        <div class="selectpic">                                                            <div class="sbox">                                                                <a class="btns" href="#">上传头像</a>                                                                <input type="file" class="selectfile">                                                                <p>支持jpg、png、jpeg、bmp格式，小于10M</p>                                                                <p class="left-count">每月可修改'+this.opts.totalCount+"次，您本月还剩"+this.opts.leftCount+'次机会</p>                                                            </div>                                                            <div class="default-avatar">                                                                <p>默认头像<span>（上传真实头像，更能赢得牛人信任）</span></p>                                                                <div class="avatar-con">                                                                    <div class="img-box"><div class="pop"></div><img src="https://img.bosszhipin.com/boss/avatar/avatar_1.png" data-id="1"></div>                                                                    <div class="img-box"><div class="pop"></div><img src="https://img.bosszhipin.com/boss/avatar/avatar_2.png" data-id="2"></div>                                                                    <div class="img-box"><div class="pop"></div><img src="https://img.bosszhipin.com/boss/avatar/avatar_3.png" data-id="3"></div>                                                                    <div class="img-box"><div class="pop"></div><img src="https://img.bosszhipin.com/boss/avatar/avatar_4.png" data-id="4"></div>                                                                    <div class="img-box"><div class="pop"></div><img src="https://img.bosszhipin.com/boss/avatar/avatar_5.png" data-id="5"></div>                                                                    <div class="img-box"><div class="pop"></div><img src="https://img.bosszhipin.com/boss/avatar/avatar_6.png" data-id="6"></div>                                                                    <div class="img-box"><div class="pop"></div><img src="https://img.bosszhipin.com/boss/avatar/avatar_7.png" data-id="7"></div>                                                                    <div class="img-box"><div class="pop"></div><img src="https://img.bosszhipin.com/boss/avatar/avatar_8.png" data-id="8"></div>                                                                </div>                                                            </div>                                                            <div class="editbox">                                                                <canvas></canvas>                                                                <div class="pop"><i></i></div>                                                            </div>                                                        </div>                                                        <div class="layer_btns">                                                            <span class="change">更换图片<input type="file" class="selectfile"></span>                                                            <a class="sure" href="javascript:;" ka="avatar_layer_html5_button_sure">确 定</a>                                                        </div>                                                    </div>                                                </div>'):this.html=i||$('<div class="avatar_layer_new"><div class="hd">                                                    <i class="icon-close"></i>                                                </div>                                                <div class="main">                                                    <div class="selectpic">                                                        <div class="sbox">                                                            <div class="top">                                                                <div class="fl">                                                                    <div class="title">上传头像示范</div>                                                                    <p class="tip">上传本人正装头像，更快通过审核</p>                                                                </div>                                                                <div class="fr">                                                                    <div class="img-box"></div>                                                                </div>                                                            </div>                                                            <div class="center">                                                                <div class="title">不佳示范</div>                                                                <p class="tip">不当的头像可能导致审核失败，影响您的招聘</p>                                                                <div class="img-container">                                                                    <div class="img-box">                                                                        <p>非本人</p>                                                                    </div>                                                                    <div class="img-box">                                                                        <p>非正装</p>                                                                    </div>                                                                    <div class="img-box">                                                                        <p>五官遮挡</p>                                                                    </div>                                                                    <div class="img-box">                                                                        <p>模糊不清</p>                                                                    </div>                                                                </div>                                                            </div>                                                            <div class="bottom">                                                                <div class="upd-box">                                                                    <button class="btn">上传头像</button>                                                                    <input type="file" class="selectfile">                                                                </div>                                                                <p>支持jpg、png、jpeg、bmp格式，小于10M</p>                                                                <p class="left-count">每月可修改'+this.opts.totalCount+"次，您本月还剩"+this.opts.leftCount+'次机会</p>                                                            </div>                                                    </div>                                                    <div class="editbox">                                                        <canvas></canvas>                                                        <div class="pop"><i></i>                                                    </div>                                                </div>                                            </div>                                            <div class="layer_btns">                                                <span class="change-btn">更换图片<input type="file" class="selectfile" ka="change_upload_realme_picture'+this.opts.source+'"></span>                                                <a class="sure"  href="#" ka="change_upload_realme_picture'+this.opts.source+'">确 定</a>                                            </div></div></div>'),this.html.appendTo("body"),1==this.opts.type?(e.html.find(".img-box").on("click",function(){$(this).addClass("img-checked").siblings().removeClass("img-checked")}),this.html.find(".sure").on("click",function(i){if(e.selected)"function"==typeof e.opts.callback&&t.getCropData(e.opts.callback),e.hide(),e.clear(),i.preventDefault();else{if(!e.html.find(".img-checked").length)return alert("请选择图片"),!1;$.ajax({url:"/wapi/zpuser/wap/avatar/editDefault.json",type:"post",data:{headImg:e.html.find(".img-checked img").attr("data-id")},dataType:"json",success:function(o){var s=e.html.find(".img-checked img").attr("src");if(0===o.code){var n=$(".avatar_box .avatar img");n.attr("src",s),n.closest("dd").find("input:hidden[name=tiny]").val(s),n.closest("dd").find("input:hidden[name=large]").val(s),e.hide(),e.clear(),i.preventDefault(),t.uploadEl&&t.uploadEl.find(".tip-text").remove(),"function"==typeof e.opts.sysImgCallback&&e.opts.sysImgCallback(s)}else alert("图片保存失败")}})}})):this.html.find(".sure").on("click",function(i){if(!e.selected)return alert("请选择图片"),!1;"function"==typeof e.opts.callback&&t.getCropData(e.opts.callback),e.hide(),e.clear(),i.preventDefault()}),this.html.find(".cancel").bind("click",function(t){e.clear(),t.preventDefault()})),this.html.find(".selectfile").click(function(t){try{_T.sendEvent("change_renew_realme_picture_click_"+e.opts.source)}catch(t){}}),this.html.find(".selectfile,.layer_btns .selectfile").change(function(e){if(e.target.files.length){i&&t.uploadEl&&t.uploadEl.find(".tip-text").remove();var o=e.target.files[0];if(!/image\/\w+/.test(o.type))return alert("请确保文件为图像类型"),!1;if(window.FileReader){var s=new FileReader;s.onloadstart=function(t){},s.onloadend=function(i){var e=new Image;e.onload=function(){t.resetImg(e)},e.src=i.target.result},s.readAsDataURL(o)}}})},clear:function(){this.editbox&&(this.html.find(".selectfile").val(""),this.editbox.css({backgroundImage:"none"}).hide(),this.html.find(".selectpic").find(".sbox").show(),this.msk.clearRect(0,0,this.cWidth,this.cHeight),this.html.find(".layer_btns .change").hide(),2==this.opts.type&&$(".layer_btns").hide())},resetImg:function(i){this.selected=!0;var e=this,o=this.html.find(".selectpic").find(".sbox").hide().end().find(".editbox").show();1==this.opts.type?this.html.find(".layer_btns .change").css("display","inline-block"):this.html.find(".layer_btns").show(),this.editbox=o;var s=this.compress(i,1);this.img=s,o.css({backgroundImage:"url("+s+")"}),this.circle={x:this.cWidth/2,y:this.cHeight/2,r:75},this.popbox=o.find(".pop"),this.pop=o.find(".pop i"),this.popbox.css({left:this.circle.x-this.circle.r,top:this.circle.y-this.circle.r,width:2*this.circle.r,height:2*this.circle.r});e.html.find(".selectpic .editbox .pop .move-icon").length&&e.html.find(".selectpic .editbox .pop .move-icon").remove(),e.html.find(".selectpic .editbox .pop").append('<div class="move-icon"></div>'),e.html.find(".selectpic .editbox .pop .move-icon").hide();e.html.find(".selectpic .editbox .pop i .scale-icon").length&&e.html.find(".selectpic .editbox .pop i .scale-icon").remove(),e.html.find(".selectpic .editbox .pop i").append('<div class="scale-icon"></div>'),e.html.find(".selectpic .editbox .pop i .scale-icon").hide(),this.popbox.bind("mousedown",function(i){var o={x:t.circle.x,y:t.circle.y,r:t.circle.r},s={x:i.clientX,y:i.clientY,left:$(this).position().left,top:$(this).position().top};e.html.bind("mousemove",function(i){var e=i.clientX-s.x,n=i.clientY-s.y;t.circle.x=o.x+e,t.circle.y=o.y+n,t.popbox.css({left:t.circle.x-t.circle.r,top:t.circle.y-t.circle.r,width:2*t.circle.r,height:2*t.circle.r}),t.draw(t.circle)}),e.html.bind("mouseup",function(i){t.circle.x-t.circle.r<0&&(t.circle.x=t.circle.r),t.circle.x+t.circle.r>e.cWidth&&(t.circle.x=e.cWidth-t.circle.r),t.circle.y-t.circle.r<0&&(t.circle.y=t.circle.r),t.circle.y+t.circle.r>e.cHeight&&(t.circle.y=e.cHeight-t.circle.r),t.popbox.css({left:t.circle.x-t.circle.r,top:t.circle.y-t.circle.r,width:2*t.circle.r,height:2*t.circle.r}),t.draw(t.circle),e.html.unbind("mousemove mouseup")}),e.html.find(".selectpic .editbox .pop .move-icon").show()}),this.popbox.bind("mouseover",function(t){e.html.find(".selectpic .editbox .pop .move-icon").show()}),this.popbox.bind("mouseleave",function(t){e.html.find(".selectpic .editbox .pop .move-icon").hide()}),this.pop.bind("mouseenter",function(){return e.html.find(".selectpic .editbox .pop .move-icon").hide(),e.html.find(".selectpic .editbox .pop .scale-icon").show(),!1}),this.pop.bind("mouseleave",function(){return e.html.find(".selectpic .editbox .pop .scale-icon").hide(),e.html.find(".selectpic .editbox .pop .move-icon").hide(),!1}),this.pop.bind("mousedown",function(i){var o={x:t.circle.x,y:t.circle.y,r:t.circle.r},s={x:i.clientX,y:i.clientY,left:$(this).position().left,top:$(this).position().top};e.html.bind("mousemove",function(i){var n=i.clientX-s.x,c=i.clientY-s.y,a=Math.max(n,c);t.circle.r=o.r+a,t.popbox.css({left:t.circle.x-t.circle.r,top:t.circle.y-t.circle.r,width:2*t.circle.r,height:2*t.circle.r}),t.draw(t.circle),e.html.find(".selectpic .editbox .pop .scale-icon").show(),e.html.find(".selectpic .editbox .pop .move-icon").hide()}),e.html.bind("mouseup",function(){t.circle.r<75&&(t.circle.r=75),t.circle.r>e.cR&&(t.circle.r=e.cR),t.circle.x-t.circle.r<0&&(t.circle.x=t.circle.r),t.circle.x+t.circle.r>e.cWidth&&(t.circle.x=e.cWidth-t.circle.r),t.circle.y-t.circle.r<0&&(t.circle.y=t.circle.r),t.circle.y+t.circle.r>e.cHeight&&(t.circle.y=e.cHeight-t.circle.r),t.popbox.css({left:t.circle.x-t.circle.r,top:t.circle.y-t.circle.r,width:2*t.circle.r,height:2*t.circle.r}),t.draw(t.circle),e.html.unbind("mousemove mouseup"),e.html.find(".selectpic .editbox .pop .scale-icon").hide(),e.html.find(".selectpic .editbox .pop .move-icon").css({left:t.circle.r-15,top:t.circle.r-15})}),i.preventDefault(),i.stopPropagation(),i.stopImmediatePropagation()}),this.mask=this.html.find(".selectpic canvas").get(0),this.msk=this.mask.getContext("2d"),this.mask.width=this.cWidth,this.mask.height=this.cHeight,this.draw(this.circle)},draw:function(t){var i=this.msk;i.clearRect(0,0,this.cWidth,this.cHeight),i.globalCompositeOperation="source-over",i.beginPath(),i.fillStyle="#000000",i.rect(0,0,this.cWidth,this.cHeight),i.globalAlpha=.6,i.fill(),i.closePath(),i.globalCompositeOperation="destination-out",i.beginPath(),i.fillStyle="",i.arc(t.x,t.y,t.r,0,2*Math.PI,!1),i.fill(),i.closePath()},getCropData:function(t){var i=this.circle,e=new Image;e.crossOrigin="Anonymous",e.onload=function(){var o=document.createElement("canvas");o.width=2*i.r,o.height=2*i.r;var s=o.getContext("2d");s.clearRect(0,0,o.width,o.height),s.fillStyle="#fff",s.fillRect(0,0,o.width,o.height),s.drawImage(e,-1*(i.x-i.r),-1*(i.y-i.r));var n=o.toDataURL("image/jpeg",1);t(n)},e.src=this.img},compress:function(t,i){var e=this.cWidth,o=this.cHeight;t.width>t.height?(imageWidth=e,imageHeight=Math.round(o*(t.height/t.width))):t.width<t.height?(imageHeight=o,imageWidth=Math.round(e*(t.width/t.height))):(imageWidth=e,imageHeight=o),i=imageWidth/t.width;var s=document.createElement("canvas");s.width=e,s.height=o;var n=s.getContext("2d");return n.clearRect(0,0,s.width,s.height),imageWidth<s.width?n.drawImage(t,(s.width-imageWidth)/2,0,imageWidth,imageHeight):n.drawImage(t,0,(s.height-imageHeight)/2,imageWidth,imageHeight),s.toDataURL("image/png",i)}};return KZ={form:{Prompt:function(t,i){var e=$('<div class="kz_tishi" style="position:absolute;z-index:9999;"/>').html(t);0==$(".kz_tishi").length&&(e.appendTo("body").delay(1500).fadeOut(500,function(){$(this).remove()}),e.css({left:1==i?($(window).width()-e.outerWidth())/2:0,top:1==i?($(window).height()-e.outerHeight())/2:0,width:1==i?"auto":"100%",position:"fixed"}))}},pageLock:{show:function(t,i,e,o,s){var n;if(n=$(".guide").length?$(window.document):$(window.parent.document),0==n.find(i.selector).length){n.width(),$(i).outerWidth(),$(window).height(),$(i).outerHeight()}else{n.width(),n.find(i.selector).outerWidth(),$(window).height(),n.find(i.selector).outerHeight()}if(!n.find("#lockpage").length>0){$("<div id='lockpage'/>").css({position:"fixed",zIndex:t||20,left:0,top:0,width:"100%",height:"100%",background:"#000",opacity:.8}).appendTo(n.find("body"))}n.find("#lockpage").css("height",$(document).height()+"px"),0==n.find(i.selector).length?($(i).appendTo(n.find("body")),n.find(i).css({position:"fixed",zIndex:t+1,left:"50%",top:"50%",marginLeft:"-"+$(i).outerWidth()/2+"px",marginTop:"-"+$(i).outerHeight()/2+"px",display:"block"})):n.find(i.selector).css({position:"fixed",zIndex:t+1,left:"50%",top:"50%",marginLeft:"-"+$(i.selector).outerWidth()/2+"px",marginTop:"-"+$(i.selector).outerHeight()/2+"px",display:"block"}),KZ.pageLock.hide(e,i,s),"function"==typeof o&&o()},hide:function(t,i,e){var o;o=$(".guide").length?$(window.document):$(window.parent.document),o.find(t).click(function(t){void 0===e&&o.find(i).appendTo("body"),$(i).hide(),o.find("#lockpage").remove(),t.preventDefault()})},runHide:function(t){var i;i=$(".guide").length?$(window.document):$(window.parent.document),i.find(t.selector).length>0?setTimeout(function(){i.find(t).remove()},100):i.find(t).hide(),i.find("#lockpage").remove()},runRemove:function(t){var i;i=$(".guide").length?$(window.document):$(window.parent.document),i.find(t).appendTo("body"),$(t).hide(),i.find("#lockpage").remove()}}},{init:function(i){try{_T.sendEvent("change_renew_realme_picture_"+i.source)}catch(t){}$.get("/wapi/zpuser/wap/avatar/leftCount.json").done(function(e){if(0!=e.code||!e.zpData)return void $.toast({type:"error",content:e.message||"系统服务错误，请刷新页面再试"});var o=e.zpData.totalCount||0,s=e.zpData.leftCount||0;if(0===s)return void $.toast({content:"您本月"+o+"次头像修改机会已用完",type:"warning"});t.show({type:i.type,source:i.source,leftCount:s,totalCount:o,callback:function(t){for(var e=t.split(","),o=e[0].match(/:(.*?);/)[1],s=atob(e[1]),n=s.length,c=new Uint8Array(n);n--;)c[n]=s.charCodeAt(n);var a=new FormData;if(a.append("source",i.source),a.append("multipartType",1),window.ActiveXObject||"ActiveXObject"in window){var r=uploadAvatar.convertBase64UrlToBlob(t);console.log("blob: ",r),a.append("file",r)}else{var l=new File([c],"234",{type:o});console.log("file: ",l),a.append("file",l)}console.log("fromData: ",a),a&&$.post({url:"/wapi/zpupload/image/uploadSingle",data:a,processData:!1,contentType:!1,success:function(t){if(0===t.code){try{_T.sendEvent("change_renew_realme_picture_confirm_"+i.source)}catch(t){}uploadAvatar.postImageUrlToRd(t.zpData,i)}else $.toast({type:"error",content:t.message||"上传图片失败，请稍后再试"})},error:function(t){$.toast({type:"error",content:t.message||"上传图片失败，请稍后再试"})}})},sysImgCallback:function(t){var e=$(window.parent.document),o=e.length?e:$(document);o.find(".side-menu .figure img").attr("src",t),o.find(".top-user .dropdown-logout img").attr("src",t),$(".avatar_box").find("input[name=tiny], input[name=large]").val(t),o.find(".top-user .menu-user-figure").attr("src",t),window.top.mediator.publish("UPDATE_AVATAR",t),i.sysImgCallback&&i.sysImgCallback(t)}})}).fail(function(){$.toast({type:"error",content:"系统服务错误，请刷新页面再试"})})},postImageUrlToRd:function(t,i){var e=t.tinyUrl,o=t.url;$.ajax({url:"/wapi/zpuser/wap/avatar/edit.json",type:"post",data:{tinyAvatar:e,largeAvatar:o,agentSource:4},dataType:"json",success:function(s){if(0===s.code){var n=$(window.parent.document),c=n.length?n:$(document);c.find(".side-menu .figure img").attr("src",e),c.find(".top-user .dropdown-logout img").attr("src",e),$(".avatar_box").find("input[name=tiny], input[name=large]").val(o),c.find(".top-user .menu-user-figure").attr("src",e),window.top.mediator.publish("UPDATE_AVATAR",o),$.toast({type:"success",content:"上传自定义图片成功"}),i.successCallback&&i.successCallback(t)}else 100002===s.code?$.toast({type:"info",content:"头像修改已提交审核，审核通过后将更新您的信息"}):$.toast({type:"error",content:s.message||"自定义上传图片失败，请稍后再试"})},error:function(t){$.toast({type:"error",content:t.message||"自定义上传图片失败，请稍后再试"})}})},convertBase64UrlToBlob:function(t){console.log("base64: ",t);for(var i=t.split(",")[0].match(/:(.*?);/)[1],e=window.atob(t.split(",")[1]),o=new ArrayBuffer(e.length),s=new Uint8Array(o),n=0;n<e.length;n++)s[n]=e.charCodeAt(n);return new Blob([o],{type:i})}}}();