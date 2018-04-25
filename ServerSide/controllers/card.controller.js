

const 
Card = require('../models/card.model'),
Operators = require ('../utilities/operator')	;



/**
* Create - create the card 
* POST method
*/
let CreateCard = (req , res ) => {
let cardData = req.body;
let card = new Card(cardData);

Card.create( card , (err , response ) => {
        if ( err )
            return  res.status(500).json( {err : err} );
        return res.status(201).json( response );
    })
}

/**
* GET Card details
*/
let GetCard = (req , res ) => {
let CardId = Operators.getQueryParams( req , 'cardId' );

Card.findById( CardId  , (err , card) => {
    if (err) 
        return  res.status(500).json( {err : err} );
    return res.status(200).json(card);

});

}
 //delete the card
let DeleteCard = (req , res) => {
let id = Operators.getQueryParams( req  , 'cardId' );

Card.findByIdAndRemove( id  , (err , response) => {
    if (err) 
        return res.status(500).json({err : err });
    return res.status(200).json( { response });
})
}


//update the card
let UpdateCard = (req, res) => {
let Id = Operators.getBody( req , 'cardId');
Card.findByIdAndUpdate( Id  , { $set : req.body } , { new :true} ,  (err , updateCard) => {
    if ( err )
        return res.status(500).json({ err : err })

    return res.status(200).json({updateCard} );
});
}

module.exports = {
create : CreateCard,
read : GetCard,
update : UpdateCard,
delete : DeleteCard
}