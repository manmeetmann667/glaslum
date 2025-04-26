export const revealElements = () => {
  const elements = document.querySelectorAll('.reveal');
  
  const reveal = () => {
    elements.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  };
  
  window.addEventListener('scroll', reveal);
  // Initial check
  reveal();
  
  return () => {
    window.removeEventListener('scroll', reveal);
  };
};

export const parallaxEffect = () => {
  const handleScroll = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach((element) => {
      const distanceY = window.pageYOffset;
      const speed = element.getAttribute('data-speed') || 0.2;
      
      element.style.transform = `translateY(${distanceY * speed}px)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};