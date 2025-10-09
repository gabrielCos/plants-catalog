import detales from "./detales";

interface Plant {
    id: string;
    name: string;
    otherNames?: string[],
    description?: string, 
    scientificName: string; 
    symptoms: string[];
    detales: detales[];
}



export default Plant;


