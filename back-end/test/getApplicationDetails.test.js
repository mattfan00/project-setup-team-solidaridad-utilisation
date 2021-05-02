const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)

const app = require("../app")

const testUser = {
  email: 'test@test.com', 
  password: 'hello'
}

const Application = require("../models/applicant")

describe("getApplicationDetails" , () => {
  it("should return status 200", async () => {
    //assume there's currently an application in the testing database
    const foundApplication = await Application.findOne()
    let res = await chai
      .request(app)
      .get(`/application/${foundApplication.id}`)
      .send()

    expect(res.status).to.equal(200)
  })
})