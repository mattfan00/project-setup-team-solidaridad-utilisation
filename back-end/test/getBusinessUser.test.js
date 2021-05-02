const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)

const app = require("../app")

const testUser = {
  email: 'test@test.com', 
  password: 'hello'
}


describe("getBusinessUser" , () => {
  it("should return status 200", async () => {
    let res = await chai
    .request(app)
    .post('/business/user/login')
    .send(testUser)

    res = await chai
      .request(app)
      .get("/business/user")
      .set("Business-Authorization", `Bearer ${res.body.token}`)
      .send()

    expect(res.status).to.equal(200)
  })
})