import React from 'react';
import { Row, Col } from 'react-grid-system';
import { FilterItems } from '../data/FILTERITEMS';
import SelectInput from './common/SelectInput';
import { Text } from './common/Typography';

function FilterSortHeader({ setFilter, setSortType, length, filter }) {
  return (
    <Row style={{ marginBottom: '40px' }}>
      <Col md={5} lg={4} xl={3} xxl={2}>
        <Text marginTop="10px" marginBottom="10px">
          Filter by
        </Text>
        <SelectInput
          value={filter}
          setValue={setFilter}
          options={FilterItems}
        />
      </Col>
      <Col md={5} lg={4} xl={3} xxl={2}>
        <Text marginTop="10px" marginBottom="10px">
          Sort by
        </Text>
        <SelectInput
          setValue={setSortType}
          options={[
            { placeholder: 'Github stars', value: 'stars' },
            { placeholder: 'Github issues', value: 'issues' },
            { placeholder: 'Github forks', value: 'forks' },
            { placeholder: 'Github title', value: 'title' },
          ]}
        />
      </Col>
      <Col md={2} lg={4} xl={3} xxl={2}>
        <Text marginTop="40px">{length} results</Text>
      </Col>
    </Row>
  );
}

export default FilterSortHeader;
