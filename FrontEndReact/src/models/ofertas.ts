export interface Oferta {
    id?: number;
    title: string;
    description: string;
    price: number;
    user_id: number;
    profession_id: number;
    location_id: number;
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