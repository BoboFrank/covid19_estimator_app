(this.webpackJsonpcovid19_estimator_app=this.webpackJsonpcovid19_estimator_app||[]).push([[0],{18:function(e,t,a){e.exports=a(26)},26:function(e,t,a){"use strict";a.r(t);var l=a(1),o=a.n(l),n=a(11),i=a.n(n),s=(a(23),a(9)),r=a(12),p=a(13),d=a(14),u=a(7),m=a(16),c=a(15),h=a(27),E=a(28),v=a(29),C=a(30),T=a(31),B=a(32),b=a(33),y=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(p.a)(this,a),(l=t.call(this,e)).handleBlur=function(e){return function(t){l.setState({touched:Object(r.a)({},l.state.touched,Object(s.a)({},e,!0))})}},l.state={population:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:"",periodType:"",touched:{population:!1,timeToElapse:!1,reportedCases:!1,totalHospitalBeds:!1,periodType:!1}},l.handleInputChange=l.handleInputChange.bind(Object(u.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(u.a)(l)),l.handleBlur=l.handleBlur.bind(Object(u.a)(l)),l.validate=l.validate.bind(Object(u.a)(l)),l}return Object(d.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,l=t.name;this.setState(Object(s.a)({},l,a))}},{key:"validate",value:function(e,t,a,l,o){var n={population:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:"",periodType:""};return this.state.touched.population&&""===e&&(n.population="Population is < 4"),this.state.touched.timeToElapse&&""===t&&(n.timeToElapse="Population is < 4"),this.state.touched.reportedCases&&""===a&&(n.reportedCases="Population is < 4"),this.state.touched.totalHospitalBeds&&""===l&&(n.totalHospitalBeds="Population is < 4"),this.state.touched.periodType&&""===o&&(n.periodType="Population is < 4"),n}},{key:"handleSubmit",value:function(e){""===(this.validate().population&&this.validate().timeToElapse&&this.validate().reportedCases&&this.validate().totalHospitalBeds&&this.validate().periodType)?alert("Form Submitted"):alert("Recheck Your Form"),e.preventDefault()}},{key:"render",value:function(){var e=this.validate(this.state.population,this.state.timeToElapse,this.state.reportedCases,this.state.totalHospitalBeds,this.state.periodType);return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row row-content"},o.a.createElement("div",{className:"col-12"},o.a.createElement("h3",null,"Send Us Your Data")),o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement(E.a,{row:!0},o.a.createElement(v.a,{htmlFor:"population",md:2},"Population"),o.a.createElement(C.a,{md:10},o.a.createElement(T.a,{type:"number",id:"population",name:"population",placeholder:"Population",value:this.state.population,valid:""===e.population,invalid:""!==e.population,onBlur:this.handleBlur("population"),onChange:this.handleInputChange}),o.a.createElement(B.a,null,e.population))),o.a.createElement(E.a,{row:!0},o.a.createElement(v.a,{htmlFor:"timeToElapse",md:2},"Time To Collect Data"),o.a.createElement(C.a,{md:10},o.a.createElement(T.a,{type:"number",id:"timeToElapse",name:"timeToElapse",placeholder:"Time to collect data",value:this.state.timeToElapse,valid:""===e.timeToElapse,invalid:""!==e.timeToElapse,onBlur:this.handleBlur("timeToElapse"),onChange:this.handleInputChange}),o.a.createElement(B.a,null,e.timeToElapse))),o.a.createElement(E.a,{row:!0},o.a.createElement(v.a,{htmlFor:"reportedCases",md:2},"Reported Cases"),o.a.createElement(C.a,{md:10},o.a.createElement(T.a,{type:"number",id:"reportedCases",name:"reportedCases",placeholder:"Reported Cases",value:this.state.reportedCases,valid:""===e.reportedCases,invalid:""!==e.reportedCases,onBlur:this.handleBlur("reportedCases"),onChange:this.handleInputChange}),o.a.createElement(B.a,null,e.reportedCases))),o.a.createElement(E.a,{row:!0},o.a.createElement(v.a,{htmlFor:"totalHospitalBeds",md:2},"Total Number of Hospital Beds"),o.a.createElement(C.a,{md:10},o.a.createElement(T.a,{type:"number",id:"totalHospitalBeds",name:"totalHospitalBeds",placeholder:"Total Number of Hospital Beds",value:this.state.totalHospitalBeds,valid:""===e.totalHospitalBeds,invalid:""!==e.totalHospitalBeds,onBlur:this.handleBlur("totalHospitalBeds"),onChange:this.handleInputChange}),o.a.createElement(B.a,null,e.totalHospitalBeds))),o.a.createElement(E.a,{row:!0},o.a.createElement(v.a,{htmlFor:"periodType",md:2},"Choose Period Type"),o.a.createElement(C.a,{md:{size:4,offset:1}},o.a.createElement(T.a,{type:"select",name:"periodType",value:this.state.periodType,valid:""===e.periodType,invalid:""!==e.periodType,onBlur:this.handleBlur("periodType"),onChange:this.handleInputChange},o.a.createElement("option",null,"Choose..."),o.a.createElement("option",null,"Days"),o.a.createElement("option",null,"Weeks"),o.a.createElement("option",null,"Months")),o.a.createElement(B.a,null,e.periodType))),o.a.createElement(E.a,{row:!0},o.a.createElement(C.a,{md:{size:10,offset:2}},o.a.createElement(b.a,{type:"submit",name:"Submit Button",color:"secondary",onClick:this.handleSubmit},"Send Data")))))))}}]),a}(l.Component),f=a(34),H=a(35),g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f.a,{light:!0,color:"light"},o.a.createElement("div",{className:"container"},o.a.createElement(H.a,{href:"/"},"My Covid Estimator APP"))))};i.a.render(o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement("div",null,o.a.createElement(y,null))),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d759a532.chunk.js.map