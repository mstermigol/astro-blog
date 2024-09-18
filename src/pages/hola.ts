const images = import.meta.glob('/src/images/hero/*.jpg', { eager: true });

interface HeroSlide {
    bgImage: string;
    title: string;
    description: string;
    ctaText: string;
  }
  
  const HeroSlides: HeroSlide[] = [
    {
      bgImage: (images['/src/images/hero/hero-slide-1.jpg'] as { default: string }).default,
      title: "MECINTRAC",
      description: "Somos una empresa dedicada al desarrollo y fabricación de repuestos, mecanismos y equipos en materiales metálicos.",
      ctaText: "Contáctanos"
    },
    {
      bgImage: (images['/src/images/hero/hero-slide-2.jpg'] as { default: string }).default,
      title: "Innovación en Ingeniería",
      description: "Ofrecemos soluciones de alta calidad para la industria metalmecánica.",
      ctaText: "Nuestros Servicios"
    },
    {
      bgImage: (images['/src/images/hero/hero-slide-3.jpg'] as { default: string }).default,
      title: "Experiencia y Calidad",
      description: "Más de 20 años brindando excelencia en fabricación y diseño de piezas metálicas.",
      ctaText: "Conoce Más"
    }
  ];
  
  export default HeroSlides;
