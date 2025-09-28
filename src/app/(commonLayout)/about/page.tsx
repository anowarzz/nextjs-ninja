import { Metadata } from "next";
import styles from "./About.module.css";

export const metadata : Metadata = {
  title: "About Us",
  description: "This is about page",
}



const About = () => {
  return (
    <div>
      <h2 className={styles.text_style}>Welcome to About Page</h2>
    </div>
  );
};

export default About;
