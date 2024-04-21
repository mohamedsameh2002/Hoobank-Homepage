import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { Route, Routes, useNavigate } from 'react-router-dom'
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <Routes>
      <Route path='/Home' element={<Hero></Hero>}></Route>
    </Routes>
    <div className={`bg-primary relative z-40 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route path='/features' element={<Stats></Stats>}></Route>
          <Route path='/product' element={<CardDeal></CardDeal>}></Route>
          <Route path='/clients' element={<Testimonials></Testimonials>}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
