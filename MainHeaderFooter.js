class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <header class="header">
            <div class="container">
                <a href="Home.php" class="Logo">LinkSpam</a> 
                <nav class="navbar">
                    <a href="About.html">About</a>
                    <a href="Contact.html">Contact</a>
                    <a href="home.html #News">News</a> 
                    <a href="Login.html">Sign-in</a>   
                </nav>
                <div id="menu-btn" class="fas fa-bars"></div> 
            </div>
        </header>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
        `
        <footer>
            <div class="container">
                <div class="topfooter">
                    <a href="Home.php" class="Logo">LinkSpam</a> 
                    <div class="socials">
                        <i href="#" class="fab fa-facebook-f"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
                <hr/>
                <div class="footlinks">
                    <div id="copyright">
                        <p>©2025 Linkspam</p>
                    </div>
                    <div id="T_C">
                        <a href="About.htl">About</a>
                        <a href="About.html #sectionAboutContact">Help</a>
                        <a href="TermsCondition.html">Term</a>
                        <a href="PrivacyPolicy.html">Policy</a>
                    </div>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define(`special-header`, SpecialHeader)
customElements.define(`special-footer`, SpecialFooter)