import { useQuery, gql } from "@apollo/client";
import styled from '@emotion/styled';

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

export default function PagenationBasicPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS,{
      variables: { page: 1 }
  });

  function onClickPage(event){
    refetch({ page: Number(event.target.id) })
  }

  return (
    <>
      <div>페이지네이션</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <div>{el.title}</div>
            <div>{el.writer}</div>
          </div>
        ))}
      </div>
      <br />
            {/* <span>1</span>
            <span>2</span>
            <span>3</span> */}
        {[1,2,3,4,5,6,7].map((el)=>(
            <Page onClick={onClickPage} id={String(el)}>{el}</Page>
        ))}
    </>
  );
}
