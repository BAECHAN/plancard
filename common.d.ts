interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
  pagination?: PaginationResponse;

  details?: string; // 에러 발생 시 추가
}

interface PaginationResponse extends PaginationRequest{
  totalPages: number,
  totalItems: number,
}

interface PaginationRequest {
  currentPage: number,
  itemsPerPage: number
}

interface Card {
  cardId: number; // 부모 key와 연결해야함
  title: string;
  description: string;
  country: Country['title'];
  city: City['title'];
  theme: Theme;
  category: Category;
  rating: number; // 1 ~ 5
  googleMapLink: string;
  imageUrlList: CardImage[];
  scrap: boolean;
}

type CardTag = string;

interface CardImage {
    imageId: number;
    imageUrl: string;
    alt: string;
    isMain: boolean;
}

interface myCard extends Card {
  getDate: Date;
  lastUpdateDate: Date;
  myImageUrlList: CardImage[];
  myMemo: string;
  myTagList: CardTag[];
}

interface Country {
  title: string;         // 국가 이름
  isoCode: CountryCode; // ISO 3166-1 alpha-2 코드 (예: "US", "KR")
  dialCode: string;     // 국가 전화 코드 (예: "+1", "+82")
  currency: string;     // 통화 코드 (예: "USD", "KRW")
  description: string;
}

interface CountryCode {
  US : "US",     // 미국
  KR : "KR",     // 대한민국
  JP : "JP",     // 일본
  CN : "CN",     // 중국
  FR : "FR",     // 프랑스
  // 추가 국가들...
}

interface City {
  title: string;        // 도시 이름
  countryIsoCode: CountryCode; // ISO 국가 코드 (Country와 연결)
  description: string;
}

type Category = 'attraction' | 'restaurant' | 'cafe' | 'mart' | 'transportation' | 'lodging' | 'others'; //관광지, 음식점, 카페, 마트, 교통수단, 숙소, 기타

type Theme = string; // 해변, 도시, 고대, 산

interface SearchCardForm {
  search: string;
  type: 'owned' | 'all';
  filter: SearchFilterCard[];
  sort: SearchSortCard;
}

interface SearchPlanForm {
  search: string;
  type: 'owned' | 'all';
  filter: SearchFilterPlan[];
  sort: SearchSortPlan;
}

type SearchFilterCard = {
  label: Theme
  value: Theme
} | {
  label: Category
  value: Category
} | {
  label: Country['title'];
  value: Country['isoCode']
} | {
  label: City['title'];
  value: City['countryIsoCode'];
} |
 {
  label : string;
  value : string;
} | {
  label: string;
  value: boolean; // 보유여부
}

interface SearchSortCard {
  sortBy: 'cardTitle' | 'cityTitle' | 'rating' | 'lastUpdateDate' | 'getDate'
  sortOrder: 'asc' | 'desc'
}

type SearchFilterPlan = {

}

interface SearchSortPlan {
  sortBy: 'planName' | 'createdDate' | 'lastUpdateDate' | 'likeCount'
  sortOrder: 'asc' | 'desc'
}

interface Plan {
  planId: number;
  title: string;
  memo: string;
  likeCount: number;
  author: string;   // my plan은 이게 내꺼인거만
  createdDate: Date;
  lastUpdateDate: Date;
  startDate: Date;  // 여행 시작 일자
  endDate: Date;    // 여행 끝 일자
  duration: number; // 여행 끝 일자 - 여행 시작 일자 + 1

  dailyList: DailyPlan[]
}

interface DailyPlan {
  date: Date;
  cardList : Card[];
  bridgeList: Bridge[];
}

interface Bridge {
  id: number;
  description: string;
}

interface User {
  email: string;
  nickname: string;
}

