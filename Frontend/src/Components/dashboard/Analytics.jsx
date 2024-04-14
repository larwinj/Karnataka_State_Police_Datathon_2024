import { Fragment } from "react";
import React, { useState } from 'react';
import { Card, Grid, styled, useTheme } from "@mui/material";
import RowCards from "./shared/RowCards";
import StatCards from "./shared/StatCards";
// import Campaigns from "./shared/Campaigns";
import StatCards2 from "./shared/StatCards2";
import DoughnutChart from "./shared/Doughnut";
// import UpgradeCard from "./shared/UpgradeCard";
import TopSellingTable from "./shared/TopSellingTable";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../Assests/Analytics.css';

// import ipsImg from '../../../public/ipsimg.jpg';


// STYLED COMPONENTS
const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize"
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary
}));

export default function Analytics() {
  const [range, setRange] = React.useState('');
  const [district, setDistrict] = useState('');
  const { palette } = useTheme();

  const handleChange = (event) => {
    setRange(event.target.value);
   
  };
 
  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value);
  };
  return (
    <Fragment >
      <ContentBox className="analytics" style={{marginTop:'5%'}}>
      <FormControl className='lainput' style={{marginLeft:'3%',marginBottom:'3%'}}>
            <InputLabel id="demo-simple-select-label">Range</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={range}
              label="Range"
              onChange={handleChange}
            >
              <MenuItem value={10}>Southern Range, Mysuru</MenuItem>
              <MenuItem value={20}>Western Range, Mangaluru</MenuItem>
              <MenuItem value={30}>Eastern Range, Davangere</MenuItem>
              <MenuItem value={40}>Central Range, Bengaluru</MenuItem>
              <MenuItem value={50}>Northern Range, Belagavi</MenuItem>
              <MenuItem value={60}>North Eastern Range, Kalaburagi</MenuItem>
              <MenuItem value={70}>Ballari Range, Ballari</MenuItem>
            </Select>
          </FormControl>
          <FormControl className='lainput' style={{marginLeft:'3%',marginBottom:'3%'}}>
            <InputLabel id="demo-simple-select-label">Districts</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={district}
              label="District"
              onChange={handleChangeDistrict}
            >
                {range === 10 ? (
                [
                  <MenuItem key={1} value={10}>Chamarajanagara</MenuItem>,
                  <MenuItem key={2} value={20}>Hassana</MenuItem>,
                  <MenuItem key={3} value={30}>Mandya</MenuItem>,
                  <MenuItem key={4} value={40}>Kodagu</MenuItem>,
                  <MenuItem key={5} value={50}>Mysuru</MenuItem>
                ]
              ) : range === 20 ? (
                [
                  <MenuItem key={6} value={10}>Chikkamagaluru</MenuItem>,
                  <MenuItem key={7} value={20}>Dakshina Kannada</MenuItem>,
                  <MenuItem key={8} value={30}>Udupi</MenuItem>,
                  <MenuItem key={9} value={40}>Uttara Kannada</MenuItem>
                ]
              ) : null}
            </Select>
          </FormControl>
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <StatCards district={district}/>
            <TopSellingTable />
            <StatCards2 />

            <H4>Ongoing Projects</H4>
            <RowCards  />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }} >
              <h3 className="name-h3-ln">Dr. Alok Mohan, IPS</h3>
              <Title>Director General & Inspector General of Police</Title>
              <img src="https://ksp.karnataka.gov.in/storage/dept/411650.jpg" alt="Loading" style={{ maxWidth: "100%" }} /><br></br>
              <Title className="title-pend-ln">Overall pending Cases</Title><br></br>
              <SubTitle>Last 30 days</SubTitle>
              <DoughnutChart
                height="400px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card>

            {/* <UpgradeCard /> */}
            {/* <Campaigns /> */}
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
}
