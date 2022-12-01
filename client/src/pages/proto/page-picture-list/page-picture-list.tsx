// import { useLocation, useParams } from "react-router-dom";
// import { ImgList } from "../../../components/img-list/img-list";
// import { Titles } from "../../../components/titles/titles";
// import { TopTabs } from "../../../components/top-tabs/top-tabs";
// import { ContentName } from "../../../const/const";
// import { SearchByIdType, UseGetQueryType } from "../../../types/types";
// import { getTitle } from "../../../utils/utils";


// type PagePictureListProps = {

//     filters: string[];
//     type: ContentName;
//     useGetQuery: UseGetQueryType;
//   };


// export const PagePictureList = ({filters, type, useGetQuery }: PagePictureListProps) => {

//     const { id } = useParams();

//     const {pathname, search} = useLocation();

//     const queryParams = {id, search} as SearchByIdType;

//     const {isError, isLoading, data} = useGetQuery(queryParams);

//     const title = getTitle()


//     return (
//       <>
//         <Titles
//           first={title}
//           second={titleEn}
//         />

//         <TopTabs tabProps={tabProps}/>


//         <ImgList  />

//       </>
//     );
//   };

export const x = 'x';
