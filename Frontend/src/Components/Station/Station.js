import OpenInNew from '@mui/icons-material/OpenInNew';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import { Tooltip } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';
import { useState } from 'react';
import { createGrid } from '@mui/system';

import "./Station.css";
// import "./New.css";
// ... other imports

function Station() {
  const [progress, setProgress] = React.useState(0);
  const [solved,setsolved]=useState(25);
  const [unsolved,setunsolved]=useState(50);
  const [current,setcurrent]=useState(75);
  let one;
  let two;
  let three;
  const handchange=(e)=>{
    e.preventDefault();
    one={solved};
    two={unsolved};
    three={current};
            }

            let solved1=20;
  
React.useEffect(() => {
  const timer = setInterval(() => {
    setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
  }, 800);
  
  return () => {
    clearInterval(timer);
  };
}, []);
return (
  <div className='kbody'>
    <div className='knavi'></div>
    <div className='klastright'>
   <div className='ktopnavi'></div>
   <div className='krightbottom'>
    <div className='kleftform'>
      {/* <div className='kleftformtop'></div> */}
    {/* <h1 style={{zIndex:"1",position:"fixed",top:"3%",flexWrap:"wrap"}} >Station Information</h1> */}
      <div className='kinfo'>
        <div><h3 style={{zIndex:"1",fontFamily:"-moz-initial",flexWrap:"wrap"}} >Station Information</h3></div>
        <div className='kpoliceinfo'>
        <h1>police 1</h1>
        <h1>police 2</h1>
        <h1>police 3</h1>
        <h1>police 4</h1>
        <h1>police 5</h1>
        <h1>police 6</h1>
        </div>
        {/* <h1>police 7</h1> */}
      </div>
         </div>
      <div className='krightpart'>
        <div className='krighttoppart'>
     
    <div className='kprogressbar'>
      {/* <h3>Completion status</h3> */}
       <div className='kbar'>
        <div className='kbartitle'><h3>Case progress</h3></div>
        <div className='kbararea'>
<Tooltip className="kprogresstip" title={<span style={{ fontSize: '20px' }}>{`${solved1}% Complete`}</span>}>
  <CircularProgress className="progress" determinate color={'success'}
    sx={{
      "--CircularProgress-trackThickness": "8px",
      "--CircularProgress-progressThickness": "9px",
      "--CircularProgress-size": "200px",
    }}
    variant="solid" value={solved} />
</Tooltip>
<Tooltip className="kprogresstip" id="kletstry" title={<span style={{ fontSize: '20px' }}>{`${solved1}% Complete`}</span>}>
  <CircularProgress className="progress" determinate color={'primary'}
    sx={{
      "--CircularProgress-trackThickness": "8px",
      "--CircularProgress-progressThickness": "9px",
      "--CircularProgress-size": "200px",
    }}
    variant="solid" value="50" />
</Tooltip>
<Tooltip className="kprogresstip" title={<span style={{ fontSize: '20px' }}>{`${solved1}% Complete`}</span>}>
  <CircularProgress className="progress" determinate color={'warning'}
    sx={{
      "--CircularProgress-trackThickness": "8px",
      "--CircularProgress-progressThickness": "9px",
      "--CircularProgress-size": "200px",
    }}
    variant="solid" value="70" />
</Tooltip>
</div>
       </div>
          <div  className='k3btn'>
       <form className='kform3btn'>
          <Button className='ksubmitbtn' id="kletstry" size="lg" variant={'solid'} color="success">Current</Button>
          <Button className='ksubmitbtn' size="lg" variant={'solid'} color="primary">Solved</Button>
          <Button className='ksubmitbtn' size="lg" variant={'solid'} color="warning">UnSolved</Button>
          </form>
       </div>
       <div className='krightmanagebtn'>
       <Grid xs={6} md>
        <AspectRatio variant="solid">
          <Typography level="inherit" fontWeight="lg">
            Solid
          </Typography>
        </AspectRatio>
      </Grid>
      <Grid xs={6} md>
  <AspectRatio variant="solid">
    <Typography level="inherit" fontWeight="lg" color="white">
      Solid
    </Typography>
  </AspectRatio>
</Grid>

       </div>
       </div>
       {/* <div className='ktrbtn'> */}
        {/* <div className='krbtn1'>
        <form >
          <Button size="lg" variant={'solid'} color="danger">Report</Button>
        </form>
        </div> */}
          {/* </div> */}

        </div>
        {/* <div className='krightbottompart'> */}

        <div className='klinegraph'> 
        <div className="kfinalgraph">

         <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10,12] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5,7],
        },
      ]}
      width={700}
      height={270}
      />  
      </div>
      <div className='kfirnav'>
    <Button className="knavbtn" component="a" href="#as-link" startDecorator={<OpenInNew />}>
        FIR analytics
      </Button>
      </div>
      <div className='klastasserts'>

      <Grid xs={6} md>
  <AspectRatio variant="solid">
    <Typography level="inherit" fontWeight="lg" color="white">
      Solid
    </Typography>
  </AspectRatio>
</Grid><Grid xs={6} md>
  <AspectRatio variant="solid">
    <Typography level="inherit" fontWeight="lg" color="white">
      Solid
    </Typography>
  </AspectRatio>
</Grid>
      </div>
    </div>
    {/* </div> */}

    </div>
    </div>
    </div>
    </div>

    );
  }
  export default Station;