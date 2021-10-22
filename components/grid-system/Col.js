import styled from 'styled-components';

export default styled.div`
  box-sizing: border-box;
  min-height: 1px;
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  flex: 1 0 0px;
  max-width: 100%;
  margin-left: 0%;
  right: auto;
  left: auto;
  outline: ${({ debug }) => (debug ? 'silver solid 1px' : 'none')};

  @media (max-width: 768px) {
    max-width: ${({ xs }) => (xs && `${(xs / 12) * 100}%`) || '100%'};
  }

  @media (min-width: 576px) and (max-width: 768px) {
    max-width: ${({ xs, sm }) =>
      (sm && `${(sm / 12) * 100}%`) || (xs && `${(xs / 12) * 100}%`) || '100%'};
  }
  @media (min-width: 768px) and (max-width: 992px) {
    max-width: ${({ xs, sm, md }) =>
      (md && `${(md / 12) * 100}%`) ||
      (sm && `${(sm / 12) * 100}%`) ||
      (xs && `${(xs / 12) * 100}%`) ||
      '100%'};
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    max-width: ${({ xs, sm, md, lg }) =>
      (lg && `${(lg / 12) * 100}%`) ||
      (md && `${(md / 12) * 100}%`) ||
      (sm && `${(sm / 12) * 100}%`) ||
      (xs && `${(xs / 12) * 100}%`) ||
      '100%'};
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    max-width: ${({ xs, sm, md, lg, xl }) =>
      (xl && `${(xl / 12) * 100}%`) ||
      (lg && `${(lg / 12) * 100}%`) ||
      (md && `${(md / 12) * 100}%`) ||
      (sm && `${(sm / 12) * 100}%`) ||
      (xs && `${(xs / 12) * 100}%`) ||
      '100%'};
  }
  @media (min-width: 1600px) {
    max-width: ${({ xs, sm, md, lg, xl, xxl }) =>
      (xxl && `${(xxl / 12) * 100}%`) ||
      (xl && `${(xl / 12) * 100}%`) ||
      (lg && `${(lg / 12) * 100}%`) ||
      (md && `${(md / 12) * 100}%`) ||
      (sm && `${(sm / 12) * 100}%`) ||
      (xs && `${(xs / 12) * 100}%`) ||
      '100%'};
  }
`;
