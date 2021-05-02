const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)

const app = require("../app")

const testUser = {
  email: 'another@test.com', 
  password: 'password'
}

describe("getApplicantUser" , () => {
  it("should return status 200", async () => {
    let res = await chai
    .request(app)
    .post('/applicant/user/login')
    .send(testUser)

    res = await chai
      .request(app)
      .get("/applicant/user")
      .set("Applicant-Authorization", `Bearer ${res.body.token}`)
      .send()

    expect(res.status).to.equal(200)
  })
})