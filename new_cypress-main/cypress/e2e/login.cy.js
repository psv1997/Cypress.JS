describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашла на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала кнопку Войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').click(); // Нажала Забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru') // Ввела почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Нажала отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что код отправлен на указанную почту
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })

    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
        cy.get('#pass').type('iLoveqastudio1!'); // Ввела неверный пароль
        cy.get('#loginButton').click(); // Нажала кнопку Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что при вводе неверного пароля виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
    
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('germann@dolnikov.ru'); // Ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела неверный пароль
        cy.get('#loginButton').click(); // Нажала кнопку Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что при вводе неверного логина виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })

    it('Логин без @', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввела логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала кнопку Войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что появляется текст об ошибке валидации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })

    it('Верный пароль и верный логин строчными буквами', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела верный логин строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала кнопку Войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })

 }) 