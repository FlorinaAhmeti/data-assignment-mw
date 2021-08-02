import React, { useEffect, useState } from "react";
import { getData } from "../endpoint/getData";
import List from "../components/other/List";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Departments = () => {
  const [loading, setLoading] = useState(true);
  const [departments, setDepartments] = useState(null);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '5rem'
    },
  }));
  const classes = useStyles();

  useEffect(async () => {
    const departments = await getData("departments");
    setDepartments(departments.data.departments[0]);
    setLoading(false);
  }, []);

  return <>{!loading ? <List data={departments} /> : (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  )}</>;
};

export default Departments;
