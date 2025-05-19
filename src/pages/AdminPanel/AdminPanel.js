import React from 'react';
import { useDispatch } from 'react-redux';
import getUsersSettings from '../../api/getUsersSettings';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';
import theme from '../../utils/theme';
import {FlexColumn, Container, FlexRow} from '../../utils/containers';
import { H1New } from '../../utils/fonts';
import Table from '../../components/generic/Table';
import Loading from '../../components/generic/Loading';
import Pager from '../../components/generic/Pager';
import { ELEMENTS_PER_PAGE, CALC_PAGES } from '../../utils/globals';
import {ThemeProvider} from "@mui/material/styles";
import {TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import searchIco from "../../assets/search_ico.svg";
import FiltersStyle from "../Challenges/FiltersStyle";

const AdminPanel = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = React.useState([]);
    const [filteredUsers, setFilteredUsers] = React.useState([]);
    const [usersLoading, setUsersLoading] = React.useState(true);
    const [pageNr, setPageNr] = React.useState(1);
    const [rightsUpdateResult, setRightsUpdateResult] = React.useState(null);
    const [searchPhrase, setSearchPhrase] = React.useState("");

    const n = (pageNr - 1) * ELEMENTS_PER_PAGE;
    const elements = filteredUsers.slice(n, n + ELEMENTS_PER_PAGE);

    React.useEffect(() => {
        getUsersSettings((fetchedUsers) => {
            setUsers(fetchedUsers);
            setFilteredUsers(fetchedUsers);
            setUsersLoading(false);
        });
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
            getUsersSettings((updatedUsers) => {
                setUsers(updatedUsers);
                if (searchPhrase.trim() === "") {
                    setFilteredUsers(updatedUsers);
                } else {
                    const filtered = updatedUsers.filter(user =>
                        user.username.toLowerCase().includes(searchPhrase.toLowerCase())
                    );
                    setFilteredUsers(filtered);
                }
            });
        }
    }, [rightsUpdateResult, dispatch, searchPhrase]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchPhrase(value);

        if (value.trim() === "") {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter(user =>
                user.username.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredUsers(filtered);
        }

        setPageNr(1);
    };

    const renderUserTable = () => {
        if (usersLoading) return <Loading />;
        const orderedKeys = [
            { key: 'index', name: '#' },
            { key: 'username', name: 'Username' },
            { key: 'email', name: 'Email' },
            { key: 'admin', name: 'Admin' },
            { key: 'author', name: 'Author' },
        ];

        return (
            <>
                <FiltersStyle>
                    <Container width="1000px" overflowX="auto">
                        <FlexColumn>
                            <FlexRow className="sectionHeader" alignmentX="start" width="100%">
                                <span>Search</span>
                            </FlexRow>
                            <FlexRow width="100%">
                                <ThemeProvider theme={theme.customTheme}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        className="inputSearchAdminPanel"
                                        placeholder="Search"
                                        variant="outlined"
                                        onChange={handleSearchChange}
                                        value={searchPhrase}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <img src={searchIco} alt="Search" />
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            borderRadius: '8px',
                                            height: '28px',
                                            boxShadow: '1px 2px 4px 0 rgba(52, 52, 52, 0.25)',
                                            '& .MuiOutlinedInput-root': {
                                                height: '100%',
                                                '& fieldset': {
                                                    borderRadius: '8px',
                                                    borderColor: "#5E5E5E"
                                                },
                                            },
                                        }}
                                    />
                                </ThemeProvider>
                            </FlexRow>
                        </FlexColumn>
                        <Table
                            items={elements}
                            orderedKeys={orderedKeys}
                            rowFooter={false}
                            users={filteredUsers}
                            setRightsUpdateResult={setRightsUpdateResult}
                            subpage={pageNr}
                        />
                    </Container>
                </FiltersStyle>
                <Pager
                    pageNr={pageNr}
                    setPageNr={setPageNr}
                    elements={filteredUsers}
                    pages={filteredUsers}
                    width="72px"
                    borderRadius="64px"
                    currentPage={pageNr}
                    totalPages={CALC_PAGES(filteredUsers)}
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
