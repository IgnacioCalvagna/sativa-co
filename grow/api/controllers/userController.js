const Role = require('../models/Role');
const User = require('../models/User');

exports.getAll = (req, res) => {
  const { id } = req.params;
  console.log('soy el role del userrrr', id);



  
  if (id === '2' || id === '3') {
    User.findAll().then(users => res.send(users));
  } else {
    console.log(id);
    res.sendStatus(401);
  }
};

exports.register = (req, res) => {
  const { name, lastname, email, password } = req.body;
  const roleId = 1;
  User.create({
    name,
    lastname,
    email,
    password,
    roleId,
  }).then(user => {
    res.status(201).send(user);
  });
};

exports.logout = (req, res) => {
  req.logOut();
  res.sendStatus(200);
};

exports.update = (req, res) => {
  const { id } = req.params;
  User.update(req.body, {
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
};

exports.me = (req, res) => {
  if (!req.user) return res.sendStatus(401);
  res.send(req.user);
};

exports.login = (req, res) => {
  res.send(req.user);
};

//Admin
exports.adminPromote = (req, res) => {
  const { id } = req.body;
  console.log('soy el id del adminPromote funct', id);
  User.update(
    { roleId: 2 },
    {
      where: { id },
      returning: true,
      plain: true,
    }
  ).then(result => {
    console.log(result);
    res.sendStatus(200);
  });
};

exports.suprAdmin = (req, res) => {
  const { id } = req.params;
  User.findOne({ where: { id } }).then(user => {
    res.send(user);
  });
};

exports.allAdmin = (req, res) => {
  const { id } = req.params;
  console.log('soy req.params', req.params);
  User.findAll({ where: { roleId: 4 } }).then(admins => {
    res.send(admins);
  });
};

exports.createRole = (req, res) => {
  Role.create(req.body).then(newRole => {
    res.send(newRole);
  });
};
