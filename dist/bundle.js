!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){const o=n(1);t.exports=function(t=null){return{ships:[],letterToNum:{A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},createShip:function(t){return o(t)},board:function(){const t=[];let e=[],n=["A","B","C","D","E","F","G","H","I","J"],o=["1","2","3","4","5","6","7","8","9","10"];for(let r of n)for(let n of o)e.push(r+n),10===e.length&&(t.push(e),e=[]);return t}(),placeShip:function(t,e,n){const o=this.letterToNum[e];let r=n+t.length;if(r<=10)for(let i=n;i<r;i++)this.board[o][i-1]+=`ship-${this.ships.length}`,t.ship_coordonates.push(`${e}${i}`);else{r=n-t.length;for(let i=n;i>r;i--)this.board[o][i-1]+=`ship-${this.ships.length}`,t.ship_coordonates.push(`${e}${i}`)}return this.ships.push(t),this.board},receiveAttack:function(t,e){const n=this.letterToNum[t];let o=this.board[n][e-1].split("-");if("ship"===o[0]){this.board[n][e-1]="hit";const r=o[1],i=this.ships[r],a=i.ship_coordonates.indexOf(`${t}${e}`);i.ship_coordonates[a]="hit"}else this.board[n][e-1]="X"},attack:function(e,n){t&&t.board.receiveAttack(e,n)},all_ships_sunk:function(){return this.ships.every(t=>!0===t.isSunk())}}}},function(t,e){t.exports=function(t){return{length:t,places:new Array(t).fill("not hit"),state:"not-sunk",hit:function(t){this.places[t-1]="hit"},isSunk:function(){return!!this.ship_coordonates.every(t=>"hit"===t)&&(this.state="sunk",!0)},ship_coordonates:[]}}},function(t,e,n){const o=n(0);t.exports=function(){return{turn:!1,gameEnvironment:o(),placeShip:function(t,e,n){const o=this.gameEnvironment.createShip(t);this.gameEnvironment.placeShip(o,e,n)},printBoard:function(){const t=document.createElement("div");t.classList.add("board","player-board");const e=document.querySelector(".container");e.innerHTML="";const n=document.createElement("table");n.innerHTML+="<tbody> </tbody>",t.appendChild(n),e.appendChild(t),this.gameEnvironment.board.forEach((t,e)=>{let n=document.querySelectorAll("tbody"),o=n[n.length-1],r=document.createElement("tr");for(let e of t){const t=document.createElement("td");if(e.match(/ship/g)){const n=e.match(/ship-\d+/)[0],o=e.match(/[A-Z]\d+/)[0];t.classList.add("player-ship",n,o)}else t.classList.add(e);t.innerHTML="",r.appendChild(t)}o.appendChild(r)})},placeRandomShips:function(){[1,1,1,1,2,2,2,3,3,4].forEach(t=>{let e=this.randomPlace();for(;!this.validPosition(t,e[0],e[1]);)e=this.randomPlace();this.placeShip(t,e[0],e[1])})},randomPlace:function(){return[String.fromCharCode(65+Math.round(9*Math.random())),Math.ceil(10*Math.random())]},validPosition:function(t,e,n){const o=this.gameEnvironment.board[this.gameEnvironment.letterToNum[e]];if(n+t<=10){let e=n+t-1;for(;e>n-1;){if(o[e-1].match(/ship/))return!1;e--}return!0}{let e=n-t-1;for(;n-1>e;){if(o[n-1].match(/ship/))return!1;n--}return!0}}}}},function(t,e,n){n(1),n(0),n(2);n(4)().start()},function(t,e,n){const o=n(2),r=n(5);t.exports=function(){return{attack:function(t,e,n){t==t||computer,t.gameEnvironment.receiveAttack(e,n)},start:function(){const t=o(),e=r();t.placeRandomShips(),e.placeRandomShips(),t.printBoard(),e.printBoard(),setInterval((function(){e.updateBoard()}),3e3)}}}},function(t,e,n){const o=n(0);t.exports=function(){return{randomMove:function(){return[["A","B","C","D","E","F","G","H","I","J"][Math.floor(Math.random()*possible_x.length)],Math.ceil(10*Math.random())]},turn:!1,gameEnvironment:o(),placeShip:function(t,e,n){const o=this.gameEnvironment.createShip(t);this.gameEnvironment.placeShip(o,e,n)},printBoard:function(){const t=document.createElement("div");t.classList.add("board","computer-board");const e=document.querySelector(".container"),n=document.createElement("table");n.innerHTML+="<tbody> </tbody>",t.appendChild(n),e.appendChild(t),this.gameEnvironment.board.forEach((t,e)=>{let n=document.querySelectorAll("tbody"),o=n[n.length-1],r=document.createElement("tr");for(let e of t){const t=document.createElement("td");if(e.match(/ship/g)){const n=e.match(/ship-\d+/)[0],o=e.match(/[A-Z]\d+/)[0];t.classList.add("computer-ship",n,o)}else t.classList.add(e);t.innerHTML="",r.appendChild(t)}o.appendChild(r)}),document.querySelector(".computer-board").addEventListener("click",this.updateShip)},updateBoard:function(){Array.from(document.querySelectorAll(".computer-board td")).forEach(t=>{if(t.className.match(/hit/g)){const e=t.className,n=e.match(/ship-\d+/)[0],o=Number(n.charAt(n.length-1)),r=e.match(/[A-Z]\d+/)[0];console.log(o,r);const i=this.gameEnvironment.ships[o];for(let e=0;e<i.ship_coordonates.length;e++)i.ship_coordonates[e]==r&&(console.log("found"+i.ship_coordonates[e]),i.ship_coordonates[e]="hit",i.isSunk()&&t.classList.add("sunk")),console.log(i)}else t.className.match(/miss/g)})},updateShip:function(t){const e=t.target;if(t.target.classList.contains("computer-ship")){t.target.classList.add("hit");const n=e.className.split(" ");let o=n.find(t=>t.match(/ship-\d+/g));o=Number(o[o.length-1]);n.find(t=>t.match(/[A-J]\d+/g))}else t.target.classList.add("miss")},placeRandomShips:function(){[1,1,1,1,2,2,2,3,3,4].forEach(t=>{let e=this.randomPlace();for(;!this.validPosition(t,e[0],e[1]);)e=this.randomPlace();this.placeShip(t,e[0],e[1])})},randomPlace:function(){return[String.fromCharCode(65+Math.round(9*Math.random())),Math.ceil(10*Math.random())]},validPosition:function(t,e,n){const o=this.gameEnvironment.board[this.gameEnvironment.letterToNum[e]];if(n+t<=10){let e=n+t-1;for(;e>n-1;){if(o[e-1].match(/ship/))return!1;e--}return!0}{let e=n-t-1;for(;n-1>e;){if(o[n-1].match(/ship/))return!1;n--}return!0}}}}}]);