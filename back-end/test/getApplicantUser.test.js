const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)

const app = require("../app")

describe("getApplicantUser" , () => {
  it("should return status 200", async () => {
    let res = await chai
      .request(app)
      .get("/applicant/user")
      .send()

    expect(res.status).to.equal(200)
  })
})