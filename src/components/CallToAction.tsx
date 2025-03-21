
import React from 'react';

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-blue-100/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in">
            Comece Agora
          </span>
          
          <h2 className="heading-lg mb-6 opacity-0 animate-fade-in animate-delay-100">
            Transforme sua experiência digital com nosso chatbot educacional
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in animate-delay-200">
            Experimente agora mesmo nosso chatbot no WhatsApp e comece a desenvolver habilidades 
            críticas para navegar com segurança no mundo digital.
          </p>
          
          <div className="opacity-0 animate-fade-in animate-delay-300">
            <a 
              href="https://wa.me/5561996749762?text=Quero%20saber%20mais%20sobre%20o%20chatbot%20educacional!" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 shadow-sm"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M19.3 8.92C19.1 8.09 18.8 7.55 18.5 7C18.1 6.37 17.6 5.82 17.1 5.31C16.5 4.81 15.9 4.35 15.3 4.06C14.8 3.76 14.2 3.46 13.4 3.26C12.5 3.06 11.6 2.96 10.7 3.06C9.9 3.06 9.1 3.16 8.2 3.36C7.4 3.56 6.8 3.76 6.2 4.16C5.6 4.46 5 4.91 4.5 5.41C3.9 5.92 3.5 6.47 3.1 7.1C2.8 7.64 2.5 8.29 2.3 9.02C2.1 9.85 2 10.68 2 11.51C2 12.45 2.1 13.28 2.3 14.11C2.5 14.94 2.8 15.58 3.1 16.12C3.4 16.66 3.8 17.2 4.2 17.6C4.6 18.01 5 18.41 5.5 18.71C6 19.01 6.5 19.21 7.1 19.41C7.8 19.61 8.4 19.71 9.1 19.71H9.3C9.4 19.71 9.6 19.71 9.7 19.71C10.9 19.71 12 19.51 13.1 19.11C14.2 18.71 15.1 18.21 15.7 17.71C16.4 17.11 16.9 16.52 17.4 15.82C17.9 15.12 18.2 14.43 18.4 13.83C18.7 13.13 18.8 12.53 18.9 12.04C18.9 11.94 18.9 11.84 18.9 11.84V11.54C19 10.88 19 10.11 19 10.01C19 9.91 19 9.71 18.9 9.61C18.9 9.41 18.6 9.31 18.4 9.41C18.2 9.51 18 9.71 18 9.91V10.01C18 10.11 18 10.21 18 10.31V10.61C18 10.71 18 10.81 17.9 11.01C17.8 11.51 17.7 12.01 17.5 12.51C17.3 13.11 16.9 13.8 16.5 14.4C16 15 15.5 15.5 14.9 16C14.3 16.5 13.5 16.9 12.5 17.2C11.5 17.5 10.5 17.7 9.5 17.6H9.4H9.2C8.7 17.6 8.2 17.5 7.6 17.3C7.1 17.1 6.7 16.9 6.3 16.7C5.9 16.5 5.5 16.1 5.2 15.8C4.8 15.4 4.5 15 4.3 14.6C4 14.1 3.8 13.6 3.6 12.9C3.4 12.2 3.4 11.5 3.4 10.8C3.4 10.1 3.5 9.4 3.7 8.8C3.9 8.1 4.1 7.6 4.4 7.1C4.7 6.6 5 6.1 5.4 5.8C5.8 5.4 6.2 5.1 6.7 4.8C7.2 4.5 7.7 4.3 8.4 4.1C9.1 3.9 9.8 3.9 10.5 3.9C11.2 3.9 11.9 4 12.6 4.2C13.3 4.4 13.8 4.6 14.2 4.8C14.7 5.1 15.1 5.4 15.5 5.8C15.9 6.2 16.2 6.6 16.5 7.1C16.7 7.5 16.9 8 17.1 8.7C17.3 9.4 17.3 10.1 17.3 10.8V11.1V11.3C17.3 11.5 17.5 11.7 17.7 11.7C17.9 11.7 18.1 11.5 18.1 11.3V11.2V10.9V10.7C19.5 9.9 19.5 9.85 19.3 8.92Z" fill="currentColor"/>
                <path d="M7.80078 13.3995C7.70078 13.4995 7.60078 13.5995 7.50078 13.6995C7.40078 13.7995 7.30078 13.9995 7.30078 14.1995C7.30078 14.3995 7.40078 14.4995 7.40078 14.5995C7.50078 14.6995 7.60078 14.7995 7.70078 14.7995C7.70078 14.7995 7.80078 14.7995 7.90078 14.7995C7.90078 14.7995 7.90078 14.7995 8.00078 14.7995C8.10078 14.7995 8.20078 14.7995 8.30078 14.6995C8.30078 14.6995 8.40078 14.6995 8.40078 14.5995C8.40078 14.5995 8.50078 14.4995 8.50078 14.3995C8.50078 14.2995 8.50078 14.1995 8.40078 14.0995C8.40078 13.9995 8.30078 13.9995 8.20078 13.8995C8.20078 13.8995 8.10078 13.7995 8.00078 13.7995C8.00078 13.7995 7.90078 13.7995 7.80078 13.7995C8.00078 13.8995 7.90078 13.3995 7.80078 13.3995Z" fill="currentColor"/>
                <path d="M13.5 13.3994C13.4 13.4994 13.3 13.5994 13.2 13.6994C13.1 13.7994 13 13.9994 13 14.1994C13 14.3994 13.1 14.4994 13.1 14.5994C13.2 14.6994 13.3 14.7994 13.4 14.7994C13.4 14.7994 13.5 14.7994 13.6 14.7994C13.6 14.7994 13.6 14.7994 13.7 14.7994C13.8 14.7994 13.9 14.7994 14 14.6994C14 14.6994 14.1 14.6994 14.1 14.5994C14.1 14.5994 14.2 14.4994 14.2 14.3994C14.2 14.2994 14.2 14.1994 14.1 14.0994C14.1 13.9994 14 13.9994 13.9 13.8994C13.9 13.8994 13.8 13.7994 13.7 13.7994C13.7 13.7994 13.6 13.7994 13.5 13.7994C13.6 13.8994 13.6 13.3994 13.5 13.3994Z" fill="currentColor"/>
                <path d="M15.5 9.30078C15.3 8.80078 15 8.50078 14.7 8.30078C14.3 8.10078 14 8.00078 13.7 8.00078C13.3 8.00078 13 8.10078 12.9 8.10078H12.8C12.8 8.10078 12.7 8.10078 12.6 8.20078C12.2 8.30078 11.9 8.40078 11.6 8.60078C11.3 8.80078 11.1 9.00078 10.9 9.30078C10.7 9.60078 10.5 9.90078 10.5 10.3008C10.4 10.7008 10.4 11.1008 10.5 11.6008C10.6 12.1008 10.7 12.5008 10.9 12.9008C11.1 13.3008 11.4 13.7008 11.7 13.9008C12 14.2008 12.4 14.3008 12.8 14.3008C12.9 14.3008 12.9 14.3008 13 14.3008C13.4 14.3008 13.9 14.1008 14.2 13.9008C14.6 13.7008 14.8 13.4008 15 13.1008C15.2 12.8008 15.3 12.5008 15.4 12.2008C15.5 11.9008 15.5 11.6008 15.5 11.4008V11.2008V11.1008C15.5 10.6008 15.5 10.1008 15.5 9.80078C15.6 9.70078 15.6 9.50078 15.5 9.30078ZM14.2 11.6008C14.2 11.7008 14.2 11.8008 14.1 12.0008C14.1 12.2008 14 12.3008 13.9 12.5008C13.8 12.7008 13.7 12.8008 13.5 12.9008C13.3 13.0008 13.1 13.1008 12.9 13.1008C12.7 13.1008 12.5 13.0008 12.4 12.9008C12.2 12.8008 12.1 12.6008 12 12.4008C11.9 12.2008 11.8 11.9008 11.8 11.6008C11.8 11.3008 11.8 11.0008 11.8 10.8008C11.8 10.6008 11.9 10.3008 12 10.1008C12.1 9.90078 12.2 9.80078 12.4 9.70078C12.6 9.60078 12.7 9.50078 12.9 9.50078H13C13.2 9.50078 13.3 9.60078 13.5 9.70078C13.7 9.80078 13.8 10.0008 13.9 10.2008C14 10.4008 14.1 10.5008 14.1 10.7008C14.1 10.9008 14.2 11.0008 14.2 11.2008V11.3008V11.6008Z" fill="currentColor"/>
                <path d="M9.40005 9.30078C9.20005 8.80078 8.90005 8.50078 8.60005 8.30078C8.20005 8.10078 7.90005 8.00078 7.60005 8.00078C7.20005 8.00078 6.90005 8.10078 6.80005 8.10078H6.70005C6.70005 8.10078 6.60005 8.10078 6.50005 8.20078C6.10005 8.30078 5.80005 8.40078 5.50005 8.60078C5.20005 8.80078 5.00005 9.00078 4.80005 9.30078C4.60005 9.60078 4.40005 9.90078 4.40005 10.3008C4.30005 10.7008 4.30005 11.1008 4.40005 11.6008C4.50005 12.1008 4.60005 12.5008 4.80005 12.9008C5.00005 13.3008 5.30005 13.7008 5.60005 13.9008C5.90005 14.2008 6.30005 14.3008 6.70005 14.3008C6.80005 14.3008 6.80005 14.3008 6.90005 14.3008C7.30005 14.3008 7.80005 14.1008 8.10005 13.9008C8.50005 13.7008 8.70005 13.4008 8.90005 13.1008C9.10005 12.8008 9.20005 12.5008 9.30005 12.2008C9.40005 11.9008 9.40005 11.6008 9.40005 11.4008V11.2008V11.1008C9.40005 10.6008 9.40005 10.1008 9.40005 9.80078C9.50005 9.70078 9.50005 9.50078 9.40005 9.30078ZM8.10005 11.6008C8.10005 11.7008 8.10005 11.8008 8.00005 12.0008C8.00005 12.2008 7.90005 12.3008 7.80005 12.5008C7.70005 12.7008 7.60005 12.8008 7.40005 12.9008C7.20005 13.0008 7.00005 13.1008 6.80005 13.1008C6.60005 13.1008 6.40005 13.0008 6.30005 12.9008C6.10005 12.8008 6.00005 12.6008 5.90005 12.4008C5.80005 12.2008 5.70005 11.9008 5.70005 11.6008C5.70005 11.3008 5.70005 11.0008 5.70005 10.8008C5.70005 10.6008 5.80005 10.3008 5.90005 10.1008C6.00005 9.90078 6.10005 9.80078 6.30005 9.70078C6.50005 9.60078 6.60005 9.50078 6.80005 9.50078H6.90005C7.10005 9.50078 7.20005 9.60078 7.40005 9.70078C7.60005 9.80078 7.70005 10.0008 7.80005 10.2008C7.90005 10.4008 8.00005 10.5008 8.00005 10.7008C8.00005 10.9008 8.10005 11.0008 8.10005 11.2008V11.3008V11.6008Z" fill="currentColor"/>
              </svg>
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-primary/10 shadow-soft opacity-0 animate-scale-in animate-delay-400">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg 
                className="w-8 h-8 text-primary" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Desenvolvido para estudantes da EPT</h3>
              <p className="text-muted-foreground">
                Nosso chatbot foi criado especificamente para atender às necessidades dos estudantes da 
                Educação Profissional e Tecnológica, oferecendo recursos que promovem o desenvolvimento 
                do pensamento crítico na cibercultura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
