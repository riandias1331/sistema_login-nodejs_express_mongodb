const User = require("../models/UserModel.js");
const bcrypt = require("bcrypt");

exports.renderHome = (req, res) => {
  res.render('home.html')
};

exports.getregister = (req, res) => {
  res.render('register')
}
exports.getlogin = (req, res) => {
  res.render('login')
}

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).render('register', { error: 'Email já está em uso' });
    }

    const user = await User.create({
      email,
      password
    })
    console.log(user)
    // res.status(201).json(user)
    res.status(201).render('login');
  } catch (error) {
    res.status(400).json({ messaege: error.messaege })
  }
};

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        console.log('email inválido')
        return res.status(400).render('login', { error: 'Usuário não encontrado' });
      }
  
      
      const isPasswordValid = password === user.password; 
      if (!isPasswordValid) {
        console.log('Senha inválida')
        return res.status(400).render('login', { error: 'Senha inválida' });
      }
  
      console.log('Login bem-sucedido:', user);
      res.status(200).render('Page'); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

};
