import { createPreprClient } from "@preprio/nodejs-sdk";


const prepr = createPreprClient({
    token :process.env.PREPRIO_PRODUCTION_TOKEN,
    baseUrl :process.env.PREPRIO_API,
    userId : null,
})

export { prepr }