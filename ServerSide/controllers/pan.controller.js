const
Pan = require('../models/pan.model');
Operators = require('../utilities/operator');
 /** create a pan card
  * post method
 */

 let CreatePan = (req, res) =>
 {
     let PanData = req.body;
     let pan = new Pan(PanData);

    Pan.create(pan, (err, response)=>{ 
        if(err)
            return res.status(500).json({err:err})
        return res.status(201).json({response})
    })
 }

 /** get a pan
  * GET Method
  */

  let GetPan = (req, res) => {
      let panId = Operators.getQueryParams(req, 'panId');
      Pan.findById(panId, (err, result)=>{
        if(err)
            return res.status(500).json({err:err});
        return res.status(201).json(result);
      })
  }

  /** update a pan
   * PUT Method
   */

   let updatePan = (req, res) =>
   {
       let panId = Operators.getQueryParams(req, 'panId');
       let ObjectToUpdate = req.body;
       ObjectToUpdate.updatedAt = Date.now();
       Pan.findByIdAndUpdate(panId, {$set : ObjectToUpdate }, {new: true}, (err, response) => {
           if(err)
                res.status(500).json({err:err});
            res.status(201).json(response);

       })
   }

   /** delete a pan
    * DELETE Method
    */

    let deletePan = (req, res)=>{
        let panId = Operators.getQueryParams(req,'panId');
        Pan.findByIdAndRemove(panId, (err, response)=> {
            if(err)
                res.status(500).json({err:err});
            res.status(201).json(response);
        })
    }

module.exports = {
    create :CreatePan,
    get:GetPan,
    update:updatePan,
    delete:deletePan
}