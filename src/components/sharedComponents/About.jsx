import React from 'react'
import  './styles/About.scss'

const About = () => {
  return (
    <div className='about'>

      <h1>Welcome to TechLord - Your Ultimate Destination for Cutting-Edge Technology!</h1>

      <p>At TechLord, we are passionate about bringing the latest and most innovative technology to your fingertips. Whether you're in search of a sleek smartphone, a powerful laptop, or top-notch accessories like headphones, speakers, and smartwatches, we've got you covered.
      </p>

      <div>

        <div className="mission">
          <h4>Our Mission</h4>
          <p>Our mission is to create a seamless and trustworthy platform where technology enthusiasts, sellers, and buyers converge. We strive to be the go-to marketplace for all your tech needs, providing a space where you can discover, buy, and even resell devices with ease.
          </p>
        </div>

        <div className="setsusapart">

          <h4>What Sets Us Apart</h4>
          <ol>
            <li> <h6>Unrivaled Selection</h6>
              <p>TechLord boasts an extensive and carefully curated selection of mobile phones, laptops, and accessories. We partner with reputable sellers to ensure that you have access to the latest devices and cutting-edge technology.
              </p>
            </li>

            <li>
              <h6>Trusted Sellers</h6>
              <p>
                We prioritize your satisfaction and peace of mind. Our platform features trusted sellers who are committed to delivering quality products. Each seller undergoes a rigorous verification process to ensure that you can shop with confidence.

              </p>
            </li>

            <li>
              <h6>Eco-Friendly Reselling</h6>
              <p>
                TechLord believes in sustainability. With our reselling feature, you can give your pre-loved devices a second life. Join our community of responsible tech enthusiasts who contribute to reducing electronic waste by reselling devices in good condition.

              </p>
            </li>

            <li>
              <h6>Secure Transactions</h6>
              <p>Your security is our priority. TechLord employs advanced security measures to safeguard your transactions. Whether you are buying or reselling, you can trust that your information is handled with the utmost care.
              </p>
            </li>

            {/* <li>
              <p></p>
            </li> */}

          </ol>
        </div>

        <div className="joincommunity">
          <h2>Join the TechLord Community</h2>

          <p>TechLord is more than just an ecommerce platform; it's a community of tech enthusiasts. Join us on this exciting journey as we explore the endless possibilities that technology brings. Whether you're a buyer, seller, or just someone who loves staying on the cutting edge, TechLord is the place for you.
          </p>
        </div>

        <div className="explore">
          <p><b>Explore. Shop. Resell. Welcome to TechLord, where technology meets trust!</b></p>

        </div>

      </div>
    </div>
  )
}

export default About;