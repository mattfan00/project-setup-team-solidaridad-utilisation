const express = require("express")
const router = express.Router()

router.get("/company/:name", (req, res) => {
    const companies = [
        {
        companyName: "Amazon",
        companyLogo: "/images/companyLogo.jpg",
        description: "Amazon Advertising operates at the intersection of eCommerce and advertising, offering a rich array of digital display advertising solutions with the goal of helping our customers find and discover anything they want to buy. We help advertisers reach Amazon customers on Amazon.com, across our other owned and operated sites, on other high quality sites across the web, and on millions of Kindles, tablets, and mobile devices. We start with the customer and work backwards in everything we do, including advertising. If you’re interested in joining a rapidly growing team working to build a unique, world-class advertising group with a relentless focus on the customer, you’ve come to the right place.",
        industry: "Tech",
    },
    {
        companyName: "Verizon",
        companyLogo: "/images/companyLogo.jpg",
        description: "Verizon is a leading provider of technology, communications, information and entertainment products, transforming the way we connect across the globe. We’re a diverse network of people driven by our ambition and united in our shared purpose to shape a better future. Here, we have the ability to learn and grow at the speed of technology, and the space to create within every role. Together, we are moving the world forward – and you can too. Dream it. Build it. Do it here.",
        industry: "Telecommunications",
    },
    {
        companyName: "Peloton",
        companyLogo: "/images/companyLogo.jpg",
        description: "The Peloton brand is one of the most special brands in the world. Our mission is to use technology and design to connect the world through fitness, empowering people to be the best version of themselves anywhere, anytime. Peloton’s values inform everything we do, from product strategy, to hiring, to decision-making.",
        industry: "Fitness",
    },
    {
        companyName: "RippleMatch",
        companyLogo: "/images/companyLogo.jpg",
        description: "At RippleMatch, we help entry-level candidates find high skill jobs. Figuring out where to begin a career is a huge decision, but students are often forced to rely on overstretched career services centers and small personal networks when they begin their job search. We have built the first product ever to automate early career recruiting and career coaching. Our software helps companies build diverse and high-quality teams and helps candidates find the right opportunity.",
        industry: "Tech",
    },
]
    res.json(req.params.name);
});
