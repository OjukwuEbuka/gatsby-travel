import * as React from "react"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import Hero from "../components/Hero.js"
import Trips from "../components/Trips.js"
import Testimonials from "../components/Testimonials.js"
import Stats from "../components/Stats.js"
import Email from "../components/Email.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
