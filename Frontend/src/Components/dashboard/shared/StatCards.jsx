import { Box, Card, Grid, IconButton, styled, Tooltip } from "@mui/material";
// import { AttachMoney, Group, ShoppingCart, Store, ArrowRightAlt } from "@mui/icons-material";
import { Store, ArrowRightAlt } from "@mui/icons-material";
import { Small } from "../../Typography";
import '../../../Assests/StatCards.css';

// STYLED COMPONENTS
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" }
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  "& small": { color: theme.palette.text.secondary },
  "& .icon": { opacity: 0.6, fontSize: "44px", color: theme.palette.primary.main }
}));

const Heading = styled("h6")(({ theme }) => ({
  margin: 0,
  marginTop: "4px",
  fontSize: "25px",
  fontWeight: "500",
  height:"280px",
  color: theme.palette.primary.main
}));

export default function StatCards({ district }) {
  // Define different sets of data based on the district value
  let cardList = [];
  if (district === 10) { // Example condition, change this according to your logic
    cardList = [
      { frontpage_attendence:"E3", name: "SARAVANAMPATTI", Mobile: 8300001984, Icon: Store },
      { frontpage_attendence:"E2", name: "PEELAMEDU", Mobile: "9498172630", Icon: Store },
      { frontpage_attendence:"E1", name: "SINGANALLUR", Mobile: "8300045940", Icon: Store },
      { frontpage_attendence:"D4", name: "KUNIAMUTHUR", Mobile: "9498180693", Icon: Store },
      { frontpage_attendence:"D2", name: "SELVAPURAM", Mobile: "9498180161", Icon: Store },
      { frontpage_attendence:"B4", name: "UKKADAM", Mobile: "9442152200", Icon: Store }
    ];
  } else if (district === 20) { // Another example condition
    cardList = [
      { frontpage_attendence:"E3", name: "1", Mobile: 8300001984, Icon: Store },
      { frontpage_attendence:"E2", name: "2", Mobile: "9498172630", Icon: Store },
      { frontpage_attendence:"E1", name: "3", Mobile: "8300045940", Icon: Store },
      { frontpage_attendence:"D4", name: "4", Mobile: "9498180693", Icon: Store },
      { frontpage_attendence:"D2", name: "S", Mobile: "9498180161", Icon: Store },
      { frontpage_attendence:"B4", name: "U", Mobile: "9442152200", Icon: Store }
    ];
  } else {
    cardList = [
      { frontpage_attendence:"E3", name: "SARAVANAMPATTI", Mobile: 8300001984, Icon: Store },
      { frontpage_attendence:"E2", name: "PEELAMEDU", Mobile: "9498172630", Icon: Store },
      { frontpage_attendence:"E1", name: "SINGANALLUR", Mobile: "8300045940", Icon: Store },
      { frontpage_attendence:"D4", name: "KUNIAMUTHUR", Mobile: "9498180693", Icon: Store },
      { frontpage_attendence:"D2", name: "SELVAPURAM", Mobile: "9498180161", Icon: Store },
      { frontpage_attendence:"B4", name: "UKKADAM", Mobile: "9442152200", Icon: Store }
    ];
  }
  return (
    <Grid container spacing={3} sx={{ mb: "24px" }} className="Main-grid-ln-01">
      {cardList.map(({ Mobile, Icon, name }) => (
        <Grid item xs={12} md={6} key={name}>
          <StyledCard elevation={6} className="grid-nn-lnn">
            <ContentBox >
              <Icon className="icon" />

               <Box ml="12px">
                <Heading>{name}</Heading>
                <h4>{Mobile}</h4>
                {/* <Small>{Mobile}</Small> */}
              </Box> 
            </ContentBox>

            <Tooltip title="View Details" placement="top">
              {/* <IconButton>
                <ArrowRightAlt />
              </IconButton> */}
            </Tooltip>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
}
