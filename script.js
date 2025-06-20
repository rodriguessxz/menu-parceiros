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


   // Assesoria 
 {
  segment: "Assessoria",
  name: "Dom Contabilidade",
  image: "images/domcontabilidade.jpg", // (adicione o caminho real da imagem)
  description: "Prestação de serviços de assessoria contábil, fiscal e societária. Consultoria gratuita.",
  contacts: [
    { icon: "fas fa-envelope", text: "contato@domcontabilidade.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 3304-1144" },
    { icon: "fas fa-globe", text: "domcontabilidade.com.br", link: "https://domcontabilidade.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/553133041144", isButton: true },
  ]
},


    // Seguro e benefícios (segmento novo)
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
    {
  segment: "Seguros e Benefícios",
  name: "Biocentro",
  image: "images/biocentro.jpg", // (adicione o caminho real da imagem)
  description: "Benefícios para o time: desconto em plano de saúde com até 70%. Consulta online e telemedicina em todo o Brasil. Sem limite de idade e sem carência.",
  contacts: [
    { icon: "fas fa-envelope", text: "contato1@biocentro.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 98738-7439" },
    { icon: "fas fa-globe", text: "biocentro.com.br/abrasel", link: "https://biocentro.com.br/abrasel/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531987387439", isButton: true }
  ]
},

