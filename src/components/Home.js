import React from 'react'
import Section from './Section'

function Home() {
  return (
    <div>
      <Section
      title="Model S"
      description="Order Online for Touchless Delivery"
      buttonleft="Custom Order"
      buttonright="View Inventory"
      backgroundImg="model-s.jpg"
      />
      <Section
      title="Model X"
      description="Order Online for Touchless Delivery"
      buttonleft="Custom Order"
      buttonright="View Inventory"
      backgroundImg="model-x.jpg"
      />
      <Section
      title="Model Y"
      description="Order Online for Touchless Delivery"
      buttonleft="Custom Order"
      buttonright="View Inventory"
      backgroundImg="model-y.jpg"
      />
      <Section
      title="Model 3"
      description="Order Online for Touchless Delivery"
      buttonleft="Custom Order"
      buttonright="Existing Investment"
      backgroundImg="model-3.jpg"
      />
      <Section
      title="Solar Roof"
      description="Produce Clean Energy From Your Roof"
      buttonleft="Order Now"
      buttonright="Learn More"
      backgroundImg="solar-roof.jpg"
      />
      <Section
      title="Solar Panels"
      description="Lowest Cost Solar Panels in America"
      buttonleft="Order Now"
      buttonright="Learn More"
      backgroundImg="solar-panel.jpg"
      />
      <Section
      title="Accessories"
      description=""
      buttonleft="Shop Now"
      backgroundImg="accessories.jpg"
      />
    </div>
  )
}

export default Home
