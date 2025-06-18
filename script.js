document.addEventListener('DOMContentLoaded', function() {
  // Dados dos parceiros ORIGINAIS (apenas ajustando os segmentos conforme nova categorização)
  const partnersData = [
    // 1. Jurídico (mantido separado)
    {
      segment: "Jurídico", // Segmento ajustado
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
  segment: "Jurídico",
  name: "Campos & Gregorio Sociedade de Advogados",
  image: "images/ceg.jpg", // (adicione o caminho real da imagem)
  description: "Desconto de 30% no valor praticado pela Campos & Gregorio para registro de marca junto ao INPI. O valor com desconto para associados Abrasel é R$1.062,60 (inclui: reunião prévia, análise de viabilidade, protocolo e acompanhamento até trânsito final).",
  contacts: [
    { icon: "fas fa-envelope", text: "andre@camposegregorio.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 98806-6055" }, // Adicionei o telefone formatado como nos outros
    { icon: "fas fa-globe", text: "camposegregorio.com.br", link: "http://www.camposegregorio.com.br" }, // Link com HTTP
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531988066055", isButton: true } // Botão WhatsApp padrão
  ]
},

    // 2. Assessoria (segmento novo)
    {
      segment: "Seguros e Benefícios", // Movido para novo segmento
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

    // 3. Licenciamento e Regulação (original)
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

    // 4. Marketing e Comunicação (original)
    {
      segment: "Marketing e Comunicação",
      name: "Forno Criativo",
      image: "images/forno-criativo.jpg",
      description: "Assessoria de marketing especializada no setor de alimentação.",
      contacts: [
        { icon: "fas fa-envelope", text: "william@multien.com.br" },
        { icon: "fas fa-phone-alt", text: "(31) 99115-6941" },
        { icon: "fas fa-globe", text: "fornocriativo.com.br", link: "https://www.fornocriativo.com.br/" },
        { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531991156941", isButton: true }
      ]
    },

    // 5. Consultoria e Gestão (original)
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

    // 6. Energia e Sustentabilidade (original)
    {
      segment: "Energia e Sustentabilidade",
      name: "Maya Energy",
      image: "images/maya.jpg",
      description: "Referência em eficiência energética com foco em energia solar, hídrica e mercado livre.",
      contacts: [
        { icon: "fas fa-envelope", text: "eric.mota@mayaenergy.com" },
        { icon: "fas fa-phone-alt", text: "(31) 99789-7800" },
        { icon: "fas fa-globe", text: "assinemaya.com.br", link: "https://www.assinemaya.com.br" },
        { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531997897800", isButton: true }
      ]
    },

    // 7. Treinamentos e Mentorias (original)
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

    // 8. Loteria (original)
    {
      segment: "Loteria",
      name: "CMSL - Consórcio Mineira da Sorte",
      image: "images/cmsl.jpg",
      description: "Operadora oficial dos jogos Raspadinha Mineira e Trem das 11. Associados Abrasel recebem: 9% de comissão (maior que o mercado), kits promocionais mensais exclusivos e material de ponto de venda gratuito.",
      contacts: [
        { icon: "fas fa-phone-alt", text: "(31) 99898-4271" },
        { icon: "fas fa-envelope", text: "faleconosco@msloteria.com.br" },
        { icon: "fas fa-globe", text: "raspadinha.com.br", link: "https://raspadinha.com.br/" },
        { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531998984271", isButton: true }
      ]
    }
  ];

  // ------------------------------------------------------------------
  // DAQUI PARA BAIXO, O CÓDIGO PERMANECE EXATAMENTE IGUAL AO ORIGINAL!
  // (Não fiz nenhuma alteração nas funções abaixo)
  // ------------------------------------------------------------------

  // Elementos do DOM
  const partnersContainer = document.querySelector('.partners-container');
  const filterSelect = document.getElementById('filtro-segmento');
  const tabButtons = document.querySelectorAll('.tab-btn');

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

  // Carregar todos os parceiros inicialmente
  renderPartners();
});