import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-copyright">
                        <p>&copy; {currentYear} Hina Akbar. All rights reserved.</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://github.com/Hina139" target="_blank" rel="noopener noreferrer" className="social-link">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/hinaakbar139/" target="_blank" rel="noopener noreferrer" className="social-link">
                            LinkedIn
                        </a>
                      
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;