{
  segment: "Seguros e Benefícios",
  name: "Cardmais",
  image: "images/cardmais.jpg", // (adicione o caminho real da imagem)
  description: "Benefícios para o time: descontos de quase 20% nas assinaturas em relação aos preços praticados no varejo.",
  contacts: [
    { icon: "fas fa-phone-alt", text: "(31) 98830-1069" },
    { icon: "fas fa-globe", text: "seucardmais.com.br", link: "http://seucardmais.com.br" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531988301069", isButton: true }
  ]
},

{
  segment: "Seguros e Benefícios",
  name: "Phoenix Segurança",
  image: "images/phoenix_segurança.jpg", // (adicione o caminho real da imagem)
  description: "Soluções completas em segurança eletrônica, incluindo CFTV e sistemas de alarme, com 30 anos de experiência no mercado. Oferecemos condições especiais para associados Abrasel.",
  contacts: [
    { icon: "fas fa-phone-alt", text: "(38) 99958-3782" },
    { icon: "fas fa-globe", text: "phoenixseguranca.com", link: "https://www.phoenixseguranca.com/" },
    { icon: "fab fa-instagram", text: "@phoenixsegurancabh", link: "https://www.instagram.com/phoenixsegurancabh/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5538999583782", isButton: true }
  ]
},

{
  segment: "Seguros e Benefícios",
  name: "SMS DO TRABALHO",
  image: "images/sms-trabalho.jpg", // (adicione o caminho real da imagem)
  description: "Especializada em Medicina Ocupacional, oferece: 1) Tabelas diferenciadas para associados (com condições especiais de preço e prazos); 2) Gestão em Segurança do Trabalho adaptada à realidade do setor de alimentação; 3) Desenvolvimento de procedimentos específicos para o segmento; 4) Preparação para fiscalizações com parâmetros alinhados às exigências legais.",
  contacts: [
    { icon: "fas fa-envelope", text: "coordenacao@smsdotrabalho.com.br" }, // E-mail corrigido
    { icon: "fas fa-phone-alt", text: "(31) 99954-6365" }, // Telefone formatado
    { icon: "fas fa-globe", text: "smsdotrabalho.com.br", link: "https://www.smsdotrabalho.com.br" }, // Link com HTTPS
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531999546365", isButton: true }
  ]
},


{
  segment: "Seguros e Benefícios",
  name: "Unimed",
  image: "images/unimed.jpg", // (add actual image path)
  description: "Planos de saúde com condições especiais para associados Abrasel, incluindo: 1) Mensalidades a partir de R$112,71 por pessoa (plano Unifácil Flex para 0-18 anos); 2) Amplia rede credenciada em Belo Horizonte e região; 3) Benefícios exclusivos para equipes de estabelecimentos do setor de alimentação.",
  contacts: [
    { icon: "fas fa-envelope", text: "parceriaabrasel@unimedbh.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 9821-0097" }, // Formatted (Belo Horizonte)
    { icon: "fas fa-globe", text: "unimedbh.com.br", link: "https://www.unimedbh.com.br" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/553198210097", isButton: true }
  ],
  planDetails: { // Optional structured data
    minimumPrice: 112.71,
    ageRange: "0-18 anos",
    planName: "Unifácil Flex",
    coverageArea: "Minas Gerais" // Assuming MG focus
  }
},


    // Licenciamento e Regulação (original)
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

    // Marketing e Comunicação (original)
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

    {
  segment: "Marketing e Comunicação",
  name: "Chel Fachadas",
  image: "images/chelfachadas.jpg", // (adicione o caminho real da imagem)
  description: "Visita técnica gratuita para medição e orçamento. Até 03 artes para plotagem de paredes/portas. Projeto de revitalização de fachadas com 10% de desconto. Garantia de 1 ano na instalação do ACM e da parte elétrica.",
  contacts: [
    { icon: "fas fa-envelope", text: "chelfachadas@gmail.com" },
    { icon: "fas fa-phone-alt", text: "(31) 99205-0407" },
    { icon: "fas fa-globe", text: "chelfachadas.com.br", link: "https://chelfachadas.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531992050407", isButton: true }
  ]
},


{
  segment: "Marketing e Comunicação",
  name: "D Mídia",
  image: "images/dmidia.jpg", // (adicione o caminho real da imagem)
  description: "O associado terá o menor valor a pagar dentro do Clube de Assinatura, podendo escolher em qual ativo anunciar e como usar suas inserções, conforme a política do clube.",
  contacts: [
    { icon: "fas fa-envelope", text: "isabel@dmidiabrasil.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 98472-8966" },
    { icon: "fas fa-globe", text: "dmidiabrasil.com.br", link: "http://www.dmidiabrasil.com.br" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531984728966", isButton: true }
  ]
},


{
  segment: "Marketing e Comunicação",
  name: "Pitadas",
  image: "images/pitadas.jpg", // (adicione o caminho real da imagem)
  description: "Soluções completas em marketing para restaurantes. Associados Abrasel MG recebem 20% de desconto permanente (R$1.000/mês) na implementação da metodologia (valor normal: R$5.000/mês).",
  contacts: [
    { 
      icon: "fas fa-envelope", 
      text: "balsousa9@gmail.com" 
    },
    { 
      icon: "fas fa-phone-alt", 
      text: "(31) 99495-0830" 
    },
    { 
      icon: "fab fa-whatsapp", 
      text: "Falar no WhatsApp", 
      link: "https://wa.me/5531994950830", 
      isButton: true 
    }
  ]
},

    // Alimentos e bebidas

    {
  segment: "Alimentos e Bebidas",
  name: "Rei do Inox",
  image: "images/rei_do_inox.jpg", // (adicione o caminho real da imagem)
  description: "Fabricação e instalação de equipamentos em aço inoxidável para cozinhas comerciais e industriais, incluindo bancadas, coifas, balcões sob medida (com durabilidade de até 30 anos). Montagem completa de estabelecimentos comerciais, com mobiliário em inox e revenda de equipamentos (chapas, fritadeiras, freezers, refrigeradores, etc.). Mais de 40 anos de mercado e 1000 instalações em Minas Gerais. Desconto real de 10% para associados Abrasel.",
  contacts: [
    { icon: "fas fa-envelope", text: "reidoinoxbh@gmail.com" },
    { icon: "fas fa-phone-alt", text: "(31) 99305-7044" },
    { icon: "fas fa-globe", text: "oreidoinox.com.br", link: "http://www.oreidoinox.com.br" }, // Assumindo HTTP
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531993057044", isButton: true }
  ]
}, 

    {
  segment: "Alimentos e Bebidas",
  name: "Codil Alimentos",
  image: "images/codil.jpg", // (adicione o caminho real da imagem)
  description: "Tabela de preço especial de arroz e farináceos para associados Abrasel. Entrega no estabelecimento, pedido mínimo reduzido e canal exclusivo de e-commerce para pedidos mais práticos e rápidos.",
  contacts: [
    { icon: "fas fa-envelope", text: "pedidos@arrozcodil.com.br" },
    { icon: "fas fa-phone-alt", text: "(37) 99141-0425" },
    { icon: "fas fa-globe", text: "arrozcodil.com.br", link: "http://www.arrozcodil.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5537991410425", isButton: true }
  ]
},


{
  segment: "Alimentos e Bebidas",
  name: "GL Importadora de Vinhos",
  image: "images/gl_importadora.jpg", // (adicione o caminho real da imagem)
  description: "Em parceria com a Abrasel Minas, oferecemos 10% de desconto para associados em nossos rótulos de vinhos.",
  contacts: [
    { icon: "fas fa-envelope", text: "anna.julia@gladmgrupo.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 99850-0589" },
    { icon: "fas fa-globe", text: "glimportadora.com.br", link: "http://www.glimportadora.com.br" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531998500589", isButton: true }
  ]
},

{
  segment: "Alimentos e Bebidas",
  name: "Laticínios Araújo",
  image: "images/laticinios_araujo.jpg", // (adicione o caminho real da imagem)
  description: "Produtos diversos (queijos, frios, conservas, castanhas e doces) com preços especiais para parceiros Abrasel e entregas no mesmo dia.",
  contacts: [
    { icon: "fas fa-envelope", text: "laticiniosaraujo@hotmail.com" },
    { icon: "fas fa-phone-alt", text: "(31) 9753-8986" },
    { icon: "fas fa-globe", text: "laticiniosaraujo.com.br", link: "http://www.laticiniosaraujo.com.br" },
    { 
      icon: "fab fa-whatsapp", 
      text: "Falar no WhatsApp", 
      link: "https://wa.me/553197538986", 
      isButton: true 
    }
  ]
},

{
  "segment": "Alimentos e Bebidas",
  "name": "Produtos Santa Fé Alimentos",
  "image": "images/santa_fe_alimentos.jpg", // (adicione o caminho real da imagem)
  "description": "Fornecedor de produtos suínos com condições exclusivas para associados Abrasel: descontos especiais e fretes diferenciados. Ideal para bares, restaurantes e estabelecimentos do setor.",
  "contacts": [
    { 
      "icon": "fas fa-envelope", 
      "text": "santafetorresmos@gmail.com" 
    },
    { 
      "icon": "fas fa-phone-alt", 
      "text": "(37) 99908-9560" 
    },
    { 
      "icon": "fab fa-whatsapp", 
      "text": "Falar no WhatsApp", 
      "link": "https://wa.me/5537999089560", 
      "isButton": true 
    }
  ]
},


{
  segment: "Alimentos e Bebidas",
  name: "Sorvete Ygloo",
  image: "images/sorvete-ygloo.jpg", // (adicione o caminho real da imagem)
  description: "Fabricante de sorvetes premium com: 1) Mix de mais de 100 produtos (sorvetes, picolés, paletas mexicanas e açaís); 2) Laboratório de qualidade próprio; 3) Matérias-primas selecionadas sem gordura trans há mais de 10 anos; 4) Linha especial 'Good Life' (sem açúcar e sem lactose). Solução completa para estabelecimentos que desejam oferecer produtos gelados de alta qualidade.",
  contacts: [
    { icon: "fas fa-envelope", text: "contato@sorvetesygloo.com.br" },
    { icon: "fas fa-phone-alt", text: "(37) 99966-5989" }, // DDD 37 (Poços de Caldas/MG)
    { icon: "fas fa-globe", text: "sorvetesygloo.com.br", link: "https://sorvetesygloo.com.br" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5537999665989", isButton: true }
  ],
  benefits: [ // Opcional: destaques comerciais
    "Mix com 100+ produtos gelados",
    "Linha premium sem lactose/açúcar",
    "Controle de qualidade próprio",
    "Fabricação sem gordura trans"
  ]
},

{
  segment: "Alimentos e Bebidas",
  name: "Vanfall",
  image: "images/vanfall-gin.jpg", // (add actual image path)
  description: "Produtora do premiado London Dry Gin, oferecendo bebidas premium que combinam tradição e inovação. Destaques: 1) Gin de alta qualidade com reconhecimento internacional; 2) Balanceamento perfeito entre refinamento e acessibilidade; 3) Produção artesanal focada em experiências sensoriais únicas; 4) Ideal para coquetelaria profissional em bares e restaurantes.",
  contacts: [
    { icon: "fas fa-phone-alt", text: "(31) 98327-0316" }, // Formatted (Belo Horizonte/MG)
    { icon: "fas fa-globe", text: "vanfall.com", link: "https://www.vanfall.com" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531983270316", isButton: true }
  ],
  awards: "London Dry Gin premiado internacionalmente", // Optional field
  target: "Bares e restaurantes premium" // Optional field
},

    // Consultoria e Gestão (original)
{
  segment: "Consultoria e Gestão",
  name: "Agisa",
  image: "images/agisa.jpg", // (add actual image path)
  description: "Especializada em serviços estratégicos para empresas de alimentos, oferecendo: 1) Consultoria técnica para o setor alimentício; 2) Auditorias de qualidade e processos; 3) Treinamentos especializados; 4) Soluções personalizadas para adequação às normas sanitárias e de boas práticas.",
  contacts: [
    { icon: "fas fa-envelope", text: "agisa@agisaalimentos.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 99685-1373" }, // Formatted (Belo Horizonte/MG)
    { icon: "fas fa-globe", text: "agisaalimentos.com.br", link: "https://agisaalimentos.com.br" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531996851373", isButton: true }
  ],
  specialties: [ // Optional field
    "Normas ANVISA",
    "Boas Práticas de Fabricação",
    "Auditorias de Qualidade",
    "Treinamentos in company"
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
  segment: "Consultoria e Gestão",
  name: "Gass",
  image: "images/gass.jpg", // (adicione o caminho real da imagem)
  description: "Desconto de 50% nos dois primeiros meses em projetos de consultoria. Diagnóstico gratuito para 10 associados com análise de processos e identificação de gargalos. 10% de desconto nos cursos Gass Academy, presenciais e online, focados em organização, lucro e crescimento.",
  contacts: [
    { icon: "fas fa-envelope", text: "fer.chagas@gassconsulting.com" },
    { icon: "fas fa-phone-alt", text: "(31) 98469-4789" },
    { icon: "fas fa-globe", text: "gass.solutions", link: "http://www.gass.solutions" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531984694789", isButton: true }
  ]
},


{
  segment: "Consultoria e Gestão",
  name: "Gê Queiroga",
  image: "images/ge_queiroga.jpg", // (adicione o caminho real da imagem)
  description: "10% de desconto em cursos, mentorias e consultorias de Gestão de Estoque e Compras para associados Abrasel.",
  contacts: [
    { icon: "fas fa-envelope", text: "atendimento@multien.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 97144-4183" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531971444183", isButton: true }
  ]
},

{
  segment: "Consultoria e Gestão",
  name: "Macrocont Contabilidade",
  image: "images/macrocont.jpg", // (adicione o caminho real da imagem)
  description: "Prestação de serviços de assessoria contábil, fiscal e societária para estabelecimentos. Consultoria gratuita para associados Abrasel.",
  contacts: [
    { icon: "fas fa-envelope", text: "macrocont@macrocont.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 2552-0072" },
    { icon: "fas fa-globe", text: "macrocont.com.br", link: "https://macrocont.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/553125520072", isButton: true }
  ]
},

{
  segment: "Consultoria e Gestão",
  name: "Matur Contábil",
  image: "images/matur_contabil.jpg", // (adicione o caminho real da imagem)
  description: "Assessoria especializada e totalmente gratuita em licenças, alvarás e auto de notificação, exigidos pelos órgãos competentes para estabelecimentos.",
  contacts: [
    { icon: "fas fa-envelope", text: "luizotavio@matur.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 99999-6159" },
    { icon: "fas fa-globe", text: "maturcontabil.com.br", link: "http://www.maturcontabil.com.br" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531999996159", isButton: true }
  ]
},

{
  "segment": "Consultoria e Gestão",
  "name": "Qualitar Alimentos",
  "image": "images/qualitar_alimentos.jpg",
  "description": "Consultoria especializada em segurança e qualidade de alimentos. Oferecemos 30% de desconto nos 3 primeiros meses para associados Abrasel, com soluções personalizadas para o seu negócio alimentício.",
  "contacts": [
    {
      "icon": "fas fa-envelope",
      "text": "contato@qualitaralimentos.com"
    },
    {
      "icon": "fas fa-phone-alt",
      "text": "(31) 98742-7848"
    },
    {
      "icon": "fas fa-globe",
      "text": "qualitaralimentos.com",
      "link": "https://www.qualitaralimentos.com"
    },
    {
      "icon": "fab fa-whatsapp",
      "text": "Falar no WhatsApp",
      "link": "https://wa.me/5531987427848",
      "isButton": true
    }
  ]
},

{
  segment: "Consultoria e Gestão", // (Segmento mais próximo, já que oferecem soluções para estabelecimentos)
  name: "Moderna Indústrias",
  image: "images/moderna_industrias.jpg",
  description: "Fabricação de móveis sob medida para bares e restaurantes, com designs que combinam funcionalidade e tendências de mercado. Soluções personalizadas para otimizar espaços.",
  contacts: [
    { icon: "fas fa-envelope", text: "sac@moderna.ind.br" },
    { icon: "fas fa-phone-alt", text: "(31) 98414-1888" },
    { icon: "fas fa-globe", text: "industriasmoderna.com.br", link: "https://www.industriasmoderna.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531984141888", isButton: true }
  ]
},

{
  segment: "Consultoria e Gestão",
  name: "Movéis Brum",
  image: "images/moveis_brum.jpg", // (adicione o caminho real da imagem)
  description: "Soluções completas em mobiliário para bares, restaurantes e hotéis, com assessoria especializada para otimização de espaços. Condições exclusivas: 5% de desconto à vista ou parcelamento em até 10x, 5 anos de garantia e brindes em pedidos acima de R$15.000.",
  contacts: [
    { icon: "fas fa-envelope", text: "vendas@moveisbrum.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 98407-7500" },
    { icon: "fas fa-globe", text: "moveisbrum.com.br", link: "https://www.moveisbrum.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531984077500", isButton: true }
  ]
},

{
  segment: "Consultoria e Gestão",
  name: "DHV Consultoria",
  image: "images/dhvconsultoria.jpg", // (adicione o caminho real da imagem)
  description: "Consultoria, mentoria e treinamentos focados na melhoria de processos, organização financeira e desempenho do negócio. 10% de desconto para associados Abrasel em qualquer serviço.",
  contacts: [
    { icon: "fas fa-envelope", text: "dhvconsultoria@gmail.com" },
    { icon: "fas fa-phone-alt", text: "(31) 99861-9969" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531998619969", isButton: true }
  ]
},


{
  segment: "Consultoria e Gestão",
  name: "Gizelle Pollack Projetos",
  image: "images/gizellepollack.jpg", // Substitua com o caminho correto da imagem
  description: "Especialista em projetos personalizados de iluminação para ambientes residenciais, comerciais, paisagismo e piscinas. Consultoria gratuita, preços especiais para associados Abrasel e acompanhamento completo até a instalação.",
  contacts: [
    { icon: "fas fa-envelope", text: "g.pollack@uol.com.br" },
    { icon: "fas fa-phone-alt", text: "(11) 98270-1299" },
    { icon: "fab fa-instagram", text: "@pollackgizelle", link: "https://www.instagram.com/pollackgizelle?igsh=MTRobnJ6NXljcGloaw==" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5511982701299", isButton: true }
  ]
},




  // Limpeza e Higiene    
    {
  segment: "Limpeza e Higiene",
  name: "Brilhante Clean",
  image: "images/brilhanteclean.jpg", // (adicione o caminho real da imagem)
  description: "Os associados Abrasel têm 10% de desconto no contrato do Sistema Restoclean, 5% em químicos (exceto para máquinas de lavar pratos) com prazo de 28 dias, condição especial na linha de sabonetes e álcoois e 15% de desconto na limpeza de coifa. Associados recém-filiados ganham 1 galão de 5L do produto X12 (R$109,50).",
  contacts: [
    { icon: "fas fa-envelope", text: "relacionamento@brilhanteclean.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 99679-9477" },
    { icon: "fas fa-globe", text: "instagram.com/brilhanteclean", link: "https://www.instagram.com/brilhanteclean/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531996799477", isButton: true }
  ]
},

  {
  segment: "Limpeza e Higiene",
  name: "CleanTime",
  image: "images/cleantime.jpg", // (adicione o caminho real da imagem)
  description: "Produtos certificados com qualidade garantida. Treinamento especializado para equipes e gestores. 10% de desconto na primeira compra e logística prioritária para entregas e serviços.",
  contacts: [
    { icon: "fas fa-envelope", text: "kelvin@cleantime.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 99890-2693" },
    { icon: "fas fa-globe", text: "cleantime.com.br", link: "https://www.cleantime.com.br" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531998902693", isButton: true }
  ]
},

{
  segment: "Limpeza e Higiene",
  name: "Comercial Plastiminas",
  image: "images/plastiminas.jpg", // (adicione o caminho real da imagem)
  description: "Desconto de 5% em produtos lava-louças adquiridos na concorrência mediante apresentação de NF, com assistência técnica sem custo de mão de obra. 10% de desconto na tabela food.",
  contacts: [
    { icon: "fas fa-envelope", text: "felix@plastiminas.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 98830-1069" },
    { icon: "fas fa-globe", text: "plastiminas.com.br", link: "http://plastiminas.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531988301069", isButton: true }
  ]
},

{
  segment: "Limpeza e Higiene",
  name: "Eco Cleaning",
  image: "images/ecocleaning.jpg", // (adicione o caminho real da imagem)
  description: "Limpeza especial de cozinhas industriais, fornos, dutos, pisos, paredes e ambientes. Desconto de até 15% para contratos de 6 a 12 meses.",
  contacts: [
    { icon: "fas fa-envelope", text: "augustoscarnenobre@gmail.com" },
    { icon: "fas fa-phone-alt", text: "(31) 98302-1589" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531983021589", isButton: true }
  ]
},

{
  segment: "Limpeza e Higiene",
  name: "Eco Trat",
  image: "images/ecotrat.jpg", // (adicione o caminho real da imagem)
  description: "Associados Abrasel contam com visita técnica gratuita, treinamento para uso do produto, preços especiais, comodato de equipamentos sem custo e entrega programada para BH e região.",
  contacts: [
    { icon: "fas fa-envelope", text: "trqsolucaoambiental@gmail.com" },
    { icon: "fas fa-phone-alt", text: "(31) 99796-2082" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531997962082", isButton: true }
  ]
},


{
  segment: "Limpeza e Higiene",
  name: "Grupo Seiva",
  image: "images/grupo_seiva.jpg", // (adicione o caminho real da imagem)
  description: "Reciclagem de vidros com benefícios exclusivos para associados Abrasel-MG: 10% de desconto na mensalidade para clientes que indicarem novos bares parceiros. FILIADOS ABRASEL-MG GANHAM +30% DE DESCONTO (de R$299,00 por R$209,00).",
  contacts: [
    { icon: "fas fa-envelope", text: "contato@gruposeiva.eco.br" },
    { icon: "fas fa-phone-alt", text: "(31) 97157-0270" },
    { icon: "fas fa-globe", text: "gruposeiva.eco.br", link: "https://gruposeiva.eco.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531971570270", isButton: true }
  ]
},

{
  segment: "Limpeza e Higiene",
  name: "Sill do Brasil",
  image: "images/sill_brasil.jpg", // (adicione o caminho real da imagem)
  description: "Fornecedora especializada em produtos de limpeza e lavanderia de alta performance, oferecendo: 1) Produtos químicos associados a máquinas de alto rendimento; 2) Descontos progressivos conforme volume de compras; 3) Treinamentos para colaboradores; 4) Logística 'Just in time'; 5) Assessoria comercial e técnica. Soluções completas para higienização profissional.",
  contacts: [
    { icon: "fas fa-envelope", text: "comercial@sillav.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 99464-873" }, // Formatado para (XX) XXXXX-XXXX
    { icon: "fas fa-globe", text: "silldobrasil.com.br", link: "https://silldobrasil.com.br" }, // Link com HTTPS
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/553199464873", isButton: true }
  ]
},


    // Energia e Sustentabilidade (original)
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

    {
  segment: "Energia e Sustentabilidade",
  name: "Cemig Sim",
  image: "images/cemigsim.jpg", // (adicione o caminho real da imagem)
  description: "Economia para você, energia para seu negócio! Com a parceria entre Abrasel e Cemig SIM, bares e restaurantes têm até 15% de desconto na conta de luz. Funcionários também podem aproveitar até 14% de desconto na energia residencial.",
  contacts: [
    { icon: "fas fa-envelope", text: "contato@cemigsim.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 97113-0799" },
    { icon: "fas fa-globe", text: "cemigsim.com.br", link: "https://cemigsim.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531971130799", isButton: true }
  ]
},

{
  segment: "Energia e Sustentabilidade",
  name: "Solar PV",
  image: "images/solar-pv.jpg", // (adicione o caminho real da imagem)
  description: "Soluções em energia solar fotovoltaica para empresas, oferecendo sistemas sustentáveis que reduzem custos energéticos e promovem a eficiência energética. Projetos personalizados para o segmento de alimentação fora do lar, com potencial de economia na conta de energia elétrica.",
  contacts: [
    { icon: "fas fa-envelope", text: "luanaos@solarpv.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 98313-7618" },
    { icon: "fas fa-globe", text: "vendassolarpv.com.br", link: "https://lp.vendassolarpv.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531983137618", isButton: true }
  ]
},

{
  segment: "Energia e Sustentabilidade",
  name: "Recóleo",
  image: "images/recoleo.jpg", // (caminho real da imagem)
  description: "Especializada em coleta e reciclagem de óleos vegetais desde 2004, oferece: 1) Solução ambiental para descarte correto de óleo de fritura; 2) Atendimento em MG, RS e BA; 3) Sistema de troca com recipientes limpos; 4) Certificado de destinação ecológica. Vantagens: preços atrelados ao mercado da soja, equipamentos novos e atendimento personalizado.",
  contacts: [
    { icon: "fas fa-envelope", text: "recoleo@recoleo.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 99744-4515" }, // DDD 31 (BH/MG)
    { icon: "fas fa-globe", text: "recoleo.com.br", link: "https://recoleo.com.br" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531997444515", isButton: true }
  ],
  beneficios: [ // Opcional
    "+5.000 clientes atendidos",
    "Certificado de destinação ambiental",
    "Tanques de coleta higienizados",
    "Preços competitivos baseados na cotação da soja"
  ],
  cobertura: "Minas Gerais, Porto Alegre/RS e Salvador/BA" // Opcional
},


    // Treinamentos e Mentorias (original)

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
  segment: "Treinamentos e Mentorias",
  name: "CENA RH",
  image: "images/cenarh.jpg", // (adicione o caminho real da imagem)
  description: "Atendimento rápido e personalizado via WhatsApp e e-mail. Banco de talentos com foco em perfis operacionais e de liderança do setor. Treinamentos in company ou online e apoio estratégico contínuo para gestão de pessoas.",
  contacts: [
    { icon: "fas fa-envelope", text: "diegocena.contato@hotmail.com" },
    { icon: "fas fa-phone-alt", text: "(31) 99284-0343" },
    { icon: "fas fa-globe", text: "instagram.com/cena_recursoshumanos", link: "https://www.instagram.com/cena_recursoshumanos/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531992840343", isButton: true }
  ]
},

{
  segment: "Treinamentos e Mentorias",
  name: "Faculdades Promove",
  image: "images/faculdadespromove.jpg", // (adicione o caminho real da imagem)
  description: "Cursos presenciais, digitais, semipresenciais e EAD nas mais variadas áreas e modalidades. Faça parte deste time e escreva sua história de sucesso!",
  contacts: [
    { icon: "fas fa-envelope", text: "comunicacao@somospromove.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 9979-6050" },
    { icon: "fas fa-globe", text: "faculdadepromove.br", link: "https://faculdadepromove.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/553199796050", isButton: true }
  ]
},

{
  segment: "Treinamentos e Mentorias",
  name: "Núcleo Educacional Universo das Carnes",
  image: "images/universo_carne.jpg", // (adicione o caminho real da imagem)
  description: "Programa completo de mentoria e capacitação profissional para açougues e restaurantes, com workshops e treinamentos práticos. 40% de desconto exclusivo para associados Abrasel.",
  contacts: [
    { icon: "fas fa-envelope", text: "contato@universodascarnes.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 99664-7142" }, // Telefone formatado
    { icon: "fas fa-globe", text: "universodascarnes.com.br", link: "https://www.universodascarnes.com.br" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531996647142", isButton: true }
  ]
},


    // Tecnologia e Sistemas 
{
  segment: "Tecnologia e Sistemas",
  name: "CR Cert",
  image: "images/crcert.jpg", // (adicione o caminho real da imagem)
  description: "O ECNPJ A1 será oferecido a R$ 117,00; O ECPF A1 será oferecido a R$ 97,00.",
  contacts: [
    { icon: "fas fa-envelope", text: "contato@crcert.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 99614-5989" },
    { icon: "fas fa-globe", text: "crcert.com.br", link: "http://www.crcert.com.br" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531996145989", isButton: true }
  ]
},

{
  segment: "Tecnologia e Sistemas",
  name: "Haggi",
  image: "images/haggi.jpg", // (adicione o caminho real da imagem)
  description: "Solução de Wi-Fi seguro, estratégico e inteligente. A plataforma cria uma base de dados dos seus clientes Wi-Fi, permitindo análise de perfil, comportamento e interesses, gerando insights valiosos para tomada de decisão. 20% de desconto para associados Abrasel.",
  contacts: [
    { icon: "fas fa-envelope", text: "contato@haggi.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 98835-9350" },
    { icon: "fas fa-globe", text: "haggi.com.br", link: "https://www.haggi.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531988359350", isButton: true }
  ]
},

{
  segment: "Tecnologia e Sistemas",
  name: "Mafra Informática",
  image: "images/mafra_informatica.jpg", // (adicione o caminho real da imagem)
  description: "Sistema de gestão para bares e restaurantes com 50% de desconto na implantação e treinamento para associados Abrasel.",
  contacts: [
    { icon: "fas fa-envelope", text: "comercial@mafrainformatica.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 98634-7806" }, // Adicionei hífen no telefone
    { icon: "fas fa-globe", text: "mafrainformatica.com", link: "https://mafrainformatica.com/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531986347806", isButton: true }
  ]
},

{
  segment: "Tecnologia e Sistemas",
  name: "Plenum Sistemas",
  image: "images/plenum_sistemas.jpg", // (adicione o caminho real da imagem)
  description: "Sistemas de gestão modulares e adaptáveis para empresas de todos os portes, compatíveis com múltiplos dispositivos (computadores, smartphones, tablets, terminais, impressoras e leitores).",
  contacts: [
    { 
      icon: "fas fa-phone-alt", 
      text: "(31) 98454-4633" 
    },
    { 
      icon: "fas fa-globe", 
      text: "plenumsistemas.com.br", 
      link: "https://plenumsistemas.com.br/" 
    },
    { 
      icon: "fab fa-whatsapp", 
      text: "Falar no WhatsApp", 
      link: "https://wa.me/5531984544633", 
      isButton: true 
    }
  ]
},




{
  segment: "Tecnologia e Sistemas",
  name: "Teknisa Service",
  image: "images/teknisa.jpg", // (add actual image path)
  description: "Soluções completas de gestão para bares e restaurantes, incluindo: 1) Sistemas de delivery e take away; 2) PDV e autoatendimento; 3) ERP e business intelligence; 4) Honest market e apps personalizados. Benefício exclusivo para associados Abrasel: descontos e condições especiais de pagamento em todos os sistemas de delivery.",
  contacts: [
    { icon: "fas fa-envelope", text: "contato@teknisa.com" },
    { icon: "fas fa-phone-alt", text: "(31) 97570-0162" }, // Formatted phone (Belo Horizonte/MG)
    { icon: "fas fa-globe", text: "teknisa.com", link: "https://www.teknisa.com" }, // Added https
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531975700162", isButton: true }
  ],
  highlights: [
    "Redução de custos operacionais",
    "Aumento de faturamento com soluções integradas",
    "Condições especiais para associados Abrasel",
    "Sistemas completos para gestão de food service"
  ]
},


{
  segment: "Tecnologia e Sistemas",
  name: "Uai Delivery",
  image: "images/uai-delivery.jpg", // (add actual image path)
  description: "Plataforma especializada em gestão de entregas para restaurantes, oferecendo: 1) Consultoria gratuita no Portal iFood (3 meses para associados Abrasel); 2) Análise completa de dados de entregas; 3) Soluções integradas para otimização de operações de delivery. Benefício exclusivo: análise estratégica de desempenho e métricas de entrega.",
  contacts: [
    { icon: "fas fa-envelope", text: "contato@uaidelivery.net" },
    { icon: "fas fa-phone-alt", text: "(31) 98313-9944" }, // Formatted (Belo Horizonte/MG)
    { icon: "fas fa-globe", text: "uaidelivery.net", link: "https://uaidelivery.net" }, // With https
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531983139944", isButton: true }
  ],
  benefits: [ // Optional section
    "Consultoria iFood gratuita (3 meses)",
    "Dashboard completo de métricas",
    "Otimização de rotas de entrega",
    "Integração com principais plataformas"
  ]
},

{
  segment: "Tecnologia e Sistemas",
  name: "Vallor Soluções",
  image: "images/vallor-solucoes.jpg", // (add actual image path)
  description: "Sistema de gestão completo para bares e restaurantes com benefícios exclusivos para associados Abrasel: 1) Instalação bonificada (apenas treinamentos pagos); 2) 30% de desconto nas mensalidades do software Colibri; 3) Solução integrada para gestão de estabelecimentos de alimentação.",
  contacts: [
    { icon: "fas fa-envelope", text: "gerencia@vallorsolucoes.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 99216-2569" }, // Formatted (Belo Horizonte/MG)
    { icon: "fas fa-globe", text: "vallorsolucoes.com.br", link: "https://www.vallorsolucoes.com.br" }, // Added https
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531992162569", isButton: true }
  ],
  benefits: [ // Optional highlights
    "Instalação gratuita para associados",
    "30% de desconto permanente",
    "Software Colibri para gestão completa",
    "Treinamentos especializados"
  ]
},

{
  segment: "Tecnologia e Sistemas",
  name: "O Conciliador",
  image: "images/oconciliador.jpg", // (adicione o caminho real da imagem)
  description: "Sistema online que concilia automaticamente as vendas por cartão, verificando se os valores foram creditados corretamente, validando taxas, detectando fraudes e eliminando erros manuais. 10% de desconto no setup e nas mensalidades para associados Abrasel MG.",
  contacts: [
    { icon: "fas fa-envelope", text: "ellen.oliveira@conciliador.com.br" },
    { icon: "fas fa-phone-alt", text: "(31) 99153-3097 / (31) 3643-4334" },
    { icon: "fas fa-globe", text: "conciliador.com.br", link: "https://www.conciliador.com.br/" },
    { icon: "fab fa-whatsapp", text: "Falar no WhatsApp", link: "https://wa.me/5531991533097", isButton: true }
  ]
},



    // Loteria (original)
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