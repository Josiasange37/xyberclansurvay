// XyberClan Interactive Survey and Partnership Form Questions Data (Bilingual: EN & FR)

export const uiTranslations = {
  en: {
    brand: "XYBERCLAN",
    portalSubtitle: "XYBERCLAN STUDIO PORTAL",
    portalTitle: "Design & Engine Collaboration Portal",
    portalDesc: "Welcome to the XyberClan collaboration ecosystem. Select an option below to perform an operational audit or propose a sponsorship tier.",
    auditBadge: "AUDIT WORKFLOWS",
    enterpriseTitle: "Enterprise Operational Survey",
    enterpriseDesc: "Evaluate bottlenecks in project tracking, client communications, or scope management. Request a customized SaaS roadmap from our design & engineering leads.",
    beginAudit: "Begin Operational Audit",
    collabBadge: "COLLABORATE & SPONSOR",
    partnershipTitle: "Partnership & Sponsorship",
    partnershipDesc: "Align with our mission. Pitch event support, local meetup sponsorships, co-branding campaigns, or developer bootcamp contributions.",
    proposePartnership: "Propose Partnership",
    restart: "Restart",
    restartSurvey: "Restart survey",
    back: "Back",
    backEdit: "Back & Edit",
    nextStep: "Next Step",
    review: "Review",
    stepBadge: "STEP",
    of: "OF",
    auditCompleted: "AUDIT COMPLETED",
    reviewTitle: "Review & Transmit Your Data",
    reviewDesc: "Review your choices below. You can send this report directly to our development squad via WhatsApp or secure email. We generally respond with audits within 24 hours.",
    transmissionReport: "TRANSMISSION REPORT",
    version: "XYBERCLAN // V1.0",
    repCredentials: "REPRESENTATIVE CREDENTIALS",
    companyLabel: "Company / Brand",
    leadNameLabel: "Lead Name",
    emailLabel: "Work Email",
    phoneLabel: "Direct Link",
    transmitWhatsApp: "Transmit via WhatsApp",
    transmitEmail: "Transmit via Email",
    statsTitle: "STUDIO STATS",
    stat1Title: "24h",
    stat1Desc: "Audit turnaround",
    stat2Title: "98%",
    stat2Desc: "Client Satisfaction",
    placeholderTextarea: "Write your ideas, guidelines, or sponsorship tier expectations here...",
    textareaHint: "Press Next Step or Ctrl+Enter to advance.",
    inputValidationAlert: "Please fill out all fields correctly to proceed.",
    notAvailable: "N/A"
  },
  fr: {
    brand: "XYBERCLAN",
    portalSubtitle: "PORTAIL DU STUDIO XYBERCLAN",
    portalTitle: "Portail de Collaboration Design & Code",
    portalDesc: "Bienvenue dans l'écosystème de collaboration XyberClan. Sélectionnez une option ci-dessous pour effectuer un audit opérationnel ou proposer un parrainage.",
    auditBadge: "AUDIT DE FLUX",
    enterpriseTitle: "Enquête Opérationnelle d'Entreprise",
    enterpriseDesc: "Évaluez les goulots d'étranglement dans le suivi de projet, la communication client ou la gestion du périmètre. Demandez une feuille de route SaaS sur mesure.",
    beginAudit: "Commencer l'Audit Opérationnel",
    collabBadge: "COLLABORER & PARRAINER",
    partnershipTitle: "Partenariat & Sponsoring",
    partnershipDesc: "Alignez-vous avec notre mission. Proposez un soutien d'événements, des meetups locaux, des campagnes de co-branding ou des bootcamps de développeurs.",
    proposePartnership: "Proposer un Partenariat",
    restart: "Recommencer",
    restartSurvey: "Recommencer l'enquête",
    back: "Retour",
    backEdit: "Retour & Modifier",
    nextStep: "Étape Suivante",
    review: "Récapitulatif",
    stepBadge: "ÉTAPE",
    of: "SUR",
    auditCompleted: "AUDIT TERMINÉ",
    reviewTitle: "Vérifier & Transmettre Vos Données",
    reviewDesc: "Vérifiez vos choix ci-dessous. Vous pouvez envoyer ce rapport directement à notre équipe de développement par WhatsApp ou par e-mail sécurisé. Nous répondons sous 24 heures.",
    transmissionReport: "RAPPORT DE TRANSMISSION",
    version: "XYBERCLAN // V1.0",
    repCredentials: "COORDONNÉES DU REPRÉSENTANT",
    companyLabel: "Entreprise / Marque",
    leadNameLabel: "Nom du Responsable",
    emailLabel: "E-mail Professionnel",
    phoneLabel: "Lien Direct / WhatsApp",
    transmitWhatsApp: "Transmettre via WhatsApp",
    transmitEmail: "Transmettre par E-mail",
    statsTitle: "STATS DU STUDIO",
    stat1Title: "24h",
    stat1Desc: "Délai de réponse de l'audit",
    stat2Title: "98%",
    stat2Desc: "Satisfaction Client",
    placeholderTextarea: "Rédigez vos idées, directives ou attentes de niveau de partenariat ici...",
    textareaHint: "Appuyez sur Étape Suivante ou Ctrl+Entrée pour continuer.",
    inputValidationAlert: "Veuillez remplir tous les champs correctement pour continuer.",
    notAvailable: "Non renseigné"
  }
};

