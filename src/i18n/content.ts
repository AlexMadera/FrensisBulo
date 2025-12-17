export const languages = {
  en: 'English',
  nl: 'Nederlands',
  pa: 'Papiamentu',
  es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export interface NavLink {
  text: string;
  href: string;
}

export interface HeroSlide {
  image: string;
  alt: string;
}

export interface AboutSection {
  title: string;
  content: string;
}

export interface PriceItem {
  title: string;
  price: string;
  duration: string;
  features: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
  album: string;
}

export interface GalleryAlbum {
  id: string;
  name: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface SiteContent {
  nav: {
    links: NavLink[];
  };
  hero: {
    slides: HeroSlide[];
    logo: string;
    tagline: string;
  };
  about: {
    title: string;
    intro: string;
    image: string;
    sections: AboutSection[];
  };
  gallery: {
    title: string;
    subtitle: string;
    albums: GalleryAlbum[];
    images: GalleryImage[];
  };
  workingMethod: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
    backgroundImage: string;
  };
  prices: {
    title: string;
    subtitle: string;
    items: PriceItem[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  location: {
    title: string;
    latitude: number;
    longitude: number;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    formLabels: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    copyright: string;
  };
}

const heroSlides: HeroSlide[] = [
  { image: '/slides/slide1.jpg', alt: 'Massage therapy session' },
  { image: '/slides/slide2.jpg', alt: 'Professional massage' },
  { image: '/slides/slide3.jpg', alt: 'Relaxation therapy' },
];

const galleryAlbums: GalleryAlbum[] = [
  { id: 'all', name: 'All' },
  { id: 'therapy', name: 'Therapy' },
  { id: 'studio', name: 'Studio' },
];

const galleryImages: GalleryImage[] = [
  { src: '/gallery/gallery1.jpg', alt: 'Professional massage therapy session', album: 'therapy' },
  { src: '/gallery/gallery2.jpg', alt: 'Relaxation massage treatment', album: 'therapy' },
  { src: '/gallery/gallery3.jpg', alt: 'Massage therapy studio environment', album: 'studio' },
];

const testimonials: Record<Language, Testimonial[]> = {
  en: [
    {
      text: "Excellent therapist! Highly skilled, experienced, and very professional. Very happy with the service and results!",
      author: "Leann Molina",
      rating: 5
    },
    {
      text: "Frensis truly has magical hands. The professionalism is top notch and friendly atmosphere. After having a session your body feels renewed and light.",
      author: "Jahlina",
      rating: 5
    },
    {
      text: "Frensis is a great massage therapist. His service was excellent. He has taken time to listen and understand my problem.",
      author: "Tita Peterson",
      rating: 5
    },
    {
      text: "Amazing physical therapist. He not only relieves the tension with cracking but takes his time with various massage techniques.",
      author: "Kimberly Meyers",
      rating: 5
    },
    {
      text: "I'm a professional athlete and had been bothered by a sharp knee pain that he helped me with by stretching and cupping massage.",
      author: "Diegomar Markwell",
      rating: 4
    },
    {
      text: "I suffer from severe back and knee pain. I received the most relaxing therapy with warming and rare kneading techniques.",
      author: "Gloria Carter",
      rating: 4
    }
  ],
  nl: [
    {
      text: "De bindweefsel massage is echt een aanrader! Heb er echt profijt van gehad!",
      author: "Erik de Redelijkheid",
      rating: 5
    },
    {
      text: "Een fantastische massage! En dat gewoon bij ons op het kantoor!",
      author: "Frank Visser",
      rating: 5
    },
    {
      text: "Wat een fantastische massage en wat een service! Zeker een aanrader!!!!!",
      author: "Brigida Peterson",
      rating: 5
    }
  ],
  pa: [
    {
      text: "Excelente terapeuta! Hopi habil, ku eksperiensia, i masha profesional. Masha kontentu ku e servisio i resultadonan!",
      author: "Leann Molina",
      rating: 5
    },
    {
      text: "Frensis tin man di magia. E profesionalismo ta di haltu nivel i e ambiente ta amigabel.",
      author: "Jahlina",
      rating: 5
    }
  ],
  es: [
    {
      text: "¡Excelente terapeuta! Altamente capacitado, experimentado y muy profesional. ¡Muy contento con el servicio y los resultados!",
      author: "Leann Molina",
      rating: 5
    },
    {
      text: "Frensis tiene manos mágicas. El profesionalismo es de primera categoría y el ambiente es muy amigable.",
      author: "Jahlina",
      rating: 5
    }
  ]
};

export const content: Record<Language, SiteContent> = {
  en: {
    nav: {
      links: [
        { text: 'Home', href: '#home' },
        { text: 'Working Method', href: '#workingmethod' },
        { text: 'Gallery', href: '#gallery' },
        { text: 'About', href: '#about' },
        { text: 'Testimonials', href: '#testimonials' },
        { text: 'Prices', href: '#prices' },
        { text: 'Contact', href: '#contact' },
      ],
    },
    hero: {
      slides: heroSlides,
      logo: '/logo_fb.png',
      tagline: 'Massagetherapie Frensis Bulo provides you physical relaxation, also mental care and makes it possible for you to make a connection with your inner core.',
    },
    about: {
      title: 'About me',
      intro: 'My name is Frensis Bulo, a graduated physical therapist & massage therapist. My goal is to help people regain their physicality and maintain a healthy mindset. Furthermore, I am an ambitious, diligent and a studious person. In my free time I like to work as an experienced expert and spoken word artist. Peer coaching is also something very important to me.',
      image: '/frensis_bulo.png',
      sections: [
        {
          title: 'Passion',
          content: 'MassageTherapie Frensis Bulo (MTFB) stands for physical benefit and body efficiency. It fills me with joy when I can share my passion for my work with my clients.',
        },
        {
          title: 'Mission',
          content: 'MassageTherapie Frensis Bulo (MTFB) mission is to help people gain a better understanding of human physics. The massage treatments will facilitate the healing process and allow you to discover the wisdom of your body.',
        },
        {
          title: 'Vision',
          content: 'MassageTherapie Frensis Bulo (MTFB) stands for; professionalism, physiotherapy knowledge & comfort. Our future vision is to provide physiotherapy session with outstanding services.',
        },
      ],
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Discover our therapeutic journey',
      albums: galleryAlbums,
      images: galleryImages,
    },
    workingMethod: {
      title: 'Working Method',
      subtitle: 'Our professional approach to your well-being',
      steps: [
        {
          title: 'Consultation',
          description: 'We begin with a thorough intake to understand your physical needs and history.'
        },
        {
          title: 'Analysis',
          description: 'A physical assessment helps us identify the root cause of discomfort.'
        },
        {
          title: 'Treatment',
          description: 'Customized massage therapy using various techniques suited to your body.'
        },
        {
          title: 'Aftercare',
          description: 'Guidance on exercises and habits to maintain the benefits of your session.'
        }
      ],
      backgroundImage: '/gallery/gallery1.jpg',
    },
    prices: {
      title: 'Prices',
      subtitle: 'Below are the standard prices. Prefer a customized offer? Please contact me via the contact form!',
      items: [
        {
          title: 'Regular',
          price: '€100',
          duration: '60min',
          features: [
            'Relaxation/Detonation Massage',
            'Sport/Triggerpoint Massage',
            'Cupping Massage',
            'Stretching',
          ],
        },
        {
          title: 'Introduction',
          price: 'Contact',
          duration: '60min',
          features: [
            'Contact for pricing',
            'Ambulatory in between €10-15 extra',
            'Group offer possible',
          ],
        },
        {
          title: 'Weightloss Program',
          price: 'Contact',
          duration: '75min',
          features: [
            'Sporting Exercise circa 75 minutes',
            'Sport Massages',
            'Advice & Information',
            'TLC products including Iaso tea',
          ],
        },
      ],
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'Curious what customers are saying about Massagetherapie Frensis Bulo?',
      items: testimonials.en,
    },
    location: {
      title: 'Currently @ Netherlands',
      latitude: 51.926517,
      longitude: 4.462456,
    },
    contact: {
      title: 'Contact us',
      subtitle: 'Are you interested in an introduction? Do you want to receive a personal quote? Or do you have other questions?',
      name: 'Frensis Bulo Massagetherapie',
      address: 'Rotterdam',
      phone: '+31 6 189 776 07',
      email: 'info@frensisbulo.com',
      formLabels: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
      },
    },
    footer: {
      copyright: 'Frensis Bulo Massagetherapie',
    },
  },
  nl: {
    nav: {
      links: [
        { text: 'Home', href: '#home' },
        { text: 'Werkwijze', href: '#workingmethod' },
        { text: 'Galerij', href: '#gallery' },
        { text: 'Over', href: '#about' },
        { text: 'Testimonials', href: '#testimonials' },
        { text: 'Prijzen', href: '#prices' },
        { text: 'Contact', href: '#contact' },
      ],
    },
    hero: {
      slides: heroSlides,
      logo: '/logo_fb.png',
      tagline: 'Massagetherapie Frensis Bulo biedt u fysieke ontspanning, ook mentale zorg en maakt het mogelijk om een verbinding te maken met uw innerlijke kern.',
    },
    about: {
      title: 'Over mij',
      intro: 'Mijn naam is Frensis Bulo, een afgestudeerd fysiotherapeut & massagetherapeut. Mijn doel is om mensen te helpen hun lichamelijkheid terug te krijgen en een gezonde mindset te behouden. Daarnaast ben ik ambitieus, ijverig en leergierig. In mijn vrije tijd werk ik graag als ervaren expert en spoken word artist. Peer coaching is ook iets dat erg belangrijk voor mij is.',
      image: '/frensis_bulo.png',
      sections: [
        {
          title: 'Passie',
          content: 'MassageTherapie Frensis Bulo (MTFB) staat voor lichamelijk voordeel en lichaamsefficiëntie. Het maakt me blij als ik mijn passie voor mijn werk kan delen met mijn klanten.',
        },
        {
          title: 'Missie',
          content: 'De missie van MassageTherapie Frensis Bulo (MTFB) is om mensen te helpen een beter begrip te krijgen van de menselijke fysica. De massagebehandelingen vergemakkelijken het genezingsproces.',
        },
        {
          title: 'Visie',
          content: 'MassageTherapie Frensis Bulo (MTFB) staat voor; professionaliteit, fysiotherapie kennis & comfort. Onze toekomstvisie is om uitstekende fysiotherapie sessies aan te bieden.',
        },
      ],
    },
    gallery: {
      title: 'Galerij',
      subtitle: 'Ontdek onze therapeutische reis',
      albums: galleryAlbums,
      images: galleryImages,
    },
    workingMethod: {
      title: 'Werkwijze',
      subtitle: 'Onze professionele aanpak voor uw welzijn',
      steps: [
        {
          title: 'Consultatie',
          description: 'We beginnen met een grondige intake om uw fysieke behoeften te begrijpen.'
        },
        {
          title: 'Analyse',
          description: 'Een fysieke beoordeling helpt ons de oorzaak van ongemak te identificeren.'
        },
        {
          title: 'Behandeling',
          description: 'Aangepaste massagetherapie met technieken die bij uw lichaam passen.'
        },
        {
          title: 'Nazorg',
          description: 'Advies over oefeningen en gewoonten om de voordelen te behouden.'
        }
      ],
      backgroundImage: '/gallery/gallery1.jpg',
    },
    prices: {
      title: 'Prijzen',
      subtitle: 'Hieronder staan de standaardprijzen. Liever een op maat gemaakte offerte? Neem contact op via het contactformulier!',
      items: [
        {
          title: 'Regulier',
          price: '€100',
          duration: '60min',
          features: [
            'Ontspanning/Detonisatie Massage',
            'Sport/Triggerpoint Massage',
            'Cupping Massage',
            'Rekken & Strekken',
          ],
        },
        {
          title: 'Introductie',
          price: 'Contact',
          duration: '60min',
          features: [
            'Neem contact voor prijzen',
            'Ambulant tussen €10-15 extra',
            'Groepsofferte mogelijk',
          ],
        },
        {
          title: 'Weightloss Programma',
          price: 'Contact',
          duration: '75min',
          features: [
            'Sportief Bewegen circa 75 minuten',
            'Sport Massages',
            'Advies & Informatie',
            'TLC producten inclusief Iaso tea',
          ],
        },
      ],
    },
    testimonials: {
      title: 'Getuigenissen',
      subtitle: 'Benieuwd wat klanten zeggen over Massagetherapie Frensis Bulo?',
      items: testimonials.nl,
    },
    location: {
      title: 'Momenteel @ Nederland',
      latitude: 51.926517,
      longitude: 4.462456,
    },
    contact: {
      title: 'Neem contact op',
      subtitle: 'Ben je geïnteresseerd in een kennismaking? Wil je een persoonlijke offerte ontvangen? Of heb je andere vragen?',
      name: 'Frensis Bulo Massagetherapie',
      address: 'Rotterdam',
      phone: '+31 6 189 776 07',
      email: 'info@frensisbulo.com',
      formLabels: {
        name: 'Naam',
        email: 'E-mail',
        message: 'Bericht',
        submit: 'Verstuur Bericht',
      },
    },
    footer: {
      copyright: 'Frensis Bulo Massagetherapie',
    },
  },
  pa: {
    nav: {
      links: [
        { text: 'Página Inisial', href: '#home' },
        { text: 'Método di Trabou', href: '#workingmethod' },
        { text: 'Galería', href: '#gallery' },
        { text: 'Tokante', href: '#about' },
        { text: 'Testimonials', href: '#testimonials' },
        { text: 'Preisnan', href: '#prices' },
        { text: 'Kontakto', href: '#contact' },
      ],
    },
    hero: {
      slides: heroSlides,
      logo: '/logo_fb.png',
      tagline: 'Massagetherapie Frensis Bulo ta ofresé bo relahashon físiko, tambe kuido mental i ta hasi posibel pa bo hasi un konekshon ku bo núkleo interior.',
    },
    about: {
      title: 'Tokante di mi',
      intro: 'Mi nòmber ta Frensis Bulo, un fisioterapeuta gradua & terapeuta di masashi. Mi meta ta pa yuda hende rekuperá nan fisikalidat i mantené un mindset saludabel.',
      image: '/frensis_bulo.png',
      sections: [
        {
          title: 'Pashon',
          content: 'MassageTherapie Frensis Bulo (MTFB) ta pará pa benefisio físiko i efisiensia korporal. Mi ta yena ku alegria ora mi por kompartí mi pashon pa mi trabou ku mi klientenan.',
        },
        {
          title: 'Mishon',
          content: 'E mishon di MassageTherapie Frensis Bulo (MTFB) ta yuda hende haña un mihó komprondementu di físika humano. E tratamentonan di masashi lo fasilitá e proseso di kurashon.',
        },
        {
          title: 'Vishon',
          content: 'MassageTherapie Frensis Bulo (MTFB) ta nifiká: profeshonalidat, konosementu di fisioterapia & komodidat. Nos vishon di futuro ta pa ofresé seshonnan di fisioterapia ku servisio excelente.',
        },
      ],
    },
    gallery: {
      title: 'Galeria',
      subtitle: 'Deskubrí nos biaha terapéutiko',
      albums: galleryAlbums,
      images: galleryImages,
    },
    workingMethod: {
      title: 'Método di Trabou',
      subtitle: 'Nos aserkamentu profeshonal pa bo bienestar',
      steps: [
        {
          title: 'Konsulta',
          description: 'Nos ta kuminsá ku un intake pa komprondé bo nesesidatnan físiko.'
        },
        {
          title: 'Analisis',
          description: 'Un evaluashon físiko ta yuda nos identifiká e kousa di doló.'
        },
        {
          title: 'Tratamentu',
          description: 'Terapia di masashi personalisá usando téknikanan adekuá.'
        },
        {
          title: 'Kuido despues',
          description: 'Guia tokante ehersisio i kustumbernan pa mantene benefisionan.'
        }
      ],
      backgroundImage: '/gallery/gallery1.jpg',
    },
    prices: {
      title: 'Preisnan',
      subtitle: 'Aki bou ta e preisnan standard. Preferá un oferta personalisa? Tuma kontakto via e formulario!',
      items: [
        {
          title: 'Regular',
          price: '€100',
          duration: '60min',
          features: [
            'Masashi di Relahashon/Detonashon',
            'Masashi Deportivo/Triggerpoint',
            'Cupping Massage',
            'Stretch',
          ],
        },
        {
          title: 'Introdukshon',
          price: 'Kontakto',
          duration: '60min',
          features: [
            'Kontakto pa preis',
            'Ambulante entre €10-15 èkstra',
            'Oferta den grupo posibel',
          ],
        },
        {
          title: 'Programa pa baha peso',
          price: 'Kontakto',
          duration: '75min',
          features: [
            'Ehersisio deportivo serca 75 minuto',
            'Masashi Deportivo',
            'Konseho i Informashon',
            'Produktonan TLC inkluí Iaso tea',
          ],
        },
      ],
    },
    testimonials: {
      title: 'Testimonionan',
      subtitle: 'Kurioso kiko klientenan ta bisa di Massagetherapie Frensis Bulo?',
      items: testimonials.pa,
    },
    location: {
      title: 'Aworaki @ Hulanda',
      latitude: 51.926517,
      longitude: 4.462456,
    },
    contact: {
      title: 'Tuma kontakto',
      subtitle: 'Bo ta interesá den un introdukshon? Bo ke risibí un kotisashon personal? Of bo tin otro pregunta?',
      name: 'Frensis Bulo Massagetherapie',
      address: 'Rotterdam',
      phone: '+31 6 189 776 07',
      email: 'info@frensisbulo.com',
      formLabels: {
        name: 'Nòmber',
        email: 'Email',
        message: 'Mensahe',
        submit: 'Manda Mensahe',
      },
    },
    footer: {
      copyright: 'Frensis Bulo Massagetherapie',
    },
  },
  es: {
    nav: {
      links: [
        { text: 'Inicio', href: '#home' },
        { text: 'Método de Trabajo', href: '#workingmethod' },
        { text: 'Galería', href: '#gallery' },
        { text: 'Sobre', href: '#about' },
        { text: 'Testimonials', href: '#testimonials' },
        { text: 'Precios', href: '#prices' },
        { text: 'Contacto', href: '#contact' },
      ],
    },
    hero: {
      slides: heroSlides,
      logo: '/logo_fb.png',
      tagline: 'Massagetherapie Frensis Bulo te proporciona relajación física, también cuidado mental y te permite conectar con tu núcleo interior.',
    },
    about: {
      title: 'Sobre mí',
      intro: 'Mi nombre es Frensis Bulo, fisioterapeuta y masajista graduado. Mi objetivo es ayudar a las personas a recuperar su fisicalidad y mantener una mentalidad saludable.',
      image: '/frensis_bulo.png',
      sections: [
        {
          title: 'Pasión',
          content: 'MassageTherapie Frensis Bulo (MTFB) significa beneficio físico y eficiencia corporal. Me llena de alegría cuando puedo compartir mi pasión por mi trabajo con mis clientes.',
        },
        {
          title: 'Misión',
          content: 'La misión de MassageTherapie Frensis Bulo (MTFB) es ayudar a las personas a obtener una mejor comprensión de la física humana. Los tratamientos de masaje facilitarán el proceso de curación.',
        },
        {
          title: 'Visión',
          content: 'MassageTherapie Frensis Bulo (MTFB) significa: profesionalismo, conocimiento de fisioterapia y comodidad. Nuestra visión futura es proporcionar sesiones de fisioterapia con servicios sobresalientes.',
        },
      ],
    },
    gallery: {
      title: 'Galería',
      subtitle: 'Descubre nuestro viaje terapéutico',
      albums: galleryAlbums,
      images: galleryImages,
    },
    workingMethod: {
      title: 'Método de Trabajo',
      subtitle: 'Nuestro enfoque profesional para tu bienestar',
      steps: [
        {
          title: 'Consulta',
          description: 'Comenzamos con una evaluación exhaustiva para entender sus necesidades.'
        },
        {
          title: 'Análisis',
          description: 'Una evaluación física nos ayuda a identificar la causa raíz.'
        },
        {
          title: 'Tratamiento',
          description: 'Terapia de masaje personalizada utilizando varias técnicas.'
        },
        {
          title: 'Cuidado posterior',
          description: 'Orientación sobre ejercicios y hábitos para mantener los beneficios.'
        }
      ],
      backgroundImage: '/gallery/gallery1.jpg',
    },
    prices: {
      title: 'Precios',
      subtitle: 'A continuación se muestran los precios estándar. ¿Prefieres una oferta personalizada? ¡Contáctame a través del formulario!',
      items: [
        {
          title: 'Regular',
          price: '€100',
          duration: '60min',
          features: [
            'Masaje de Relajación/Detonación',
            'Masaje Deportivo/Punto Gatillo',
            'Masaje con Ventosas',
            'Estiramiento',
          ],
        },
        {
          title: 'Introducción',
          price: 'Contacto',
          duration: '60min',
          features: [
            'Contacto para precios',
            'Ambulatorio entre €10-15 extra',
            'Oferta grupal posible',
          ],
        },
        {
          title: 'Programa de Pérdida de Peso',
          price: 'Contacto',
          duration: '75min',
          features: [
            'Ejercicio deportivo circa 75 minutos',
            'Masajes Deportivos',
            'Consejo e Información',
            'Productos TLC incluyendo té Iaso',
          ],
        },
      ],
    },
    testimonials: {
      title: 'Testimonios',
      subtitle: '¿Curioso qué dicen los clientes sobre Massagetherapie Frensis Bulo?',
      items: testimonials.es,
    },
    location: {
      title: 'Actualmente @ Países Bajos',
      latitude: 51.926517,
      longitude: 4.462456,
    },
    contact: {
      title: 'Contáctanos',
      subtitle: '¿Estás interesado en una introducción? ¿Quieres recibir una cotización personal? ¿O tienes otras preguntas?',
      name: 'Frensis Bulo Massagetherapie',
      address: 'Rotterdam',
      phone: '+31 6 189 776 07',
      email: 'info@frensisbulo.com',
      formLabels: {
        name: 'Nombre',
        email: 'Correo',
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
      },
    },
    footer: {
      copyright: 'Frensis Bulo Massagetherapie',
    },
  },
};

export function getContent(lang: Language): SiteContent {
  return content[lang] || content[defaultLang];
}

export function isValidLanguage(lang: string): lang is Language {
  return lang in languages;
}
