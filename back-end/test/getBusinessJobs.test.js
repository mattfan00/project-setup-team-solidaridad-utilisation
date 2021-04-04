const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)

const app = require("../app")

describe("getBusinessJobs" , () => {
  it("should return status 200", async () => {
    let res = await chai
      .request(app)
      .get("/business/alljobs")
      .send()
    expect(res.status).to.equal(200)
  })
  // everythign above is what exists already
  it("should updated correctly", async () => {
    // make post request that changes the status of the first job to be closed or something
    // make a get request that gets all of the jobs once again
    // get the status of the first job in that get request 
    // expect it to be equal to the status that you chanaged it too (something like expect(res.body[0].status).to.equal("closed") 
    it("should return status 200", async () => {
      let res = await chai
        .request(app)
        .post("/business/alljobs")
        .send({
          targetID: 0,
          changeStatus: "Closed"
        })
      expect(res.body[0].status).to.equal("Closed")
    })
  })
})

describe("getBusinessJobs" , () => {
  it("should return status 200", async () => {
    let res = await chai
      .request(app)
      .put("/business/alljobs")
      .type("form")
      .send({
        targetID = 0,
        changeStatus = "Archived"
      })

    expect(res.status).to.equal(200)
  })
})