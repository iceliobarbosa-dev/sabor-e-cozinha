// script.js - pequenas interações
document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  ['year','year-2','year-3','year-4','year-5'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // Simples carregamento de dados de receita por query string (exemplo)
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  if(id){
    // Dados de exemplo; troque por uma fonte real (JSON) ou CMS.
    const recipes = {
      '1': {
        title:'Macarrão ao molho cremoso',
        img:'images/pasta.svg',
        desc:'Molho rápido com creme, alho e parmesão — pronto em 20 minutos.',
        ingredients:['250g de macarrão','1 xícara de creme de leite','2 dentes de alho','sal e pimenta','parmesão ralado'],
        steps:['Cozinhe o macarrão conforme embalagem.','Refogue o alho, junte o creme e o queijo.','Misture ao macarrão e sirva quente.']
      },
      '2': {
        title:'Salada de quinoa com legumes',
        img:'images/salad.svg',
        desc:'Salada nutritiva com quinoa, tomate, pepino e ervas.',
        ingredients:['1 xícara de quinoa cozida','1 tomate picado','1 pepino picado','azeite, limão, sal'],
        steps:['Cozinhe e esfrie a quinoa.','Misture os legumes e tempere.','Sirva fresca.']
      },
      '3': {
        title:'Sopa rústica de legumes',
        img:'images/soup.svg',
        desc:'Sopa reconfortante com legumes variados e caldo saboroso.',
        ingredients:['Batata, cenoura, abóbora, cebola','Caldo de legumes','Sal e pimenta'],
        steps:['Refogue a cebola, junte os legumes e o caldo.','Cozinhe até os legumes amaciarem.','Ajuste tempero e sirva.']
      }
    };

    const r = recipes[id];
    if(r){
      const title = document.getElementById('r-title');
      const image = document.getElementById('r-image');
      const desc = document.getElementById('r-desc');
      const ingr = document.getElementById('r-ingredients');
      const steps = document.getElementById('r-steps');
      if(title) title.textContent = r.title;
      if(image) image.src = r.img;
      if(desc) desc.textContent = r.desc;
      if(ingr){
        ingr.innerHTML = '';
        r.ingredients.forEach(i=>{ const li=document.createElement('li'); li.textContent=i; ingr.appendChild(li); });
      }
      if(steps){
        steps.innerHTML = '';
        r.steps.forEach(s=>{ const li=document.createElement('li'); li.textContent=s; steps.appendChild(li); });
      }
    }
  }
});
