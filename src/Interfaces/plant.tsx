interface plant {
    id: string;
    name: string;
    otherNames: string[] | null,
    description: string | null, 
    scientificName: string; 
    symthoms: string[];
    prepareMode: string;
    partUsed: string;
    Ingridients: string[];
    HowToDo: string[];
    useRecomendation: string;
    contraindication: string[]
}

export default plant;


