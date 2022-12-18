import { SVG } from '../svg/svg';
import styled from 'styled-components';

type ViewsProps = {
  views: string | null;
  totalViews: string| null;
}

const ViewP = styled.p`
  margin: 0;
  font-size: 13px;
`;

const ViewContainer = styled.div`
  display: flex;
  padding: 1rem;
`;

export const ViewsBlock = ({totalViews, views}: ViewsProps) => (

  <ViewContainer>

    <SVG name='eye'/>
    <ViewP>
      {views} (за неделю);   {totalViews} (за вме время)
    </ViewP>
  </ViewContainer>
);
