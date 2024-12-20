import type { Currency } from '../types';

export const currencies = [
  { code: 'AED', name: 'United Arab Emirates Dirham', symbol: 'د.إ', direction: 'rtl' },
  { code: 'AFN', name: 'Afghan Afghani', symbol: '؋', direction: 'rtl' },
  { code: 'ALL', name: 'Albanian Lek', symbol: 'L', direction: 'ltr' },
  { code: 'AMD', name: 'Armenian Dram', symbol: '֏', direction: 'ltr' },
  { code: 'ANG', name: 'Netherlands Antillean Guilder', symbol: 'ƒ', direction: 'ltr' },
  { code: 'AOA', name: 'Angolan Kwanza', symbol: 'Kz', direction: 'ltr' },
  { code: 'ARS', name: 'Argentine Peso', symbol: '$', direction: 'ltr' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', direction: 'ltr' },
  { code: 'AWG', name: 'Aruban Florin', symbol: 'ƒ', direction: 'ltr' },
  { code: 'AZN', name: 'Azerbaijani Manat', symbol: '₼', direction: 'ltr' },
  { code: 'BAM', name: 'Bosnia-Herzegovina Convertible Mark', symbol: 'KM', direction: 'ltr' },
  { code: 'BBD', name: 'Barbadian Dollar', symbol: '$', direction: 'ltr' },
  { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', direction: 'rtl' },
  { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв', direction: 'ltr' },
  { code: 'BHD', name: 'Bahraini Dinar', symbol: '.د.ب', direction: 'rtl' },
  { code: 'BIF', name: 'Burundian Franc', symbol: 'FBu', direction: 'ltr' },
  { code: 'BMD', name: 'Bermudan Dollar', symbol: '$', direction: 'ltr' },
  { code: 'BND', name: 'Brunei Dollar', symbol: '$', direction: 'ltr' },
  { code: 'BOB', name: 'Bolivian Boliviano', symbol: 'Bs.', direction: 'ltr' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', direction: 'ltr' },
  { code: 'BSD', name: 'Bahamian Dollar', symbol: '$', direction: 'ltr' },
  { code: 'BTN', name: 'Bhutanese Ngultrum', symbol: 'Nu.', direction: 'ltr' },
  { code: 'BWP', name: 'Botswanan Pula', symbol: 'P', direction: 'ltr' },
  { code: 'BYN', name: 'Belarusian Ruble', symbol: 'Br', direction: 'ltr' },
  { code: 'BZD', name: 'Belize Dollar', symbol: 'BZ$', direction: 'ltr' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', direction: 'ltr' },
  { code: 'CDF', name: 'Congolese Franc', symbol: 'FC', direction: 'ltr' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr', direction: 'ltr' },
  { code: 'CLP', name: 'Chilean Peso', symbol: '$', direction: 'ltr' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', direction: 'ltr' },
  { code: 'COP', name: 'Colombian Peso', symbol: '$', direction: 'ltr' },
  { code: 'CRC', name: 'Costa Rican Colón', symbol: '₡', direction: 'ltr' },
  { code: 'CUP', name: 'Cuban Peso', symbol: '₱', direction: 'ltr' },
  { code: 'CVE', name: 'Cape Verdean Escudo', symbol: '$', direction: 'ltr' },
  { code: 'CZK', name: 'Czech Republic Koruna', symbol: 'Kč', direction: 'ltr' },
  { code: 'DJF', name: 'Djiboutian Franc', symbol: 'Fdj', direction: 'ltr' },
  { code: 'DKK', name: 'Danish Krone', symbol: 'kr', direction: 'ltr' },
  { code: 'DOP', name: 'Dominican Peso', symbol: 'RD$', direction: 'ltr' },
  { code: 'DZD', name: 'Algerian Dinar', symbol: 'د.ج', direction: 'rtl' },
  { code: 'EGP', name: 'Egyptian Pound', symbol: 'ج.م', direction: 'rtl' },
  { code: 'ERN', name: 'Eritrean Nakfa', symbol: 'Nfk', direction: 'ltr' },
  { code: 'ETB', name: 'Ethiopian Birr', symbol: 'Br', direction: 'ltr' },
  { code: 'EUR', name: 'Euro', symbol: '€', direction: 'ltr' },
  { code: 'FJD', name: 'Fijian Dollar', symbol: '$', direction: 'ltr' },
  { code: 'FKP', name: 'Falkland Islands Pound', symbol: '£', direction: 'ltr' },
  { code: 'FOK', name: 'Faroese Króna', symbol: 'kr', direction: 'ltr' },
  { code: 'GBP', name: 'British Pound Sterling', symbol: '£', direction: 'ltr' },
  { code: 'GEL', name: 'Georgian Lari', symbol: '₾', direction: 'ltr' },
  { code: 'GGP', name: 'Guernsey Pound', symbol: '£', direction: 'ltr' },
  { code: 'GHS', name: 'Ghanaian Cedi', symbol: '₵', direction: 'ltr' },
  { code: 'GIP', name: 'Gibraltar Pound', symbol: '£', direction: 'ltr' },
  { code: 'GMD', name: 'Gambian Dalasi', symbol: 'D', direction: 'ltr' },
  { code: 'GNF', name: 'Guinean Franc', symbol: 'FG', direction: 'ltr' },
  { code: 'GTQ', name: 'Guatemalan Quetzal', symbol: 'Q', direction: 'ltr' },
  { code: 'GYD', name: 'Guyanaese Dollar', symbol: '$', direction: 'ltr' },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', direction: 'ltr' },
  { code: 'HNL', name: 'Honduran Lempira', symbol: 'L', direction: 'ltr' },
  { code: 'HRK', name: 'Croatian Kuna', symbol: 'kn', direction: 'ltr' },
  { code: 'HTG', name: 'Haitian Gourde', symbol: 'G', direction: 'ltr' },
  { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft', direction: 'ltr' },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', direction: 'ltr' },
  { code: 'ILS', name: 'Israeli New Sheqel', symbol: '₪', direction: 'rtl' },
  { code: 'IMP', name: 'Manx pound', symbol: '£', direction: 'ltr' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', direction: 'ltr' },
  { code: 'IQD', name: 'Iraqi Dinar', symbol: 'ع.د', direction: 'rtl' },
  { code: 'IRR', name: 'Iranian Rial', symbol: '﷼', direction: 'rtl' },
  { code: 'ISK', name: 'Icelandic Króna', symbol: 'kr', direction: 'ltr' },
  { code: 'JEP', name: 'Jersey Pound', symbol: '£', direction: 'ltr' },
  { code: 'JMD', name: 'Jamaican Dollar', symbol: 'J$', direction: 'ltr' },
  { code: 'JOD', name: 'Jordanian Dinar', symbol: 'د.ا', direction: 'rtl' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', direction: 'ltr' },
  { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', direction: 'ltr' },
  { code: 'KGS', name: 'Kyrgystani Som', symbol: 'с', direction: 'ltr' },
  { code: 'KHR', name: 'Cambodian Riel', symbol: '៛', direction: 'ltr' },
  { code: 'KID', name: 'Kiribati Dollar', symbol: '$', direction: 'ltr' },
  { code: 'KMF', name: 'Comorian Franc', symbol: 'CF', direction: 'ltr' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩', direction: 'ltr' },
  { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك', direction: 'rtl' },
  { code: 'KYD', name: 'Cayman Islands Dollar', symbol: '$', direction: 'ltr' },
  { code: 'KZT', name: 'Kazakhstani Tenge', symbol: '₸', direction: 'ltr' },
  { code: 'LAK', name: 'Laotian Kip', symbol: '₭', direction: 'ltr' },
  { code: 'LBP', name: 'Lebanese Pound', symbol: 'ل.ل', direction: 'rtl' },
  { code: 'LKR', name: 'Sri Lankan Rupee', symbol: '₨', direction: 'ltr' },
  { code: 'LRD', name: 'Liberian Dollar', symbol: '$', direction: 'ltr' },
  { code: 'LSL', name: 'Lesotho Loti', symbol: 'L', direction: 'ltr' },
  { code: 'LYD', name: 'Libyan Dinar', symbol: 'ل.د', direction: 'rtl' },
  { code: 'MAD', name: 'Moroccan Dirham', symbol: 'د.م.', direction: 'rtl' },
  { code: 'MDL', name: 'Moldovan Leu', symbol: 'L', direction: 'ltr' },
  { code: 'MGA', name: 'Malagasy Ariary', symbol: 'Ar', direction: 'ltr' },
  { code: 'MKD', name: 'Macedonian Denar', symbol: 'ден', direction: 'ltr' },
  { code: 'MMK', name: 'Myanma Kyat', symbol: 'K', direction: 'ltr' },
  { code: 'MNT', name: 'Mongolian Tugrik', symbol: '₮', direction: 'ltr' },
  { code: 'MOP', name: 'Macanese Pataca', symbol: 'MOP$', direction: 'ltr' },
  { code: 'MRU', name: 'Mauritanian Ouguiya', symbol: 'UM', direction: 'ltr' },
  { code: 'MUR', name: 'Mauritian Rupee', symbol: '₨', direction: 'ltr' },
  { code: 'MVR', name: 'Maldivian Rufiyaa', symbol: 'ރ.', direction: 'rtl' },
  { code: 'MWK', name: 'Malawian Kwacha', symbol: 'MK', direction: 'ltr' },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$', direction: 'ltr' },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', direction: 'ltr' },
  { code: 'MZN', name: 'Mozambican Metical', symbol: 'MT', direction: 'ltr' },
  { code: 'NAD', name: 'Namibian Dollar', symbol: '$', direction: 'ltr' },
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', direction: 'ltr' },
  { code: 'NIO', name: 'Nicaraguan Córdoba', symbol: 'C$', direction: 'ltr' },
  { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr', direction: 'ltr' },
  { code: 'NPR', name: 'Nepalese Rupee', symbol: '₨', direction: 'ltr' },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: '$', direction: 'ltr' },
  { code: 'OMR', name: 'Omani Rial', symbol: 'ر.ع.', direction: 'rtl' },
  { code: 'PAB', name: 'Panamanian Balboa', symbol: 'B/.', direction: 'ltr' },
  { code: 'PEN', name: 'Peruvian Nuevo Sol', symbol: 'S/.', direction: 'ltr' },
  { code: 'PGK', name: 'Papua New Guinean Kina', symbol: 'K', direction: 'ltr' },
  { code: 'PHP', name: 'Philippine Peso', symbol: '₱', direction: 'ltr' },
  { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨', direction: 'rtl' },
  { code: 'PLN', name: 'Polish Zloty', symbol: 'zł', direction: 'ltr' },
  { code: 'PSE', name: 'Palestinian Pound', symbol: '£.ف', direction: 'rtl' },
  { code: 'PYG', name: 'Paraguayan Guarani', symbol: '₲', direction: 'ltr' },
  { code: 'QAR', name: 'Qatari Rial', symbol: 'ر.ق', direction: 'rtl' },
  { code: 'RON', name: 'Romanian Leu', symbol: 'lei', direction: 'ltr' },
  { code: 'RSD', name: 'Serbian Dinar', symbol: 'дин.', direction: 'ltr' },
  { code: 'RUB', name: 'Russian Ruble', symbol: '₽', direction: 'ltr' },
  { code: 'RWF', name: 'Rwandan Franc', symbol: 'FRw', direction: 'ltr' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: 'ر.س', direction: 'rtl' },
  { code: 'SBD', name: 'Solomon Islands Dollar', symbol: '$', direction: 'ltr' },
  { code: 'SCR', name: 'Seychellois Rupee', symbol: '₨', direction: 'ltr' },
  { code: 'SDG', name: 'Sudanese Pound', symbol: 'ج.س.', direction: 'rtl' },
  { code: 'SEK', name: 'Swedish Krona', symbol: 'kr', direction: 'ltr' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', direction: 'ltr' },
  { code: 'SHP', name: 'Saint Helena Pound', symbol: '£', direction: 'ltr' },
  { code: 'SLE', name: 'Sierra Leonean Leone', symbol: 'Le', direction: 'ltr' },
  { code: 'SOS', name: 'Somali Shilling', symbol: 'S', direction: 'rtl' },
  { code: 'SRD', name: 'Surinamese Dollar', symbol: '$', direction: 'ltr' },
  { code: 'SSP', name: 'South Sudanese Pound', symbol: '£', direction: 'ltr' },
  { code: 'STN', name: 'São Tomé and Príncipe Dobra', symbol: 'Db', direction: 'ltr' },
  { code: 'SYP', name: 'Syrian Pound', symbol: '£', direction: 'rtl' },
  { code: 'SZL', name: 'Swazi Lilangeni', symbol: 'L', direction: 'ltr' },
  { code: 'THB', name: 'Thai Baht', symbol: '฿', direction: 'ltr' },
  { code: 'TJS', name: 'Tajikistani Somoni', symbol: 'SM', direction: 'ltr' },
  { code: 'TMT', name: 'Turkmenistani Manat', symbol: 'T', direction: 'ltr' },
  { code: 'TND', name: 'Tunisian Dinar', symbol: 'د.ت', direction: 'rtl' },
  { code: 'TOP', name: 'Tongan Paʻanga', symbol: 'T$', direction: 'ltr' },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺', direction: 'ltr' },
  { code: 'TTD', name: 'Trinidad and Tobago Dollar', symbol: 'TT$' },
  { code: 'TVD', name: 'Tuvaluan Dollar', symbol: '$', direction: 'ltr' },
  { code: 'TWD', name: 'New Taiwan Dollar', symbol: 'NT$', direction: 'ltr' },
  { code: 'TZS', name: 'Tanzanian Shilling', symbol: 'TSh', direction: 'ltr' },
  { code: 'UAH', name: 'Ukrainian Hryvnia', symbol: '₴', direction: 'ltr' },
  { code: 'UGX', name: 'Ugandan Shilling', symbol: 'USh', direction: 'ltr' },
  { code: 'USD', name: 'United States Dollar', symbol: '$', direction: 'ltr' },
  { code: 'USN', name: 'United States Dollar (next day)', symbol: '$', direction: 'ltr' },
  { code: 'USS', name: 'United States Dollar (same day)', symbol: '$', direction: 'ltr' },
  { code: 'USY', name: 'United States Dollar (year)', symbol: '$', direction: 'ltr' },
  { code: 'UYI', name: 'Uruguay Peso en Unidades Indexadas (URUIURUI)', symbol: '$U', direction: 'ltr' },
  { code: 'UYU', name: 'Uruguayan Peso', symbol: '$U', direction: 'ltr' },
  { code: 'UZS', name: 'Uzbekistan Som', symbol: 'so\'m', direction: 'rtl' },
  { code: 'VES', name: 'Venezuelan Bolívar', symbol: 'Bs', direction: 'ltr' },
  { code: 'VND', name: 'Vietnamese Dong', symbol: '₫', direction: 'ltr' },
  { code: 'VUV', name: 'Vanuatu Vatu', symbol: 'VT', direction: 'ltr' },
  { code: 'WST', name: 'Samoan Tala', symbol: 'WS$', direction: 'ltr' },
  { code: 'XAF', name: 'CFA Franc BEAC', symbol: 'FCFA', direction: 'ltr' },
  { code: 'XCD', name: 'East Caribbean Dollar', symbol: 'EC$', direction: 'ltr' },
  { code: 'XDR', name: 'Special Drawing Rights', symbol: 'SDR', direction: 'ltr' },
  { code: 'XOF', name: 'CFA Franc BCEAO', symbol: 'CFA', direction: 'ltr' },
  { code: 'XPF', name: 'CFP Franc', symbol: '₣', direction: 'ltr' },
  { code: 'YER', name: 'Yemeni Rial', symbol: '﷼', direction: 'rtl' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', direction: 'ltr' },
  { code: 'ZMW', name: 'Zambian Kwacha', symbol: 'ZK', direction: 'ltr' },
  { code: 'ZWL', name: 'Zimbabwean Dollar', symbol: 'Z$', direction: 'ltr' }
].sort((a, b) => a.code.localeCompare(b.code)) as Currency[];