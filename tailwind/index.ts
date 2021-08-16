import { create } from "tailwind-rn";
import styles from "./styles.json";
import custom from "./custom.json";

const { tailwind } = create({ ...styles, ...custom });

export default tailwind;
