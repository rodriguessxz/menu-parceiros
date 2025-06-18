document.addEventListener('DOMContentLoaded', function() {
  // Lista de segmentos disponíveis
  const availableSegments = [
    "Jurídico",
    "Seguros e Benefícios",
    "Licenciamento e Regulação",
    "Marketing e Comunicação",
    "Consultoria e Gestão",
    "Energia e Sustentabilidade",
    "Treinamentos e Mentorias",
    "Loteria",
    "Outros"
  ];

  const partnersForm = document.getElementById('partners-form');
  const partnersList = document.getElementById('partners-list');
  const segmentFilter = document.getElementById('segment-filter');
  const segmentSelect = document.getElementById('segment');
  
  // Carrega os parceiros do localStorage
  let partners = JSON.parse(localStorage.getItem('abraselPartners')) || [];
  
  // Preenche os selects de segmento
  function populateSegmentSelects() {
    // Limpa e preenche o select do formulário
    segmentSelect.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Selecione um segmento';
    segmentSelect.appendChild(defaultOption);
    
    // Limpa e preenche o select do filtro
    segmentFilter.innerHTML = '';
    const allOption = document.createElement('option');
    allOption.value = 'todos';
    allOption.textContent = 'Todos os Segmentos';
    segmentFilter.appendChild(allOption);
    
    // Adiciona os segmentos disponíveis
    availableSegments.forEach(segment => {
      // Para o formulário
      const formOption = document.createElement('option');
      formOption.value = segment;
      formOption.textContent = segment;
      segmentSelect.appendChild(formOption);
      
      // Para o filtro
      const filterOption = document.createElement('option');
      filterOption.value = segment;
      filterOption.textContent = segment;
      segmentFilter.appendChild(filterOption);
    });
  }

  // Função para renderizar a lista de parceiros
  function renderPartnersList(filterSegment = 'todos') {
    partnersList.innerHTML = '';
    
    const filteredPartners = filterSegment === 'todos' 
      ? partners 
      : partners.filter(partner => partner.segment === filterSegment);
    
    if (filteredPartners.length === 0) {
      partnersList.innerHTML = '<tr><td colspan="6">Nenhum parceiro cadastrado</td></tr>';
      return;
    }
    
    filteredPartners.forEach((partner, index) => {
      const tr = document.createElement('tr');
      
      tr.innerHTML = `
        <td>${partner.segment}</td>
        <td>${partner.name}</td>
        <td><img src="${partner.image}" alt="${partner.name}" style="max-width: 100px;"></td>
        <td>${partner.description}</td>
        <td>
          ${partner.contacts.map(contact => 
            `<p><i class="${contact.icon}"></i> ${contact.text}</p>`
          ).join('')}
        </td>
        <td>
          <button class="edit-btn" data-index="${index}">Editar</button>
          <button class="delete-btn" data-index="${index}">Excluir</button>
        </td>
      `;
      
      partnersList.appendChild(tr);
    });
    
    // Adiciona eventos aos botões
    document.querySelectorAll('.edit-btn').forEach(btn => {
      btn.addEventListener('click', handleEdit);
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', handleDelete);
    });
  }
  
  // Função para lidar com o envio do formulário
  function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(partnersForm);
    const contacts = [];
    
    // Coleta os contatos
    const contactTypes = formData.getAll('contact-type');
    const contactValues = formData.getAll('contact-value');
    const contactLinks = formData.getAll('contact-link');
    
    contactTypes.forEach((type, index) => {
      const contact = {
        icon: getContactIcon(type),
        text: contactValues[index]
      };
      
      if (contactLinks[index]) {
        contact.link = contactLinks[index];
        if (type === 'whatsapp') {
          contact.isButton = true;
        }
      }
      
      contacts.push(contact);
    });
    
    const partner = {
      segment: formData.get('segment'),
      name: formData.get('name'),
      image: formData.get('image'),
      description: formData.get('description'),
      contacts: contacts
    };
    
    const editIndex = partnersForm.dataset.editIndex;
    
    if (editIndex !== undefined) {
      // Edição
      partners[editIndex] = partner;
      partnersForm.removeAttribute('data-edit-index');
      document.getElementById('form-title').textContent = 'Adicionar Novo Parceiro';
    } else {
      // Novo parceiro
      partners.push(partner);
    }
    
    // Salva no localStorage
    localStorage.setItem('abraselPartners', JSON.stringify(partners));
    
    // Recarrega a lista
    renderPartnersList(segmentFilter.value);
    
    // Limpa o formulário
    partnersForm.reset();
    document.getElementById('contacts-container').innerHTML = '';
    addContactField(); // Adiciona um campo de contato vazio
  }
  
  // Função para lidar com a edição
  function handleEdit(e) {
    const index = e.target.dataset.index;
    const partner = partners[index];
    
    // Preenche o formulário
    segmentSelect.value = partner.segment;
    document.getElementById('name').value = partner.name;
    document.getElementById('image').value = partner.image;
    document.getElementById('description').value = partner.description;
    
    // Preenche os contatos
    const contactsContainer = document.getElementById('contacts-container');
    contactsContainer.innerHTML = '';
    
    partner.contacts.forEach(contact => {
      addContactField(contact);
    });
    
    // Configura o formulário para edição
    partnersForm.dataset.editIndex = index;
    document.getElementById('form-title').textContent = 'Editar Parceiro';
    
    // Rola até o formulário
    partnersForm.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Função para lidar com a exclusão
  function handleDelete(e) {
    if (confirm('Tem certeza que deseja excluir este parceiro?')) {
      const index = e.target.dataset.index;
      partners.splice(index, 1);
      
      // Salva no localStorage
      localStorage.setItem('abraselPartners', JSON.stringify(partners));
      
      // Recarrega a lista
      renderPartnersList(segmentFilter.value);
    }
  }
  
  // Função auxiliar para obter o ícone do tipo de contato
  function getContactIcon(type) {
    const icons = {
      'email': 'fas fa-envelope',
      'phone': 'fas fa-phone-alt',
      'website': 'fas fa-globe',
      'whatsapp': 'fab fa-whatsapp'
    };
    
    return icons[type] || 'fas fa-info-circle';
  }
  
  // Função para adicionar campo de contato
  function addContactField(contactData = null) {
    const container = document.getElementById('contacts-container');
    const div = document.createElement('div');
    div.className = 'contact-field';
    
    const type = contactData ? 
      (contactData.icon.includes('envelope') ? 'email' : 
       contactData.icon.includes('phone') ? 'phone' : 
       contactData.icon.includes('globe') ? 'website' : 
       'whatsapp') : 'email';
    
    const value = contactData ? contactData.text : '';
    const link = contactData ? contactData.link || '' : '';
    
    div.innerHTML = `
      <select name="contact-type" required>
        <option value="email" ${type === 'email' ? 'selected' : ''}>E-mail</option>
        <option value="phone" ${type === 'phone' ? 'selected' : ''}>Telefone</option>
        <option value="website" ${type === 'website' ? 'selected' : ''}>Website</option>
        <option value="whatsapp" ${type === 'whatsapp' ? 'selected' : ''}>WhatsApp</option>
      </select>
      <input type="text" name="contact-value" placeholder="Valor" value="${value}" required>
      <input type="url" name="contact-link" placeholder="Link (opcional)" value="${link}">
      <button type="button" class="remove-contact">Remover</button>
    `;
    
    container.appendChild(div);
    
    // Adiciona evento ao botão de remover
    div.querySelector('.remove-contact').addEventListener('click', function() {
      div.remove();
    });
  }
  
  // Evento para adicionar campo de contato
  document.getElementById('add-contact').addEventListener('click', function() {
    addContactField();
  });
  
  // Evento para filtrar por segmento
  segmentFilter.addEventListener('change', function() {
    renderPartnersList(this.value);
  });
  
  // Evento de submit do formulário
  partnersForm.addEventListener('submit', handleSubmit);
  
  // Inicialização
  populateSegmentSelects();
  addContactField();
  renderPartnersList();
});