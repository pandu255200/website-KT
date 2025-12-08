import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

const teamMembers = [
  {
    name: "Smita Jha",
    image: "/foundation-team/smita.svg",
    linkedin: "https://www.linkedin.com/in/smitajha",
    style: "5px",
  },
  {
    name: "Pawan Kumar",
    image: "/foundation-team/pawan.svg",
    linkedin: "https://www.linkedin.com/in/pawankumarmp",
    style: "5px",
  },
  {
    name: "Shailaja Vernekar",
    image: "/foundation-team/shailaja.svg",
    style: "5px",
  },
  {
    name: "Shruti Nair",
    image: "/foundation-team/shruti.svg",
    linkedin: "https://www.linkedin.com/in/shrutinair1",
    style: "5px",
  },
  {
    name: "Rakhi Vipat",
    image: "/foundation-team/rakhiImage.jpeg",
    linkedin: "https://www.linkedin.com/in/rakhivipat",
    style: "5px",
  },
  {
    name: "Monica",
    image: "/foundation-team/monica.svg",
    linkedin: "https://www.linkedin.com/in/rtn-monica-hungund-6b04a2163",
    style: "5px",
  },
  {
    name: "Sheetal More",
    image: "/foundation-team/sheetal.svg",
    linkedin: "https://www.linkedin.com/in/sheetal-more-4461b4182",
    style: "5px",
  },
  {
    name: "Priya Koride",
    image: "/foundation-team/priya.svg",
    linkedin: "https://www.linkedin.com/in/priya-srirambhat-k",
    style: "5px",
  },
  {
    name: "Piyush Patil",
    image: "/foundation-team/piyush.svg",
    linkedin: "https://www.linkedin.com/in/jcob1289",
    style: "5px",
  },
  {
    name: "Parikshit Bangde",
    title: "Director - AI Labs (Product & Solutions)",
    image: "/core-team/parikshit.png",
    linkedin: "https://www.linkedin.com/in/parikshit-bangde/",
    style: "10px",
  },
  {
    name: "Nancy Philip",
    title: "Senior Director - Delivery and Program management",
    image: "/core-team/nancy.png",
    linkedin: "https://www.linkedin.com/in/nancy-philip-8254657/",
    style: "10px",
  },
];

const FoundationTeam = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/core-team/globe.svg"
        alt="Globe"
        className={styles.globe}
        width={100}
        height={100}
      />

      <div className={styles.header}>
        <h2 className={`${styles.title} font-anta`}>Foundation Team</h2>
        <p className={styles.subtitle}>In the Journey</p>
      </div>

      <div className={styles.grid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className={styles.avatar}
              />

              {member.linkedin && (
                <a href={member.linkedin} target="_blank">
                  <Image
                    src="/core-team/linkedin-icon.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className={styles.linkedin}
                  />
                </a>
              )}
            </div>

            <p className={styles.name}>{member.name}</p>
          </div>
        ))}

        <Link href="#" className={styles.manyMore}>
          & Many more
        </Link>
      </div>
    </div>
  );
};

export default FoundationTeam;
