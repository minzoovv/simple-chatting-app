import styled from 'styled-components/macro';
import MaterialAppBar from '@material-ui/core/AppBar';

export const Header = styled(MaterialAppBar)`
  && {
    background-color: #383d3f;
    color: white;
    position: fixed;
    z-index: 2;
    box-shadow: none;
    display: block;
    flex-direction: unset;
    flex-shrink: unset;
  }
`;

export const Container = styled.div`
  position: relative;
  padding: 0 2rem;
  display: flex;
  height: 6.4rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;
