import { Theme, withStyles } from "@material-ui/core";
import { Component } from "react";

const useStyles = (theme: Theme) =>({
    root : {
      flexGrow: 1,
    },
  menuButton: {
    marginRight: theme.spacing(2),
  },
});
interface NavBar{
  classes : {
    root:string,
    menuButton:string
  }};

class NavStyles extends Component<NavBar,{}>{
    render(){
      
      const {classes} = this.props;

      return(
        <form className={classes.root}/>
      );
    }
}
export default withStyles(useStyles)(NavStyles);