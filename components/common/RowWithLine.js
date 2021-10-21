import styled from 'styled-components';
import { FlexRowWrapper } from './FlexRowWrapper';

export const RowWithLine = styled(FlexRowWrapper)`
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;
