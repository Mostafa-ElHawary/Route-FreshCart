import{a as B,b as g,c as O,d as _,e as A,f as b,h as D,i as H,j as T,n as $}from"./chunk-L43IJ3GV.js";import{b as k,c as E,d as N}from"./chunk-MNRBEKP3.js";import{f as F}from"./chunk-FYGAENKV.js";import{a as f}from"./chunk-RQSOTOV7.js";import{u as w}from"./chunk-EI5NMXFY.js";import{Bb as u,Gb as p,Hb as m,Ib as S,Ob as C,Qa as r,T as x,Wb as o,Xb as n,Z as d,aa as v,hb as y,pb as l,qb as i,rb as c,zb as I}from"./chunk-U6TSNRMP.js";import"./chunk-CWTPBX7D.js";var j=(()=>{let e=class e{constructor(){this._HttpClient=d(w),this.myHeaders={token:`${localStorage.getItem("userToken")}`}}checkOut(t,a){return this._HttpClient.post(`${f.baseUrl}/api/v1/orders/checkout-session/${t}?url=${f.url}`,{shippingAddress:a},{headers:this.myHeaders})}getOrders(){return this._HttpClient.get(`${f.baseUrl}/api/v1/orders/user/${localStorage.getItem("userId")}`)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var Z=(()=>{let e=class e{constructor(){this._ActivatedRoute=d(F),this._OrderService=d(j),this._translate=d(k),this.cartId="",this.orderForm=new A({details:new b("",[g.required]),city:new b("",[g.required]),phone:new b("",[g.required])})}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:t=>{this.cartId=t.get("id"),console.log("cartId ",this.cartId)},error:t=>{console.log("Error ngOnInit",t)}})}orderSubmit(){console.log(this.orderForm.value),this._OrderService.checkOut(this.cartId,this.orderForm.value).subscribe({next:t=>{console.log("orderSubmit res",t),t.status==="success"&&window.open(t.session.url,"_blank")},error:t=>{console.log("Error",t.error.message)}})}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=v({type:e,selectors:[["app-orders"]],standalone:!0,features:[C],decls:30,vars:25,consts:[[1,"container","mx-auto","p-4","sm:p-6","lg:p-8"],[1,"bg-white","rounded-2xl","shadow-xl","p-6","sm:p-8","transition-all","duration-300","hover:shadow-2xl"],[1,"text-2xl","sm:text-3xl","font-bold","text-gray-800","mb-6","pb-3","border-b"],[1,"space-y-4","sm:space-y-6",3,"ngSubmit","formGroup"],[1,"grid","gap-4","sm:gap-6"],[1,"space-y-2"],["for","details",1,"block","text-sm","font-semibold","text-gray-700"],["id","details","name","details","rows","3","formControlName","details",1,"w-full","px-3","py-2","text-sm","border","border-gray-300","rounded-lg","focus:ring-2","focus:ring-blue-500","focus:border-blue-500","transition-all","duration-300",3,"placeholder"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-4","sm:gap-6"],["for","city",1,"block","text-sm","font-semibold","text-gray-700"],["type","text","id","city","name","city","formControlName","city",1,"w-full","px-3","py-2","text-sm","border","border-gray-300","rounded-lg","focus:ring-2","focus:ring-blue-500","focus:border-blue-500","transition-all","duration-300",3,"placeholder"],["for","phone",1,"block","text-sm","font-semibold","text-gray-700"],["type","tel","id","phone","name","phone","formControlName","phone",1,"w-full","px-3","py-2","text-sm","border","border-gray-300","rounded-lg","focus:ring-2","focus:ring-blue-500","focus:border-blue-500","transition-all","duration-300",3,"placeholder"],[1,"flex","justify-end","mt-6","sm:mt-8"],["type","submit",1,"px-6","py-2","sm:px-8","sm:py-3","bg-blue-600","text-white","text-sm","sm:text-base","font-semibold","rounded-lg","hover:bg-blue-700","focus:outline-none","focus:ring-2","focus:ring-blue-500","focus:ring-offset-2","transition-all","duration-300","transform","hover:scale-105"]],template:function(a,h){a&1&&(l(0,"section",0)(1,"div",1)(2,"h2",2),p(3),o(4,"translate"),i(),l(5,"form",3),I("ngSubmit",function(){return h.orderSubmit()}),l(6,"div",4)(7,"div",5)(8,"label",6),p(9),o(10,"translate"),i(),c(11,"textarea",7),o(12,"translate"),i(),l(13,"div",8)(14,"div",5)(15,"label",9),p(16),o(17,"translate"),i(),c(18,"input",10),o(19,"translate"),i(),l(20,"div",5)(21,"label",11),p(22),o(23,"translate"),i(),c(24,"input",12),o(25,"translate"),i()()(),l(26,"div",13)(27,"button",14),p(28),o(29,"translate"),i()()()()()),a&2&&(r(3),m(n(4,9,"order.Shipping Details")),r(2),y("formGroup",h.orderForm),r(4),m(n(10,11,"order.Address Details")),r(2),u("placeholder",n(12,13,"order.Address Details")),r(5),m(n(17,15,"order.City")),r(2),u("placeholder",n(19,17,"order.City")),r(4),m(n(23,19,"order.Phone Number")),r(2),u("placeholder",n(25,21,"order.Phone Number")),r(4),S(" ",n(29,23,"order.Proceed to Checkout")," "))},dependencies:[$,D,B,O,_,H,T,N,E]});let s=e;return s})();export{Z as OrdersComponent};
