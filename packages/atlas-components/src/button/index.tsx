import { Button as ButtonBase } from '@base-ui/react/button';
import styles from './button.module.css';

export function Button() {
  return <ButtonBase className={styles.button}>Submit</ButtonBase>;
}