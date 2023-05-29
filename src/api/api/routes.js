'use strict'
module.exports = (app) => {
    let userCtrl = require('./controllers/UsersController');


    // todoList routes
    app.route('/field')
        .get(userCtrl.getField)
        .post(userCtrl.storeField)
    app.route('/field/:fieldId')
        .put(userCtrl.updateField)
        .delete(userCtrl.deleteField);

    app.route('/author')
        .get(userCtrl.getAuthor)
        .post(userCtrl.storeAuthor)
    app.route('/author/:authorId')
        .put(userCtrl.updateAuthor)
        .delete(userCtrl.deleteAuthor);

    app.route('/publish')
        .get(userCtrl.getPublish)
        .post(userCtrl.storePublish)
    app.route('/publish/:publishId')
        .put(userCtrl.updatePublish)
        .delete(userCtrl.deletePublish);

    app.route('/supplier')
        .get(userCtrl.getSupplier)
        .post(userCtrl.storeSupplier)
    app.route('/supplier/:supplierId')
        .put(userCtrl.updateSupplier)
        .delete(userCtrl.deleteSupplier);

        
    // app.route('/users')
    //     .get(userCtrl.get)
    //     .post(userCtrl.store)
    // app.route('/users/:usersId')
    //     .get(userCtrl.detail)
    //     .put(userCtrl.update)
    //     .delete(userCtrl.delete)
        
    app.route('/login')
        .post(userCtrl.login)
      
    // app.route('/login')
    //     .post(userCtrlLogin.login)
        
    // app.route('/register')
    //     .post(userCtrlRegister.register)
};