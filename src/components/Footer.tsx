import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const EMAIL = "paulinewebdeveloper@gmail.com";

export default function Footer() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copié !");
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="footerContainer">
      <style>{styles}</style>
      <p className="footerName">© 2026 Pauline Havez</p>
      <p className="footerContact">
        <a
          href="https://github.com/PaulineHavez"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/pauline-havez-b5943724b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
        <button
          onClick={copyEmail}
          className="emailButton"
          aria-label="Copier l'adresse email"
        >
          <IoMdMail size={22} />
        </button>
      </p>
    </div>
  );
}

const styles = `
.footerContainer {
   display: flex;
   justify-content: space-between;
   padding: 16px;
}

.footerContact {
   display: flex;
   flex-direction: column;
   gap: 6px;
}

.footerName {
   align-self: flex-end;
   color: #444040;
   font-size: 14px;
   margin-left: 8px;
}
`;
