import { Person } from "person-library";
import { Plan } from "plan-library";
import { Vehicle } from "vehicle-library";

export interface QuotationItemPair {
  price:  number;
  real:   number;
  amount: number;
  unit:   string;
  type:   number;
}

export interface QuotationItem {
  id:    string;
  plan:  Plan;
  pairs: QuotationItemPair[];
}

export interface Quotation {
  id:                 string;
  uid:                string;
  state:              number;
  items:              QuotationItem[];
  vehicle:            Vehicle;
  owner:              Person;
  insured:            Person;
  recommend:          string;
  inviter:            string;
  outside_quotation1: number;
  outside_quotation2: number;
  screenshot1:        string;
  screenshot2:        string;
  price:              number;
  real_value:         number;
  promotion:          number;
  insure:             number;
  auto:               number;
};
