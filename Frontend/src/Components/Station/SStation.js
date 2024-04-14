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

import "./SStaion.css";

const SStation = () => {
    const [progress, setProgress] = React.useState(0);
    const [solved, setsolved] = useState(25);
    const [unsolved, setunsolved] = useState(50);
    const [current, setcurrent] = useState(75);
    let solved1 = 20;

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='kkdiv'>
            <div className='kleft'>
                <div>
                    <h3 style={{ zIndex: "1", fontFamily: "-moz-initial", flexWrap: "wrap" }}>Station Information</h3>
                </div>
                <div className="kbox">
                    <div>
                        <h3>Police1</h3>
                        <h3>Police2</h3>
                        <h3>Police3</h3>
                        <h3>Police3</h3>
                        <h3>Police3</h3>
                        <h3>Police1</h3>
                        <h3>Police1</h3>
                        <h3>Police1</h3>
                        <h3>Police1</h3>
                        <h3>Police1</h3>
                        <h3>Police1</h3>
                        <h3>Police1</h3>
                        <h3>Police1</h3>
                        <h3>Police1</h3>
                        <h3>Police1</h3>
                    </div>
                </div>
            </div>
            <div className='kright'>
                <div className='kprogress'>
                    <div style={{ padding: "1%" }}>Case Progress</div>
                    <hr />
                    <div className="kprogress-container">
                        <div className="kprogress-item">
                            <div className="kprogress-content">
                                <Tooltip className="kprogresstip" title={<span style={{ fontSize: '20px' }}>{`${solved1}% Complete`}</span>}>
                                    <CircularProgress
                                        className="progress"
                                        determinate
                                        color={'success'}
                                        sx={{
                                            "--CircularProgress-trackThickness": "8px",
                                            "--CircularProgress-progressThickness": "9px",
                                            "--CircularProgress-size": "200px",
                                        }}
                                        variant="solid"
                                        value={solved}
                                    />
                                </Tooltip>
                                <Button className='ksubmitbtn' id="kletstry" size="lg" variant={'solid'} color="success" style={{marginTop:'1%'}}>Current</Button>
                            </div>
                        </div>
                        <div className="kprogress-item">
                            <div className="kprogress-content">
                                <Tooltip className="kprogresstip" title={<span style={{ fontSize: '20px' }}>{`${solved1}% Complete`}</span>}>
                                    <CircularProgress
                                        className="progress"
                                        determinate
                                        color={'primary'}
                                        sx={{
                                            "--CircularProgress-trackThickness": "8px",
                                            "--CircularProgress-progressThickness": "9px",
                                            "--CircularProgress-size": "200px",
                                        }}
                                        variant="solid"
                                        value="50"
                                    />
                                </Tooltip>
                                <Button className='ksubmitbtn' size="lg" variant={'solid'} color="primary"style={{marginTop:'1%'}}>Solved</Button>
                            </div>
                        </div>
                        <div className="kprogress-item">
                            <div className="kprogress-content">
                                <Tooltip className="kprogresstip" title={<span style={{ fontSize: '20px' }}>{`${solved1}% Complete`}</span>}>
                                    <CircularProgress
                                        className="progress"
                                        determinate
                                        color={'warning'}
                                        sx={{
                                            "--CircularProgress-trackThickness": "8px",
                                            "--CircularProgress-progressThickness": "9px",
                                            "--CircularProgress-size": "200px",
                                        }}
                                        variant="solid"
                                        value="70"
                                    />
                                </Tooltip>
                                <Button className='ksubmitbtn' size="lg" variant={'solid'} color="warning"style={{marginTop:'1%'}}>UnSolved</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='kchart'>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5, 7],
                            },
                        ]}
                        width={700}
                        height={250}
                    />
                    <Button className="knavbtn" component="a" href="#as-link" startDecorator={<OpenInNew />} >
                        FIR analytics
                    </Button>
                </div>
            </div>
            <div className='kthird'>
            <div className='klastasserts'>
{/* <div className='excellence'>
    Excellwncw in Work
</div> */}

<Grid xs={6} md>
<AspectRatio variant="solid">
<Typography level="inherit" fontWeight="lg" color="white">
{/* Excellence in Work */}
</Typography>
</AspectRatio>
</Grid> 
 <Grid xs={6} md>
<AspectRatio variant="solid">
<Typography level="inherit" fontWeight="lg" color="white">
Solid
</Typography>
</AspectRatio>
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
        </div>
    );
}

export default SStation;