import { useState, useContext } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Context } from "../../../context/Context";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ userId }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
  };
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar
        style={{
          position: "sticky",
          top: "0px",
          height: "100vh",
          overflowY: "scroll",
        }}
        collapsed={isCollapsed}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon=<MenuOutlinedIcon />
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography
                  sx={{
                    position: "sticky",
                    top: "0px",
                  }}
                  variant="h3"
                  color={colors.grey[100]}
                >
                  Admins
                </Typography>
                {/* <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton> */}
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhYYGBgaGhgcGhgcGhoYGBocGRgaGhgcHBocIS4lHB8rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjEjISQxNDQxMTQ0NDQ0MTE0NDQ0NDQ0NDExNDExNDQ0NzQ0MTQ0NDQ0NDQ/NDE0NDQ0MUA0P//AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xABEEAACAQIEBAMFBgQDBQkBAAABAhEAAwQSITEFQVFhBiJxE4GRobEHMkJSwfBicoLRFCPhJJKisvEVM1Njc3SDs8JD/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEBAAICAwEBAAAAAAAAAAAAAQIRITEDEkFRYf/aAAwDAQACEQMRAD8A8ZooooCiiigKKKKAoopyqTtQNoqdcOSCYOm8AmPU7Cp7HDmf7uo5tHlU9C20++g4aKuU4OSQqq7sTEgBU5c+fyrsPha4hAuFEJ2BuWwfcJJPooJoM1RV9iuBBSQrMY55CFP9TZfhHKuZ+DsDEroJMHMZ6QNjtvA13oKqiuy7gHBgKTO0Dffbrsa5WQgwRB6HSgbRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRUtm3mMfGgfhsMzkBRJJge4Sflz5VsOG+HbaDO7rmWCxYH2aRvoSC7DuVA5jQ1U4LyZVU5XeCWH4EkHQ/Pvp01k4xxF7jKiSqWxCjWVAIEkbliY6nbmdQtsXcwyGLdnO22e+y5d9clmVRexOauS/jXeM1y2o5A3A7KOiorZRr6jaqe5YRWO7lYGrHzHXMR0UEHv9aMNfYaqyJ3AKgf1xmJ9JqK23D+I3rKjIjvtNx2dVHScqEAemtWNrxFdvFkz21P4gpvu3YFVEkR3FYrDKAyvdzPzGcEz0KgkkrH4gV2FXeG4uYKW0dE2kyQT0W2SAY6FpPWqLLE3REW0CPzdz7HSJOl1Mza6xIHeq1ks5ibyvdYkZsn3QW6q0AjuWg1ouHY+yxCOVBjUtkYHSWOrhQe2v0q0tjDwQn+azSAqActIIsKMp3360GIxNpYJ8iKQQq5cjHnDOcyjToSTr6DP3sNaJH3nA2VRl5xqTsDz9K3+J4YRmLKbZJ8q27RuX2P8AKwkTG5iqNcM9wlURpWDmcTky6w5LGGEnQRGbfnQZDHYQyYRQBGo2UTpJIBMz0GkVV3bRUwRyBHQg7EHmK9I4rgFUEhw/IkLKAkks7uTkJ/hXaec1j+KPbYBU9289AI1nYDWNtN6IoqKUikoCiiigKKKKAooooCiiigKuOCYP2gcTl8pg77CWEc5E++Kp613hmwyhG1MPnVZifPb0nbULHP7woOe+F/xLkkBR1G41jQbiAOuhrnDMrsxglfaMTyLKxC69A0N7+wqbj9tbV9shgaqP5Y8n/CV9xWuB75dQvMn4tsfiAs9/WipWIQFCJ0EzsTGg32B5c/hUlrFAsMqKT+dpJG+iqkR9etc10FgnOF1nWTAg69lA/prptlMhUFxvMwBrsSfSptdLFcSgYELrALuwLAk6eZZIAmRDGdNe/acZhQCsDbV1B1jkFN07k81HKqOwP8spA1ZSVHUEEanfQsPfptRcsASVEyNS0RG4+HTmZ3qbNNPZxlhyoZlE5YzPbB18sAAE8+UHfUc9HgPFuEtIxSXI1MFcra6AsRBJ2A3OsbGvLLVpvMeXNj94kdP9OgruwnBrjkQDMx6CY9x2n9mm11Xo97xKMR5SfZoPMUQ7hfvZskZxodsonmdqqcdxm2lvIiNy3IdwG0BKAFLRJ0UeZmjYDWuPAeFrmQkuwEAEczsevMAQJ2ER1bjvD95FDlSAGVm13YzBnmQDlBG2/q9oXGksWle2pbzO5YqG10BEZVHMme33QI+9Wf8AEGHRHyhs+WFziIldHiNDLsxnvHKu/AXmu4kQQBbjllQhZ0jUqpLQNzEnWDL/ABphkV0yAqAqjQTAUjL5uZ82vdj0rTLDkUlObem0QUUUUBRRRQFFFFAUUUUBW28PIPZWgSfOXQnkuaCNjscqjXefdWJrecCRWwiqxgM+UmDIDOACT+HXNB/hGxibBR+JFY3GYxqziNJQrupj3ETy19Ka2Y9at+NBgYZgxhQW2dlAGRnH5gJBO+hneqas1qLXBrnJkxzjvvp2nlyq4w/BXcaQdp6eoNUXDnCsJ1re8Ixq5QFn020nXf3fKueWVjrhjMu3Hg/DjBoZoHLbl+p306CrRPDKaTrrsZ+HyqwskmN4kkDaRG2m1dOJvMHSAYmBodNt4/etY9q7ekiHA+HkPKMuo0kSBpr61d4PhCFtgR5ZB30JgdhtU2BvgIddTPI7+7tFWvCmCp5gexI167CrLtnKahl2ydyojp+sfrVfjbIdGRpUmYI/1q7xrjLIGnPT4GqK8+ukEa/v6Ut1TGbjzjE4YYO+zEFQAxWVkl8vkzEfegmY77VXeJFdghIIJny7koMpzMOZLZiekLrWs43wlHfPldzOsBiAANgQNz1msrxvMzMAuUAIPMYdUGZcgSZUSSYJO9dcbuPPnNVibg1PqabT7m59TTK0wKKKKAooooCiiigKKKKAraeHWJwjxOhZdBmiQGGYHTLO8/Ec8XWy8LP/AJDoBqWaWgaZhbA57RM+h9RRW+IcRneYGqgzynKA0SASCROsnU61SRWj8S2mJU5T92J6hZHLoInU1niug+FZaW+DtzlED46ax0q3CvaZSoBBAgZiR6SBVDgrjpzIBGhiYgVoeFYr2kAspI2B0j366Vyy27YWNXg7bKAwiCAYkyp1PP027V38PxWhR1Jy6giOmlR8PurcGQx5SRIYaSJ0PPTWlwFsgv03B7fv1rk9K6w93LEK0+6BA058hVpfeQoCnU7yBrPvqt4cmY7gAfm5x9KtnMn7yjTTQt9f7V0x6csryELRDKP9/X4ZYqsxayxgfLWO3WrHI42afcK4bjmdRr+xWclxUWJYrmBZhEmSuaR6gz8jFYjjhlrgkHUTA0MGRJEzv05ivRsXhMxnSAesaaSARzrE8dwoUuVEMF5DMHGYQRIJB12GnpvXTCuPkxeaNvTakuLBPbtHy5VHXVwFFFFAUUUUBRRRQFFFFB0YPCtcbKok5XbTXRFLt8lNXnhPFhL6odVuELB0hjoJ+O2201VcJvMjkoxDFLgBBg6o2gPWuzhuIzuMwBuBgyOdMzqQwRzpIYiMx1BIkwTRY2uJ4XndEMy6XFUNG7Ico9Z99YvFYLLaQkQc0NPJjm0gfy6+7rXoXiPyJZux5Uhm65CWg6QZAafea8/4rxw3lZGUAFy8j8x92wLOdI++dNAAqrPAX7aIC8HoCOUQTr9Kdh71osWyhCPxAwDMz5Ty5/3rMYeXIBLZZAMAsQs6mBVxc8Ostl7hdcq/d+8GuMSMqqh1MAEkxGoEzMZ9Y17VbYPiXsnlGzIwAP8ADIIHyMfGtX4cxi4hyV1VSQB/CDA37T8RXj6uymJI6ivS/s54LdJzi4FVh+WZnlNc8sdOmGdq/wCHeIEQed1BDFT1kGDFPxfjqwi5kOY+6O096w3iXw5et33RG8hYSx/jIM9SNeQ5Gqrh3h9nQsc2XMysVBcJCnK5VZYjNEgCY5GrjjP0yyv432C8f52AdVI6jRhHMz+grTYbidu6NPKeQPOO/PevM7Xg6cO15nFplyKgMr7QiS7FXOaIygaAaHSN+7wnYvo4Fy1cXYlhJEHn/wBKmWJhlb8ehlAyme+vaP38KzH/AGK+Je4jMUtIfPMeadwT+HSdvToa1ljafcAf33qjPE7Np1t3A03GdsokliNFzTsoI9PXWs43TpZux5944TDAAWAJRwmYLAPlJYSBBjy9YnvWLNbb7QbpJUMIPtbx2gwBbAn5D3ViTXbHpw8s1lSUUUVpyFFFFAUUUUBRRRQSWLpVlYbqQfgZqbEW8rMBqOX8pAZT8CK5auLKoypcf7om28alTlb2bRuRH/1nrUrUejY2X4aQxlksOs7ElGygk9wp+fWvKhhyVLDWN69O8HObuHS2/mz276gnUlgz5e535/mrAYdxauFHHlmCJ1q3okjn4faLNo0d5gj3irjFQiSzMzcpJYj3kmKms4VT5xkaRMEbjoR1BG46Ga5MdZhSTqenIacq527rr66ihZpYk17B9mjtkPLyafLUV5BbEmvY/AyEWwANSnujY0z+L4p20PFODriUZW0ZgQGESD+E94ryzE4JsNiCl8MjDTMrFA4nRgw5eu1evJeyySZHPTvrTuJcMtYlfOqusaGASJ39+vKszp0ynLLcE4BaZBcDsxOoDtnIjUQSdN+VajDqqrkyzvy36xPKaoE4Y+G0tgBCYn7wA2Eg66aa1YXceiggHWNwTB33HvHpFS0mPCPE4vLtHOOnaqPH2ReewUIBTPnfNACzKjrrr8KhxOJZ2C66CWjrUvClc2yCoyNmLE7ypcEE76iKzG5rbGfaTiA2IUDUQzz1zsY+Kqp99Y2rLxBjvb4i5c5FoXplXyrHaBVZXonTx532ytFFFFVgUUUUBRRRQFFFFACrDhtxZa2xhXXLJMKrDVGPYNoT0Y1X0ooPSvBl0qMLMgrcuI495ffuHHyrIeK7QXE3Mu2Y/v4RVr4IxhlknVXW4o5nTI4n/crj8U4bJim6Ocw6ebtS9NRzcNxJiCZiouJ4yRlFQ8PUloHeoL9ol2HQms65buV9TEMRFep+BfEFpAuaCYMqdNRoP32ry61hWJiP2N/1rV8P4Slh7XtvMHA5kRIMbjTUDfr3FMouGVj0dPE2HdyiuM5JAT8RJ30qi4Zxq/hsU9i6Cqs2ZAfulSeXLSrnAYWxbebSIukSFjTbcieR21/VPEfD0xKDYXE81t51BGsd1O0dx2rnp23tfjiCsJG0E9d/rWZ4gfPPr6dzUvCbrG3DHzDQjuI61y45t9xM99t5rNu2+JHDgxIZzzk/2/WqfjPiZLVt8OobPqCdcozSZJJ1gEbDf31fWhAgfDXXTWvLOLXS9643Iu0ekwPkK1hjuuOeVk4cLUlKaSuzzCiiigKKKKAooooCiipkw7HlA6nQUEQFOC085R/EfgP7moyxNB04PEm2wdTqJ06giCCfQ1ruPMl1Ldwa5l3gLtBAnlu3wrDA1pjcnDqn4kQXF9wYNv2ZfhRYrBdCZiBr5gO0nSi3fVQsk9x79f11jnXVisIGd9RsrA8tQDy9fnVM51rOlq/u45F1AE9h1309e3LppVzieKYa+lgliDaIzIQZI1LAHXsKzXDVsHS4CeczHXny/fOtRg+G4GE8skznVrhBB1gAjTluetS6dcZb+LKz4hsPs7K2qhXImD+VgIHpr8678HxuGVXBM6iToYAHXtvvpUVvw5gWUAKpgQYLFyTz3FcvEvDllAGslw6gGGcsPnsdNKxbP10uNjUC4MzkHeCeXw+E6c6qsYSQCNtD02Pb96VXcH4sxlGJkCPX3H1q1xCymomeXMwpIGnPQ1jS74cdhTduZFJGZW83QBTBEzqMp+FeayCoI3gelez+F+Fn/OuNByo4LfxupVV9FUsY5ZhXh9ttBXfCcPN5OymNiKGsA7fCnOsjTf61zMTW3MjqRoabXSjyIOtI1kcqaVz0VIbJoqBqrNSMgXcyeg295qIGKSglF2NgB33PxNMdydzNNooCiiigKurhhbbcggVu6ka/I1S1d2jKKD+UfSixyPfIb3BfcBpXEy6103kymDtyO/uNLbOXzbjrEjbY7RUU/BYZiZHLWD0513pwPEMS6JpO2nLlrS2Lx/CQIOm65TGmu4ECr3G8RdFQzo8g7bkDXTty7elZtreMlnKHhgxKaMroCdSBC9pIH10E1a41rghtT8YOkQTz2ru4PxeUCnMdhtrrMctDtpUuJxKFQSVCxLEyBG42E6jbWud5rrNSdqJWKtngaiD020Hp3q+4VnuMFSC9wgJEQY1LHoomT2Hes/evJlzGMgMyd2J6L8q9O8D8Fayntroi640U6m2m4T+Y7tHYaxWpj7Vi5es2uMRYTDYUopkKjszc2bKSzH99OlfL4P0FfR3jfE5cJiDMRZuR6lGA+ZFfOLb131p597SK9MuL86QVIBQcwMV0K1QMNacjVFTZ6KaTRVRz0UUVlRRRRQFFFFAVaYd/KvpVXXZhX0ig6XGbQ1xlWU6ajnzB9Rzq0sYVnML6k7ADqSdAKjbE2EMZfatzJJCD02LfIetRXLYAbUeU9uXPSu+9inKqDBA10mSeZ/fbpXRY/wANcglGtnQSjD4lGEH3FfWtBhOBC4hNhxdKqWKMpS6R0VfMjnsHnoKlaxUuCxTkZUTXXXWBIEmIPTpy+PViMVAm4RC7KIgnWJ01I13rs4Y7uG9jZ0T77t5LdsbMXdoVIg6Ez2rhs8Twti4Gcf4twfMyzbtIB/4RYZnb+JlWI8uvmqSW/wAatmP9avwB4ae8y4vELFtSDYtn8TfnI6DSJ3OvIV6mrVlvDnjLCYuEtvkfYWmAV9BsusN7jWnQaTXXGSThyttrFfanicuCuAfiKL8XUn5A14UTXrf2xXT7G2vI3NfcjRXkTUqQ9aeKiDU9WG9QJdTSahp7tNR1BOqzS0tk0VRz0lOakFRSUUEUUBRRRQFd3C8M1xwi7k79BzMc64av/BeIVcUgb8coD0LCB84qwcWNxDGEAKW/wrO/8Tfmb6cq4mQqdR/rW8xfCUS2ouJIIOo3XXSsu+HyOF++jHQkaR370s0sRWrSlZVmACjMWAjNrIABkrEa+u1WnAuJ+xcObqZQw0dfaac4QqRHXYxtVBi7IVjl1WdKitpJgb1lW68QcQxuORrixdtIfMqARb1+81uZWdTny+/SsRiLDKYYEetWvCsbcw1wOrNbuLsymCOxGzKeY2NWHiDF28UntUVbdxSovIuiEkwLlsfhB5ryO2lWk19Z2xbOjTEHQ85HTpHWvYPs28ZveBwuIYs6oWt3CZZ1UeZWPNgNQeYmdtfIGfYCtT9ntktjbZGyh2b0KFI95YCk7Sr/AO1e7KWAd2d2A7KoH/7HxrzJlr0T7V2m7aA2TMv9R1f5ZF/pNeeXa1WYjpw2ptOqKQ0winkUNtUC2jSU1DRV2FamipLlRipQpoYU5htT4oIKKcRSgUDKfbYgggwRqD0I2oIpQNqD2DG21v2ioEMLasehzDNp09K8yx9t0YrJg1tfs9xM2nDakMwJ7NrUfibhMhiB+9/1rdm4k4YNRJgzrTcKn+YoMiSNRoexFOYlWIPKRTrLBWRm2DiRzgEE6VzdJ2vMei5St0agHI66AnoR+FtpGxqWzwJkw6uy+e4ARpqE/DPc7/DpVzZwtvE4nDWFYG3ccNc1GqoC7KSDqSFIGk9tK2mJtreuFQNF0+tMOmvLNXTyGxwC+5hELTt/1r0/7MeBtZR3dGW6zEPmX7gQkIs7TMsY5Ze1aDhlm2x8keQ5T1BHKrfDWVQuASczlzJnVt46CAAB2renLbyH7Tz5rP8APdH/ACf3rAXK3n2ltJt9r18fAW6wdylRHNOy02pBUUyKRtqdSPtQMU0UlFQTXKiWpb1RLVIku8qU0lzYUvKgYKeopop4oGtSD9aVqBtQbX7ObkteQ8wrfIitljcPmttPQ/SsD9n12MQ4/Mn0P+tekcYcJaAO7KfpWp0l7eOY9R7V4qPBYs23DAAmCADyzAiR3g/OnYl4a5O5MD461wltZrm3OOWw/wC1GtrhjbnOmRwJ+6qHNBPeCPQmvXcDh0t2DcmQyl56gjMPlXmvhzhqJh3dvM7iOuVBqRPrEnqABtJt34/HCvZA+dLjYf3CCCOwVo/oqY5c6dfJjfWZVffZ4S637x2e4zD4CtNhnkk9x+lVvhTCexwSdSMx/q1/tXRwx5Unufoa6uFeRfaI8lf/AHGI+lqsXcrW+O2kr/6+I+lusi1S9oZUiGo6elZUUPtQaHqoioooqKfd3pq065vTKomfakB0oJ0pq7UC08VGalBohj0o2/fShqF2+P0orR+Az/tad9Pj/wBK9I8ckJaDbAD9K828DD/aU/fWvQPtVeMKh/M6j9T9K1Oi9vIMS8sSecn41FbGtDmSTTrRrm222CxzG0tpY9oYA/hH5j2HIczFcqqGxCYdDKqVG+pcnKT6+Yk++qm3jTaUhD523YfhH9/pVz4GwxfFo2UsF8zNGigmFzHqWI/YNTHHlvPybmntPEGyYeBsB+kVycJMWCexPy/1qPxdey2IqTBtlw39B+n+ldXB4t4xaQne5iD80rNGr/xUdLXrdP8AxKOXpWfqXtTactNpVrIcaGpTSGqiKinAa0VFSXlqGuh2kVz1aHTQtJyoWoHU9DTKVaBzUqDQ+/6Gmsadb/Q/Q1Rf+C2jEof4hW8+1c/7LZHL2wH/AAOawfhBf8wnaFJnpBB/Q1uvtSuK+Aw7gghrqkEaj/u3q/D68jY0q9tzSfWuvBYR7jC2i5nYx6ddeQ6msxq11cF4c9+4LSAEmSznRUUfeZm5KOtbzwrjbQxVvC4Y/wCUuZnfZr7qPvnog2VazGPxSYe2cNh2DKY9vdH/APVx+BeltfmZ98/2avOPU/wP9BVOo9J8c3vJbX8zD6a1aOcuE/oj46VnfGdzNfsp/FNX/EdMJHaPhWmHiXire2OntP8AmFUNXniv/vFH831FUZqVSUCgUhrIkFIaFpJqhUFJShqSgQ0w1PcTpURoEoXelpoqB9IDTmFMoJKdZNMp1uqNx4DwINjFXmGioVHqQSf0quxeLduFKjGQuLGSdwPYsWHpLA++rlrv+G4OqjR8S596zH0FZ/jastnC2VBlhcugDcm4y2109LWnrVFJhrLMyqgLOxgAb68h09eVXV+6uHVrFpg1xhF66NgOdtD0H4m5mmXbgwym3bIN5xFy4PwDnbQ9fzH9imdtIG3M1OlLcedOQ/fwrV/ZnbP+MV+WV1HckCQOsDU9JHUVlcNZzasYVdyN+yjqx5VtfAVwNjFMBYRwiiSFUQY7nq3Mmoa2v+M3Dcx6opIKsqgjkXYKD8TzrY+IcV7JVzIDbaZ5FTyII5EdqxXh1hdx73CRAvKBO3kJca+qit/xvDq9tlOx6a8uRrbFeLeO8EiNZuIxIuhzBA8sEcxv97oNqyTVpPGasjpaYyLeaD2eCPpWeZKl7VGKQ0sUhrKgGgCkFKDQOWigGiqCmGiigKSiioJTtTKKKBTT7O4931ooqjb+PTBwaD7otLC8hTfEPlusRobeGsKh/KCusfE696KKv1GPubfCo12oorM6avbrxehVRsEQx3YAk++r37PTGN/+O5+lFFJ2t6i54PiGSxcdGKv7c+Yb7V6Rx1z/AIQvJDamRofu9qKK6RivHPtCM4oH/wAu39GrOHaiis3sQtSGiioptLRRUD1oooqj/9k=`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed ? (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
            ) : (
              ""
            )}
            <Item
              title="Profile Form"
              to="/form"
              icon={<FormatAlignLeftIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed ? (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
            ) : (
              ""
            )}
            <Item
              title="Lawyer List"
              to="/lawyerlist"
              icon={<ReceiptLongIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed ? (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Account
              </Typography>
            ) : (
              ""
            )}
            {isCollapsed ? (
              <>
                <Item
                  title=""
                  to="/chat"
                  icon={<CommentOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title=""
                  to="/profile"
                  icon={<PersonOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Button
                  onClick={handleLogout}
                  variant="contained"
                  sx={{ width: "80%", alignItems: "center", marginLeft: "8px" }}
                >
                  <LogoutIcon />
                </Button>
              </>
            ) : (
              <>
                <Item
                  title="Chat"
                  to="/chat"
                  icon={<CommentOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Profile"
                  to="/profile"
                  icon={<PersonOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Button
                  onClick={handleLogout}
                  variant="contained"
                  sx={{
                    width: "80%",
                    alignItems: "center",
                    marginLeft: "20px",
                  }}
                >
                  Log Out
                </Button>
              </>
            )}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
