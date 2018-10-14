const express = require('express');
const router = express.Router();

// item model
const Item = require('../../models/Item');
//@route Get api/items
//@desc get all items
// @access public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(item => res.json(item) )
});

//@route post api/item
//@desc get create item
// @access public
router.post('/', (req, res) => {
  const newItem = new Item ({
    name : req.body.name
  });
  newItem.save().then(item => res.json(item));
});

//@route delete api/items/:id
//@desc delete a item
// @access public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
      .then(item => item.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false }));

  
});



module.exports = router;
