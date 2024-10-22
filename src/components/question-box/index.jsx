import React, {useState, useRef, useEffect} from 'react'
import styles from './styles.module.css'

function QuestionBox({data, variant}) {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null); // İçeriği referans alır

    useEffect(() => {
        if (active) {
            console.log(contentRef)
          contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
          contentRef.current.style.paddingBottom = '16px';
        } else {
          contentRef.current.style.height = "0px";
          contentRef.current.style.paddingBottom = '0px';
        }
      }, [active]);

  return (
    <div className={styles.questionBoxWrapper}>
    <div className={`${styles.questionBox} ${styles[variant]}`}>
     <div className={styles.question} onClick={() => setActive(!active)}>
        <p>{data.question}</p>
        <div className={`${styles.expand} ${active && styles.active}`}>
            <span></span>
            <span></span>
        </div>
     </div>
    </div> 
    <div className={`${styles.answer} ${styles[variant]}`} ref={contentRef}><p>{data.answer}</p></div>
    </div>
  )
}

export { QuestionBox }