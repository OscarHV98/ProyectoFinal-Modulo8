export interface Oferta {
    id?: number;
    title: string;
    description: string;
    price: number;
    userId: number;
    professionId: number;
    locationId: number;
    User?: User;
    Profession?: Profession;
    Location?: Location;
  }
  
  interface User {
    username: string;
    name: string;
    email: string;
  }
  
  interface Profession {
    name: string;
  }
  
  interface Location {
    name: string;
  }