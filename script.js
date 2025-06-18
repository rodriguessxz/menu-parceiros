document.addEventListener('DOMContentLoaded', function() {
  // Dados dos parceiros
  const partnersData = [
    {
      segment: "Jurídico",
      name: "Pena & Silveira Advogados",
      image: "images/pena-silveira.jpg",
      description: "Assessoria jurídica exclusiva para bares e restaurantes. Associado Abrasel tem desconto nos serviços.",
      contacts: [
        { icon: "fas fa-envelope", text: "contato@penasilveira.com.br" },
        { icon: "fas fa-phone-alt", text: "(31) 98245-6651" },
        { icon: "fas fa-globe", text: "bareserestaurantes.adv.br", link: "http://www.bareserestaurantes.adv.br" },
        { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531982456651", isButton: true }
      ]
    },
    {
      segment: "Seguros e Benefícios",
      name: "BIS Soluções",
      image: "images/bis.jpg",
      description: "Soluções em seguros e benefícios para funcionários dos associados Abrasel.",
      contacts: [
        { icon: "fas fa-envelope", text: "luizhenrique@bissolucoes.com.br" },
        { icon: "fas fa-phone-alt", text: "(31) 98448-7057" },
        { icon: "fas fa-globe", text: "bissolucoes.com.br", link: "https://bissolucoes.com.br" },
        { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531984487057", isButton: true }
      ]
    },
    {
      segment: "Licenciamento e Regulação",
      name: "Urbanas Regularizações",
      image: "images/urbanas.jpg",
      description: "Consultoria gratuita em licenciamento com 20% de desconto em serviços de regularização.",
      contacts: [
        { icon: "fas fa-envelope", text: "comercial@urbanasregularizacoes.com.br" },
        { icon: "fas fa-phone-alt", text: "(31) 99611-0444" },
        { icon: "fas fa-globe", text: "urbanasregularizacoes.com.br", link: "http://www.urbanasregularizacoes.com.br" },
        { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531996110444", isButton: true }
      ]
    },
    {
  segment: "Marketing e Comunicação",
  name: "Forno Criativo",
  image: "images/forno-criativo.jpg",
  description: "Assessoria de marketing especializada no setor de alimentação.",
  contacts: [
    { icon: "fas fa-envelope", text: "william@multien.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 99115-6941" },
    { icon: "fas fa-globe", text: "fornocriativo.com.br", link: "https://www.fornocriativo.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531991156941", isButton: true },
  ]
},
    {
      segment: "Consultoria e Gestão",
      name: "MaxUp Consultoria",
      image: "images/maxup.jpg",
      description: "Consultoria de gestão com 10% de desconto para associados Abrasel.",
      contacts: [
        { icon: "fas fa-envelope", text: "contato@maxupconsultoria.com.br" },
        { icon: "fas fa-phone-alt", text: "(31) 97330-1144" },
        { icon: "fas fa-globe", text: "maxupconsultoria.com.br", link: "http://www.maxupconsultoria.com.br" },
        { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531973301144", isButton: true }
      ]
    },
   {
  segment: "Energia e Sustentabilidade",
  name: "Maya Energy",
  image: "images/maya.jpg",
  description: "Referência em eficiência energética com foco em energia solar, hídrica e mercado livre.",
  contacts: [
    { icon: "fas fa-envelope", text: "eric.mota@mayaenergy.com" },
    { icon: "fas fa-phone-alt", text: "(31) 99789-7800" },  // TELEFONE ADICIONADO AQUI
    { icon: "fas fa-globe", text: "assinemaya.com.br", link: "https://www.assinemaya.com.br" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531997897800", isButton: true }  // LINK DO WHATSAPP GERADO AUTOMATICAMENTE
  ]
},
    {
      segment: "Treinamentos e Mentorias",
      name: "Ricardo Maria Tranças",
      image: "images/ricardo.jpg",
      description: "Mentorias, workshops e treinamentos práticos com 10% de desconto para associados.",
      contacts: [
        { icon: "fas fa-envelope", text: "william@multimidiaconsultoria.com.br" },
        { icon: "fas fa-phone-alt", text: "(31) 99115-6941" },
        { icon: "fas fa-globe", text: "ricardomariatrancas.com.br", link: "https://www.ricardomariatrancas.com.br" },
        { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531991156941", isButton: true }
      ]
    },
    {
  segment: "Loteria",
  name: "CMSL - Consórcio Mineira da Sorte",
  image: "images/cmsl.jpg",
  description: "Operadora oficial dos jogos Raspadinha Mineira e Trem das 11. Associados Abrasel recebem: 9% de comissão (maior que o mercado), kits promocionais mensais exclusivos e material de ponto de venda gratuito.",
  contacts: [
    { icon: "fas fa-phone-alt", text: "(31) 99898-4271" },
    { icon: "fas fa-envelope", text: "faleconosco@msloteria.com.br" },
    { icon: "fas fa-globe", text: "raspadinha.com.br", link: "https://raspadinha.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531998984271", isButton: true },
  ]
}
  ];

  // Elementos do DOM
  const partnersContainer = document.querySelector('.partners-container');
  const filterSelect = document.getElementById('filtro-segmento');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const headerLogo = document.querySelector('.logo-container');
  const logoImage = document.querySelector('.logo-apresentacao');

  // Função para renderizar os parceiros
  function renderPartners(segment = 'todos') {
    partnersContainer.innerHTML = '';
    
    const filteredPartners = segment === 'todos' 
      ? partnersData 
      : partnersData.filter(partner => partner.segment === segment);
    
    if (filteredPartners.length === 0) {
      partnersContainer.innerHTML = '<p class="no-results">Nenhum parceiro encontrado nesta categoria.</p>';
      return;
    }
    
    filteredPartners.forEach(partner => {
      const partnerCard = document.createElement('div');
      partnerCard.className = 'partner-card';
      
      let contactsHTML = '';
      partner.contacts.forEach(contact => {
        if (contact.link) {
          if (contact.isButton) {
            contactsHTML += `
              <a href="${contact.link}" target="_blank" class="whatsapp-btn">
                <i class="${contact.icon}"></i> ${contact.text}
              </a>
            `;
          } else {
            contactsHTML += `
              <p><a href="${contact.link}" target="_blank"><i class="${contact.icon}"></i> ${contact.text}</a></p>
            `;
          }
        } else {
          contactsHTML += `
            <p><i class="${contact.icon}"></i> ${contact.text}</p>
          `;
        }
      });
      
      partnerCard.innerHTML = `
        <img src="${partner.image}" alt="${partner.name}" class="partner-img">
        <div class="partner-content">
          <h3>${partner.name}</h3>
          <p>${partner.description}</p>
          <div class="partner-contact">
            ${contactsHTML}
          </div>
        </div>
      `;
      
      partnersContainer.appendChild(partnerCard);
    });
  }

  // Filtro por select
  filterSelect.addEventListener('change', function() {
    const selectedSegment = this.value;
    renderPartners(selectedSegment);
    
    // Atualizar tabs ativas
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.segment === selectedSegment || 
          (selectedSegment === 'todos' && btn.dataset.segment === 'todos')) {
        btn.classList.add('active');
      }
    });
  });

  // Filtro por tabs
  tabButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const segment = this.dataset.segment;
      
      // Atualizar tabs ativas
      tabButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Atualizar select
      filterSelect.value = segment;
      
      // Renderizar parceiros
      renderPartners(segment);
    });
  });

  // Navegação suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Atualizar menu ativo
        document.querySelectorAll('.nav-menu a').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });

  // Menu ativo ao rolar
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        document.querySelectorAll('.nav-menu a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Efeito de parallax para a logo de fundo
  window.addEventListener('scroll', function() {
    const logoBg = document.querySelector('.logo-background');
    if (logoBg) {
      const scrollValue = window.scrollY;
      logoBg.style.transform = `scale(${1 + scrollValue * 0.0005})`;
      logoBg.style.opacity = `${0.15 - scrollValue * 0.0005}`;
    }
  });

  // Efeito de hover na logo do header
  if (headerLogo && logoImage) {
    headerLogo.addEventListener('mouseenter', function() {
      logoImage.style.transform = 'rotate(15deg) scale(1.1)';
    });
    
    headerLogo.addEventListener('mouseleave', function() {
      logoImage.style.transform = 'rotate(0) scale(1)';
    });
  }

  // Carregar todos os parceiros inicialmente
  renderPartners();
});