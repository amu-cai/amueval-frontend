// import React from 'react';
// import getUsersSettings from '../../api/getUsersSettings';
// import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import theme from '../../utils/theme';
// import { FlexColumn } from '../../utils/containers';
// import {H1New} from '../../utils/fonts';
// import UserSettings from '../../components/administration/UserSettings';
// import Loading from '../../components/generic/Loading';
//
// const AdminPanel = () => {
//   const dispatch = useDispatch();
//   const currentUser = useSelector((state) => state.auth.user);
//   const [users, setUsers] = React.useState([]);
//   const [rightsUpdateResult, setRightsUpdateResult] = React.useState(null);
//   const [usersLoading, setUsersLoading] = React.useState(true);
//
//   React.useEffect(() => {
//     getUsersSettings(setUsers, setUsersLoading);
//   }, []);
//
//   React.useEffect(() => {
//     if (users) {
//       if (users?.detail) {
//         dispatch(
//           popUpMessageHandler({
//             header: 'Admin panel error',
//             message: `Error: ${users.detail}`,
//             borderColor: theme.colors.red,
//           })
//         );
//       }
//     }
//   }, [dispatch, users]);
//
//   React.useEffect(() => {
//     if (rightsUpdateResult) {
//       if (rightsUpdateResult?.detail) {
//         dispatch(
//           popUpMessageHandler({
//             header: 'User rights update error',
//             message: `Error: ${rightsUpdateResult.detail}`,
//             borderColor: theme.colors.red,
//           })
//         );
//       } else {
//         dispatch(
//           popUpMessageHandler({
//             header: 'User rights update sucess',
//             message: `${rightsUpdateResult.user}: ${rightsUpdateResult.message}`,
//             borderColor: theme.colors.green,
//           })
//         );
//         getUsersSettings(setUsers);
//       }
//     }
//   }, [rightsUpdateResult, dispatch]);
//
//   return (
//     <FlexColumn
//       padding="80px 0"
//       width="100%"
//       alignmentY="flex-start"
//       minHeight="100vh"
//       gap="32px"
//     >
//       <H1New as="h1">Admin panel</H1New>
//       <FlexColumn maxWidth="800px" width="100%" gap="20px">
//         {!usersLoading ? (
//           users?.map((user) => {
//             return (
//               <UserSettings
//                 user={user}
//                 currentUser={currentUser}
//                 setRightsUpdateResult={setRightsUpdateResult}
//               />
//             );
//           })
//         ) : (
//           <Loading />
//         )}
//       </FlexColumn>
//     </FlexColumn>
//   );
// };
//
// export default AdminPanel;

