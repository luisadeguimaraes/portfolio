import styles from "./MeForRealDetail.module.css";

const ParagraphDetail = () => {
  return (
    <div className={styles.bornInRioContainer}>
      <p className={styles.bornInRioDeJaneiroBrazil}>
        <span className={styles.bornInRio}>{`Born in Rio de Janeiro, `}</span>
        <span className={styles.brazil}>Brazil</span>
        <span className={styles.bornInRio}>{`, I traded the ocean breeze for`}</span>
        <span className={styles.brazil}> Seattle</span>
        <span className={styles.bornInRio}>{`’s rain. My `}</span>
        <span className={styles.brazil}>mom</span>
        <span className={styles.bornInRio}>{` works as a secretary’s assistant at a music school, and my `}</span>
        <span className={styles.brazil}>dad</span>
        <span className={styles.bornInRio}>{`, now retired, used to drive a bus. Both are art lovers—he’s into theater, she’s into crafts—and both `}</span>
        <span className={styles.bornInRio}>
          <span className={styles.inspireHowI}>inspire how I think about design today.</span>
        </span>
      </p>
      <p className={styles.bornInRioDeJaneiroBrazil}>
        <span className={styles.bornInRio}>&nbsp;</span>
      </p>
      <p className={styles.bornInRioDeJaneiroBrazil}>
        <span className={styles.bornInRio}>{`I’ve `}</span>
        <span className={styles.brazil}>traveled</span>
        <span className={styles.bornInRio}>{` to over twenty countries and `}</span>
        <span className={styles.brazil}>worked</span>
        <span className={styles.asACookWaitressGardener}>{` as a cook, waitress, gardener, housekeeper, cleaner, receptionist, and Portuguese teacher for foreign language learners. These roles gave me a wide lens into people’s lives and needs, `}
          <span className={styles.inspireHowI}>deepening the way I empathize with users.</span>
        </span>
      </p>
      <p className={styles.bornInRioDeJaneiroBrazil}>
        <span className={styles.asACookWaitressGardener}>&nbsp;</span>
      </p>
      <p className={styles.bornInRioDeJaneiroBrazil}>
        <span className={styles.asACookWaitressGardener}>{`I have a `}</span>
        <span className={styles.brazil}>degree</span>
        <span className={styles.asACookWaitressGardener}>{` in Psychology, with most of my internships focused on mental health support for children and teens, where I used art as a therapeutic tool. This background taught me the `}
          <span className={styles.inspireHowI}>importance of listening and observing.</span>
        </span>
      </p>
      <p className={styles.bornInRioDeJaneiroBrazil}>
        <span className={styles.asACookWaitressGardener}>&nbsp;</span>
      </p>
      <p className={styles.bornInRioDeJaneiroBrazil}>
        <span className={styles.asACookWaitressGardener}>When I’m not designing screens in Figma, you’ll find me at book clubs, in the lap pool, talking to my plants, watching movies and interviews.</span>
      </p>
    </div>
  );
};

export default ParagraphDetail;