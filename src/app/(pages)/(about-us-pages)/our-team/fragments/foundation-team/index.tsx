import Image from 'next/image';
import styles from './style.module.css';
import SmitaJhaImage from "../../../../../../../public/foundation-team/smita.svg";
import PawanImage from "../../../../../../../public/foundation-team/pawan.svg";
import PiyushImage from "../../../../../../../public/foundation-team/piyush.svg";
import PriyaImage from "../../../../../../../public/foundation-team/priya.svg";
import SheetalImage from "../../../../../../../public/foundation-team/sheetal.svg";
import ShailajaImage from "../../../../../../../public/foundation-team/shailaja.svg";
import ShrutiImage from "../../../../../../../public/foundation-team/shruti.svg";
import RakhiImage from "../../../../../../../public/foundation-team/rakhi.svg";
import MonicaImage from "../../../../../../../public/foundation-team/monica.svg";
import Globe from "../../../../../../../public/core-team/globe.svg";
import LinkedinIcon from "../../../../../../../public/core-team/linkedin-icon.svg";
import Link from 'next/link';



const teamMembers = [
    {
      name: "Smita Jha",
      image: SmitaJhaImage,
      linkedin: "https://www.linkedin.com/in/smitajha",
      style: "5px"
    },
    {
      name: "Pawan Kumar",
      image: PawanImage,
      linkedin: "https://www.linkedin.com/in/pawankumarmp",
      style: "5px"
    },
    {
      name: "Rakhi Vipat",
      image: RakhiImage,
      linkedin: "https://www.linkedin.com/in/rakhivipat",
      style: "5px"
    },
    {
      name: "Monica",
      image: MonicaImage,
      linkedin: "https://www.linkedin.com/in/rtn-monica-hungund-6b04a2163",
      style: "5px"
    },
    {
      name: "Shailaja Vernekar",
      image: ShailajaImage,
      linkedin: "https://www.linkedin.com/in/shailaja",
      style: "5px"
    },
    {
      name: "Shruti Nair",
      image: ShrutiImage,
      linkedin: "https://www.linkedin.com/in/shrutinair1",
      style: "5px"
    },
    {
      name: "Sheetal More",
      image: SheetalImage,
      linkedin: "https://www.linkedin.com/in/sheetal-more-4461b4182",
      style: "5px"
    },
    {
      name: "Priya Koride",
      image: PriyaImage,
      linkedin: "https://www.linkedin.com/in/priya-srirambhat-k",
      style: "5px"
    },
    {
      name: "Piyush Patil",
      image: PiyushImage,
      linkedin: "https://www.linkedin.com/in/jcob1289",
      style: "5px"
    },
  ];

const FoundationTeam = () => {
  return (
    <div className={styles.container}>

        <Image
          src={Globe}
          alt="Globe"
          className={styles.globe}
          layout="fixed"
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
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className={styles.avatar}
                />
              ) : (
                <div className={styles.placeholder}></div>
              )}
              <a href={member.linkedin} target='_blank'>
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                width={20}
                height={20}
                className={styles.linkedin}
                />  
              </a>
            </div>
            <p className={styles.name}>{member.name}</p>
          </div>
        ))}
        <Link href={"#"} className={styles.manyMore}>& Many more</Link>
      </div>
    </div>
  );
};

export default FoundationTeam;
