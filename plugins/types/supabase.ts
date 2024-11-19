// Define the structure of the "dogProfile" table in Supabase
export interface Dog {
    dogProfileID: string; // Unique identifier (UUID)
    dogName: string; // Dog's name
    age: number; // Dog's age in years
    breed: string; // Dog's breed
    temperament: string; // Description of the dog's temperament
    profileImage: string; // URL for the dog's photo
    bodyBladeLength: number; // Blade length for the body
    legBladeLength: number; // Blade length for the legs
    weight: number; // Dog's weight
    notes: string; // Additional notes
  }
  