const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)

const app = require("../app")

const testUser = {
  email: 'test@test.com', 
  password: 'hello'
}


describe("getBusinessJobs" , () => {
  it("should sign in the user", async () => {
    let res = await chai
      .request(app)
      .post('/business/user/login')
      .send(testUser)
    expect(res.status).to.equal(200)
  })

  it("should return status 200", async () => {
    let res = await chai
    .request(app)
    .post('/business/user/login')
    .send(testUser)

    res = await chai
      .request(app)
      .get("/business/alljobs")
      .set("Business-Authorization", `Bearer ${res.body.token}`)
      .send()

    expect(res.status).to.equal(200)
  })

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