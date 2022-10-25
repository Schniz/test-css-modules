import styles from "./page.module.css";
import ClientComponent from "./ClientComponent";

export default function Page() {
  return (
    <ul>
      <li>
        <div className={styles.yuge}>Hello!</div>
      </li>
      <li>
        <ClientComponent />
      </li>
    </ul>
  );
}
