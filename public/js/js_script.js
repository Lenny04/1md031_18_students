// function burgers(){
//   var burgers = [];
//   for(var i = 0; i < document.querySelectorAll('input[type=checkbox]:checked').length; i++){
//     burgers.push(document.querySelectorAll('input[type=checkbox]:checked')[i].value);
//   }
//   return burgers;
// }
// function orderData(){
//   var orderItems = [];
//   orderItems.push(document.getElementById("fullname").value);
//   orderItems.push(document.getElementById("email").value);
// //  orderItems.push(document.getElementById("street").value);
// //  orderItems.push(document.getElementById("housenumber").value);
//   orderItems.push(document.getElementById("recipient").value);
//   //orderItems.push(payment.options[payment.selectedIndex].text);
//   orderItems.push(document.querySelector('input[name="gender"]:checked').value);
//   for(var i = 0; i < document.querySelectorAll('input[type=checkbox]:checked').length; i++){
//     orderItems.push(document.querySelectorAll('input[type=checkbox]:checked')[i].value);
//   }
//   console.log(orderItems);
//   return orderItems;
// }
  // if(name.length > 0){
  //   if(email.length > 0){
  //     if(street.length > 0){
  //       if(housenumber.length > 0){
  //         if(paymentString.length > 0){
  //           if(gender.length > 0){
  //             console.log("Order complete!");
  //             orderItems = [name, email, street, housenumber, paymentString, gender];
  //             console.log(orderItems);
  //           }
  //           else{
  //             // NO Gender
  //             console.log("Gender missing!");
  //           }
  //         }
  //         else{
  //           // NO PAYMENTSTRING
  //           console.log("Payment missing!");
  //         }
  //       }
  //       else{
  //         // NO HOUSENUMBER
  //         console.log("Housenumber missing!");
  //       }
  //     }
  //     else{
  //       // NO STREET
  //       console.log("Street missing!");
  //     }
  //   }
  //   else{
  //     // NO EMAIL
  //     console.log("Email missing!");
  //   }
  // }
  // else{
  //   // NO NAME
  //   console.log("Name missing!");
  // }


// function MenuItem(name, gluten, lactose, kCal) {
//     this.name = name;
//     this.gluten = gluten;
//     this.lactose = lactose;
//     this.kCal = kCal;
//     this.info = function() {
//         return this.name + ': kCal: ' + this.kCal;
//     };
// }
// var burger1 = new MenuItem('Small Hamburger', 'Gluten', 'Lactose', '1000');
// var burger2 = new MenuItem('Medium Hamburger', 'Gluten', 'No Lactose', '2000');
// var burger3 = new MenuItem('Large Hamburger', 'Gluten', 'No Lactose', '3000');
// var burger4 = new MenuItem('XL Hamburger', 'Gluten', 'Lactose', '5000');
// var burger5 = new MenuItem('XXL Hamburger', 'Gluten', 'Lactose', '7000');
// console.log( burger1.info());
// console.log( burger2.info());
// console.log( burger3.info());
// console.log( burger4.info());
// console.log( burger5.info());
//
// var myElement = document.getElementById("burgers");
// var burgerArray = [burger1, burger2, burger3, burger4, burger5];



// for (burger in food)
// {
//   var headLine = document.createElement("h3");
//
//   var ul = document.createElement("ul");
//
//   var li1 = document.createElement("li");
//   var li2 = document.createElement("li");
//   var li3 = document.createElement("li");
//   var li3 = document.createElement("li");
//   var li4 = document.createElement("li");
//   var li5 = document.createElement("li");
//   var li6 = document.createElement("li");
//   var li7 = document.createElement("li");
//   var li8 = document.createElement("li");
//
//   var Name = document.createTextNode(burger.name);
//
//   var setImage = document.createElement("img");
//
//   var Beef = document.createTextNode(burger);
//   var Gluten = document.createTextNode(burgerArray[burger].gluten);
//   var Lactose = document.createTextNode(burgerArray[burger].lactose);
//   var KCal = document.createTextNode(burgerArray[burger].kCal);
//
//   headLine.appendChild(Name);
//
//   setImage.appendChild(getImage);
//
//   li1.appendChild(Gluten);
//   li2.appendChild(Lactose);
//   li3.appendChild(KCal);
//
//   ul.appendChild(li1);
//   ul.appendChild(li2);
//   ul.appendChild(li3);
//
//   myElement.appendChild(headLine);
//   myElement.appendChild(setImage);
//   myElement.appendChild(ul);
// }
