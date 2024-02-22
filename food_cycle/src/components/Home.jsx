import React from "react";
import styles from "./css/home.module.css";
import FoodImage from "../../public/images/food.png";
import HandPhone from "../../public/images/phone hand.png";
import PhoneTabs from "../../public/images/tabs.png";
import FoodDonation from "../../public/images/foodDonation.png";
import Footer from "./footer";

function Home() {
    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.box1}`}>
                <div className={`${styles.one}`}></div>
                <div className={`${styles.two}`}></div>
                <div className={`${styles.three}`}></div>
                <div className={`${styles.four}`}></div>
                <div className={`${styles.left}`}>
                    <h1>Food Donation</h1>
                    <p>Welcome to our platform dedicated to food donation, where every act of generosity makes a meaningful difference in someone's life. </p>
                    <p>At <span style={{ color: "blue" }}>FoodCycle</span>, we believe in the power of collaboration to address food insecurity in our communities. Restaurants, caterers, and individuals hosting events like weddings or birthdays can partner with us to donate surplus food and help those in need. Restaurants and event hosts have the opportunity to donate excess food that might otherwise go to waste. They can choose to offer it for free or at a discounted rate, according to their preferences. By partnering with us, they not only reduce food waste but also contribute to a meaningful cause.</p>
                    <p>By participating in our food donation initiative, restaurants and event hosts can make a tangible impact on the lives of individuals and families facing hunger. Together, we can transform surplus food into nourishment and hope for those in need.</p>
                </div>
                <div className={`${styles.right}`}>
                    <img src={FoodImage} alt="" />
                </div>
            </div>
            <div className={`${styles.box2}`}>
                <div className={`${styles.row}`}>
                    <div className={`${styles.left}`}>
                        <h1>Join Our Community</h1>
                        <p>Be a part of our mission to alleviate hunger and reduce food waste. Join our vibrant community of restaurants, event hosts, and individuals dedicated to making a positive impact through food donation.</p>
                        <p>Joining our community means becoming a catalyst for change. By partnering with us, you contribute to a more sustainable and compassionate world where no one goes hungry.</p>
                        <p>As a member, you'll have the opportunity to donate surplus food from your restaurant or event. You can choose to offer it for free or at a discounted rate, empowering you to give back in a way that aligns with your values.</p>
                        <p>Your contributions matter. By joining our community, you help ensure that excess food finds its way to those who need it most. Together, we can turn surplus into sustenance and make a real difference in the lives of individuals and families facing hunger.</p>
                        <p>Ready to be a part of something meaningful? Join our community today and help us make a difference, one meal at a time. Visit our app to learn more about how you can get involved and start making a positive impact in your community.</p>
                    </div>
                    <div className={`${styles.right}`}>
                        <div className={`${styles.rightOne}`}></div>
                        <div className={`${styles.rightTwo}`}></div>
                        <img src={FoodDonation} alt="" />
                    </div>
                </div>
                <div className={`${styles.row}`}>
                    <div className={`${styles.right}`}>
                        <img src={HandPhone} alt="" />
                    </div>
                    <div className={`${styles.left}`}>
                        <h1>Help Your Self and Help Others</h1>
                        <p>At <span style={{ color: "blue" }}>FoodCycle</span>, we believe in the power of mutual support and collective action. Our mission is simple: to create a platform where you can help yourself while making a positive impact on the lives of others.</p>
                        <p>When you contribute to our project, you're not just helping others; you're also helping yourself. By participating in our initiatives, whether through food donations, volunteering, or advocacy, you become part of something greater than yourself. You experience the fulfillment that comes from knowing you've made a difference in someone else's life.</p>
                        <p>At <span style={{ color: "blue" }}>FoodCycle</span>, we believe in creating win-win situations. By participating in our project, you not only help those in need but also enrich your own life in the process. Whether you're a business looking to donate surplus food or an individual seeking to lend a helping hand, together, we can make a difference.</p>
                        <div className={`${styles.btn}`}>
                            <button id={`${styles.button}`}>
                            <i class="fa-brands fa-apple"></i>
                                <div>
                                    <p>Download on the</p>
                                    <h3>App Store</h3>
                                </div>
                            </button>
                            <button id={`${styles.button}`}>
                            <i class="fa-brands fa-google-play" style={{fontSize: "1.7rem"}}></i>
                                <div>
                                    <p>Get it On</p>
                                    <h3>Google Play</h3>
                                </div>
                            </button>
                        </div>
                        <div id={`${styles.help}`}></div>
                    </div>
                </div>
                <div className={`${styles.row}`}>
                    <div className={`${styles.left}`}>
                        <div id={`${styles.lastDiv}`}></div>
                        <h1>We are for Everyone</h1>
                        <p>At <span style={{ color: "blue" }}>FoodCycle</span>, inclusivity is at the heart of everything we do. We believe that everyone has the power to make a difference, regardless of background, identity, or circumstance. Our project is built on the principle that when we come together as a diverse and inclusive community, we can create positive change that benefits everyone.</p>
                        <p>Our doors are open to all who share our commitment to making the world a better place. Whether you're a business owner, a community leader, a student, or someone who simply cares about making a difference, you are welcome here. Together, we can harness the power of our diversity to tackle some of the most pressing challenges facing our communities.</p>
                        <p>No matter who you are or where you come from, there's a place for you in our community. Join us in our mission to create a more just, equitable, and compassionate world for all. Together, let's build a future where everyone has the opportunity to thrive.</p>
                    </div>
                    <div className={`${styles.right}`}>
                        <img src={PhoneTabs} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;