// import React from 'react';
// import { Container, FlexColumn } from '../../utils/containers';
// import { Medium } from '../../utils/fonts';
// import Pager from '../../components/generic/Pager';
// import getAllSubmissions from '../../api/getAllSubmissions';
// import Table from '../../components/generic/Table';
// import Loading from '../../components/generic/Loading';
// import { CALC_PAGES, ELEMENTS_PER_PAGE } from '../../utils/globals';
//
// const AllSubmissions = (props) => {
//   const [submissions, setSubmissions] = React.useState([]);
//   const [pageNr, setPageNr] = React.useState(1);
//   const [loading, setLoading] = React.useState(true);
//   const [idSorted, setIdSorted] = React.useState([]);
//   const [submitterSorted, setSubmitterSorted] = React.useState(false);
//   const [whenSorted, setWhenSorted] = React.useState(false);
//   const [submissionsAll, setSubmissionsAll] = React.useState(null);
//   const [devSorted, setDevSorted] = React.useState(false);
//   const [testSorted, setTestSorted] = React.useState(false);
//   const [descriptionSorted, setDescriptionSorted] = React.useState(false);
//
//   const n = (pageNr - 1) * (ELEMENTS_PER_PAGE );
//
//   let elements = submissions?.map((item) => {
//     return {
//       ...item,
//       [`dev_${props.mainMetric}`]: parseFloat(item.dev_result).toFixed(5),
//       [`test_${props.mainMetric}`]: parseFloat(item.test_result).toFixed(5),
//     };
//   });
//   elements = elements?.slice(n, n + ELEMENTS_PER_PAGE);
//
//   React.useEffect(() => {
//     if (props.challengeName) {
//       getAllSubmissions(props.challengeName, setSubmissionsAll, setLoading);
//     }
//   }, [props.challengeName]);
//
//   React.useEffect(() => {
//     if (!submissions?.length) {
//       setSubmissions(submissionsAll);
//     }
//   }, [submissionsAll, submissions]);
//
//   const sortByUpdate = (elem) => {
//     let submissionsUpdated = elements.slice();
//     switch (elem) {
//       case 'id': {
//         if (idSorted) {
//           setIdSorted(false);
//           submissionsUpdated = submissionsUpdated.sort((a, b) =>
//             a.id > b.id ? 1 : b.id > a.id ? -1 : 0
//           );
//         } else {
//           setIdSorted(true);
//           submissionsUpdated = submissionsUpdated.sort((a, b) =>
//             a.id < b.id ? 1 : b.id < a.id ? -1 : 0
//           );
//         }
//         break;
//       }
//       case 'submitter': {
//         if (submitterSorted) {
//           setSubmitterSorted(false);
//           submissionsUpdated = submissionsUpdated.sort((a, b) =>
//             a.submitter.toLowerCase() < b.submitter.toLowerCase()
//               ? 1
//               : b.submitter.toLowerCase() < a.submitter.toLowerCase()
//               ? -1
//               : 0
//           );
//         } else {
//           setSubmitterSorted(true);
//           submissionsUpdated = submissionsUpdated.sort((a, b) =>
//             a.submitter.toLowerCase() > b.submitter.toLowerCase()
//               ? 1
//               : b.submitter.toLowerCase() > a.submitter.toLowerCase()
//               ? -1
//               : 0
//           );
//         }
//         break;
//       }
//       case 'description': {
//         if (descriptionSorted) {
//           setDescriptionSorted(false);
//           submissionsUpdated = submissionsUpdated.sort((a, b) =>
//             a.description.toLowerCase() < b.description.toLowerCase()
//               ? 1
//               : b.description.toLowerCase() < a.description.toLowerCase()
//               ? -1
//               : 0
//           );
//         } else {
//           setDescriptionSorted(true);
//           submissionsUpdated = submissionsUpdated.sort((a, b) =>
//             a.description.toLowerCase() > b.description.toLowerCase()
//               ? 1
//               : b.description.toLowerCase() > a.description.toLowerCase()
//               ? -1
//               : 0
//           );
//         }
//         break;
//       }
//       case 'timestamp': {
//         if (whenSorted) {
//           setWhenSorted(false);
//           submissionsUpdated = submissionsUpdated.sort((a, b) =>
//             a.when < b.when ? 1 : b.when < a.when ? -1 : 0
//           );
//         } else {
//           setWhenSorted(true);
//           submissionsUpdated = submissionsUpdated.sort((a, b) =>
//             a.when > b.when ? 1 : b.when > a.when ? -1 : 0
//           );
//         }
//         break;
//       }
//       case `dev_${props.mainMetric}`: {
//         if (devSorted) {
//           setDevSorted(false);
//           submissionsUpdated = submissionsUpdated.sort(
//             (a, b) =>
//               (b ? b[`dev_${props.mainMetric}`] : -1) -
//               (a ? a[`dev_${props.mainMetric}`] : -1)
//           );
//         } else {
//           setDevSorted(true);
//           submissionsUpdated = submissionsUpdated.sort(
//             (a, b) =>
//               (a ? a[`dev_${props.mainMetric}`] : -1) -
//               (b ? b[`dev_${props.mainMetric}`] : -1)
//           );
//         }
//         break;
//       }
//       case `test_${props.mainMetric}`: {
//         if (testSorted) {
//           setTestSorted(false);
//           submissionsUpdated = submissionsUpdated.sort(
//             (a, b) =>
//               (b ? b[`test_${props.mainMetric}`] : -1) -
//               (a ? a[`test_${props.mainMetric}`] : -1)
//           );
//         } else {
//           setTestSorted(true);
//           submissionsUpdated = submissionsUpdated.sort(
//             (a, b) =>
//               (a ? a[`test_${props.mainMetric}`] : -1) -
//               (b ? b[`test_${props.mainMetric}`] : -1)
//           );
//         }
//         break;
//       }
//       default:
//         break;
//     }
//     setSubmissions(submissionsUpdated);
//   };
//
//   const allSubmissionsTableRender = () => {
//     const tableNotEmpty = elements?.length;
//     let orderedKeys = [
//       { key: 'index', name: '#', sortable: false },
//       { key: 'submitter', name: 'User', sortable: false },
//       { key: 'main_metric_result', name: props.mainMetric, sortable: true },
//     ];
//
//     if (elements?.length > 0) {
//       const additionalKeys = elements[0].additional_metrics_results.map((metric, index) => ({
//         key: 'additional_metric',
//         additionalMetricName: metric.name,
//         name: metric.name,
//         sortable: true
//       }));
//       orderedKeys = orderedKeys.concat(additionalKeys);
//     }
//     orderedKeys.push({ key: 'timestamp', name: 'Timestamp', sortable: true });
//
//     if (!loading) {
//       if (tableNotEmpty) {
//         return (
//           <>
//             <Container width="100%" overflowX="auto">
//               <Table
//                 items={elements}
//                 orderedKeys={orderedKeys}
//                 sortByUpdate={sortByUpdate}
//                 challengeName={props.challengeName}
//                 rowFooter={false}
//               />
//             </Container>
//             <Pager
//               pageNr={pageNr}
//               setPageNr={setPageNr}
//               elements={submissions}
//               pages={submissions}
//               width="72px"
//               borderRadius="64px"
//               currentPage={pageNr}
//               totalPages={CALC_PAGES(submissions)}
//             />
//           </>
//         );
//       }
//       return <Medium margin="72px 0">No results</Medium>;
//     }
//     return <Loading />;
//   };
//
//   return (
//     <FlexColumn
//       as="section"
//       width="100%"
//     >
//       {allSubmissionsTableRender()}
//     </FlexColumn>
//   );
// };
//
// export default AllSubmissions;


