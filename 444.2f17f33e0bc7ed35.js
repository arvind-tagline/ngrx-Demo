"use strict";(self.webpackChunkngrx_demo=self.webpackChunkngrx_demo||[]).push([[444],{3444:(T,a,s)=>{s.r(a),s.d(a,{AuthModule:()=>f});var d=s(9808),g=s(6533),l=s(2532),p=s(2253),o=s(5e3),e=s(2382),u=s(2323);const c=[{path:"",children:[{path:"",redirectTo:"login"},{path:"login",component:(()=>{class n{constructor(t,r){this.fb=t,this.store=r,this.loginForm=this.fb.group({email:"",password:""})}ngOnInit(){}onLogin(){const t=this.loginForm.value.email,r=this.loginForm.value.password;this.store.dispatch((0,l.M8)({status:!0})),this.store.dispatch((0,p.h8)({email:t,password:r}))}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(e.qu),o.Y36(u.yh))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],decls:16,vars:1,consts:[[1,"row","d-flex","justify-content-center"],[1,"col-sm-4","border"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","email",1,"form-label"],["type","email","id","email","placeholder","name@example.com","formControlName","email",1,"form-control"],["for","password",1,"form-label"],["type","password","placeholder","Enter your password","id","password","formControlName","password",1,"form-control"],[1,"mb-3","text-center"],[1,"btn","btn-primary"]],template:function(t,r){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h2"),o._uU(3,"Login Form"),o.qZA(),o.TgZ(4,"form",2),o.NdJ("ngSubmit",function(){return r.onLogin()}),o.TgZ(5,"div",3),o.TgZ(6,"label",4),o._uU(7,"Email address"),o.qZA(),o._UZ(8,"input",5),o.qZA(),o.TgZ(9,"div",3),o.TgZ(10,"label",6),o._uU(11,"Password"),o.qZA(),o._UZ(12,"input",7),o.qZA(),o.TgZ(13,"div",8),o.TgZ(14,"button",9),o._uU(15,"Login"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(4),o.Q6J("formGroup",r.loginForm))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u],styles:[""]}),n})()},{path:"signUp",component:(()=>{class n{constructor(t,r){this.fb=t,this.store=r,this.signUpForm=this.fb.group({name:"",email:"",password:"",role:"Teacher"})}ngOnInit(){}onSignUp(){const t=this.signUpForm.value,r=t.name,m=t.email,Z=t.password,h=t.role;this.store.dispatch((0,l.M8)({status:!0})),this.store.dispatch((0,p.hI)({name:r,email:m,password:Z,role:h})),console.log("data",t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(e.qu),o.Y36(u.yh))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-signup"]],decls:20,vars:1,consts:[[1,"row","d-flex","justify-content-center"],[1,"col-sm-4","border"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","exampleFormControlInput1",1,"form-label"],["type","text","id","name","placeholder","Enter Name","formControlName","name",1,"form-control"],["for","email",1,"form-label"],["type","email","id","email","placeholder","name@example.com","formControlName","email",1,"form-control"],["for","password",1,"form-label"],["type","password","placeholder","Enter your password","id","password","formControlName","password",1,"form-control"],[1,"mb-3","text-center"],[1,"btn","btn-primary"]],template:function(t,r){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h2"),o._uU(3,"SignUp Form"),o.qZA(),o.TgZ(4,"form",2),o.NdJ("ngSubmit",function(){return r.onSignUp()}),o.TgZ(5,"div",3),o.TgZ(6,"label",4),o._uU(7,"Name"),o.qZA(),o._UZ(8,"input",5),o.qZA(),o.TgZ(9,"div",3),o.TgZ(10,"label",6),o._uU(11,"Email address"),o.qZA(),o._UZ(12,"input",7),o.qZA(),o.TgZ(13,"div",3),o.TgZ(14,"label",8),o._uU(15,"Password"),o.qZA(),o._UZ(16,"input",9),o.qZA(),o.TgZ(17,"div",10),o.TgZ(18,"button",11),o._uU(19,"SignUp"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(4),o.Q6J("formGroup",r.signUpForm))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u],styles:[""]}),n})()}]}];let f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[d.ez,g.Bz.forChild(c)]]}),n})()}}]);