import { useQuery, gql } from "@apollo/client";
import styled from '@emotion/styled';
import { useState } from 'react';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Page = styled.span`
    margin: 10px;
    cursor: pointer;
`

export default function PagenationNextPagePage() {
  const [ startPage, setStartPage ] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS,{
      variables: { page: startPage }
  });

  function onClickPage(event){
    refetch({ page: Number(event.target.id) })
  }

  function onClickPrevPage(){

  }
  function onClickNextPage(){
    setStartPage((prev)=>prev+10)
  }

  return (
    <>
      <div>페이지네이션(다음페이지)</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <div>{el.title}</div>
            <div>{el.writer}</div>
          </div>
        ))}
      </div>
      <br />
      <span onClick={onClickPrevPage}>이전</span>
        {[1,2,3,4,5,6,7].map((el)=>(
            <Page onClick={onClickPage} id={String(el)}>{el}</Page>
        ))}
      <span onClick={onClickNextPage}>다음</span>
    </>
  );
}
