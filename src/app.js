const express = require('express');
const orderRouter = require("./order/order.router")
const itemRouter = require("./item/item.router")

const app = express();

orderRouter(app)
itemRouter(app)

module.exports = app
