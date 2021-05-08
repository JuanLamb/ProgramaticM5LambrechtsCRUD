

let userController = {

    login: (req, res) => {
        
        res.render('user/login');
    },

    register: (req, res) => {
        res.render('user/register');
    },

    shopCart: (req, res) => {
        res.render('user/productCart');
    },

    shopCart2: (req, res) => {
        res.render('user/productCart2');
    },

    adminCreate: (req, res) => {
        res.render('user/productForm');
    },

    adminEdit: (req, res) => {
        res.render('user/productEdit');
    }
};

module.exports = userController;