import React from 'react';
import { useDispatch } from 'react-redux';
import getUsersSettings from '../../api/getUsersSettings';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';
import theme from '../../utils/theme';
import { FlexColumn, Container } from '../../utils/containers';
import { H1New, Medium } from '../../utils/fonts';
import Table from '../../components/generic/Table';
import Loading from '../../components/generic/Loading';
import Pager from '../../components/generic/Pager';
import { ELEMENTS_PER_PAGE, CALC_PAGES } from '../../utils/globals';

const AdminPanel = () => {
  const dispatch = useDispatch();
  // const currentUser = useSelector((state) => state.auth.user);
  const [users, setUsers] = React.useState([]);
  const [usersLoading, setUsersLoading] = React.useState(true);
  const [pageNr, setPageNr] = React.useState(1);
  const [idSorted, setIdSorted] = React.useState(false);
  const [nameSorted, setNameSorted] = React.useState(false);
  const [roleSorted, setRoleSorted] = React.useState(false);
  const [rightsUpdateResult, setRightsUpdateResult] = React.useState(null);

  const n = (pageNr - 1) * ELEMENTS_PER_PAGE;
  const elements = users.slice(n, n + ELEMENTS_PER_PAGE);

  React.useEffect(() => {
    getUsersSettings(setUsers, setUsersLoading);
  }, []);

  React.useEffect(() => {
    if (users?.detail) {
      dispatch(
          popUpMessageHandler({
            header: 'Admin panel error',
            message: `Error: ${users.detail}`,
            borderColor: theme.colors.red,
          })
      );
    }
  }, [dispatch, users]);

  React.useEffect(() => {
    if (rightsUpdateResult?.detail) {
      dispatch(
          popUpMessageHandler({
            header: 'User rights update error',
            message: `Error: ${rightsUpdateResult.detail}`,
            borderColor: theme.colors.red,
          })
      );
    } else if (rightsUpdateResult) {
      dispatch(
          popUpMessageHandler({
            header: 'User rights update success',
            message: `${rightsUpdateResult.user}: ${rightsUpdateResult.message}`,
            borderColor: theme.colors.green,
          })
      );
      getUsersSettings(setUsers);
    }
  }, [rightsUpdateResult, dispatch]);

  const sortByUpdate = (key) => {
    let usersUpdated = [...elements];
    switch (key) {
      case 'id':
        setIdSorted(!idSorted);
        usersUpdated.sort((a, b) => (idSorted ? a.id - b.id : b.id - a.id));
        break;
      case 'name':
        setNameSorted(!nameSorted);
        usersUpdated.sort((a, b) =>
            nameSorted ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
        break;
      case 'role':
        setRoleSorted(!roleSorted);
        usersUpdated.sort((a, b) =>
            roleSorted ? a.role.localeCompare(b.role) : b.role.localeCompare(a.role)
        );
        break;
      default:
        break;
    }
      setUsers(usersUpdated);
  };

  const renderUserTable = () => {
    if (usersLoading) return <Loading />;
    if (elements.length === 0) return <Medium margin="72px 0">No users available</Medium>;

    const orderedKeys = [
      { key: 'index', name: '#' },
      { key: 'username', name: 'Username'},
      { key: 'email', name: 'Email'},
      { key: 'admin', name: 'Admin'},
      { key: 'author', name: 'Author'},
    ];

    return (
        <>
          <Container width="1000px" overflowX="auto">
            <Table
                items={elements}
                orderedKeys={orderedKeys}
                sortByUpdate={sortByUpdate}
                rowFooter={true}
                users={users}
                setRightsUpdateResult={setRightsUpdateResult}
            />
          </Container>
          <Pager
              pageNr={pageNr}
              setPageNr={setPageNr}
              elements={users}
              pages={users}
              width="72px"
              borderRadius="64px"
              currentPage={pageNr}
              totalPages={CALC_PAGES(users)}
          />
        </>
    );
  };

  return (
      <FlexColumn
          padding="80px 0"
          width="100%"
          alignmentY="flex-start"
          minHeight="100vh"
          gap="32px"
      >
        <H1New as="h1">Admin Panel</H1New>
        <FlexColumn maxWidth="800px" width="100%" gap="20px">
          {renderUserTable()}
        </FlexColumn>
      </FlexColumn>
  );
};

export default AdminPanel;

