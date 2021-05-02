const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)

const app = require("../app")

describe("getCompanyDetails" , () => {
  it("should return status 200", async () => {
    let res = await chai
      .request(app)
      .get("/business/newlisting/description")
      .send()

    expect(res.status).to.equal(200)
  })
})