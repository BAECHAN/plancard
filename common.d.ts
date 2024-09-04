interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
  pagination?: PaginationResponse;

  details?: string; // 에러 발생 시 추가
}

type DateToString = 'yyyy-MM-dd';

interface PaginationResponse extends PaginationRequest{
  totalPages: number,
  totalItems: number,
}

interface PaginationRequest {
  page: number,
  size: number
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

type CardTag = {
  tagId: number;
  tagName: string;
};

interface CardImage {
    imageId: number;
    imageUrl: string;
    alt: string;
    isMain: boolean;
}

interface MyCard extends Card {
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

type CountryCode = 'US' | 'KR' | 'JP' | 'CN' | 'FR';

interface City {
  title: string;        // 도시 이름
  countryIsoCode: Country['isoCode']; // ISO 국가 코드 (Country와 연결)
  description: string;
}

type Category = 'attraction' | 'restaurant' | 'cafe' | 'mart' | 'transportation' | 'lodging' | 'others'; //관광지, 음식점, 카페, 마트, 교통수단, 숙소, 기타

type Theme = string; // 해변, 도시, 고대, 산

interface SearchCardForm {
  type: 'owned' | 'all';
  pagination: PaginationRequest;
  
  search?: string;
  filter?: SearchFilterCard;
  sort?: SearchSortCard;
}

interface SearchPlanForm {
  search: string;
  type: 'owned' | 'all';
  filter: SearchFilterPlan;
  sort: SearchSortPlan;
}
type SearchFilterCard = {
  scrap?: boolean,
  country?: Country['isoCode'],
  city?: City['title'],
  theme?: Theme[],
  category?: Category[],
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
  visibilityType: 'public' | 'private';     // private 은 mine에만, public은 explore에 노출됨 - 여기서 선택된 타입은 DailyPlan에도 일괄 적용됨 
  
  likeCount: number;
  scrap: boolean;
  like: boolean;
  
  author: string;   // my plan은 이게 내꺼인거만
  createdDate: Date;
  lastUpdateDate: Date;
  startDate: DateToString;  // 여행 시작 일자
  endDate: DateToString;    // 여행 끝 일자
  duration: number; // 여행 끝 일자 - 여행 시작 일자 + 1
}

interface PlanDetail extends Plan {
  memo: string;
  dayList: Day[]
}

interface Day {
  dayId: number;
  planId: number;
  day: number; // 1부터 시작
  date: DateToString;
  likeCount: number;
  dayTitle: string;
  
  cardList : Card[];
  bridgeList: Bridge[];
}

interface Bridge {
  id: number;
  memo: string;
}

interface User {
  email: string;
  nickname: string;
}

