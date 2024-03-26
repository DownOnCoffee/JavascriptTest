 const outsideClick=(e)=> {
   var container = document.querySelector(".customDrp");
   if (!container.contains(e.target) && container.classList.contains('active')) {
      container.classList.remove("active");
      document.removeEventListener("click", outsideClick);
   }
};

document.addEventListener(function () {
   let ele=document.querySelector('.custmonDropDwon');
   ele.addEventListener("click",function(e){
      if (e.target.classList.contains("crossString") || e.target.classList.contains("bowiro")){
         return false;
      }
      if (e.target.tagName=="a"){
         return true;
      }
      e.preventDefault();
      console.log(e.target);
      if (e.target.classList.contains('language') || e.target.parentElement.classList.contains('language')){
         languageFunc();
      }
      if (window.matchMedia('(max-width: 1170px)').matches){     
         document.body.style.overflow='hidden';
      }
      if (e.target.classList.contains("searchCoinDrp")){
         document.getElementById('tokensearch1').focus();    
      }

      let nextElementSibling=ele.nextElementSibling;
      if (nextElementSibling){
         nextElementSibling.classList.add("active");
      }else{
         ele.children[0].classList.add("active");
      }
      e.stopPropagation();
      document.addEventListener("click",outsideClick);
   });
});

   let basic_banner_read_btn = false;
   let bannerBtn=document.querySelector(".basic_banner_read_btn");
   str.addEventListener("click",function(){
      let textBanner=document.querySelector('.basic_banner_text');
      if (!basic_banner_read_btn ) {
         bannerBtn.textContent="Read Less";
         textBanner.style.display="block";
         basic_banner_read_btn = true;

      }
      else{
         textBanner.style.display="none";
         bannerBtn.textContent="Read More";
         basic_banner_read_btn = false;
      }
      
   });

   let filterBtn=document.querySelector(".filterToggelBtn");
   filterBtn.addEventListener("click",function(){
      document.querySelector(".filterToggel").classList.toggle("active");

   });

   let customDrop=document.querySelector(".hideCustomDrp");
   customDrop.addEventListener("click",function(){
      document.querySelector(".customDrp").classList.remove("active");
   })

   let closingIcon=document.querySelector(".closeIcon");
   closingIcon.addEventListener('click',function(){
      document.querySelector(".customPopup").classList.remove("active");
      document.querySelector(".commonPopup").classList.remove("active");
      if (!document.querySelector('.headerMain').classList.contains('active')){
         document.body.style.overflow = 'auto';
      }
   });

   let mainTableBtn=document.querySelector(".mainTable");
   mainTableBtn.addEventListener("scroll",function(e){
      let isScroll = e.currentTarget.scrollLeft;
      if (isScroll){
         document.querySelectorAll(".ListingTable th:nth-child(3), td:nth-child(3)").classList.add("before");
      }
      else{
         document.querySelectorAll(".ListingTable th:nth-child(3), td:nth-child(3)").classList.remove("before");
      }

   });

   

