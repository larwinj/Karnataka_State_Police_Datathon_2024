import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../../Assests/WorkAllotment.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    border: '1px solid black',
    borderRadius: '5px',
    marginLeft: '4%',
   
    width: '90%',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    minHeight: '500px', 
    overflowY: 'auto',
    scrollbarWidth:'none',
  },
  tableCell: {
    borderBottom: '1px solid #ccc',
  },
  button: {
    backgroundColor: 'forestgreen',
    marginLeft: '20%',
    marginTop: '5%',
    width: '15%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    fontSize: 'large',
    cursor: 'pointer',
  },
  dialog: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
  },
  dialogTextField: {
    width: '100%',
    marginBottom: '10px',
  },
});

const WorkAllotment = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [workList, setWorkList] = useState([]);
  const [work, setWork] = useState('');
  const [officer, setOfficer] = useState('');
  const [station, setStation] = useState('');
  const [date, setDate] = useState('');
  const [range, setRange] = useState('');
  const [district, setDistrict] = useState('');

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleSendClick = () => {
    setOpen(true);
  };

  const handleSendClose = () => {
    setOpen(false);
  };

  const handleAddWork = () => {
    const newWork = {
      work,
      officer,
      station,
      date,
    };
    setWorkList([...workList, newWork]);
    setOpen(false);
  };

  const handleChange = (event) => {
    setRange(event.target.value);
    setDistrict('');
  };

  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value);
  };

  return (
    <div className="ldiv">
      <div className="lcom">
        <div className="lleft">
          <FormControl className='linput' style={{marginLeft:'3%'}}>
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
          <FormControl className='linput' style={{marginLeft:'3%'}}>
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
          <Button onClick={handleSendClick} style={{ marginLeft: '1%', backgroundColor: 'white' }}>Add Work</Button>
          <div style={{ margin: '10px' }}>
            <TableContainer component={Paper} className={classes.tableContainer}>
              <Table className={classes.table} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableCell}>Work</TableCell>
                    <TableCell className={classes.tableCell}>Officer</TableCell>
                    <TableCell className={classes.tableCell}>Station</TableCell>
                    <TableCell className={classes.tableCell}>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {workList.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.work}</TableCell>
                      <TableCell>{item.officer}</TableCell>
                      <TableCell>{item.station}</TableCell>
                      <TableCell>{item.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="lright">
            <div className="lboxHeader">Available Officers</div>
          <div className="lbox">
            <div className={classes.lboxContent}>
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
      </div>
      <Dialog
        open={open}
        onClose={handleSendClose}
        aria-labelledby="send-dialog-title"
        aria-describedby="send-dialog-description"
      >
        <DialogContent className={classes.dialog}>
          <DialogContentText id="send-dialog-description">
            Enter the details of the work to be assigned.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="work"
            label="Work"
            type="text"
            fullWidth
            className={classes.dialogTextField}
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="officer"
            label="Officer"
            type="text"
            fullWidth
            className={classes.dialogTextField}
            value={officer}
            onChange={(e) => setOfficer(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="station"
            label="Station"
            type="text"
            fullWidth
            className={classes.dialogTextField}
            value={station}
            onChange={(e) => setStation(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Date"
            type="date"
            fullWidth
            className={classes.dialogTextField}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSendClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddWork} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default WorkAllotment;