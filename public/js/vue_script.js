'use strict';
var socket = io();
var vm = new Vue({
  el: '#theWholeBody',
  data: {
    headLine: 'Select a burger',
    subTitle: 'Choose one of these burgers',
    burgers: food,
    orderItems: [],
    orders: [],
    orderNumber: 1,
    fullname : '',
    email : '',
    recipient : 'Credit card',
    gender : 'Not provided',
    selectedBurgers : [],
    position : {}
    //[burger1, burger2, burger3, burger4, burger5]
  },
  // created: function () {
  //   socket.on('initialize', function (data) {
  //     this.orders = data.orders;
  //   }.bind(this));
  //
  //   socket.on('currentQueue', function (data) {
  //     this.orders = data.orders;
  //   }.bind(this));
  // },
  methods: {
    markDone: function(event) {
        this.orderItems = [
          "#" + this.orderNumber,
          "Full name: " + this.fullname,
          "Email: " + this.email,
          "Payment: " + this.recipient,
          "Gender: " + this.gender,
          "Selected Burgers: " + this.selectedBurgers,
          "Position: " + this.position.x + " " + this.position.y
        ];

        var orderObject = {
          orderNumber : this.orderNumber,
          personInfomation : [
            this.fullname,
            this.email,
            this.recipient,
            this.gender
          ],
          selectedItem : this.selectedBurgers,
          position :  this.position
        }
        if(this.fullname !== '' && this.email.includes("@") && this.selectedBurgers.length !== 0 &&
        Object.keys(this.position).length > 0){
          this.addOrder(event, orderObject);
          this.orderNumber = this.orderNumber + 1;
        }
        return false;
      },
      getNext: function () {
        var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
          return Math.max(last, next);
        }, 0);
        return lastOrder + 1;
      },
      addOrder: function (event, orderObject) {
          // socket.emit("addOrder", { orderId: this.getNext(),
          //   details: { position: this.position,
          //     burgerSelection: this.selectedBurgers,
          //     orderDetails: [
          //       "Name: " + this.fullname,
          //       "Email: " + this.email,
          //       "Payment: " + this.recipient,
          //       "Gender:" + this.gender
          //     ]
          //   }
          // });
          //var o = [this.getNext(),this.position, this.selectedBurgers, this.fullname, this.email, this.recipient, this.gender];
          this.orders.push(orderObject);
          socket.emit("addOrder", orderObject);
          },
          displayOrder: function(event){
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
              y: event.currentTarget.getBoundingClientRect().top};

              this.position = {x: event.clientX - 10 - offset.x,
                y: event.clientY - 10 - offset.y };
              }
            }
          })
