/* Global site configuration */
const SITE_CONFIG = {
    // Site information
    siteName: "Dr. Jael Joshie Frank Núñez",
    siteUrl: "https://jaelfrank.github.io/joshie-frank-personal-page/",
    description: "Médico, Arquitecto de la Mente. Integrando psiquiatría clínica con desarrollo de software.",
    
    // Contact information
    contact: {
        email: "jael.frank@ejemplo.com", // Update with real email
        linkedin: "https://www.linkedin.com/in/jael-frank/", // Update with real LinkedIn
        twitter: "https://twitter.com/jaelfrank", // Update with real Twitter
        github: "https://github.com/jaelfrank" // Update with real GitHub
    },
    
    // Analytics (if needed)
    analytics: {
        googleAnalyticsId: null, // Add GA4 ID if needed: "G-XXXXXXXXXX"
        gtmId: null // Add GTM ID if needed: "GTM-XXXXXXX"
    },
    
    // Features
    features: {
        darkMode: true,
        animations: true,
        socialSharing: true,
        contactForm: false // Future feature
    },
    
    // SEO
    seo: {
        keywords: ["psiquiatría", "salud mental", "desarrollo software", "médico", "tecnología"],
        author: "Dr. Jael Joshie Frank Núñez",
        language: "es"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
