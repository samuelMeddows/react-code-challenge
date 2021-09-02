const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(404).json({
    message: 'GET: Account Number required',
  });
});

router.post('/', (req, res, next) => {
  res.status(404).json({
    message: 'POST: Account Number required',
  });
});

router.post('/accountID', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  res.status(201).json({
    message: 'POST: Account Number required',
  });
});

router.get('/:accountID', (req, res, next) => {
  const id = req.params.accountID;
  if (id === '12236') {
    res.status(200).json({
      account: '12236',
      name: 'John Smith',
      balance: '$26411',
    });
  } else {
    res.status(404).json({
      message: 'Account Number not found',
    });
  }
});

// router.patch('/:productID', (req, res, next) => {
//   res.status(200).json({
//     message: 'Updated product!',
//   });
// });

// router.delete('/:productID', (req, res, next) => {
//   res.status(200).json({
//     message: 'Deleted product!',
//   });
// });

module.exports = router;
