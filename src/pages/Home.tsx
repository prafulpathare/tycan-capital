import { Link } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Portfolio from "./Portfolio";


export default function Home() {
  return <div>

    <section className="hero">
      <div className="hero-text">
        <h1>Taycan Capital</h1>
        <p>
          Invest in <strong>medium & small-cap opportunities</strong> with
          high-growth potential. Our quant-driven strategies
          turn volatility into sustainable long-term wealth.
        </p>
        <div className="hero-buttons">
          <a href="#strategy" className="btn-primary">Invest Now</a>
          <Link to="/portfolio"  className="btn-secondary">Portfolio</Link>
        </div>
      </div>

      <div className="hero-img">
        {/* <img src="https://img.freepik.com/premium-vector/business-candle-stick-graph-chart-stock-market-investment-trading-white-background-design_41981-3589.jpg" alt="Finance Growth" /> */}
      </div>
    </section>

    <section>
      <p>
        At Taycan Capital, we believe that true wealth creation lies in identifying opportunities before they become mainstream. Our investment approach is centered on medium and small-cap companies with the potential to deliver exponential growth. By harnessing quantitative analytics, data-driven insights, and advanced risk models, we actively seek to capture market inefficiencies. We specialize in high-volatility strategies, where others see uncertainty, we see opportunity. With a disciplined framework and a forward-looking mindset, we aim to consistently generate superior returns for our investors.
      </p>
      <br />
      <p>
        Investing with Taycan Capital means partnering with a team that thrives on innovation and precision. We combine the rigor of quantitative research with deep market expertise to deliver portfolios that are both resilient and growth-focused. Our strategies are designed to adapt to dynamic market conditions, ensuring your capital is positioned to benefit from volatility rather than be hindered by it. By focusing on high-growth sectors and disruptive businesses, we empower our investors to participate in the next wave of market leaders. With Taycan Capital, you don’t just invest in stocks—you invest in a vision for the future.
      </p>
    </section>

    <Footer />


  </div>;
}
