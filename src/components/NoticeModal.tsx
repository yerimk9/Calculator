import { useEffect, useState } from "react";
import styles from "../styles/NoticeModal.module.css";

function NoticeModal() {
  const [isVisible, setIsVisible] = useState(true);
  const handleCloseModal = () => {
    setIsVisible(false);
  };
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div>
      {isVisible && (
        <div className={styles.modalContainer}>
          <div className={styles.close} onClick={handleCloseModal}>
            X
          </div>
          <div className={styles.title}>
            <h1>공지사항</h1>
          </div>
          <div className={styles.content}>
            <div>안녕하세요! 이용해 주셔서 감사합니다.</div>
            <div>- 해당 계산기는 0으로 시작하는 입력을 허용하지 않습니다.</div>
            <div>
              - 계산식의 마지막은 반드시 숫자로 끝나야 합니다. <br />
              <span>
                &nbsp;&nbsp;&nbsp;예를 들어, 4 + 5 +", "10 * 2 /", 등의 입력은
                불가능합니다.
              </span>
            </div>
            <div>
              더 이상의 궁금한 점이나 문의 사항이 있으시면 언제든지
              문의해주세요!
            </div>
            <div>감사합니다. ☺️</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoticeModal;
