import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const iconSize = 40;

const SocialLinks: React.FC = () => {
    return (
        <div className="flex flex-col items-center space-y-4 pl-4">
            <a
                href="https://www.instagram.com/arkadiadancestudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-block"
            >
                <div
                    style={{ position: "relative", width: iconSize, height: iconSize }}
                    className="transition-transform duration-300 hover:scale-110"
                >
                    <FaInstagram
                        style={{
                            position: "absolute",
                            top: 4,
                            left: 4,
                            color: "black",
                            fontSize: iconSize,
                        }}
                    />
                    <FaInstagram
                        style={{ fontSize: iconSize, color: "white" }}
                    />
                </div>
            </a>

            <a
                href="https://www.tiktok.com/@arkadiadancestudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-block"
            >
                <div
                    style={{ position: "relative", width: iconSize, height: iconSize }}
                    className="transition-transform duration-300 hover:scale-110"
                >
                    <SiTiktok
                        style={{
                            position: "absolute",
                            top: 4,
                            left: 4,
                            color: "black",
                            fontSize: iconSize,
                        }}
                    />
                    <SiTiktok
                        style={{ fontSize: iconSize, color: "white" }}
                    />
                </div>
            </a>

            <a
                href="https://www.facebook.com/SagrarioAida"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-block"
            >
                <div
                    style={{ position: "relative", width: iconSize, height: iconSize }}
                    className="transition-transform duration-300 hover:scale-110"
                >
                    <FaFacebookF
                        style={{
                            position: "absolute",
                            top: 4,
                            left: 4,
                            color: "black",
                            fontSize: iconSize,
                        }}
                    />
                    <FaFacebookF
                        style={{ fontSize: iconSize, color: "white" }}
                    />
                </div>
            </a>
        </div>
    );
};

export default SocialLinks;
