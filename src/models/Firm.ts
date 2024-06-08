export interface Firm {
    firm_id: number; // Ensure this is a positive integer through validation
    firm_name: string;
    AUM: number; // Ensure this is a positive integer through validation
    date_added: Date;
    last_updated: Date;
    established_at: Date;
    firm_type: string;
    city: string;
    country: string;
    address: string;
    postal_code: string;
  }
  