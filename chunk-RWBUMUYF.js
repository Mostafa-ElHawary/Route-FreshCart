import{a as V}from"./chunk-F2HEYO64.js";import{a as z,b as v,c as A,d as q,h as N,i as D,j as G,k as R,l as B,n as j}from"./chunk-L43IJ3GV.js";import{a as I}from"./chunk-FE44ORH5.js";import"./chunk-MNRBEKP3.js";import{h as k,i as P}from"./chunk-FYGAENKV.js";import"./chunk-RQSOTOV7.js";import{h as M,j as T}from"./chunk-EI5NMXFY.js";import{Ab as w,Gb as m,Ib as b,Ob as E,Qa as r,Qb as S,Rb as L,Z as h,aa as F,fb as g,hb as c,lb as d,ma as x,pb as n,qb as o,rb as s,zb as C}from"./chunk-U6TSNRMP.js";import"./chunk-CWTPBX7D.js";var $=e=>({"border-red-500":e}),H=(e,i)=>({"bg-gray-400 cursor-not-allowed":e,"bg-indigo-600 hover:bg-indigo-700":i});function O(e,i){e&1&&(s(0,"i",29),m(1," Email is required "))}function Z(e,i){e&1&&(s(0,"i",29),m(1," Enter a valid email "))}function U(e,i){if(e&1&&(s(0,"i",29),m(1)),e&2){let a,l=w(2);r(),b(" ",(a=l.loginForm.get("email"))==null?null:a.getError("emailDomain")," ")}}function X(e,i){if(e&1&&(n(0,"p",11),g(1,O,2,0)(2,Z,2,0)(3,U,2,1),o()),e&2){let a,l=w();r(),d(1,(a=l.loginForm.get("email"))!=null&&a.hasError("required")?1:(a=l.loginForm.get("email"))!=null&&a.hasError("email")?2:(a=l.loginForm.get("email"))!=null&&a.hasError("emailDomain")?3:-1)}}function J(e,i){e&1&&(x(),n(0,"svg",30),s(1,"path",31)(2,"path",32),o())}function K(e,i){e&1&&(x(),n(0,"svg",30),s(1,"path",33)(2,"path",34),o())}function Q(e,i){e&1&&(s(0,"i",29),m(1," Password is required "))}function W(e,i){e&1&&(s(0,"i",29),m(1," Password must be at least 8 characters long "))}function Y(e,i){e&1&&(s(0,"i",29),m(1," Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&) "))}function ee(e,i){if(e&1&&(n(0,"p",11),g(1,Q,2,0)(2,W,2,0)(3,Y,2,0),o()),e&2){let a,l=w();r(),d(1,(a=l.loginForm.get("password"))!=null&&a.hasError("required")?1:(a=l.loginForm.get("password"))!=null&&a.hasError("minlength")?2:(a=l.loginForm.get("password"))!=null&&a.hasError("pattern")?3:-1)}}function te(e,i){e&1&&(x(),n(0,"svg",25),s(1,"path",35),o())}function ie(e,i){e&1&&(x(),n(0,"svg",36),s(1,"path",37),o())}function ne(e,i){if(e&1&&(n(0,"div",26),m(1),o()),e&2){let a=w();r(),b(" ",a.ErrorMsg," ")}}function oe(e,i){e&1&&(n(0,"div",27),s(1,"div",38),o())}function ae(e,i){e&1&&(n(0,"div",28),m(1," Login successful! Redirecting... "),o())}var _e=(()=>{let i=class i{constructor(){this._AuthService=h(V),this._FormBuilder=h(B),this._MytranslationService=h(I),this._Router=h(k),this.ErrorMsg="",this.isLoading=!1,this.MsgSuccess=!1,this.loginForm=this._FormBuilder.group({email:[null,[v.required,v.email,this._AuthService.emailValidator()]],password:[null,[v.required,v.minLength(8),v.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]}),this.showPassword=!1}changeLanguage(l){this._MytranslationService.changeLanguage(l)}loginSubmit(){this.loginForm.valid&&(this.isLoading=!0,console.log("loginForm",this.loginForm),this._AuthService.setLoginForm(this.loginForm.value).subscribe({next:l=>{console.log(l),l.message=="success"?(this.MsgSuccess=!0,setTimeout(()=>{localStorage.setItem("userToken",l.token),this._AuthService.saveUserData(),this._Router.navigate(["/home"])},3e3)):this.ErrorMsg="An unexpected error occurred. Please try again."}}))}togglePasswordVisibility(){this.showPassword=!this.showPassword}getPasswordFieldType(){return this.showPassword?"text":"password"}ngOnDestroy(){this.intervalId&&clearInterval(this.intervalId)}};i.\u0275fac=function(y){return new(y||i)},i.\u0275cmp=F({type:i,selectors:[["app-login"]],standalone:!0,features:[E],decls:44,vars:20,consts:[[1,"min-h-screen","flex","items-center","justify-center","bg-gradient-to-r","from-blue-500","to-indigo-600","py-12","px-4","sm:px-6","lg:px-8","animate__animated","animate__fadeIn"],[1,"max-w-md","w-full","space-y-8","bg-white","p-10","rounded-xl","shadow-2xl","animate__animated","animate__zoomIn","animate__delay-1s"],[1,"mt-6","text-center","text-3xl","font-extrabold","text-gray-900"],[1,"mt-2","text-center","text-sm","text-gray-600"],["href","#",1,"font-medium","text-indigo-600","hover:text-indigo-500"],[1,"mt-8","space-y-6",3,"ngSubmit","formGroup"],["type","hidden","name","remember","value","true"],[1,"space-y-4"],["for","email-address",1,"block","text-sm","font-medium","text-gray-700"],[1,"mt-1"],["id","email-address","name","email","type","email","formControlName","email","required","","placeholder","you@example.com",1,"appearance-none","block","w-full","px-3","py-2","border","border-gray-300","rounded-md","shadow-sm","placeholder-gray-400","focus:outline-none","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm","transition","duration-300","ease-in-out",3,"ngClass"],[1,"mt-2","text-sm","text-red-600"],["for","password",1,"block","text-sm","font-medium","text-gray-700"],[1,"mt-1","relative"],["id","password","name","password","formControlName","password","required","","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",1,"appearance-none","block","w-full","px-3","py-2","border","border-gray-300","rounded-md","shadow-sm","placeholder-gray-400","focus:outline-none","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm","transition","duration-300","ease-in-out",3,"type","ngClass"],["type","button",1,"absolute","inset-y-0","right-0","pr-3","flex","items-center","text-sm","leading-5",3,"click"],["xmlns","http://www.w3.org/2000/svg","class","h-5 w-5 text-gray-400","viewBox","0 0 20 20","fill","currentColor",4,"ngIf"],[1,"flex","items-center","justify-between"],[1,"flex","items-center"],["id","remember-me","name","remember-me","type","checkbox",1,"h-4","w-4","text-indigo-600","focus:ring-indigo-500","border-gray-300","rounded","transition","duration-300","ease-in-out"],["for","remember-me",1,"ml-2","block","text-sm","text-gray-900"],[1,"text-sm"],["routerLink","/forgot",1,"font-medium","text-indigo-600","hover:text-indigo-500","transition","duration-300","ease-in-out"],["type","submit",1,"w-full","flex","justify-center","py-2","px-4","border","border-transparent","rounded-md","shadow-sm","text-sm","font-medium","text-white","bg-indigo-600","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500","transition","duration-300","ease-in-out","transform","hover:-translate-y-1",3,"ngClass"],[1,"absolute","left-0","inset-y-0","flex","items-center","pl-3"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor","aria-hidden","true",1,"h-5","w-5","text-indigo-500","group-hover:text-indigo-400","transition","duration-300","ease-in-out","animate__animated","animate__rotateOut"],[1,"mt-4","text-center","text-sm","text-red-600","animate__animated","animate__shakeX"],[1,"mt-4","text-center"],[1,"mt-4","text-center","text-sm","text-green-600","animate__animated","animate__bounceIn"],[1,"fa-solid","fa-exclamation"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"h-5","w-5","text-gray-400"],["d","M10 12a2 2 0 100-4 2 2 0 000 4z"],["fill-rule","evenodd","d","M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clip-rule","evenodd"],["fill-rule","evenodd","d","M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z","clip-rule","evenodd"],["d","M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"],["fill-rule","evenodd","d","M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule","evenodd"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor","aria-hidden","true",1,"h-5","w-5","text-indigo-500","group-hover:text-indigo-400","transition","duration-300","ease-in-out","animate__animated","animate__rotateIn"],["d","M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"],[1,"inline-block","animate-spin","rounded-full","h-8","w-8","border-t-2","border-b-2","border-indigo-600"]],template:function(y,t){if(y&1&&(n(0,"div",0)(1,"div",1)(2,"div")(3,"h2",2),m(4," Signn in to your account "),o(),n(5,"p",3),m(6," Or "),n(7,"a",4),m(8," start your 14-day free trial "),o()()(),n(9,"form",5),C("ngSubmit",function(){return t.loginSubmit()}),s(10,"input",6),n(11,"div",7)(12,"div")(13,"label",8),m(14,"Email address"),o(),n(15,"div",9),s(16,"input",10),o(),g(17,X,4,1,"p",11),o(),n(18,"div")(19,"label",12),m(20,"Password"),o(),n(21,"div",13),s(22,"input",14),n(23,"button",15),C("click",function(){return t.togglePasswordVisibility()}),g(24,J,3,0,"svg",16)(25,K,3,0,"svg",16),o()(),g(26,ee,4,1,"p",11),o()(),n(27,"div",17)(28,"div",18),s(29,"input",19),n(30,"label",20),m(31," Remember me "),o()(),n(32,"div",21)(33,"a",22),m(34," Forgot your password? "),o()()(),n(35,"div")(36,"button",23)(37,"span",24),g(38,te,2,0,":svg:svg",25)(39,ie,2,0),o(),m(40," Sign in "),o()()(),g(41,ne,2,1,"div",26)(42,oe,2,0,"div",27)(43,ae,2,0,"div",28),o()()),y&2){let u,p,_,f;r(9),c("formGroup",t.loginForm),r(7),c("ngClass",S(13,$,((u=t.loginForm.get("email"))==null?null:u.invalid)&&(((u=t.loginForm.get("email"))==null?null:u.touched)||((u=t.loginForm.get("email"))==null?null:u.dirty)))),r(),d(17,(p=t.loginForm.get("email"))!=null&&p.invalid&&((p=t.loginForm.get("email"))!=null&&p.touched||(p=t.loginForm.get("email"))!=null&&p.dirty)?17:-1),r(5),c("type",t.showPassword?"text":"password")("ngClass",S(15,$,((_=t.loginForm.get("password"))==null?null:_.invalid)&&(((_=t.loginForm.get("password"))==null?null:_.touched)||((_=t.loginForm.get("password"))==null?null:_.dirty)))),r(2),c("ngIf",!t.showPassword),r(),c("ngIf",t.showPassword),r(),d(26,(f=t.loginForm.get("password"))!=null&&f.invalid&&((f=t.loginForm.get("password"))!=null&&f.touched||(f=t.loginForm.get("password"))!=null&&f.dirty)?26:-1),r(10),c("ngClass",L(17,H,t.loginForm.invalid,t.loginForm.valid)),r(2),d(38,t.MsgSuccess?39:38),r(3),d(41,t.ErrorMsg?41:-1),r(),d(42,t.isLoading?42:-1),r(),d(43,t.MsgSuccess?43:-1)}},dependencies:[j,N,z,A,q,R,D,G,M,P,T]});let e=i;return e})();export{_e as LoginComponent};