export const xyberclanVision = {
  title: "XyberClan Studio",
  subtitle: "Design-To-Code Excellence",
  description: "XyberClan is a premium, high-fidelity software engineering and design studio. We specialize in building custom, high-performance web applications, automated operational workflows, and elite user experiences. Our mission is to eliminate tech friction for scaling enterprises and nurture a collaborative ecosystem of elite developers.",
  focusPoints: [
    {
      title: "Custom SaaS & Internal Tools",
      desc: "Tailored databases, automated CRMs, client portals, and streamlined developer task trackers."
    },
    {
      title: "State-of-the-Art UX/UI",
      desc: "Stunning, high-end visual design integrated with fluid, performant animations (GSAP, WebGL)."
    },
    {
      title: "Ecosystem Builder",
      desc: "Nurturing talent via developer bootcamps, tech meetups, open-source projects, and local tech hubs."
    }
  ]
};

export const surveyFlows = {
  en: {
    enterprise: {
      title: "Enterprise Survey",
      badge: "Operational Survey",
      intro: "Participate in the XYBERCLAN survey on cybersecurity, AI, and digital transformation in business.",
      steps: [
        {
          id: "step1",
          question: "General Information",
          description: "Please provide your company details and your role.",
          fields: [
            { label: "Company Name *", id: "companyName", type: "text" },
            { label: "Your Role *", id: "role", type: "text", placeholder: "e.g. CEO, CTO, HR Manager..." }
          ]
        },
        {
          id: "industry",
          question: "Industry Sector",
          description: "Select your company's primary sector.",
          options: [
            { label: "Technology & IT", value: "technologie" },
            { label: "Healthcare", value: "sante" },
            { label: "Finance & Insurance", value: "finance" },
            { label: "Retail & E-commerce", value: "commerce" },
            { label: "Manufacturing & Production", value: "industrie" },
            { label: "Business Services", value: "services" },
            { label: "Other", value: "autre" }
          ]
        },
        {
          id: "companySize",
          question: "Company Size",
          description: "How many employees does your company have?",
          options: [
            { label: "1 - 10 employees (Startup / Micro)", value: "1-10" },
            { label: "11 - 50 employees (Small Business)", value: "11-50" },
            { label: "51 - 250 employees (SME)", value: "51-250" },
            { label: "251 - 1000 employees (Mid-Market)", value: "251-1000" },
            { label: "1000+ employees (Enterprise)", value: "1000+" }
          ]
        },
        {
          id: "challenges",
          question: "What are your company's main current challenges?",
          description: "Multiple choices allowed.",
          multiple: true,
          options: [
            { label: "Cybersecurity and data protection", value: "cybersecurite" },
            { label: "Team productivity and efficiency", value: "productivite" },
            { label: "Digital transformation", value: "transformation_numerique" },
            { label: "Data management and analytics", value: "gestion_donnees" },
            { label: "Training and upskilling", value: "formation" },
            { label: "Automating repetitive tasks", value: "automatisation" }
          ]
        },
        {
          id: "priorities",
          question: "What are your technological priorities for the coming year?",
          description: "Describe your upcoming tech focus.",
          placeholder: "Write your priorities here..."
        },
        {
          id: "cyberIncidents",
          question: "Have you ever experienced cybersecurity incidents?",
          description: "Multiple choices allowed.",
          multiple: true,
          options: [
            { label: "Phishing attempts", value: "phishing" },
            { label: "Malware / Ransomware infection", value: "malware" },
            { label: "Data leak or loss", value: "fuite_donnees" },
            { label: "Account hacking", value: "piratage_compte" },
            { label: "No major incident so far", value: "aucun" }
          ]
        },
        {
          id: "securityMaturity",
          question: "How do you rate your cybersecurity maturity level?",
          description: "Select the most accurate description.",
          options: [
            { label: "Low (Few measures in place)", value: "faible" },
            { label: "Medium (Basic antivirus and backups)", value: "moyen" },
            { label: "Advanced (Security policy, regular audits)", value: "avance" },
            { label: "Expert (Dedicated team, SOC, continuous monitoring)", value: "expert" }
          ]
        },
        {
          id: "aiUsage",
          question: "Does your company already use Artificial Intelligence tools?",
          description: "Select your current AI adoption level.",
          options: [
            { label: "Yes, daily", value: "oui_beaucoup" },
            { label: "Yes, in testing phase / occasionally", value: "oui_un_peu" },
            { label: "No, but planned", value: "non_mais_prevu" },
            { label: "No, not at all", value: "non" }
          ]
        },
        {
          id: "aiTools",
          question: "If yes, which tools or use cases?",
          description: "List the AI tools you use.",
          placeholder: "e.g. ChatGPT, Copilot, content generation, data analysis..."
        },
        {
          id: "processesToAutomate",
          question: "Which processes would you like to automate in your company?",
          description: "Identify manual tasks that slow you down.",
          placeholder: "Write processes to automate here..."
        },
        {
          id: "trainingNeeds",
          question: "Which training topics interest your teams?",
          description: "Multiple choices allowed.",
          multiple: true,
          options: [
            { label: "Daily AI usage (ChatGPT, etc.)", value: "ia_bases" },
            { label: "Cybersecurity awareness (phishing, passwords)", value: "cyber_sensibilisation" },
            { label: "Automation (Zapier, Make, etc.)", value: "automatisation" },
            { label: "Mastering advanced collaborative tools", value: "outils_collaboratifs" }
          ]
        },
        {
          id: "skillGaps",
          question: "What skill gaps do you identify today?",
          description: "Describe missing competencies in your team.",
          placeholder: "Write skill gaps here..."
        },
        {
          id: "suggestions",
          question: "Specific expectations or recommendations?",
          description: "Let us know about future digital solutions you desire.",
          placeholder: "Write your suggestions here..."
        },
        {
          id: "xyberclanServices",
          question: "Which XYBERCLAN services might interest you?",
          description: "Multiple choices allowed.",
          multiple: true,
          options: [
            { label: "Cybersecurity audit", value: "audit_cyber" },
            { label: "AI training for your teams", value: "formation_ia" },
            { label: "Process automation consulting", value: "automatisation" },
            { label: "Global digital transformation consulting", value: "conseil_numerique" },
            { label: "Participation in expert webinars", value: "webinaires" },
            { label: "Receiving free resources (guides, white papers)", value: "ressources" }
          ]
        },
        {
          id: "contact",
          question: "Contact (Optional)",
          description: "Leave your details if you'd like to be contacted by our experts or receive our resources.",
          fields: [
            { label: "Full Name", id: "contactName", type: "text" },
            { label: "Professional Email", id: "contactEmail", type: "email" },
            { label: "Phone", id: "contactPhone", type: "tel" }
          ]
        }
      ]
    },
    partnership: {
      title: "Partnership Proposal",
      badge: "Partnership",
      intro: "Propose a partnership with XyberClan. Tell us about your organization and how you'd like to collaborate.",
      steps: [
        {
          id: "orgName",
          question: "Organization Information",
          description: "Tell us about your organization.",
          fields: [
            { label: "Organization / Brand Name *", id: "companyName", type: "text" },
            { label: "Your Name *", id: "name", type: "text", placeholder: "Full name" }
          ]
        },
        {
          id: "orgType",
          question: "Organization Type",
          description: "What type of organization are you?",
          options: [
            { label: "Tech Company / Startup", value: "tech_company" },
            { label: "Non-Profit / NGO", value: "nonprofit" },
            { label: "Educational Institution", value: "education" },
            { label: "Government / Public Sector", value: "government" },
            { label: "Media / Creative Agency", value: "media" },
            { label: "Individual / Freelancer", value: "individual" },
            { label: "Other", value: "autre" }
          ]
        },
        {
          id: "partnershipType",
          question: "Partnership Type",
          description: "What kind of partnership are you proposing?",
          options: [
            { label: "Event Sponsorship", value: "event_sponsorship" },
            { label: "Co-Branding Campaign", value: "co_branding" },
            { label: "Developer Bootcamp Support", value: "bootcamp" },
            { label: "Tech Meetup Sponsorship", value: "meetup" },
            { label: "Content Collaboration", value: "content" },
            { label: "Strategic Alliance", value: "strategic" },
            { label: "Other", value: "autre" }
          ]
        },
        {
          id: "budget",
          question: "Estimated Budget Range",
          description: "What is your approximate budget for this partnership?",
          options: [
            { label: "In-kind / Barter (resources, services)", value: "inkind" },
            { label: "Under $500", value: "under_500" },
            { label: "$500 - $2,000", value: "500_2000" },
            { label: "$2,000 - $5,000", value: "2000_5000" },
            { label: "$5,000 - $10,000", value: "5000_10000" },
            { label: "$10,000+", value: "10000_plus" },
            { label: "To be discussed", value: "tbd" }
          ]
        },
        {
          id: "proposal",
          question: "Partnership Proposal",
          description: "Describe your partnership idea in detail.",
          placeholder: "Describe your proposal, goals, and how you envision the collaboration..."
        },
        {
          id: "timeline",
          question: "Proposed Timeline",
          description: "When would you like this partnership to start?",
          options: [
            { label: "Immediately", value: "immediate" },
            { label: "Within 1 month", value: "1_month" },
            { label: "Within 3 months", value: "3_months" },
            { label: "Within 6 months", value: "6_months" },
            { label: "Flexible / No rush", value: "flexible" }
          ]
        },
        {
          id: "audienceReach",
          question: "Audience & Reach",
          description: "Tell us about your audience or community size.",
          placeholder: "e.g. 10K followers, 500 newsletter subscribers, 2000 event attendees..."
        },
        {
          id: "whyXyberClan",
          question: "Why XyberClan?",
          description: "What attracts you to partnering with XyberClan?",
          placeholder: "Tell us why you want to collaborate with us..."
        },
        {
          id: "contact",
          question: "Contact Information",
          description: "How can we reach you?",
          fields: [
            { label: "Full Name *", id: "contactName", type: "text" },
            { label: "Professional Email *", id: "contactEmail", type: "email" },
            { label: "Phone / WhatsApp", id: "contactPhone", type: "tel" }
          ]
        }
      ]
    }
  },
  fr: {
    enterprise: {
      title: "Enquête Entreprises",
      badge: "Enquête XYBERCLAN",
      intro: "Participez à l'enquête XYBERCLAN sur la cybersécurité, l'IA et la transformation numérique en entreprise.",
      steps: [
        {
          id: "step1",
          question: "Informations générales",
          description: "Parlez-nous de vous.",
          fields: [
            { label: "Nom de l'entreprise *", id: "companyName", type: "text" },
            { label: "Votre fonction *", id: "role", type: "text", placeholder: "Ex: Dirigeant, DSI, Responsable RH..." }
          ]
        },
        {
          id: "industry",
          question: "Secteur d'activité",
          description: "Sélectionnez votre secteur.",
          options: [
            { label: "Technologie & Informatique", value: "technologie" },
            { label: "Santé", value: "sante" },
            { label: "Finance & Assurance", value: "finance" },
            { label: "Commerce & E-commerce", value: "commerce" },
            { label: "Industrie & Production", value: "industrie" },
            { label: "Services aux entreprises", value: "services" },
            { label: "Autre", value: "autre" }
          ]
        },
        {
          id: "companySize",
          question: "Taille de l'entreprise",
          description: "Combien d'employés compte votre entreprise ?",
          options: [
            { label: "1 - 10 employés (TPE / Startup)", value: "1-10" },
            { label: "11 - 50 employés (Petite entreprise)", value: "11-50" },
            { label: "51 - 250 employés (PME)", value: "51-250" },
            { label: "251 - 1000 employés (ETI)", value: "251-1000" },
            { label: "Plus de 1000 employés (Grande entreprise)", value: "1000+" }
          ]
        },
        {
          id: "challenges",
          question: "Quels sont les principaux défis actuels de votre entreprise ?",
          description: "Plusieurs choix possibles.",
          multiple: true,
          options: [
            { label: "Cybersécurité et protection des données", value: "cybersecurite" },
            { label: "Productivité et efficacité des équipes", value: "productivite" },
            { label: "Transformation numérique", value: "transformation_numerique" },
            { label: "Gestion et exploitation des données", value: "gestion_donnees" },
            { label: "Formation et montée en compétences", value: "formation" },
            { label: "Automatisation des processus chronophages", value: "automatisation" }
          ]
        },
        {
          id: "priorities",
          question: "Quelles sont vos priorités technologiques pour l'année à venir ?",
          description: "Décrivez vos priorités technologiques.",
          placeholder: "Rédigez vos priorités ici..."
        },
        {
          id: "cyberIncidents",
          question: "Avez-vous déjà rencontré des incidents de cybersécurité ?",
          description: "Plusieurs choix possibles.",
          multiple: true,
          options: [
            { label: "Tentatives de Phishing", value: "phishing" },
            { label: "Infection par Malware / Ransomware", value: "malware" },
            { label: "Fuite ou perte de données", value: "fuite_donnees" },
            { label: "Piratage de comptes", value: "piratage_compte" },
            { label: "Aucun incident majeur à ce jour", value: "aucun" }
          ]
        },
        {
          id: "securityMaturity",
          question: "Comment évaluez-vous votre niveau de maturité en cybersécurité ?",
          description: "Sélectionnez le niveau le plus approprié.",
          options: [
            { label: "Faible (Peu de mesures en place)", value: "faible" },
            { label: "Moyen (Antivirus et sauvegardes basiques)", value: "moyen" },
            { label: "Avancé (Politique de sécurité, audits réguliers)", value: "avance" },
            { label: "Expert (Équipe dédiée, SOC, surveillance continue)", value: "expert" }
          ]
        },
        {
          id: "aiUsage",
          question: "Votre entreprise utilise-t-elle déjà des outils d'Intelligence Artificielle ?",
          description: "Sélectionnez votre niveau d'adoption.",
          options: [
            { label: "Oui, au quotidien", value: "oui_beaucoup" },
            { label: "Oui, en phase de test / occasionnellement", value: "oui_un_peu" },
            { label: "Non, mais c'est prévu", value: "non_mais_prevu" },
            { label: "Non, pas du tout", value: "non" }
          ]
        },
        {
          id: "aiTools",
          question: "Si oui, quels outils ou cas d'usage ?",
          description: "Listez les outils utilisés.",
          placeholder: "Ex: ChatGPT, Copilot, génération de contenu, analyse de données..."
        },
        {
          id: "processesToAutomate",
          question: "Quels processus aimeriez-vous automatiser dans votre entreprise ?",
          description: "Identifiez les tâches manuelles chronophages.",
          placeholder: "Rédigez les processus à automatiser ici..."
        },
        {
          id: "trainingNeeds",
          question: "Quels thèmes de formation vous intéressent pour vos équipes ?",
          description: "Plusieurs choix possibles.",
          multiple: true,
          options: [
            { label: "Utilisation de l'IA au quotidien (ChatGPT, etc.)", value: "ia_bases" },
            { label: "Sensibilisation à la cybersécurité (phishing, mots de passe)", value: "cyber_sensibilisation" },
            { label: "Automatisation (Zapier, Make, etc.)", value: "automatisation" },
            { label: "Maîtrise des outils collaboratifs avancés", value: "outils_collaboratifs" }
          ]
        },
        {
          id: "skillGaps",
          question: "Quelles lacunes de compétences identifiez-vous aujourd'hui ?",
          description: "Décrivez les compétences manquantes.",
          placeholder: "Rédigez vos lacunes ici..."
        },
        {
          id: "suggestions",
          question: "Attentes particulières ou recommandations ?",
          description: "Concernant les futures solutions numériques pour votre entreprise.",
          placeholder: "Rédigez vos suggestions ici..."
        },
        {
          id: "xyberclanServices",
          question: "Lesquels de nos services pourraient vous intéresser ?",
          description: "Plusieurs choix possibles.",
          multiple: true,
          options: [
            { label: "Audit de cybersécurité", value: "audit_cyber" },
            { label: "Formation IA pour vos équipes", value: "formation_ia" },
            { label: "Accompagnement en automatisation des processus", value: "automatisation" },
            { label: "Conseil global en transformation numérique", value: "conseil_numerique" },
            { label: "Participation à nos prochains webinaires experts", value: "webinaires" },
            { label: "Réception de ressources gratuites (guides, livres blancs)", value: "ressources" }
          ]
        },
        {
          id: "contact",
          question: "Contact (Optionnel)",
          description: "Laissez vos coordonnées si vous souhaitez être recontacté par nos experts ou recevoir nos ressources.",
          fields: [
            { label: "Nom complet", id: "contactName", type: "text" },
            { label: "Email professionnel", id: "contactEmail", type: "email" },
            { label: "Téléphone", id: "contactPhone", type: "tel" }
          ]
        }
      ]
    },
    partnership: {
      title: "Proposition de Partenariat",
      badge: "Partenariat",
      intro: "Proposez un partenariat avec XyberClan. Parlez-nous de votre organisation et de la manière dont vous souhaitez collaborer.",
      steps: [
        {
          id: "orgName",
          question: "Informations sur l'organisation",
          description: "Parlez-nous de votre organisation.",
          fields: [
            { label: "Nom de l'organisation / Marque *", id: "companyName", type: "text" },
            { label: "Votre Nom *", id: "name", type: "text", placeholder: "Nom complet" }
          ]
        },
        {
          id: "orgType",
          question: "Type d'organisation",
          description: "Quel type d'organisation êtes-vous ?",
          options: [
            { label: "Entreprise Tech / Startup", value: "tech_company" },
            { label: "Association / ONG", value: "nonprofit" },
            { label: "Institution éducative", value: "education" },
            { label: "Gouvernement / Secteur public", value: "government" },
            { label: "Agence média / Créative", value: "media" },
            { label: "Individuel / Freelance", value: "individual" },
            { label: "Autre", value: "autre" }
          ]
        },
        {
          id: "partnershipType",
          question: "Type de partenariat",
          description: "Quel type de partenariat proposez-vous ?",
          options: [
            { label: "Parrainage d'événement", value: "event_sponsorship" },
            { label: "Campagne de co-branding", value: "co_branding" },
            { label: "Soutien à un bootcamp développeur", value: "bootcamp" },
            { label: "Parrainage de meetup tech", value: "meetup" },
            { label: "Collaboration de contenu", value: "content" },
            { label: "Alliance stratégique", value: "strategic" },
            { label: "Autre", value: "autre" }
          ]
        },
        {
          id: "budget",
          question: "Budget estimé",
          description: "Quel est votre budget approximatif pour ce partenariat ?",
          options: [
            { label: "En nature / Troc (ressources, services)", value: "inkind" },
            { label: "Moins de 500 $", value: "under_500" },
            { label: "500 $ - 2 000 $", value: "500_2000" },
            { label: "2 000 $ - 5 000 $", value: "2000_5000" },
            { label: "5 000 $ - 10 000 $", value: "5000_10000" },
            { label: "Plus de 10 000 $", value: "10000_plus" },
            { label: "À discuter", value: "tbd" }
          ]
        },
        {
          id: "proposal",
          question: "Proposition de partenariat",
          description: "Décrivez votre idée de partenariat en détail.",
          placeholder: "Décrivez votre proposition, vos objectifs et comment vous imaginez la collaboration..."
        },
        {
          id: "timeline",
          question: "Calendrier proposé",
          description: "Quand souhaitez-vous que ce partenariat commence ?",
          options: [
            { label: "Immédiatement", value: "immediate" },
            { label: "Dans un mois", value: "1_month" },
            { label: "Dans 3 mois", value: "3_months" },
            { label: "Dans 6 mois", value: "6_months" },
            { label: "Flexible / Pas pressé", value: "flexible" }
          ]
        },
        {
          id: "audienceReach",
          question: "Audience et portée",
          description: "Parlez-nous de votre audience ou communauté.",
          placeholder: "Ex: 10K abonnés, 500 abonnés newsletter, 2000 participants événement..."
        },
        {
          id: "whyXyberClan",
          question: "Pourquoi XyberClan ?",
          description: "Qu'est-ce qui vous attire à collaborer avec XyberClan ?",
          placeholder: "Dites-nous pourquoi vous voulez collaborer avec nous..."
        },
        {
          id: "contact",
          question: "Coordonnées",
          description: "Comment pouvons-nous vous contacter ?",
          fields: [
            { label: "Nom complet *", id: "contactName", type: "text" },
            { label: "Email professionnel *", id: "contactEmail", type: "email" },
            { label: "Téléphone / WhatsApp", id: "contactPhone", type: "tel" }
          ]
        }
      ]
    }
  }
};
