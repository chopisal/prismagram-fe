import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";

const Header = styled.header``;

const HeaderWrapper = styled.div``;

const HeaderColumn = styled.div``;

// const SearchInput = styled(Input)``;

const HeaderLink = styled(Link)``;

export default withRouter(({ history }) => {
  return <Header />;
});
