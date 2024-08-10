import Image from "next/image";
import styles from "./page.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Image
          src="/st_joes_logo.png"
          alt="st joes logo"
          layout="responsive"
          width={550}
          height={73}
        />
      </div>
    </header>
  )
}

const Schedule = () => {
  return (
    <div>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTv7RfXUCqamZFcIdk1x9daTEbqQ8825xXDvPYpsfbLGNvDhzt4ijBkISMsCUFrmDC3_n36BzZWLXdk/pubhtml?widget=true&amp;headers=false"
        title="schedule"
        width={650}
        height={550}
      />
    </div>
  );
}

const Notes = () => {
  return (
    <div>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vS0eVwkYkdeRQ6cmJRmAVHqUaYbY-K11lni1ycI9TCYJDQKiTZv-uHWXcqSySJp4vHkNBsBTPOFOy0C/pub?embedded=true"
        title="notes"
        width={650}
        height={400}
      />
    </div>
  );
}

const Contact = () => {
  return (
    <>
      <div className={styles.contactContainer}>
        <div>
          <h3>Coaches</h3>
          <div>
            <p>Raul Birch</p>
            <p><a href="mailto:rrbirc87@gmail.com">rrbirc87@gmail.com</a></p>
            <p>805-268-4561</p>
          </div>
          <div>
            <p>Paul Leventis</p>
            <p><a href="mailto:pleventis1@gmail.com">pleventis1@live.com</a></p>
            <p>805-264-2517</p>
          </div>
        </div>
        <div>
          <h3>Faculty</h3>
          <div>
            <p>Principle: Erinn Dougherty</p>
          </div>
          <div>
            <p>Athletic Director: Tom Mott</p>
            <p><a href="mailto:tmott@sjhsknight.com">tmott@sjhsknights.com</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

const Footer = () => {
  return (
    <div>
      <ul>
        <li>4120 S Bradley Rd, Santa Maria, CA 93455</li>
        <li>School Phone: (805) 937-2038 | Fax: 805-937-4248</li>
      </ul>
    </div>
  )
}


export default function Home() {
  return (
    <main>
      <Header />

      <section className={styles.frame}>
        <Schedule />
      </section>

      <section className={styles.frame}>
        <Notes />
      </section>

      <section className={styles.contact}>
        <Contact />
      </section>

      <section className={styles.footer}>
        <Footer />
      </section>

    </main>
  );
}
