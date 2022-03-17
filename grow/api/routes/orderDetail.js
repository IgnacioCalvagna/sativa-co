const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');
const { OrderDetail, CartItem } = require('../models');
const etherealEmailController = require('../controllers/orderDetailController');

router.post('/createOrderDetail', (req, res) => {
  const { UserId, total } = req.body;
  console.log('MIREQ.BODY', req.body);
  OrderDetail.create({ UserId, total }).then(newOrderDetail => {
    res.send(newOrderDetail);
  });
});
router.put('/modifyStatus/:id', (req, res) => {
  const { id } = req.params;
  OrderDetail.update(req.body, {
    where: {
      id,
    },
    returning: true,
    plain: true,
  }).then(result => {
    const user = result[1];
    res.status(201).json({
      user,
    });
  });
});

router.get('/historial/:UserId', (req, res) => {
  const { UserId } = req.params;
  OrderDetail.findAll({ where: { UserId } }).then(orders => res.send(orders));
});

///  contraseña de aplicacion para google :
/// juev vuxd mobn xisi
router.post('/sendEmail', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'sativayco@gmail.com',
      pass: 'juevvuxdmobnxisi',
    },
  });
  const emailConfig = {
    from: 'sativayco@gmail.com',
    to: 'ignaciocalvagna@gmail.com',
    subject: 'Enviado desde el equipo de desarrollo de Sativa & Co',
    text: 'Su compra ha sido realizada',
    html: '<b>Su compra ha sido realizada</b>',
  };
  transporter.sendMail(emailConfig, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
      res.status(200).json(emailConfig);
    }
  });
});
module.exports = router;
