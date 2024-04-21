import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";
import Billing from "../components/Billing"

const CardDeal = () => (
  <div>
    <Billing></Billing>

  <section className={layout.section}>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        transition: { duration: 1.8 },
        opacity: 1
      }}
      viewport={{ once: true }}
      className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </motion.div>

    <motion.div
      animate={{
        top: [-13, 13, -13, 13, -13],
        transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
      }}
      className={`${layout.sectionImg} relative`}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </motion.div>
  </section>
  </div>
);

export default CardDeal;
