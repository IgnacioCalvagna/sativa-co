//date format MM.dd.yyyy HH:mm

const FakeData = [
  {
    id: 1,
    name: "SUSTRATO GROWMIX TERRAFERTIL",
    description: `Un producto ideal para ser utilizado en una amplia gama de cultivos.
      Por sus características se adapta a distintos tipos de contenedores, lo que facilita su utilización en distintas etapas de desarrollo. Apto para siembra y repique.
      
      ComponentesComposición química:
      pH:5,0 - 5,8 (corregido)*
      C.E: 0,20 - 0,60 ds/m*
      Humedad: 55 - 65%
      **M.O: 80 - 85%
      **Cenizas: 20 - 15%
      **Valores referidos a materia seca.
      
      ComponentesCaracterísticas físicas:
      Densidad Sustrato Seca: 140-180 Kg/m3
      Densidad de Partícula: 1600 Kg/m3
      Porosidad total: 80-85%
      Capacidad de retención de agua: 60%
      Porosidad de aire: 20-25%
      Agua fácilmente disponible: 30-35%
      ComponentesComponentes:
      Turba de musgo Sphagnum de fibras medias, Compost de corteza, Cal calcita, Cal dolomita, Agentes humectantes.`,
    category: "Sustrato y Complementos",
    price: 2300,
    images: [
      {
        url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/220/151/products/diseno-sin-titulo1-1f5611561891399a3116249850976584-1024-1024.png",
      },
    ],
    created_at: "02.01.2015 19:47",
    modified_at: "02.02.2015 19:47",
  },
  {
    id: 2,
    name: "SUSTRATO PREMIUM CULTIVATE",
    description: `Un producto ideal para ser utilizado en una amplia gama de cultivos.
      Por sus características se adapta a distintos tipos de contenedores, lo que facilita su utilización en distintas etapas de desarrollo. Apto para siembra y repique.
      
      ComponentesComposición química:
      pH:5,0 - 5,8 (corregido)*
      C.E: 0,20 - 0,60 ds/m*
      Humedad: 55 - 65%
      **M.O: 80 - 85%
      **Cenizas: 20 - 15%
      **Valores referidos a materia seca.
      
      ComponentesCaracterísticas físicas:
      Densidad Sustrato Seca: 140-180 Kg/m3
      Densidad de Partícula: 1600 Kg/m3
      Porosidad total: 80-85%
      Capacidad de retención de agua: 60%
      Porosidad de aire: 20-25%
      Agua fácilmente disponible: 30-35%
      ComponentesComponentes:
      Turba de musgo Sphagnum de fibras medias, Compost de corteza, Cal calcita, Cal dolomita, Agentes humectantes.`,
    category: "Sustrato y Complementos",
    price: 2300,
    images: [
      {
        url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/220/151/products/dsc_39281-358e7a4a60ef8c34bf16249928104488-1024-1024.jpg",
      },
    ],
    created_at: "02.01.2015 19:47",
    modified_at: "02.02.2015 19:47",
  },
  {
    id: 3,
    name: "MINI BONG D&K 2",
    description: `Un producto ideal para ser utilizado en una amplia gama de cultivos.
      Por sus características se adapta a distintos tipos de contenedores, lo que facilita su utilización en distintas etapas de desarrollo. Apto para siembra y repique.
      
      ComponentesComposición química:
      pH:5,0 - 5,8 (corregido)*
      C.E: 0,20 - 0,60 ds/m*
      Humedad: 55 - 65%
      **M.O: 80 - 85%
      **Cenizas: 20 - 15%
      **Valores referidos a materia seca.
      
      ComponentesCaracterísticas físicas:
      Densidad Sustrato Seca: 140-180 Kg/m3
      Densidad de Partícula: 1600 Kg/m3
      Porosidad total: 80-85%
      Capacidad de retención de agua: 60%
      Porosidad de aire: 20-25%
      Agua fácilmente disponible: 30-35%
      ComponentesComponentes:
      Turba de musgo Sphagnum de fibras medias, Compost de corteza, Cal calcita, Cal dolomita, Agentes humectantes.`,
    category: "Pipas y Bongs",
    price: 2090,
    images: [
      {
        url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/220/151/products/img_05861-8893e402f5cc0cb41f15963022814921-1024-1024.jpg",
      },
    ],
    created_at: "02.01.2015 19:47",
    modified_at: "02.02.2015 19:47",
  },
  {
    id: 4,
    name: "PIPA INDIA MADERA",
    description: `Un producto ideal para ser utilizado en una amplia gama de cultivos.
      Por sus características se adapta a distintos tipos de contenedores, lo que facilita su utilización en distintas etapas de desarrollo. Apto para siembra y repique.
      
      ComponentesComposición química:
      pH:5,0 - 5,8 (corregido)*
      C.E: 0,20 - 0,60 ds/m*
      Humedad: 55 - 65%
      **M.O: 80 - 85%
      **Cenizas: 20 - 15%
      **Valores referidos a materia seca.
      
      ComponentesCaracterísticas físicas:
      Densidad Sustrato Seca: 140-180 Kg/m3
      Densidad de Partícula: 1600 Kg/m3
      Porosidad total: 80-85%
      Capacidad de retención de agua: 60%
      Porosidad de aire: 20-25%
      Agua fácilmente disponible: 30-35%
      ComponentesComponentes:
      Turba de musgo Sphagnum de fibras medias, Compost de corteza, Cal calcita, Cal dolomita, Agentes humectantes.`,
    category: "Pipas y Bongs",
    price: 790,
    images: [
      {
        url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/220/151/products/diseno-sin-titulo-221-15083a7697f3b9f8b416182543233238-1024-1024.png",
      },
    ],
    created_at: "02.01.2015 19:47",
    modified_at: "02.02.2015 19:47",
  },
  {
    id: 5,
    name: "MACETAS MAD ROCKET INTELIGENTES",
    description: `Un producto ideal para ser utilizado en una amplia gama de cultivos.
      Por sus características se adapta a distintos tipos de contenedores, lo que facilita su utilización en distintas etapas de desarrollo. Apto para siembra y repique.
      
      ComponentesComposición química:
      pH:5,0 - 5,8 (corregido)*
      C.E: 0,20 - 0,60 ds/m*
      Humedad: 55 - 65%
      **M.O: 80 - 85%
      **Cenizas: 20 - 15%
      **Valores referidos a materia seca.
      
      ComponentesCaracterísticas físicas:
      Densidad Sustrato Seca: 140-180 Kg/m3
      Densidad de Partícula: 1600 Kg/m3
      Porosidad total: 80-85%
      Capacidad de retención de agua: 60%
      Porosidad de aire: 20-25%
      Agua fácilmente disponible: 30-35%
      ComponentesComponentes:
      Turba de musgo Sphagnum de fibras medias, Compost de corteza, Cal calcita, Cal dolomita, Agentes humectantes.`,
    category: "Mad Rocket",
    price: 810,
    images: [
      {
        url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/220/151/products/mad-rocket-10-lts-maceta-inteligente-x-4-unidades-d_nq_np_714722-mla32728464099_112019-f1-2e0adf9582f7cb878115989092464678-1024-1024.jpg",
      },
    ],
    created_at: "02.01.2015 19:47",
    modified_at: "02.02.2015 19:47",
  },
  {
    id: 6,
    name: "PERLITA",
    description: `Un producto ideal para ser utilizado en una amplia gama de cultivos.
      Por sus características se adapta a distintos tipos de contenedores, lo que facilita su utilización en distintas etapas de desarrollo. Apto para siembra y repique.
      
      ComponentesComposición química:
      pH:5,0 - 5,8 (corregido)*
      C.E: 0,20 - 0,60 ds/m*
      Humedad: 55 - 65%
      **M.O: 80 - 85%
      **Cenizas: 20 - 15%
      **Valores referidos a materia seca.
      
      ComponentesCaracterísticas físicas:
      Densidad Sustrato Seca: 140-180 Kg/m3
      Densidad de Partícula: 1600 Kg/m3
      Porosidad total: 80-85%
      Capacidad de retención de agua: 60%
      Porosidad de aire: 20-25%
      Agua fácilmente disponible: 30-35%
      ComponentesComponentes:
      Turba de musgo Sphagnum de fibras medias, Compost de corteza, Cal calcita, Cal dolomita, Agentes humectantes.`,
    category: "Sustrato y Complementos",
    price: 30,
    images: [
      {
        url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/220/151/products/que-es-la-perlita-para-plantas1-3e4325f10a4ebf334716293097372885-1024-1024.jpg",
      },
    ],
    created_at: "02.01.2015 19:47",
    modified_at: "02.02.2015 19:47",
  },
];

export default FakeData;
