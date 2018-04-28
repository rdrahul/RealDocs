
const
Aadhar = require('../models/aadhar.model'),
Operators = require('../utilities/operator');

/** create aadhar
 * POST Method
 */

let createAadhar = (req, res) => {
    let data = req.body;
    let aadhar = new Aadhar(data);
    Aadhar.create(aadhar,(err,response)=>{
        if(err)
            res.status(500).json({err:err});
        res.status(201).json(response);
    })
}

/**get aadhar
 * GET
 */

let getAadhar = (req, res) => {
    let id = Operators.getQueryParams(req,'AadharId');
    Aadhar.findById(id, (err, aadhar) => {
        if(err)
            res.status(500).json({err:err});
        res.status(201).json(aadhar);
    })
}

/** update aadhar
 * PUT
 */

 let updateAadhar = (req,res) => {
     let id = Operators.getQueryParams(req, 'AadharId');
     let ObjectToUpdate = req.body;
     ObjectToUpdate.updatedAt = Date.now();
     Aadhar.findByIdAndUpdate(id, {$set : ObjectToUpdate}, {new : true}, (err, response) => {
         if(err)
            res.status(500).json({err:err});
        res.status(201).json(response);
     })
 }

 /** delete aadhar
  * DELETE
  */

  let deleteAadhar = (req, res)=>{
      let id = Operators.getQueryParams(req,'AadharId');
      Aadhar.findByIdAndRemove(id,(err, response) => {
          if(err)
            res.status(501).json({err:err});
        res.status(201).json(response);
      })
  }

  module.exports = {
      post:createAadhar,
      get:getAadhar,
      put:updateAadhar,
      delete:deleteAadhar
  }