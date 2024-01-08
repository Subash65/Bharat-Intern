function validateForm() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    if (email === '' || !isValidEmail(email)) {
        alert('Please enter a valid email address or phone');
        return false;
    }

    if (password === '' || password.length < 4 || password.length > 60) {
        alert('Your password must contain between 4 and 60 characters.');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    // Replace this with your email validation logic
}

// Function to change the language
function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelect').value;

    const translations = {
        'en': {
            'signInTitle': 'Sign In',
            'emailLabel': 'Email or phone number',
            'passwordLabel': 'Password',
            'signInButton': 'Sign In',
            'rememberMeLabel': 'Remember me',
            'helpLink': 'Need help?',
            'newToNetflix': 'New to Netflix? ',
            'signUpLink': 'Sign up now',
            'recaptchaInfo': 'This page is protected by Google reCAPTCHA to ensure you\'re not a bot. ',
            'learnMoreLink': 'Learn more.',
            'faq': 'FAQ',
            'terms-of-use': 'Terms of Use',
            'help-center': 'Help Center',
            'privacy-policy': 'Privacy',
            'cookie-preference': 'Cookie Preferences',
            'corporate-information': 'Corporate Information',
            'selectLanguageLabel': 'Select Language:'
        },
        'fr': {
            'signInTitle': 'Connexion',
            'emailLabel': 'Adresse e-mail ou numéro de téléphone',
            'passwordLabel': 'Mot de passe',
            'signInButton': 'Se connecter',
            'rememberMeLabel': 'Se souvenir de moi',
            'helpLink': 'Besoin d\'aide ?',
            'newToNetflix': 'Nouveau sur Netflix ? ',
            'signUpLink': 'Inscrivez-vous maintenant',
            'recaptchaInfo': 'Cette page est protégée par Google reCAPTCHA pour vous assurer que vous n\'êtes pas un bot. ',
            'learnMoreLink': 'En savoir plus.',
            'faq': 'FAQ en français',
            'terms-of-use': 'Conditions d\'utilisation',
            'help-center': 'Centre d\'aide',
            'privacy-policy': 'Confidentialité',
            'cookie-preference': 'Préférences de cookies',
            'corporate-information': 'Informations sur l\'entreprise',
            'selectLanguageLabel': 'Sélectionner la langue :'
        },
        'es': {
            'signInTitle': 'Iniciar sesión',
            'emailLabel': 'Correo electrónico o número de teléfono',
            'passwordLabel': 'Contraseña',
            'signInButton': 'Iniciar sesión',
            'rememberMeLabel': 'Recuérdame',
            'helpLink': '¿Necesitas ayuda?',
            'newToNetflix': '¿Nuevo en Netflix? ',
            'signUpLink': 'Regístrate ahora',
            'recaptchaInfo': 'Esta página está protegida por Google reCAPTCHA para asegurarse de que no eres un robot. ',
            'learnMoreLink': 'Aprende más.',
            'faq': 'Preguntas frecuentes',
            'terms-of-use': 'Términos de uso',
            'help-center': 'Centro de ayuda',
            'privacy-policy': 'Privacidad',
            'cookie-preference': 'Preferencias de cookies',
            'corporate-information': 'Información corporativa',
            'selectLanguageLabel': 'Seleccionar idioma:'
        },
        'te': {
            'signInTitle': 'సైన్ ఇన్',
            'emailLabel': 'ఇమెయిల్ లేదా ఫోన్ నంబర్',
            'passwordLabel': 'పాస్వర్డ్',
            'signInButton': 'సైన్ ఇన్',
            'rememberMeLabel': 'నన్ను గుర్తుకో',
            'helpLink': 'సహాయం కావాలా?',
            'newToNetflix': 'Netflix కి కొనసాగించడంలో హెచ్చరిక! ',
            'signUpLink': 'ఇప్పటికే చేరడానికి',
            'recaptchaInfo': 'ఈ పేజీని గూగుల్ రిక్యాప్చాలతో సురక్షితంగా ఉంచింది, మీరు రోబోట్ కాదని ఖచ్చితం చేసుకుని. ',
            'learnMoreLink': 'మరింత అడ్డంగా.',
            'faq': 'అక్కడ అయితే ప్రశ్నలు',
            'terms-of-use': 'వాడుకరి యొక్క అవగాహనలు',
            'help-center': 'సహాయం కేంద్రం',
            'privacy-policy': 'గోప్యం',
            'cookie-preference': 'కుకీ ఇచ్చినంత',
            'corporate-information': 'కార్పొరేట్ సమాచారం',
            'selectLanguageLabel': 'భాషను ఎంచుకోండి:'
        },
        'hi': {
            'signInTitle': 'साइन इन करें',
            'emailLabel': 'ईमेल या फ़ोन नंबर',
            'passwordLabel': 'पासवर्ड',
            'signInButton': 'साइन इन करें',
            'rememberMeLabel': 'मुझे याद रखें',
            'helpLink': 'मदद चाहिए?',
            'newToNetflix': 'Netflix में नया हैं? ',
            'signUpLink': 'अभी साइन अप करें',
            'recaptchaInfo': 'यह पृष्ठ Google reCAPTCHA द्वारा सुरक्षित है ताकि आप एक बॉट नहीं हैं। ',
            'learnMoreLink': 'और जानें।',
            'faq': 'सामान्य प्रश्न',
            'terms-of-use': 'उपयोग की शर्तें',
            'help-center': 'सहायता केंद्र',
            'privacy-policy': 'गोपनीयता',
            'cookie-preference': 'कुकी पसंद',
            'corporate-information': 'कॉर्पोरेट सूचना',
            'selectLanguageLabel': 'भाषा चुनें:'
        }
        // Add more languages and translations as needed
    };

    // Update the text content of the specified elements based on the selected language
    Object.keys(translations[selectedLanguage]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[selectedLanguage][id];
        }
    });
}