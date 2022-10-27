export const title = "Indice de masse corporelle ?";
export const content = `L'indice de masse corporelle (IMC) mesure la corpulence. Il se calcule à partir de ton poids et de ta taille. Pour calculer l'IMC, il suffit de diviser ton poids (kg) par ta taille (m) au carré. Un IMC idéal serait compris entre 18.5 à 24.8`;

export const getVisualIMC = (value: number) => (
  <div className='imc'>
    <div className='part-imc'>
      <p>Insuffisance Pondérale</p>
    </div>
    <div className='part-imc'>
      <p>Corpulence Normale</p>
    </div>
    <div className='part-imc'>
      <p>Surpoids</p>
    </div>
    <div className='part-imc'>
      <p>Obésité</p>
    </div>
    <input onChange={() => null} className='range' type='range' value={value} />
  </div>
);
