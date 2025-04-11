import React from 'react';
import {
  RENDER_WHEN,
  RENDER_METRIC_VALUE,
  RENDER_PLACE,
  IS_MOBILE,
  RENDER_ROLE
} from '../../../../../utils/globals';
import {Container} from '../../../../../utils/containers';

const TableRowItems = ({ orderedKeys, item, i, subpage, users, setRightsUpdateResult }) => {
  const renderValue = (keyValue, additionalMetricName = null) => {
    if (keyValue === 'timestamp') {
      return RENDER_WHEN(item[keyValue]);
    }
    else if (keyValue === 'place') {
        return RENDER_PLACE(item[keyValue]);
    }
    else if (keyValue === 'index') {
      return i + 1;
    }
    else if (keyValue === 'additional_metric' && additionalMetricName) {
      return RENDER_METRIC_VALUE(item.additional_metrics_results.find(item => item.name === additionalMetricName).score);
    }
    else if (keyValue === 'submitter') {
      return item[keyValue];
    }
    else if (keyValue === 'description') {
      return item[keyValue];
    }
    else if (keyValue === 'username') {
      return item[keyValue];
    }
    else if (keyValue === 'email') {
      return item[keyValue];
    }
    else if (keyValue === 'admin') {
      return RENDER_ROLE(item['username'], 'admin', getRoleValue('admin', item['username'], users), getRoleValue('author', item['username'], users), setRightsUpdateResult);
    }
    else if (keyValue === 'author') {
      return RENDER_ROLE(item['username'], 'author', getRoleValue('author', item['username'], users), getRoleValue('admin', item['username'], users), setRightsUpdateResult);
    }
    else {
      return RENDER_METRIC_VALUE(item[keyValue]);
    }
  };

  const getRoleValue = (role, username, users) => {
    const user = users.find(user => user.username === username);
    if (!user) {
      return false;
    }

    if (role === "admin") {
      return user.is_admin;
    } else if (role === "author") {
      return user.is_author;
    }
  };

  const renderItem = (keyValue, additionalMetricName) => {
    return renderValue(keyValue, additionalMetricName);
  };

  return (
    <>
      {orderedKeys.map((keyValue, j) => {
        return (
          <td key={`table-item-${i}-${j}`} className="TableStyle__td">
            {IS_MOBILE() && (
              <Container as="span" className="mobile-table-header">
                {keyValue.name}
              </Container>
            )}
            {renderItem(keyValue.key, keyValue.additionalMetricName)}
          </td>
        );
      })}
    </>
  );
};

export default TableRowItems;
