// const mongoose = require('mongoose').connect('mongodb://vbagustinus:anakjalanan@smartshop-shard-00-00-hibsb.mongodb.net:27017,smartshop-shard-00-01-hibsb.mongodb.net:27017,smartshop-shard-00-02-hibsb.mongodb.net:27017/ecommerce?ssl=true&replicaSet=smartshop-shard-0&authSource=admin');
const ObjectId = require('mongodb').ObjectID;
const Admin = require('../models/adminModel');

let createAdmin = (req, res) => {
  // console.log(req.body);
  let input = req.body
  let inputAdmin = new Admin(
  {
    name : input.name,
    username: input.memberid,
    password: input.address
  });
  //save admin
  inputAdmin.save((err, adminSaved)=>{
    if(err) res.status(500).send(err);
    res.send({
      admin: adminSaved,
      messages : 'Input admin successed'
    })
  })
}

// let deleteAdmin = (req, res) => {
//   console.log(req.params.id);
//   let id = {
//     _id : ObjectId(req.params.id)
//   }
//   Admin.findByIdAndRemove(id)
//   .then(adminRemoved =>{
//     res.send({
//       admin: adminRemoved,
//       messages: 'Remove admin successed'
//     })
//   })
//   .catch(err=>{
//     res.status(500).send(err)
//   })
// }

// let updateAdmin = (req, res) => {
//   console.log(req.params.id);
//   let edit = req.body
//   let id = {
//     _id: ObjectId(req.params.id)
//   }
//   let admin = {
//     name : edit.name,
//     memberid: edit.memberid,
//     address: edit.address,
//     zipcode: edit.zipcode,
//     phone: edit.phone
//   }
//   Admin.findByIdAndUpdate(id, admin)
//   .then(adminUpdated=>{
//     res.send({
//       admin: adminUpdated,
//       messages: 'Update admin successed'
//     })
//   })
//   .catch(err=>{
//     console.log(err);
//     res.status(500).send(err)
//   })
// }

module.exports = {
  createAdmin,
  // deleteAdmin,
  // updateAdmin
}
