describe('The Login Page', () => { // 这个相当于测试套件
  const userLogin = Cypress.env('userLogin') // 把环境变量的值赋给userLogin
  const { username, password} = userLogin// 把userlogin的值赋给 username和password

  it('输入账号错误', () => { // 这个相当于测试用例的描述
    cy.visit('/login')
    cy.get('input[placeholder=账号]').type(username)// 定位账号输入框
    cy.get('input[placeholder=密码]').type(password)// 定位密码输入框
    cy.get('span').contains('login').click()// 定位提交登陆请求的按钮，并点击
    cy.get('body').should('contain', '账号错误')// 断言
  })
})
