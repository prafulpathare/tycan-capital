

export default function Footer() {

    return <footer>
        <div className="footer-container">

            <div className="footer-col">
                <h4>Explore</h4>
                <ul>
                    <li><a href="#strategy">Portfolio</a></li>
                    <li><a href="#research">Research</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                    <li><a href="#team">Team</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>Resources</h4>
                <ul>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Market Insights</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>taycan capital</h4>
                <p>Mumbai, India</p>
                <p><a href="mailto:cigatee.corp@gmail.com">cigatee.corp@gmail.com</a></p>
                <p>
                    <a href="https://www.instagram.com/taycan.capital/" target="_blank" rel="noopener noreferrer">
                        Instagram: @taycan.capital
                    </a>
                </p>
            </div>
        </div>


        <div className="footer-bottom">
            <p>© 2023 Taycan Capital. All rights reserved.</p>
        </div>
    </footer>;

}