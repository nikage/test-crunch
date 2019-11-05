export interface ISalesItem {
  product_name: string;
  product_sku: string;
  account_code?: any;
  category_name: string;
  quantity: number;
  product_id: string;
  total_inc_vat: number;
  vat: number;
}

export interface ISale {
  sales_id: string;
  outlet_id: string;
  outlet_name: string;
  customer_id: string;
  customer_email: string;
  customer_name: string;
  receipt_no: string;
  staff_id: string;
  staff_name: string;
  sale_date_time: string;
  total_inc_vat: number;
  vat: number;
  items: ISalesItem[];
}


export interface SalesItemDetails {
  id: string;
  client_id: string;
  outlet_id: string;
  sales_id: string;
  register_id: string;
  user_id: string;
  staff_id: string;
  product_id: string;
  has_discount: number;
  discount_is_percentage: number;
  discount_amount: string;
  order_status: string;
  product_name: string;
  quantity: number;
  quantity_loose: string;
  price_inc_vat_per_item: string;
  vat_rate_id: string;
  vat_rate: string;
  split_no: number;
  sequence_no: number;
  item_notes: string;
  sync_status: string;
  last_sync_date: number;
  is_removed: number;
  flagged: number;
  created_at: string;
  updated_at: string;
  discount_id?: any;
  modifiers?: any;
  bundle_products?: any;
  item_meta?: any;
  line_total_after_line_discount: number;
  line_subtotal_after_line_discount: number;
  line_vat_after_line_discount: number;
  line_total_after_discount: number;
  line_subtotal_after_discount: number;
  line_vat_after_discount: number;
}

export interface SalesDetails {
  quantity: string;
  total_before_line_discount: string;
  subtotal_before_line_discount: string;
  vat_before_line_discount: string;
  total_after_line_discount: string;
  subtotal_after_line_discount: string;
  vat_after_line_discount: string;
  promo_offers: string;
  line_discount: number;
  total_after_discount: string;
  subtotal_after_discount: string;
  vat_after_discount: string;
  delivery_charge: string;
  service_charge: string;
  sales_items: SalesItemDetails[];
  total_ex_vat: string;
  total_vat: string;
  total: string;
  total_vat_recalc: string;
  metadata: string;
  split_by?: any;
  split_for: number;
}

export interface CASH {
  payment_amount: number;
  payment_change: number;
  payment_total: number;
}

export interface SalesPayments {
  CASH: CASH;
}

export interface SalesPaymentsHistory {
  id: string;
  payment_method: string;
  payment_date_time: string;
  payment_amount: number;
}

export interface CustomPaymentTypes {
  CUSTOM_4: string;
  CUSTOM_1: string;
  CUSTOM_2: string;
  CUSTOM_3: string;
}

export interface SalesPaymentsMap {
  CUSTOM_1: string;
  CUSTOM_2: string;
  CUSTOM_3: string;
  CUSTOM_4: string;
}

export interface Meta {
  key: string;
  value: string;
  created_at: string;
}

export interface SalesDetails {
  id: string;
  outlet_id: string;
  register_id: string;
  user_id: string;
  staff_id: string;
  customer_id?: any;
  order_no: number;
  sales_date_time: string;
  sales_month: string;
  sales_day: string;
  sales_hour: number;
  sale_type: string;
  table_code: string;
  table_no: string;
  order_status: string;
  receipt_no: string;
  order_notes: string;
  sales_details: SalesDetails;
  sales_payments: SalesPayments;
  sales_payments_history: SalesPaymentsHistory[];
  sales_payments_card_history: any[];
  vat_rates: string[];
  payment_types: string[];
  custom_payment_types: CustomPaymentTypes;
  sales_payments_map: SalesPaymentsMap;
  sales_payments_card: any[];
  removed_items: any[];
  meta: Meta[];
}


export interface ISaleStats {
  total: {
    monetaryAmount: number;
    numberOfSalesItems: number;
    numberOfSales: number;
  };
  average: {
    numberOfSalesItems: number;
    monetaryAmountPerSale: number
  };
}
