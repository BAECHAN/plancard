interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
  pagination?: PaginationResponse;

  details?: string; // 에러 발생 시 추가
}

type DateToString = 'yyyy-MM-dd';
type PlanVisibility = 'public' | 'private'; // private 은 mine에만, public은 explore에 노출됨 - 여기서 선택된 타입은 DailyPlan에도 일괄 적용됨 
type CountryCode = 'US' | 'KR' | 'JP' | 'CN' | 'FR';
type SortOrder = 'asc' | 'desc'

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
  country: Country;
  city: City;
  theme: Theme[];
  category: Category;
  rating: number; // 1 ~ 5
  googleMapLink: string;
  imageList: CardImage[];
  scrap: boolean;
}

interface MyCard extends Card {
  getDate: Date;
  lastUpdateDate: Date;
  myImageList: CardImage[];
  myMemo: string;
  myTagList: CardTag[];
}

type SearchBaseForm = {
  pagination: PaginationRequest;
  sort: SearchSortBase;
}

interface SearchRegionForm extends SearchBaseForm {
  filter?: SearchFilterBase;
}

interface SearchCardForm extends SearchBaseForm {
  sort: SearchSortCard;
  search?: string;
  filter?: SearchFilterCard;
}

interface SearchPlanForm extends SearchBaseForm {
  sort: SearchSortPlan;
  search?: string;
  filter?: SearchFilterPlan;
}


type SearchFilterBase = {
  scrap: boolean,
  country?: Country['isoCode'],
  city?: City['title'],
  theme?: Theme[],
  category?: Category[],
}

type SearchFilterCard = SearchFilterBase;

interface SearchFilterPlan extends SearchFilterBase {
  like: boolean,
}

interface SearchSortBase {
  sortBy: string;
  sortOrder: SortOrder
}

interface SearchSortCard extends SearchSortBase {
  sortBy: 'cardTitle' | 'cityTitle' | 'rating' | 'lastUpdateDate' | 'getDate'
}

interface SearchSortPlan extends SearchSortBase {
  sortBy: 'planName' | 'createdDate' | 'lastUpdateDate' | 'likeCount'
}

interface Plan {
  planId: number;
  visibility: PlanVisibility;     

  title: string;
  
  likeCount: number;
  scrap: boolean;
  like: boolean;
  
  author: string;   // my plan은 이게 내꺼인거만

  createdDate: Date;
  lastUpdateDate: Date;

  startDate: DateToString;  // 여행 시작 일자
  endDate: DateToString;    // 여행 끝 일자
  duration: number; // 여행 끝 일자 - 여행 시작 일자 + 1
  tagList: CardTag[]; // country, city, theme, category 태그
}


interface PlanWithDay {
  planId: number;
  dayList: Day[]
}

interface Day {
  dayId: number;
  planId: number;
  dayNumber: number; // 1부터 시작
  date: DateToString;
  visibility: PlanVisibility;

  title: string;

  likeCount: number;
  scrap: boolean;
  like: boolean;

  author: string;
  
  cardList : Card[];
  bridgeList: Bridge[];
}

interface PlanWithMemo {
  planId: number;
  memo: string;
}


interface Bridge {
  id: number;
  memo: string;
}

interface User {
  email: string;
  nickname: string;
}

interface RegionBase {
  title: string;         // 국가 이름
  description: string;
  imageUrl: string; // 대표 이미지
}

interface Country extends RegionBase {
  countryId: number;
  isoCode: CountryCode; // ISO 3166-1 alpha-2 코드 (예: "US", "KR")
}

interface City extends RegionBase{
  cityId: number;
  countryIsoCode: Country['isoCode']; // ISO 국가 코드 (Country와 연결)
}

type Category = {
  categoryId: number;
  title: 'attraction' | 'restaurant' | 'cafe' | 'mart' | 'transportation' | 'lodging' | 'others'; // 관광지, 음식점, 카페, 마트, 교통수단, 숙소, 기타
}

type Theme = {
  themeId: number;
  title: string; // 해변, 도시, 고대, 산
}; 

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