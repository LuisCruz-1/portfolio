const projectsData = {
  //ATTENDANCE APP
  1: {
    "title": "Attendance APP",
    "subtitle": "Aplicación móvil para optimizar la toma de asistencia diaria",
    "date": "2023",
    "description": "Attendance APP es una aplicación móvil diseñada para optimizar y agilizar el proceso de toma de asistencia diaria en el Colegio ANAVI. El proyecto se centró en la creación de una herramienta eficiente que permitiera a los inspectores gestionar la asistencia de los estudiantes de manera rápida y efectiva, además de proporcionar funcionalidades para consultar registros anteriores y generar informes.",
    "image": "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    "link": ""
  },

  //ANAVI CRM
  2: {
    "title": "ANAVI CRM",
    "subtitle": "Aplicación de gestión integral para el Colegio ANAVI",
    "date": "2024",
    "description": "ANAVI CRM es una aplicación de gestión integral desarrollada para el Colegio ANAVI, diseñada para optimizar varios procesos críticos de la institución. El proyecto se centra en tres áreas principales: admisiones, gestión de vacacional, e inventario, con un módulo adicional para manejar solicitudes de los padres de familia.",
    "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    "link": ""
  },

  //ASISTENTE ANVYS
  3: {
    "title": "Asistente ANVYS",
    "subtitle": "Asistente virtual de IA para información de admisiones",
    "date": "2024",
    "description": "Asistente ANVYS es un proyecto innovador desarrollado para el Colegio ANAVI, que explora las capacidades de la inteligencia artificial en el contexto educativo. El objetivo principal fue crear un asistente virtual utilizando la API de OpenAI, específicamente entrenado con información sobre admisiones del colegio y capaz de ejecutar funciones específicas. El asistente se diseñó con dos modos de interacción: chat y voz.",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    "link": ""
  },

  //ALEXA SKILL
  4: {
    "title": "Alexa Skill - Idukay",
    "subtitle": "Acceso por voz a datos de estudiantes mediante Alexa e IA",
    "date": "2024",
    "description": "Este proyecto consistió en el desarrollo de una Alexa Skill personalizada para el Colegio ANAVI, diseñada para proporcionar acceso rápido y eficiente a la información de los estudiantes a través de comandos de voz. La skill integra la API de OpenAI Assistant y la API de Idukay para procesar consultas y recuperar datos de estudiantes de forma dinámica.",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    "link": "https://example.com"
  },

    //E-commerce para HBL Babygoods
  5: {
    "title": "E-commerce para HBL Babygoods",
    "subtitle": "Plataforma de comercio electrónico escalable para productos de bebé",
    "date": "2024",
    "description": "Este proyecto consistió en el desarrollo de una plataforma de comercio electrónico completa y escalable para HBL Babygoods, una empresa especializada en productos para bebés. La solución implementada ofrece un catálogo detallado de productos con variantes, funcionalidades avanzadas como compras al por mayor, cálculo dinámico de costos de envío y múltiples opciones de pago en línea.",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    "link": "https://example.com"
  }

};

const stackData = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", gridArea: "1 / 1" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", gridArea: "1 / 2" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", gridArea: "1 / 3" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", gridArea: "1 / 4" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", gridArea: "1 / 5" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", gridArea: "1 / 6" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", gridArea: "1 / 7" },
  { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg", gridArea: "1 / 8" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", gridArea: "1 / 9" },
  { name: "Power Automate", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_Power_Automate.svg", gridArea: "1 / 10" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", gridArea: "1 / 11" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg", gridArea: "2 / 1" },
  { name: "FlutterFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", gridArea: "2 / 2 / span 1 / span 2", isWide: true },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", gridArea: "2 / 4" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", gridArea: "2 / 5" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", gridArea: "2 / 6" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", gridArea: "2 / 7" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", gridArea: "2 / 8" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg", gridArea: "2 / 9" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg", gridArea: "2 / 10" },
  { name: "n8n", icon: "https://devicons.io/devicons/icons/n8n-icon.svg", gridArea: "2 / 11" }

];
